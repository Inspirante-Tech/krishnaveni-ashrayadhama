import { defineField, defineType } from 'sanity'

export default defineType({
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
            type: 'localeBlockArray',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoLink',
            title: 'Video Link',
            type: 'url',
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
        }),
        defineField({
            name: 'doctors',
            title: 'Doctors',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "doctor",
                    title: "Doctor",
                    type: "doctor"
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
})