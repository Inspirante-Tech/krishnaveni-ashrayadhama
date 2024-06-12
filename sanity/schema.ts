import { type SchemaTypeDefinition } from 'sanity'

import doctor from './schemaTypes/doctor'
import event from './schemaTypes/event'
import gallery from './schemaTypes/gallery'
import { localeBlockArray, localeString,localeText } from './schemaTypes/locale'
import Home from './schemaTypes/home'
import ayurvedicCenter from './schemaTypes/ayurvedicCenter'
import vriddhashrama from './schemaTypes/vriddhashrama'
import features from './schemaTypes/feature'
import fqa from './schemaTypes/fqa'
import facility from './schemaTypes/facility'
import testimonial from './schemaTypes/testimonial'
import location from './schemaTypes/location'
import contact from './schemaTypes/contact'
import section from './schemaTypes/section'
import aboutus from './schemaTypes/aboutus'
import contactDetails from './schemaTypes/contactDetails'
import pricing from './schemaTypes/pricing'
import row from './schemaTypes/row'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString,contact,localeText,localeBlockArray, location,gallery,event,ayurvedicCenter,features,vriddhashrama, doctor,Home,fqa,facility,testimonial,section,aboutus,row,pricing],
}
