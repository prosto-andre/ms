import type { CollectionConfig } from 'payload'
import { fieldPortalType } from './fieldPortalType'
import { fieldGroupSlots } from './fieldGroupSlots/fieldGroupSlots'
import { fieldBlocksSlots } from './fieldBlocksSlots/fieldBlocksSlots'

export const PortalsPages: CollectionConfig = {
  slug: 'portals-pages',
  labels: {
    singular: 'Страница Портала',
    plural: 'Страницы Порталов',
  },

  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Разрешить чтение всем (даже неавторизованным)
    create: ({ req: { user } }) => Boolean(user), // Создавать может только админ
    update: ({ req: { user } }) => Boolean(user), // Редактировать только админ
    delete: ({ req: { user } }) => Boolean(user), // Удалять только админ
  },
  // auth: true,
  fields: [
    fieldPortalType,
    {
      name: 'titleImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Изображение в заглавии',
      // required: true,
    },
    //     {
    //       name: 'slotsArray',
    //   type: 'array',
    //   fields: [
    //   ],
    // },
    fieldBlocksSlots,
    {
      name: 'slider', // required
      type: 'array', // required
      label: 'Image Slider',
      minRows: 2,
      maxRows: 10,
      interfaceName: 'CardSlider', // optional
      labels: {
        singular: 'Слот',
        plural: 'Слоты',
      },
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          // required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },

    fieldGroupSlots,
    {
      name: 'title',
      type: 'text',
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Описание программы',
          fields: [
            {
              name: 'showExtraTab',
              label: 'Отобразить "Инструкция и бланки"',
              type: 'checkbox',
            },
          ],
        },
        {
          label: 'Инструкция и бланки',
          admin: {
            condition: (data) => !!data.showExtraTab,
          },
          fields: [
            {
              name: 'extraField',
              type: 'text',
            },
          ],
        },
        {
          label: 'Пенсионный калькулятор',
          fields: [
            {
              name: 'extraField2',
              type: 'text',
            },
          ],
        },
        {
          label: 'Меморандум',
          fields: [],
        },
      ],
    },
    {
      type: 'group',
      name: 'testGroup',
      // interfaceName: 'Тестовая группа',
      label: 'Лейбл тестовай группы',
      fields: [
        {
          name: 'title-from-group1',
          type: 'text',
          label: 'Тестовый title-from-group1',
        },
        {
          name: 'title2',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
  ],
}
