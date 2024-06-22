import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'career',
    title: 'Career',
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
            title: 'Description',
            type: 'localeBlockArray',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'roles',
            title: 'Roles',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "role",
                    title: "Role",
                    type: "role"
                })
            ]
        }),
        defineField({
            name: 'howtoapply',
            title: 'How to apply',
            type: 'localeText',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Career"
            }
        }
    }
});
