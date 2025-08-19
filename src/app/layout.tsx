import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'גרירה מהירה - אזור המרכז | שירותי גרירה 24/7',
  description: 'שירותי גרירה מקצועיים באזור המרכז. גרירת מכוניות ואופנועים 24 שעות ביממה. מענה מיידי - 050-123-4567',
  keywords: 'גרירה, גרירת מכוניות, גרירת אופנועים, שירותי דרך, אזור המרכז, תל אביב, פתח תקווה',
  authors: [{ name: 'גרירה מהירה' }],
  openGraph: {
    title: 'גרירה מהירה - אזור המרכז',
    description: 'שירותי גרירה מקצועיים 24/7 באזור המרכז',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}