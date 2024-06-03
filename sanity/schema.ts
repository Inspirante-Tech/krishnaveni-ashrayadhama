import { type SchemaTypeDefinition } from 'sanity'

import doctor from './schemaTypes/doctor'
import event from './schemaTypes/event'
import gallery from './schemaTypes/gallery'
import { localeString,localeText } from './schemaTypes/locale'
import Home from './schemaTypes/home'
import ayurvedicCenter from './schemaTypes/ayurvedicCenter'
import vriddhashrama from './schemaTypes/vriddhashrama'
import features from './schemaTypes/feature'
import fqa from './schemaTypes/fqa'
import facility from './schemaTypes/facility'
import testimonial from './schemaTypes/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString,localeText,gallery,event,ayurvedicCenter,features,vriddhashrama, doctor,Home,fqa,facility,testimonial],
}
