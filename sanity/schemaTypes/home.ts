import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
    title: "Home",
    name: "Home",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "story",
            title: "Content Section 1",
            type: "localeBlockArray",
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
            title: "Content Section 2",
            type: "localeBlockArray",
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