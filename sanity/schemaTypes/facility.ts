import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'facility',
    title: 'Facility',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'short_description',
            title: 'short description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        })
    ]
})
