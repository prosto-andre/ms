import { Block } from 'payload'

export const blockTextarea: Block = {
  slug: 'blockTextarea',
  labels: {
    singular: 'Текстовый блок',
    plural: 'Текстовые блоки',
  },
  fields: [
    {
      name: 'fieldTextarea',
      type: 'textarea',
      // required: true,
    },
  ],
}
