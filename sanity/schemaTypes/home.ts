import { defineType, defineField } from 'sanity'

const languages = {
    kn: "kannada",
    en: "English"
}

const facility = defineType({
    name: 'facility',
    title: 'Facility',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'short_description',
            title: 'short description',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        })
    ]
})

const facilities = defineType({
    name: 'facilities',
    title: 'Facilities',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "facilities",
            type: "array",
            of: [
                defineField({
                    name: "facility",
                    type: "facility"
                })
            ]
        })
    ]
})

const fqa = defineType({
    name: 'fqa',
    title: 'fqa',
    type: 'object',
    fields: [
        defineField({
            name: 'question',
            title: 'question',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'answer',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        })
    ]
})


const fqas = defineType({
    name: 'fqas',
    title: 'Frequently asked questions',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "facilities",
            type: "array",
            of: [
                defineField({
                    name: "facility",
                    type: "facility"
                })
            ]
        })
    ]
})

const story = defineType({
    name: 'story',
    title: 'Story',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "story",
            type: "localeText",
            validation: (Rule) => Rule.required(),
        })
    ]
})


const testimonials = defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'testimonials',
            title: 'testimonials',
            type: 'array',
            of: [
                defineField({
                    name: 'testimonial',
                    title: 'testimonial',
                    type: 'reference',
                    weak: true,
                    to: [{ type: 'testimonial' }],
                    description: 'List of testimonial'
                })
            ],
            options: {
                documentInternationalization: {
                    exclude: true,
                },
            },
            validation: Rule => Rule.unique()
        }),

    ]
})


const Home = defineType({
    title: "Home",
    name: "Home",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            hidden: true,
            readOnly: true
        }),
        defineField({
            name: "story",
            title: "Story section",
            type: "story",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "facilities",
            type: "facilities",
            title: "Facilities section",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "whoweare",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "fqas",
            type: "fqas",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "testimonials",
            type: "testimonials",
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            language: 'language'
        },
        prepare(selection) {
            const { language } = selection
            return {
                title: `Home (${languages[language as "en" | "kn"]})`
            }
        }
    }
})


export { fqa, fqas, facilities, facility, testimonials, story, Home }