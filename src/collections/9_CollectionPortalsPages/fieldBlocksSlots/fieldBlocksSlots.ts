import { Field } from 'payload'
import { blockReachText } from './blockReachText'
import { blockTextarea } from './blockTextarea'
import { blockCardsList } from './blockCardsList/blockCardsList'

export const fieldBlocksSlots: Field = {
  name: 'slots',
  type: 'blocks', // required
  label: 'Слоты',
  labels: {
    singular: 'Слот',
    plural: 'Слоты',
  },
  blocks: [blockReachText, blockTextarea, blockCardsList],
}
