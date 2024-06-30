import { defineType, defineField } from "sanity";
import { baseLanguage } from "./locale";

export default defineType({
  title: "announcement",
  name: "announcement",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Announcement",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage!.id}`,
    },
  },
});
