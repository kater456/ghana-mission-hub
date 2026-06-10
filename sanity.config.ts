import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import article from './studio/schemas/article'

export default defineConfig({
  name: 'default',
  title: 'Mission House Ghana',

  projectId: 'te3mcunp',
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [article],
  },
})
