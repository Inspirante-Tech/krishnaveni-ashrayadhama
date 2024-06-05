import {defineField, defineType} from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `name.${baseLanguage!.id}`,
      media: 'image',
    },
  },
})
