import type { CollectionConfig } from 'payload'

export const CollectionWebsitePages: CollectionConfig = {
  slug: 'website-pages',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Страница Вебсайта',
    plural: 'Страницы Вебсайта',
  },
  // auth: true,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'test-text2',
      type: 'text',
    },
    {
      name: 'test-text3',
      type: 'text',
    },
  ],
}
