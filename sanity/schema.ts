import { type SchemaTypeDefinition } from 'sanity'

import doctor from './schemaTypes/doctor'
import event from './schemaTypes/event'
import gallery from './schemaTypes/gallery'
import testimonial from './schemaTypes/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery,event, testimonial, doctor],
}
