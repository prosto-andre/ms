// Скрипт проверки, и при необходимости, создания базы данных, к которой в последствии будет подключаться CMS. Предполагается использование скрипта в package.json scripts совместно с 'dev' и 'build'. При необходимости можно выполнить его в отдельности, например командой `pnpm tsx ./src/ensureDatabaseExists.ts`
import {
  ANSI_COLORS,
  ENV_REMOTE_PG_DEFAULT_DATABASE_NAME,
  PREPARED_PG_DATABASE_NAME,
  PREPARED_PG_HOST,
  PREPARED_PG_PASSWORD,
  PREPARED_PG_PORT,
  PREPARED_PG_USER,
} from '@/constants/constants'
import { Client } from 'pg'
export const ensureDatabaseExists = async () => {
  const { yellow, bright, reset, green, cyan, red } = ANSI_COLORS
  const client = new Client({
    user: PREPARED_PG_USER,
    password: PREPARED_PG_PASSWORD,
    host: PREPARED_PG_HOST,
    port: PREPARED_PG_PORT,
    database: ENV_REMOTE_PG_DEFAULT_DATABASE_NAME, // Подключение к дефолтной базе
  })

  try {
    await client.connect()
    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = '${PREPARED_PG_DATABASE_NAME}'`,
    )

    if (res.rowCount === 0) {
      console.log(
        `${yellow}⚠️  База ${bright}${PREPARED_PG_DATABASE_NAME}${reset}${yellow} не найдена, создаю...и перехожу к запуску PayloadCms ${reset}`,
      )
      await client.query(`CREATE DATABASE ${PREPARED_PG_DATABASE_NAME}`)
      console.log(
        `${green}✅ База ${bright}${PREPARED_PG_DATABASE_NAME}${reset}${green} успешно создана!${reset}`,
      )
    } else {
      console.log(
        `${cyan}ℹ️  База ${bright}${PREPARED_PG_DATABASE_NAME}${reset}${cyan} уже существует. Перехожу к запуску PayloadCms${reset}`,
      )
    }
  } catch (err) {
    console.error(`${red}❌ Ошибка при проверке/создании БД:${reset}`, err)
  } finally {
    await client.end()
  }
}

// Вызвать перед инициализацией Payload
await ensureDatabaseExists()
