import { defineField, defineType } from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
    name: 'organisation',
    title: 'Organisation',
    type: 'document',
    icon:UsersIcon,
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
            title: `Organisation`,
        }
    },
})
