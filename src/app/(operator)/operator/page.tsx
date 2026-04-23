import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import '../styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // payload.collections['portals-pages']
  const portalsPagesRes = await payload.find({
    collection: 'portals-pages',
    // draft: true,
    limit: 10,
    //   locale: 'en',
    page: 1,
    where: { _status: { equals: 'published' } },
  })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <div className="content">
        <pre>{JSON.stringify(portalsPagesRes)}</pre>
        <br />
        <pre>{JSON.stringify(user)}</pre>
      </div>
    </div>
  )
}
