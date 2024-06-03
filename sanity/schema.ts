import { type SchemaTypeDefinition } from 'sanity'

import doctor from './schemaTypes/doctor'
import event from './schemaTypes/event'
import gallery from './schemaTypes/gallery'
import testimonial from './schemaTypes/testimonial'
import { localeString,localeText } from './schemaTypes/locale'
import {fqa, fqas,facilities,facility,testimonials,story,Home} from './schemaTypes/home'
// import fqa from './schemaTypes/fqa'
// import facility from './schemaTypes/facility'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString,localeText,gallery,event, testimonial, doctor,fqa, fqas,facilities,facility,testimonials,story,Home],
}
