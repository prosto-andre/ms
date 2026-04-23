// import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CollectionMedia } from './collections/10_CollectionMedia/CollectionMedia'
import { CollectionUsers } from './collections/1_CollectionUsers/CollectionUsers'
import { CollectionWebsitePages } from './collections/2_CollectionWebsitePages/CollectionWebsitePages'
import { CollectionLkPages } from './collections/3_CollectionLkPages/CollectionLkPages'
import { CollectionPortfolios } from './collections/5_CollectionPortfolios/CollectionPortfolios'
import { CollectionPortalsPages } from './collections/9_CollectionPortalsPages/CollectionPortalsPages'
import { ENV_PAYLOAD_SECRET, PREPARED_DATABASE_URL } from './constants/constants'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // NOTE: исходя из документации должно работать, но не работает на практике
  // serverURL: `http://localhost:${process.env.PORT}`,
  cors: ['https://npfpens.ru', 'https://localhost.npfpens.ru:3001'],
  folders: {
    debug: true,
    collectionOverrides: [
      async ({ collection }) => {
        return collection
      },
    ],
    fieldName: 'folder',
    slug: 'payload-folders',
  },
  admin: {
    user: CollectionUsers.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    CollectionUsers,
    CollectionWebsitePages,
    CollectionLkPages,
    CollectionPortalsPages,
    CollectionPortfolios,
    CollectionMedia,
  ],
  editor: lexicalEditor(),
  secret: ENV_PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // NOTE: Для sqlite. (временно оставлено, как пример)
  // db: sqliteAdapter({
  //   client: {
  //     url: process.env.DATABASE_URL || '',
  //   },
  // }),
  db: postgresAdapter({
    pool: {
      connectionString: PREPARED_DATABASE_URL,
    },
  }),
  sharp,
  plugins: [],
})
