"use server"
import * as v from "valibot";
import { assertValue } from "~/lib/utils";
import { type Message } from "~/lib/types";

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
    name: v.string(),
    email: v.optional(v.pipe(v.string(), v.email())),
    phoneNo: v.pipe(v.string(), v.length(10)),
    message: v.string(),
    captcha: v.string()

})

const TestimonialSchema = v.object({
    name: v.string(),
    email: v.optional(v.pipe(v.string(), v.email())),
    phoneNo: v.pipe(v.string(), v.length(10)),
    image: v.string(),
    review: v.string(),
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
    const data = v.parse(ContactSchema, Object.fromEntries(formData.entries()));

    if (!verifyRecaptcha(data.captcha)) {
        return { type: "error", message: "could not verify recaptcha" }
    }

    try {
        const mutations = [
            {
                create: {
                    _type: 'contact',
                    ...data
                }
            }
        ]

        await postToSanity(mutations)
    } catch (error) {
        console.error(error)
        return { type: "error", message: "something went wrong" }
    }
    return { type: "success", message: "sucessfully submitted" }
}

export async function uploadTestimonial(formData: FormData): Promise<Message> {
    const data = v.parse(TestimonialSchema, Object.fromEntries(formData.entries()));

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
    return { type: "success", message: "sucessfully submitted" }
}