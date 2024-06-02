import { client } from "../../sanity/lib/client";
import type { Image } from 'sanity'
import { urlForImage } from "../../sanity/lib/image";

const TESTIMONIAL_QUERY = `*[_type == "testimonial"]{'id':_id,name,image, statement}`

interface TestimonialResponse {
    id: string
    name: string,
    image: Image,
    statement: string
}

export async function fetchTestimonials() {
    let testimonials = await client.fetch<TestimonialResponse[]>(TESTIMONIAL_QUERY);
    return testimonials.map(testimonial => ({
        ...testimonial,
        image: urlForImage(testimonial.image)
    }))
}


const GALLERY_QUERY = `*[_type == "gallery"]{'id':_id,image,"alt":image.alt}`

interface GalleryResponse {
    id: string
    image: Image,
    alt: string
}

export async function fetchGalleryImages() {
    let gallery_images = await client.fetch<GalleryResponse[]>(GALLERY_QUERY);
    return gallery_images.map(gallery_image => ({
        ...gallery_image,
        image: urlForImage(gallery_image.image)
    }))
}

const EVENT_QUERY = `*[_type == "event"]{'id':_id,title,date,description,image,"alt":image.alt}`

interface EventResponse {
    id: string,
    title:string,
    image: Image,
    description:string,
    date:string,
    alt: string
}

export async function fetchEvents() {
    let events = await client.fetch<EventResponse[]>(EVENT_QUERY);
    return events.map(event => ({
        ...event,
        image: urlForImage(event.image)
    }))
}