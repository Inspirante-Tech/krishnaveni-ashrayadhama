import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    name: 'role',
    title: 'Role',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Role Name',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eligibility',
            title: 'Eligibility',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`,
        }
    },
})
