import type { CollectionConfig } from 'payload'

export const CollectionLkPages: CollectionConfig = {
  slug: 'lk-pages',
  labels: {
    singular: 'Страница ЛК',
    plural: 'Страницы ЛК',
  },
  admin: {
    useAsTitle: 'title',
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
    {
      name: 'test-rich-text',
      label: 'Тестирование test-rich-text',
      type: 'richText',
    },
  ],
}
