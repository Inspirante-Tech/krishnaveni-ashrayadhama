import { defineType, defineField } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    title: "Treatment Package",
    name: "treatmentPackage",
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
        defineField({
            name: "days",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: `title.${baseLanguage!.id}`,
        }
    },
})