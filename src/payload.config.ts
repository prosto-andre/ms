// import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { LkPages } from './collections/LkPages'
import { Media } from './collections/Media'
import { PortalsPages } from './collections/PortalsPages/PortalsPages'
import { Portfolios } from './collections/Portfolios'
import { Users } from './collections/Users'
import { WebsitePages } from './collections/WebsitePages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // NOTE: исходя из документации должно работать, но не работает на практике
  // serverURL: `http://localhost:${process.env.PORT}`,
  cors: [
    'https://localhost.npfpens.ru:3001',
    // 'https://your-production-site.com',
  ],
  folders: {
    debug: true, // optional
    collectionOverrides: [
      async ({ collection }) => {
        return collection
      },
    ], // optional
    fieldName: 'folder', // optional
    slug: 'payload-folders', // optional
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    WebsitePages,
    LkPages,
    PortalsPages,
    Portfolios,
    Media,
    // {
    //   slug: 'cars',
    //   admin: {
    //     useAsTitle: 'title',
    //   },
    //   fields: [
    //     {
    //       name: 'title',
    //       type: 'text',
    //     }
    //   ]
    // }
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
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
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  plugins: [],
})
