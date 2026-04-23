import { Block } from 'payload'

export const blockReachText: Block = {
  slug: 'blockReachText',
  labels: {
    singular: 'Текст с форматированием',
    plural: 'Тексты с форматированием',
  },
  fields: [
    {
      name: 'fieldReachText',
      type: 'richText',
      // required: true,
    },
  ],
}
