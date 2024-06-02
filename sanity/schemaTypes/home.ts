import { defineType, defineField } from 'sanity'

const languages = {
    kn: "kannada",
    en: "English"
}

export default defineType({
    title: "Home",
    name: "Home",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            hidden: true,
            readOnly: true
        }),
        defineField({
            name: "title",
            type: "string",
        }),
    ],
    preview: {
        select: {
            language: 'language'
        },
        prepare(selection) {
            const { language } = selection
            return {
                title: `Home (${languages[language as "en" | "kn"]})`
            }
        }
    }
})