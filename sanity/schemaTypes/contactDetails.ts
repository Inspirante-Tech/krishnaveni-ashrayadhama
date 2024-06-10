//schema removed
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactDetail',
    title: 'Contact Details',
    type: 'document',
    fields: [
        defineField({
            title: 'Address',
            name: 'address',
            type: 'localeBlockArray',
        }),
        defineField({
            name: 'Email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phoneNo',
            title: 'Phone number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        prepare() {
            return {
                title: `Contact Details`
            }
        }
    }
})
