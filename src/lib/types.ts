import { fetchEvents, fetchGalleryImages } from "./queries";

// type ResolvedType<T> = T extends Promise<infer R> ? R : never;
// type ArrayElementType<T> = T extends (infer U)[] ? U : never;

// export type EventType = ArrayElementType<
//   ResolvedType<ReturnType<typeof fetchEvents>>
// >;
// export type GalleryType = ArrayElementType<
//   ResolvedType<ReturnType<typeof fetchGalleryImages>>
// >;

export type GalleryType = {
  id: string;
  image: string;
  description: string;
};

export type EventType = {
  id: string;
  title: string;
  image: string;
  images: string[];
  description: string;
  date: string;
  alt: string;
}

export type FacilityType = {
  image: string;
  title: string;
  description: string;
};

export type FqaType = {
  question: string;
  answer: string;
};

export type TestimonialType = {
  image: string;
  name: string;
  statement: string;
};

export type LocationType = {
  name: string;
  image: string;
  url: string;
};

export type DoctorType = {
  name: string;
  image: string;
  qualification: string;
};

export type FeatureType = {
  image: string;
  title: string;
  description: string;
};

export type SectionType = {
  title: string;
  description: string | [any];
  image: string;
};

export type VideoType = {
  video: string;
};

export type ImageType = {
  image: string;
  id: string;
  description: string;
};

export type MessageType = "success" | "error";

export type Message = {
  type: MessageType;
  message: string;
};

export type Row = {
  title: string;
  detail: string;
};

export type LocaleParamProp = {
  params: {
    locale: "kn" | "en";
  };
};

export type Member = {
  name: string;
  position: string;
  image: string;
};

export type CareerType = {
  title: string;
  description: [any];
  roles: Role[];
  howtoapply: string;
};

export type Role = {
  title: string;
  description: string;
  eligibility: string;
};

export type OrganisationDoctorType = {
  name: string;
  image: string;
  qualification: string;
  detail: string;
};

export type AnnouncementType = {
  title: string;
  link: string;
};
