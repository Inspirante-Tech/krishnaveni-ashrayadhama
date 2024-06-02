import { type SchemaTypeDefinition } from 'sanity'

import doctor from './schemaTypes/doctor'
import event from './schemaTypes/event'
import gallery from './schemaTypes/gallery'
import testimonial from './schemaTypes/testimonial'
import { localeString } from './schemaTypes/localeString'
import home from './schemaTypes/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString,gallery,event, testimonial, doctor,home],
}
