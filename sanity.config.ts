import {Config, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

import {schema} from '@/sanity/schema'


export default defineConfig<Config>({
  basePath: "/studio",
  name: 'Portfolio_Content_Studio',
  title: 'Portfolio Content Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema
})
