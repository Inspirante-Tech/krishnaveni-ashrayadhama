import { client } from "~/sanity/lib/client";
import type { Image } from 'sanity'
import { urlForImage } from "~/sanity/lib/image";
import { title } from "process";

const BASELOCALE = "en"

function coalesce(key:string,locale:string){
    return `coalesce(${key}.${locale}, ${key}.${BASELOCALE},"missing")`
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
    title: string,
    image: Image,
    description: string,
    date: string,
    alt: string
}

export async function fetchEvents() {
    let events = await client.fetch<EventResponse[]>(EVENT_QUERY);
    return events.map(event => ({
        ...event,
        image: urlForImage(event.image)
    }))
}


interface AyurvedicCenter {
    title: string,
    description: string,
    videoLink: string,
    features: {
        image: Image,
        title: string,
        description: string
    }[]
}

export async function fetchAyrvedicCenterPage(locale: string) {

    const query = `*[_type == "ayurvedic_center"][0]{
        "title":${coalesce("title",locale)},
        "description":${coalesce("description",locale)},
          videoLink,
          "features":features[]{
            "title":${coalesce("title",locale)},
            image,
            "description":${coalesce("description",locale)}
          }
      }`

    let page = await client.fetch<AyurvedicCenter>(query);

    return {
        ...page,
        features: page.features.map(feature => ({
            ...feature,
            image: urlForImage(feature.image)
        }))
    }
}


interface Home {
    story: string,
    whoweare: string,
    fqas:{
        question:string,
        answer:string
    }[],
    facilities: {
        image: Image,
        title: string,
        description: string
    }[],
    testimonials: {
        image: Image,
        name: string,
        statement: string
    }[]

}

export async function fetchHomePage(locale: string) {

    const query = `*[_type == "Home"][0]{
        "story":${coalesce("story",locale)},
        "whoweare":${coalesce("whoweare",locale)},  
        "fqas":fqas[]{
          "question":${coalesce("question",locale)},
          "answer":${coalesce("answer",locale)},
        },
         "facilities":facilities[]{
          "title":${coalesce("title",locale)},
          image,
          "description":${coalesce("description",locale)},
        },
          "testimonials":testimonials[]{
          "name":${coalesce("name",locale)},
          image,
          "statement":${coalesce("statement",locale)},
        } 
      }`

    let page = await client.fetch<Home>(query);

    return {
        ...page,
        facilities: page.facilities.map(facility => ({
            ...facility,
            image: urlForImage(facility.image)
        })),
        testimonials: page.testimonials.map(testimonial => ({
            ...testimonial,
            image: urlForImage(testimonial.image)
        }))
    }
}
