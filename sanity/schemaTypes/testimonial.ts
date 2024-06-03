import { defineField, defineType } from 'sanity'
 import {baseLanguage} from './locale'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'localeString',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'statement',
            title: 'Statement',
            type: 'localeString',
        }),
    ],
    preview: {
        select: {
            title: `name.${baseLanguage!.id}`,
            media: 'image',
        },
    },
})