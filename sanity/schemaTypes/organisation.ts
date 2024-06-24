import { defineField, defineType } from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
    name: 'organisation',
    title: 'Organisation',
    type: 'document',
    icon:UsersIcon,
    fields: [
        defineField({
            name: 'trustees',
            title: 'Trustees',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [
                defineField({
                    name: "trustee",
                    title: "Trustee",
                    type: "trustee"
                })
            ]
        }),
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
        prepare() {
            return {
                title: `Organisation`
            }
        }
    }
})
