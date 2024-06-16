import { ImagesIcon } from '@sanity/icons'
import {defineField, defineType } from 'sanity'
import { baseLanguage } from './locale'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'short_description',
      title: 'short description',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title:`short_description.${baseLanguage!.id}`,
      media: 'image',
    }
  },
})