import { fetchEvents, fetchGalleryImages, fetchTestimonials } from "./queries";

type ResolvedType<T> = T extends Promise<infer R> ? R : never;
type ArrayElementType<T> = T extends (infer U)[] ? U : never;

export type EventType = ArrayElementType<ResolvedType<ReturnType<typeof fetchEvents>>>
export type TestimonialType = ArrayElementType<ResolvedType<ReturnType<typeof fetchTestimonials>>>
export type GalleryType = ArrayElementType<ResolvedType<ReturnType<typeof fetchGalleryImages>>>

