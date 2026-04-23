import type { CollectionConfig } from 'payload'

export const CollectionUsers: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
