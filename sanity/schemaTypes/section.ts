import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: `name`,
            media:"image"
        },
    },
})
