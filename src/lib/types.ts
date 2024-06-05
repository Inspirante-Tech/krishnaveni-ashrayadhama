import { fetchEvents, fetchGalleryImages } from "./queries";

type ResolvedType<T> = T extends Promise<infer R> ? R : never;
type ArrayElementType<T> = T extends (infer U)[] ? U : never;

export type EventType = ArrayElementType<ResolvedType<ReturnType<typeof fetchEvents>>>
export type GalleryType = ArrayElementType<ResolvedType<ReturnType<typeof fetchGalleryImages>>>

export type FacilityType = {
    image: string,
    title: string,
    description: string
}

export type FqaType = {
    question: string,
    answer: string
}

export type TestimonialType = {
    image: string,
    name: string,
    statement: string
}

export type LocationType = {
    name: string,
    image: string,
    url: string
}