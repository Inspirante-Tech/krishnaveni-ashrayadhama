import { defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
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
