import { ANSI_COLORS } from '@/constants/constants'

type TGetEnv = (
  key: string,
  props?: { isFormat?: boolean; isRequired?: boolean },
) => string | number | boolean

export const getEnv: TGetEnv = (
  key,
  { isFormat, isRequired } = { isFormat: true, isRequired: true },
) => {
  // const {isFormat, isRequired} = props
  const { yellow, bright, reset, green, cyan, red } = ANSI_COLORS
  const envValue = process.env[key]
  if (envValue === undefined) {
    if (isRequired) {
      throw console.error(
        `${red}❌ Переменная ${key} отсутствует в /.env файле. Она является обязательной, её необходимо добавить.${reset}`,
      )
    }
    return ''
  }

  if (!isFormat) return envValue

  if (envValue === 'true') {
    return true
  } else if (envValue === 'false') {
    return false
  }
  const envValueConvertedToString = envValue.toString()
  const envValueConvertedToFloat = Number.parseFloat(envValueConvertedToString)
  const envValueConvertedToFloatString = envValueConvertedToFloat.toString()

  if (
    envValueConvertedToFloat &&
    envValueConvertedToString.length === envValueConvertedToFloatString.length
  ) {
    return envValueConvertedToFloat
  }

  const envValueConvertedToInt = Number.parseInt(envValueConvertedToString)
  const envValueConvertedToIntString = envValueConvertedToInt.toString()

  if (
    // envValueConvertedToInt ??
    (envValueConvertedToInt || envValueConvertedToInt === 0) &&
    envValueConvertedToString.length === envValueConvertedToIntString.length
  ) {
    return envValueConvertedToInt
  }
  return envValue
}
