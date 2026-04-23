import type { Block, CollectionConfig } from 'payload'
// 1. Определяем структуру отдельного блока (например, "Цитата")
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  BlocksFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const QuoteBlock: Block = {
  slug: 'quote', // Уникальный идентификатор блока
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
    },
  ],
}

export const Portfolios: CollectionConfig = {
  slug: 'portfolios',
  admin: {
    useAsTitle: 'title',
  },
  // auth: true,
  fields: [
    {
      type: 'select',
      label: 'Портфель',
      name: 'portfolioName',
      options: [
        {
          label: 'Портфель 1',
          value: 'one',
        },
        {
          label: 'Портфель 2',
          value: 'two',
        },
        {
          label: 'Портфель 3',
          value: 'three',
        },
      ],
      filterOptions: ({ options, data }) =>
        data.disallowOption1
          ? options.filter(
              (option) => (typeof option === 'string' ? options : option.value) !== 'one',
            )
          : options,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures, // Базовые: жирный, курсив, списки, ссылки и т.д.
          HeadingFeature({
            // enabledHeadingTypes: ['h1', 'h2', 'h3', 'h4']
            enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
          }),
          FixedToolbarFeature(), // Закрепляет тулбар сверху
          HorizontalRuleFeature(), // Разделительная линия
          InlineCodeFeature(), // Моноширинный шрифт для кода
          // Можно даже вставить Blocks прямо внутрь текста:
          BlocksFeature({
            blocks: [
              {
                slug: 'specialAlert',
                fields: [{ name: 'message', type: 'text' }],
              },
            ],
          }),
        ],
      }),
    },
    {
      // ...
      name: 'testDate',
      label: 'Тестовая дата',
      type: 'date',
    },
    {
      name: 'color', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Mint',
          value: 'mint',
        },
        {
          label: 'Dark Gray',
          value: 'dark_gray',
        },
      ],
      defaultValue: 'mint', // The first value in options.
      admin: {
        layout: 'horizontal',
      },
    },
    {
      label: ({ data }: any) => data?.title || 'Untitled',
      type: 'collapsible', // required
      fields: [
        // required
        {
          name: 'title3',
          type: 'text',
          required: true,
        },
        {
          name: 'someTextField',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'test-text2',
      type: 'text',
    },
    {
      name: 'test-text3',
      type: 'text',
    },
    {
      name: 'layout', // Название поля
      type: 'blocks', // Тип поля
      minRows: 1,
      maxRows: 20,
      blocks: [
        QuoteBlock, // Добавляем созданный блок
        // Здесь можно добавить другие блоки (например, Hero, CallToAction и т.д.)
      ],
    },
  ],
}
