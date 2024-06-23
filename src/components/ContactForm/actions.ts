"use server"
import * as v from "valibot";
import { assertValue } from "~/lib/utils";
import { type Message } from "~/lib/types";
import { mailOptions, transporter } from "~/lib/mailer";

const ProjectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DatasetName = process.env.NEXT_PUBLIC_SANITY_DATASET
const API_KEY = process.env.NEXT_PUBLIC_SANITY_API_KEY
const RECAPTCHA_SECRET_KEY = assertValue(process.env.RECAPTCHA_SECRET_KEY, "recaptcha key not found")

async function postToSanity(mutations: { [key: string]: any }[]) {
    fetch(`https://${ProjectID}.api.sanity.io/v2021-06-07/data/mutate/${DatasetName}`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
    },
        body: JSON.stringify({ mutations })
    })
}

const ContactSchema = v.object({
    name: v.string("name is needed"),
    email: v.optional(v.pipe(v.string("email must be valid email"), v.email("email must be valid email"))),
    phoneNo: v.pipe(v.string("invalid phone no"), v.length(10, "phone number must only contain 10 numbers")),
    message: v.string("message should not be blank"),
    captcha: v.string()

})

const TestimonialSchema = v.object({
    name: v.string("name is needed"),
    email: v.optional(v.pipe(v.string("email must be valid email"), v.email("email must be valid email"))),
    phoneNo: v.pipe(v.string("invalid phone no"), v.length(10, "phone no must contain 10 numbers")),
    image: v.optional(v.string()),
    review: v.string("message should not be blank"),
    captcha: v.string()
})

async function verifyRecaptcha(captcha: string) {
    fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
            method: "POST",
        }).then(res => res.json())
        .then(data => {
            return (data?.score > 0.5)
        }).catch(e => {
            return false
        })
}

export async function uploadContact(formData: FormData): Promise<Message> {
    let data;
    try {
        data = v.parse(ContactSchema, Object.fromEntries(formData.entries()));
    } catch (err) {
        if (err instanceof v.ValiError) {
            return { type: "error", message: err.issues.map(issue => issue.message).join("") }
        }
        return { type: "error", message: "something went wrong" }
    }

    try {
        if (!verifyRecaptcha(data.captcha)) {
            return { type: "error", message: "could not verify recaptcha" }
        }

        const mutations = [
            {
                create: {
                    _type: 'contact',
                    ...data
                }
            }
        ]

        await postToSanity(mutations)

        await transporter.sendMail({
            ...mailOptions,
            subject: "Contact Form from KVDhama",
            text: `message from ${data.name}`, // plain text body
            html: `<div>
                    <h1>Name: ${data.name}</h1>
                    <div>
                        <strong>Email:</strong>
                        <p> ${data.email ?? "Not specified"}</p>
                    </div>

                    <div>
                        <strong>Phone:</strong>
                        <p> ${data.phoneNo ?? "Not specified"}</p>
                    </div>

                    <strong>Message</strong>
                    <p>
                        ${data.message}
                    </p>
                </div>`
        })
    } catch (error) {
        console.error(error)
        return { type: "error", message: "something went wrong" }
    }
    return { type: "success", message: "contact form sucessfully submitted" }
}

export async function uploadTestimonial(formData: FormData): Promise<Message> {
    let data;
    try {
        data = v.parse(TestimonialSchema, Object.fromEntries(formData.entries()));
    } catch (err) {
        if (err instanceof v.ValiError) {
            return { type: "error", message: err.issues.map(issue => issue.message).join("") }
        }
        return { type: "error", message: "something went wrong" }
    }

    if (!verifyRecaptcha(data.captcha)) {
        return { type: "error", message: "could not verify recaptcha" }
    }

    try {
        const mutations = [
            {
                create: {
                    _type: 'testimonial',
                    name: {
                        en: data.name
                    },
                    statement: {
                        en: data.review
                    },
                    email: data.email,
                    image: {
                        _type: 'image',
                        asset: {
                            _type: "reference",
                            _ref: data.image
                        }
                    },
                    phoneNo: data.phoneNo
                }
            }
        ]
        await postToSanity(mutations)
    } catch (error) {
        console.error(error)
        return { type: "error", message: "something went wrong" }
    }
    return { type: "success", message: "testimonial sucessfully submitted" }
}