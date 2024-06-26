import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
    title: "Home",
    name: "Home",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "section1",
            title: "Section 1",
            type: "section",
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
            name: "section2",
            title: "Section 2",
            type: "section",
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
                    type: 'reference',
                    weak: true,
                    to: [{ type: 'testimonial' }],
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