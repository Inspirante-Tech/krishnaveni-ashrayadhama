import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'fqa',
    title: 'fqa',
    type: 'document',
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
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        })
    ]
})
