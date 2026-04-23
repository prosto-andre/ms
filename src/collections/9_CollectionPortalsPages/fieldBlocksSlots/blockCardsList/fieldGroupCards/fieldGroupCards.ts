import { Field } from 'payload'
import { fieldSelectCardIcon } from './fieldSelectCardIcon'
import { fieldTextCardTitle } from './fieldTextCardTitle'
import { fieldTextareaCardText } from './fieldTextareaCardText'

export const fieldGroupCards: Field = {
  name: 'cards',
  type: 'group',
  interfaceName: 'Cards',
  label: 'Список карточек',
  fields: [
    // fieldSelectCardIcon,
    fieldTextCardTitle,
    fieldTextareaCardText,
  ],
}
