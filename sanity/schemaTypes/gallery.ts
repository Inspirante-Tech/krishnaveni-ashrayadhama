import { ImagesIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember(
        {
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'alt',
              title: 'short description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            })
          ]
        }
      )],
    }),
  ]
}