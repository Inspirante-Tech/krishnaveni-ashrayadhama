import { defineType, defineField } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    title: "Row",
    name: "row",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "detail",
            type: "localeText",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`,
        }
    },
})