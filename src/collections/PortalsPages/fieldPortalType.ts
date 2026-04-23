import { Field } from 'payload'

export const fieldPortalType: Field = {
  // ...
  type: 'select',
  name: 'portalType',
  label: 'Тип портала',
  // defaultValue: '',
  // required: true,
  options: [
    {
      label: 'Портал оператора',
      value: 'operatorPortal',
    },
    {
      label: 'Портал партнера',
      value: 'partnerPortal',
    },
  ],
  // filterOptions: ({ options, data }) =>
  //   data.disallowOption1
  //     ? options.filter(
  //         (option) =>
  //           (typeof option === 'string' ? options : option.value) !== 'one',
  //       )
  //     : options,
}
