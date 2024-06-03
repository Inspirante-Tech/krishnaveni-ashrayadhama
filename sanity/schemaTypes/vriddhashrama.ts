import { defineField } from 'sanity'

export default {
    name: 'vriddhashrama',
    title: 'Vriddhashrama',
    type: 'document',
    fields: [
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
        select: {
            title: `Vriddhashrama`
        }
    },
}