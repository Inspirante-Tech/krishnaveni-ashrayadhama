import { createClient } from 'next-sanity'

import {apiKey, apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  token:apiKey
})
