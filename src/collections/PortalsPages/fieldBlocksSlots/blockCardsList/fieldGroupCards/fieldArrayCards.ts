import { Field } from 'payload'
import { fieldSelectCardIcon } from './fieldSelectCardIcon'
import { fieldTextCardTitle } from './fieldTextCardTitle'
import { fieldTextareaCardText } from './fieldTextareaCardText'

export const fieldArrayCards: Field = {
  name: 'cards',
  type: 'array',
  interfaceName: 'Cards',
  label: 'Список карточек',
  fields: [fieldSelectCardIcon, fieldTextCardTitle, fieldTextareaCardText],
}
