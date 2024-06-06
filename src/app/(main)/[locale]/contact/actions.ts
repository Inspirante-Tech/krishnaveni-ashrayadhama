"use server"
import * as v from "valibot";

const ProjectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DatasetName = process.env.NEXT_PUBLIC_SANITY_DATASET
const API_KEY = process.env.NEXT_PUBLIC_SANITY_API_KEY

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
    message: v.string()

})

const TestimonialSchema = v.object({
    name: v.string(),
    email: v.optional(v.pipe(v.string(), v.email())),
    phoneNo: v.pipe(v.string(), v.length(10)),
    image: v.string(),
    review: v.string()
})

export async function uploadContact(formData: FormData) {
    const data = v.parse(ContactSchema, Object.fromEntries(formData.entries()));

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
        return {error:error}
    }
    return {
        success: true
    }
}

export async function uploadTestimonial(formData: FormData) {
    const data = v.parse(TestimonialSchema, Object.fromEntries(formData.entries()));

    try {
        const mutations = [
            {
                create: {
                    _type: 'testimonial',
                    name:{
                        en:data.name
                    },
                    statement:{
                        en:data.review
                    },
                    email:data.email,
                    image: {
                        _type: 'image',
                        asset: {
                          _type: "reference",
                          _ref: data.image
                        }
                      },
                    phoneNo:data.phoneNo
                }
            }
        ]
    await postToSanity(mutations)
    } catch (error) {
        return {error:error}
    }
    return {
        success: true
    }
}