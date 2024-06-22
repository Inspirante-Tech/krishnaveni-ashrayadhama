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

export type DoctorType = {
    name: string,
    image: string,
    qualification: string
}

export type FeatureType = {
    image: string,
    title: string,
    description: string
}

export type SectionType = {
    title: string,
    description: string | [any],
    image: string
}

export type ImageType = {
    image: string,
    id: string,
    description: string
}

export type Message = {
    type: "success" | "error",
    message: string
}

export type Row = {
    title: string,
    detail: string,
}

export type LocaleParamProp = {
    params: {
        locale: "kn" | "en"
    }
}

export type Member = {
    name:string,
    position:string,
    image:string
}