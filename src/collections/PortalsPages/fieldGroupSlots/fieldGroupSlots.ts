import { Field } from 'payload'

export const fieldGroupSlots: Field = {
  name: 'pageSlots',
  type: 'group', // required
  interfaceName: 'Slots', // optional
  label: 'Слоты',
  fields: [
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
