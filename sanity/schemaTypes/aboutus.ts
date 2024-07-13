import { defineType, defineField } from "sanity";

export default defineType({
  title: "About Us",
  name: "aboutUs",
  type: "document",
  fields: [
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineField({
          name: "section",
          type: "section",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logodescription",
      title: "Logo Description",
      type: "localeBlockArray",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo1",
      title: "Logo 1",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logo2",
      title: "Logo 2",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `About`,
      };
    },
  },
});
