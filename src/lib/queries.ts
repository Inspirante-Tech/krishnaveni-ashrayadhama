import { client } from "~/sanity/lib/client";
import type { Image } from "sanity";
import { urlForImage } from "~/sanity/lib/image";
import { defaultLocale } from "./env";

function coalesce(key: string, locale: string) {
  return `coalesce(${key}.${locale}, ${key}.${defaultLocale},"missing")`;
}
interface GalleryResponse {
  id: string;
  image: Image;
  description: string;
}

export async function fetchGalleryImages(locale: string) {
  const query = `
        *[_type == "gallery"]{
            'id':_id,
            "description":${coalesce("short_description", locale)},
            image
        }
    `;
  let gallery_images = await client.fetch<GalleryResponse[]>(query);
  return gallery_images.map((gallery_image) => ({
    ...gallery_image,
    image: urlForImage(gallery_image.image),
  }));
}

interface EventResponse {
  id: string;
  title: string;
  image: Image;
  description: string;
  date: string;
  alt: string;
}

export async function fetchEvents(locale: string) {
  const query = `*[_type == "events"]{
        'id':_id,
        "title":${coalesce("title", locale)},
        date,
        "description":${coalesce("description", locale)},
        image,
    }`;
  let events = await client.fetch<EventResponse[]>(query);
  return events.map((event) => ({
    ...event,
    image: urlForImage(event.image),
  }));
}

interface AyurvedicCenter {
  title: string;
  description: [any];
  videoLink: string;
  features: {
    image: Image;
    title: string;
    description: string;
  }[];
  doctors: {
    name: string;
    qualification: string;
    image: Image;
  }[];
}

export async function fetchAyrvedicCenterPage(locale: string) {
  const query = `*[_type == "ayurvedic_center"][0]{
        "title":${coalesce("title", locale)},
        "description":${coalesce("description", locale)},
          videoLink,
          "features":features[]{
            "title":${coalesce("title", locale)},
            image,
            "description":${coalesce("description", locale)}
          },
          "doctors":doctors[]{
            "name":${coalesce("name", locale)},
            image,
            "qualification":${coalesce("qualification", locale)}
        }
      }`;

  let page = await client.fetch<AyurvedicCenter>(query);

  return {
    ...page,
    features: page.features.map((feature) => ({
      ...feature,
      image: urlForImage(feature.image),
    })),
    doctors: page.doctors.map((doctor) => ({
      ...doctor,
      image: urlForImage(doctor.image),
    })),
  };
}

interface Home {
  announcements: {
    title: string;
    link: string;
  }[];
  section1: {
    title: string;
    description: [any];
    image: Image;
  };
  section2: {
    title: string;
    description: [any];
    image: Image;
  };
  fqas: {
    question: string;
    answer: string;
  }[];
  facilities: {
    image: Image;
    title: string;
    description: string;
  }[];
  testimonials: {
    image: Image;
    name: string;
    statement: string;
  }[];
  carosuel: Image[];
}

export async function fetchHomePage(locale: string) {
  const query = `*[_type == "Home"][0]{
        "announcements":announcements[]{
            "title": ${coalesce("title", locale)},
            link,
        },
        "section1":section1{
            "title":${coalesce("title", locale)},
            image,
            "description":${coalesce("content", locale)}
        },
        "section2":section2{
            "title":${coalesce("title", locale)},
            image,
            "description":${coalesce("content", locale)}
        },  
        "fqas":fqas[]{
          "question":${coalesce("question", locale)},
          "answer":${coalesce("answer", locale)},
        },
         "facilities":facilities[]{
          "title":${coalesce("title", locale)},
          image,
          "description":${coalesce("description", locale)},
        },
          "testimonials":testimonials[]->{
          "name":${coalesce("name", locale)},
          image,
          "statement":${coalesce("statement", locale)},
        },
        carosuel
      }`;

  let page = await client.fetch<Home>(query);

  return {
    ...page,
    section1: {
      ...page.section1,
      image: urlForImage(page.section1.image),
    },
    section2: {
      ...page.section2,
      image: urlForImage(page.section2.image),
    },
    facilities: page.facilities.map((facility) => ({
      ...facility,
      image: urlForImage(facility.image),
    })),
    testimonials: page.testimonials.map((testimonial) => ({
      ...testimonial,
      image: urlForImage(testimonial.image),
    })),
    carosuel: page.carosuel.map((image) => urlForImage(image)),
  };
}

interface VriddhashramaCenter {
  title: string;
  description: [any];
  videoLink: string;
  features: {
    image: Image;
    title: string;
    description: string;
  }[];
  surrounding_detail: [any];
  locations: {
    name: string;
    image: Image;
    url: string;
  }[];
}

export async function fetchVriddhashramaPage(locale: string) {
  const query = `*[_type == "vriddhashrama"][0]{
        "title":${coalesce("title", locale)},
        "description":${coalesce("description", locale)},
          videoLink,
          "features":features[]{
            "title":${coalesce("title", locale)},
            image,
            "description":${coalesce("description", locale)},
          },
          "surrounding_detail":${coalesce("surrounding_detail", locale)},
          "locations":locations[]{
            "name":${coalesce("name", locale)},
            image,
            url
          }
      }`;

  let page = await client.fetch<VriddhashramaCenter>(query);
  return {
    ...page,
    features: page.features.map((feature) => ({
      ...feature,
      image: urlForImage(feature.image),
    })),
    locations: page.locations.map((location) => ({
      ...location,
      image: urlForImage(location.image),
    })),
  };
}

