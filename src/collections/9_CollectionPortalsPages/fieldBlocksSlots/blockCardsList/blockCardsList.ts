import { Block } from 'payload'
import { fieldGroupCards } from './fieldGroupCards/fieldGroupCards'
import { fieldArrayCards } from './fieldGroupCards/fieldArrayCards'

export const blockCardsList: Block = {
  slug: 'cardsList',
  labels: {
    singular: 'Список карточек',
    plural: 'Списки карточек',
  },
  fields: [
    // fieldGroupCards,
    fieldArrayCards,
  ],
}
