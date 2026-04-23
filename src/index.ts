import { getPayload } from 'payload'
import configPromise from './payload.config'

const run = async () => {
  // Инициализируем экземпляр Payload
  const payload = await getPayload({
    config: configPromise,
  })

  await payload.init({
    config: configPromise,
    // secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
    // local: true, // Указывает, что мы не запускаем Express-сервер
    // Если конфиг не подхватился автоматически, укажите путь явно:
    // configPath: path.resolve(__dirname, './payload.config.ts'),
  })
  console.log(`|15 April 17:56 | payload:`, payload)

  //   // Пример выполнения операции через Local API
  //   const posts = await payload.find({
  //     collection: 'posts',
  //   })

  //   console.log('Найдено постов:', posts.totalDocs)

  //   // Важно: завершить процесс, если это разовый скрипт
  //   process.exit(0)
}

run()
