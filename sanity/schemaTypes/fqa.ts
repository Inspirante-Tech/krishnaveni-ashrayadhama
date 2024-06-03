import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    name: 'fqa',
    title: 'fqa',
    type: 'object',
    fields: [
        defineField({
            name: 'question',
            title: 'question',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'answer',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
            title: `question.${baseLanguage!.id}`,
        }
    },
})