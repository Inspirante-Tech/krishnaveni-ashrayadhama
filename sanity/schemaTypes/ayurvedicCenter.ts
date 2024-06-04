import { defineField } from 'sanity'

export default {
    name: 'ayurvedic_center',
    title: 'Ayurvedic Center',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'title',
            type: 'localeString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoLink',
            title: 'Video Link',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "feature",
                    title: "Feature",
                    type: "feature"
                })
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Ayurvedic Center"
            }
        }
    }
}