import { defineType, defineField } from "sanity";
import { baseLanguage } from "./locale";

export default defineType({
  title: "Treatment Tariff",
  name: "tariffRow",
  type: "object",
  fields: [
    defineField({
      name: "procedure",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      type: "localeString",
    }),
    defineField({
      name: "charges",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `procedure.${baseLanguage!.id}`,
    },
  },
});
