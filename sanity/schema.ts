import { type SchemaTypeDefinition } from "sanity";

import doctor from "./schemaTypes/doctor";
import event from "./schemaTypes/event";
import gallery from "./schemaTypes/gallery";
import {
  localeBlockArray,
  localeString,
  localeText,
} from "./schemaTypes/locale";
import Home from "./schemaTypes/home";
import ayurvedicCenter from "./schemaTypes/ayurvedicCenter";
import vriddhashrama from "./schemaTypes/vriddhashrama";
import features from "./schemaTypes/feature";
import fqa from "./schemaTypes/fqa";
import facility from "./schemaTypes/facility";
import testimonial from "./schemaTypes/testimonial";
import location from "./schemaTypes/location";
import contact from "./schemaTypes/contact";
import section from "./schemaTypes/section";
import aboutus from "./schemaTypes/aboutus";
import contactDetails from "./schemaTypes/contactDetails";
import pricing from "./schemaTypes/pricing";
import row from "./schemaTypes/row";
import profile from "./schemaTypes/profile";
import organisation from "./schemaTypes/organisation";
import career from "./schemaTypes/career";
import role from "./schemaTypes/role";
import trustee from "./schemaTypes/trustee";
import therapyInfo from "./schemaTypes/therapyinfo";
import treatmentPackage from "./schemaTypes/treatmentPackage";
import tariff from "./schemaTypes/tariff";
import tariffRow from "./schemaTypes/tariffRow";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    contact,
    localeText,
    localeBlockArray,
    role,
    location,
    gallery,
    event,
    ayurvedicCenter,
    career,
    features,
    vriddhashrama,
    doctor,
    Home,
    fqa,
    facility,
    testimonial,
    section,
    aboutus,
    row,
    pricing,
    organisation,
    profile,
    trustee,
    therapyInfo,
    treatmentPackage,
    tariff,
    tariffRow,
  ],
};
