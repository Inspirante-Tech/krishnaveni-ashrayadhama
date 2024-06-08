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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phoneNo',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'statement',
            title: 'Statement',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            title: `name.${baseLanguage!.id}`,
            media: 'image',
        },
    },
})