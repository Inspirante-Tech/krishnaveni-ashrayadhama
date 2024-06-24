import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    name: 'trustee',
    title: 'Trustee',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: 'description',
            title: 'Description',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: `name.${baseLanguage!.id}`,
            media: 'image',
        },
    },
})