import { defineType, defineField } from 'sanity'

export default defineType({
    title: "Pricing",
    name: "pricing",
    type: "document",
    fields: [
        defineField({
            name: "rows",
            title: "Rows",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "row",
                    type: "row",
                }),
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: `Pricing`
            }
        }
    }
})