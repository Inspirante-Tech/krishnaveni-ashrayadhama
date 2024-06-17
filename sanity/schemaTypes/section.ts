import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

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
            type: 'localeBlockArray',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`,
            media:"image"
        },
    },
})
