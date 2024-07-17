import { defineField, defineType } from "sanity";

export default defineType({
  name: "videolink",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: "video",
      title: "Video Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "video",
    },
  },
});
