import { defineType, defineField } from "sanity";

export default defineType({
  title: "Therapy Details",
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
    defineField({
      name: "treatmentPackages",
      title: "Treatment Packages",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: "treatmentPackage",
          type: "treatmentPackage",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Therapy Details`,
      };
    },
  },
});
