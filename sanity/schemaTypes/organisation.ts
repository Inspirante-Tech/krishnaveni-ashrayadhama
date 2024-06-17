import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
    name: 'organisation',
    title: 'Organisation',
    type: 'document',
    fields: [
        defineField({
            name: 'members',
            title: 'Members',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "member",
                    title: "Member",
                    type: "profile"
                })
            ]
        })
    ],
    preview: {
        select: {
            title: `name.${baseLanguage!.id}`,
            media: 'image',
        }
    },
})
