import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    name: 'location',
    title: 'Loaction',
    type: 'object',
    fields: [
        defineField({
            name: "name",
            title: "location name",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "location Image",
            type: "image",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "url",
            title: "Map link",
            type: "url",
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            title: `name.${baseLanguage!.id}`,
            media: 'image',
        }
    },
})
