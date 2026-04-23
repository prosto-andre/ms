import { getEnv } from 'utils/getEnv'

// ANSI цветовые коды
export const ANSI_COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
}

export const ENV_PAYLOAD_SECRET = getEnv('PAYLOAD_SECRET') as string

console.log(`|22 April 13:55 | ENV_PAYLOAD_SECRET:`, ENV_PAYLOAD_SECRET)

// export const ENV_PORT = getEnv('PORT') as string
// export const ENV_DATABASE_URI = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE_NAME}`

// REMOTE DB CREDENTIALS
export const ENV_REMOTE_PG_USER = getEnv('REMOTE_PG_USER') as string
export const ENV_REMOTE_PG_PASSWORD = getEnv('REMOTE_PG_PASSWORD') as string
export const ENV_REMOTE_PG_HOST = getEnv('REMOTE_PG_HOST') as string
export const ENV_REMOTE_PG_PORT = getEnv('REMOTE_PG_PORT') as number
export const ENV_REMOTE_PG_DEFAULT_DATABASE_NAME = getEnv(
  'REMOTE_PG_DEFAULT_DATABASE_NAME',
) as string
export const ENV_REMOTE_PG_DATABASE_NAME = getEnv('REMOTE_PG_DATABASE_NAME') as string
// LOCAL DB CREDENTIALS
export const ENV_LOCAL_PG_USER = getEnv('LOCAL_PG_USER', { isRequired: false }) as string
export const ENV_LOCAL_PG_PASSWORD = getEnv('LOCAL_PG_PASSWORD', { isRequired: false }) as string
export const ENV_LOCAL_PG_HOST = getEnv('LOCAL_PG_HOST', { isRequired: false }) as string
export const ENV_LOCAL_PG_PORT = getEnv('LOCAL_PG_PORT', { isRequired: false }) as number
export const ENV_LOCAL_PG_DATABASE_NAME = getEnv('LOCAL_PG_DATABASE_NAME', {
  isRequired: false,
}) as string
// PREPARED DB CREDENTIALS (вычисленные креды для подключения к ДБ в зависимости от ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA)
export const ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA = getEnv('IS_USE_LOCAL_DATABASE_AND_MEDIA', {
  isRequired: false,
}) as string
export const PREPARED_PG_USER = ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA
  ? ENV_LOCAL_PG_USER
  : ENV_REMOTE_PG_USER
export const PREPARED_PG_PASSWORD = ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA
  ? ENV_LOCAL_PG_PASSWORD
  : ENV_REMOTE_PG_PASSWORD
export const PREPARED_PG_HOST = ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA
  ? ENV_LOCAL_PG_HOST
  : ENV_REMOTE_PG_HOST
export const PREPARED_PG_PORT = ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA
  ? ENV_LOCAL_PG_PORT
  : ENV_REMOTE_PG_PORT
export const PREPARED_PG_DATABASE_NAME = ENV_IS_USE_LOCAL_DATABASE_AND_MEDIA
  ? ENV_LOCAL_PG_DATABASE_NAME
  : ENV_REMOTE_PG_DATABASE_NAME

export const PREPARED_DATABASE_URL = `postgres://${PREPARED_PG_USER}:${PREPARED_PG_PASSWORD}@${PREPARED_PG_HOST}:${PREPARED_PG_PORT}/${PREPARED_PG_DATABASE_NAME}`

export const ENV_SHARED_FOLDER = getEnv('SHARED_FOLDER') as string
