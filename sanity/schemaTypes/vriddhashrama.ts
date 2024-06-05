import { defineField } from 'sanity'

export default {
    name: 'vriddhashrama',
    title: 'Vriddhashrama',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
        }),
        defineField({
            title: 'Rules and Regulation',
            name: 'rules',
            type: 'localeBlockArray',
        }),
        defineField({
            title: 'Surrounding Details',
            name: 'surrounding_detail',
            type: 'localeBlockArray',
        }),
        defineField({
            name: 'locations',
            title: 'Locations',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "location",
                    title: "Location",
                    type: "location"
                })
            ]
        }),

    ],
    preview: {
        prepare() {
            return {
                title:"Vriddhashrama"
            }
        }
    }
}