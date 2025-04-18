import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEO Vision Lasik Center-Ballari',
  description: 'Created with v0',
  generator: 'IUKMICRO',
  icons: {
    icon: '/favicon.png', // or use '/favicon.png'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
