import { defineType, defineField } from 'sanity'

export default defineType({
    title: "Home",
    name: "Home",
    type: "document",
    fields: [
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineField({
                    name: "section",
                    type: "section"
                })
            ],
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        prepare() {
            return {
                title: `About`
            }
        }
    }
})