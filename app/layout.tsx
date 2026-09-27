import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'La Casino — зеркало, официальный сайт и игры без путаницы сегодня',
  description: 'La Casino: понятный гид по официальному сайту, рабочему зеркалу и выбору игр. Разбираем, как найти La Casino, проверить адрес, начать играть осознанно и сохранить контроль над бюджетом.',
  generator: 'La Casino',
  alternates: { canonical: 'https://la17casino.vercel.app/' },
  icons: { icon: '/la-casino-favicon.png', apple: '/la-casino-favicon.png' },
  openGraph: {
    title: 'La Casino — понятный игровой навигатор',
    description: 'Официальный сайт, зеркало и короткий гид по играм La Casino.',
    url: 'https://la17casino.vercel.app/',
    siteName: 'La Casino',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = { themeColor: '#f4f6f1', colorScheme: 'light', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <link rel="canonical" href="https://la17casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
