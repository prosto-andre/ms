import { Block } from 'payload'

export const blockBlockBackground: Block = {
  slug: 'blockBlockBackground',
  labels: {
    singular: 'Фон блока',
    plural: 'Фоны блоков',
  },
  fields: [
    {
      name: 'fieldTextarea',
      type: 'textarea',
      // required: true,
    },
  ],
}
