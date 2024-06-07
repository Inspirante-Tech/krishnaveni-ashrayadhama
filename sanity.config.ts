'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

// export default defineConfig({
//   basePath: '/admin',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schema' folder
//   schema,
//   plugins: [
//     structureTool(),
//     // Vision is a tool that lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

const multiInstanceSchemas=["gallery","events","testimonial","contact"]
const multiInstanceTypes = schema.types.filter(type=>multiInstanceSchemas.includes(type.name))
const singletonTypes = schema.types.filter(type=>!multiInstanceSchemas.includes(type.name))

export default defineConfig({
  name: "default",
  title: "Krishaveni AshrayaDhama",

  basePath: '/admin',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items(
           [ 
            ...schema.
            types
            .filter(type=>(!multiInstanceSchemas.includes(type.name))&&type.type!=="object")
            .map(type=>{
            // Our singleton type has a list item with a custom child
            return S.listItem()
              .title(type.title||type.name)
              .id(type.name)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType(type.name)
                  .documentId(type.name)
              )
              
          }),
          ...multiInstanceTypes.map(type=>(
            S.documentTypeListItem(type.name).title(type.title||type.name)
          ))
        ]),
          
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => multiInstanceSchemas.includes(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.filter(type=>context.schemaType===type.name).length 
    ? input.filter(({ action }) => action && singletonActions.has(action))
        : 
        input,
  },
})