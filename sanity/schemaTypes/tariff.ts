import { defineType, defineField } from "sanity";

export default defineType({
  title: "Treatment Tariff",
  name: "ttariff",
  type: "document",
  fields: [
    defineField({
      name: "info",
      title: "Information",
      type: "localeBlockArray",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tariff",
      title: "Treatment Tariff",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: "tariffRow",
          type: "tariffRow",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Treatment Tariff`,
      };
    },
  },
});
