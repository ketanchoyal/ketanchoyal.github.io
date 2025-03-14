import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof window !== 'undefined') {
                    const stored = localStorage.getItem('theme')
                    if (stored) return stored

                    const preference = window.matchMedia('(prefers-color-scheme: dark)')
                    return preference.matches ? 'dark' : 'light'
                  }
                  return 'light'
                }

                const theme = getThemePreference()
                document.documentElement.classList.toggle('dark', theme === 'dark')
              })()
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
