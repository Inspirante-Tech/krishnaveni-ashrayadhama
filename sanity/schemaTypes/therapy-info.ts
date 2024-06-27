import { defineType, defineField } from "sanity";

export default defineType({
  title: "Therapy - info",
  name: "therapyinfo",
  type: "document",
  fields: [
    defineField({
      name: "therapy",
      title: "therapy",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: "row",
          type: "row",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Therapy - info`,
      };
    },
  },
});