export async function fetchRules(locale: string) {
  const query = `*[_type == "vriddhashrama"][0]{
          "rules":${coalesce("rules", locale)},
      }`;
  return await client.fetch<{ rules: [any] }>(query);
}

type ContactDetails = {
  address: [any];
  email: string;
  phoneNo: string;
};

export async function fetchContactDetails(locale: string) {
  const query = `*[_type == "contactDetail"][0]{
        "address":${coalesce("address", locale)},
        email,
        phoneNo
      }`;

  let data = await client.fetch<ContactDetails>(query);
  return data;
}

type AboutPage = {
  logodescription: [any];
  sections: {
    title: string;
    description: [any];
    image: Image;
  }[];
  logo1: Image;
  logo2: Image;
};

export async function fetchAboutPage(locale: string) {
  const query = `*[_type == "aboutUs"][0]{
        "logodescription":${coalesce("logodescription", locale)},
        "sections":sections[]{
            "title":${coalesce("title", locale)},
            image,
            "description":${coalesce("content", locale)}
        },
            logo1,
            logo2
      }`;

  let page = await client.fetch<AboutPage>(query);
  return {
    ...page,
    sections: page.sections.map((section) => ({
      ...section,
      image: urlForImage(section.image),
    })),
    logo1: urlForImage(page.logo1),
    logo2: urlForImage(page.logo2),
  };
}

type PricingPage = {
  rows: {
    title: string;
    detail: string;
  }[];
};

export async function fetchPricingPage(locale: string) {
  const query = `*[_type == "pricing"][0]{
            "rows":rows[]{
                "title":${coalesce("title", locale)},
                "detail":${coalesce("detail", locale)}
            }
        }`;

  let page = await client.fetch<PricingPage>(query);
  return page;
}

type Organisation = {
  trustees: {
    name: string;
    position: string;
    image: Image;
    description: string;
  }[];
  doctors: {
    name: string;
    qualification: string;
    image: Image;
    detail: string;
  }[];
  members: {
    name: string;
    position: string;
    image: Image;
  }[];
};

export async function fetchOrganisationPage(locale: string) {
  const query = `*[_type == "organisation"][0]{
            "trustees":trustees[]{
                "name":${coalesce("name", locale)},
                "position":${coalesce("position", locale)},
                image,
                "description":${coalesce("description", locale)}
            },
            "doctors":doctors[]{
                "name":${coalesce("name", locale)},
                "qualification":${coalesce("qualification", locale)},
                image,
                "detail":${coalesce("detail", locale)}
            },
            "members":members[]{
                "name":${coalesce("name", locale)},
                "position":${coalesce("position", locale)},
                image
            }
        }`;

  let page = await client.fetch<Organisation>(query);

  return {
    ...page,
    trustees: page.trustees.map((trustee) => ({
      ...trustee,
      image: urlForImage(trustee.image),
    })),
    doctors: page.doctors.map((doctor) => ({
      ...doctor,
      image: urlForImage(doctor.image),
    })),
    members: page.members.map((member) => ({
      ...member,
      image: urlForImage(member.image),
    })),
  };
}

interface CareerPage {
  title: string;
  description: [any];
  roles: {
    title: string;
    description: string;
    eligibility: string;
  }[];
  howtoapply: string;
}

export async function fetchCareerPage(locale: string) {
  const query = `*[_type == "career"][0]{
        "title": ${coalesce("title", locale)},
        "description": ${coalesce("description", locale)},
        "roles":roles[]{
            "title":${coalesce("title", locale)},
            "description":${coalesce("description", locale)},
            "eligibility":${coalesce("eligibility", locale)}
          },
        "howtoapply": ${coalesce("howtoapply", locale)}
    }`;

  let page = await client.fetch<CareerPage>(query);
  return page;
}

type TherapyPage = {
  therapy: {
    title: string;
    detail: string;
  }[];
  treatmentPackages: {
    title: string;
    detail: string;
    days: string;
  }[];
};

export async function fetchTherapyPage(locale: string) {
  const query = `*[_type == "therapyinfo"][0]{
            "therapy":therapy[]{
                "title":${coalesce("title", locale)},
                "detail":${coalesce("detail", locale)},
            },
            "treatmentPackages":treatmentPackages[]{
                "title":${coalesce("title", locale)},
                "detail":${coalesce("detail", locale)},
                days
            }
        }`;

  let page = await client.fetch<TherapyPage>(query);
  return page;
}

type TariffPage = {
  info: any;
  tariff: {
    procedure: string;
    duration: string;
    charges: number;
    discount: number;
  }[];
};

export async function fetchTariffPage(locale: string) {
  const query = `*[_type == "ttariff"][0]{
                    "info": ${coalesce("info", locale)},
                    "tariff":tariff[]{
                        "procedure": ${coalesce("procedure", locale)},
                        "duration": ${coalesce("duration", locale)},
                        charges,
                        discount
          }
    }`;

  let page = await client.fetch<TariffPage>(query);
  return page;
}
