import { defineType, defineField } from 'sanity'

export default defineType({
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
            type: "localeText",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "carosuel",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "image",
                    type: "image"
                })
            ]
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
        }),
        defineField({
            name: "whoweare",
            title: "whoweare section",
            type: "localeText",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "fqas",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "fqa",
                    type: "fqa"
                })
            ]
        }),
        defineField({
            name: 'testimonials',
            title: 'testimonials',
            type: 'array',
            of: [
                defineField({
                    name: 'testimonial',
                    type: "testimonial"
                })
            ],
            validation: Rule => Rule.unique()
        }),
    ],
    preview: {
        prepare() {
            return {
                title: `Home`
            }
        }
    }
})