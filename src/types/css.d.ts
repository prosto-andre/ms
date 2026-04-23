// src/types/css.d.ts
declare module '@payloadcms/next/css' {
  const content: any
  export default content
}

// Для всех CSS модулей
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
