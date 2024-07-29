import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'
import { TaskIcon } from '@sanity/icons'

export default defineType({
  name: 'events',
  title: 'Event',
  type: 'document',
  icon: TaskIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: 'image',
          title: 'image',
          type: 'image',
          validation: (Rule) => Rule.required(),
        }),
      ]
    }),
    defineField({
      name: 'date',
      title: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: `title.${baseLanguage!.id}`,
      media: 'image',
    }
  },
})
