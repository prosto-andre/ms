import { ENV_SHARED_FOLDER } from '@/constants/constants'
import path from 'node:path'
import type { CollectionConfig } from 'payload'

export const CollectionMedia: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  // upload: true,
  upload: {
    // Путь к папке, где будут физически лежать файлы
    // Можно указать относительный путь или абсолютный через path.resolve
    // staticDir: path.resolve(__dirname, '../../media'),
    staticDir: path.resolve(process.cwd(), ENV_SHARED_FOLDER),
    // Настройки обработки изображений
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      // required: true,
    },
  ],
  folders: true,
}
