import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'גרירה באזור המרכז | שירותי גרירה 24/7 | 050-123-4567',
  description: 'שירותי גרירה מקצועיים באזור המרכז ✓ זמינים 24/7 ✓ גרירת מכוניות ואופנועים ✓ תל אביב, פתח תקווה, רמת גן ✓ התקשרו עכשיו!',
  keywords: [
    'גרירה באזור המרכז',
    'גרירה תל אביב', 
    'גרירה פתח תקווה',
    'גרירת מכוניות',
    'גרירת אופנועים', 
    'שירותי דרך',
    'גרירה 24 שעות'
  ].join(', '),
  robots: 'index, follow',
  openGraph: {
    title: 'גרירה באזור המרכז - שירותי גרירה מקצועיים 24/7',
    description: 'שירותי גרירה מקצועיים באזור המרכז. זמינים 24 שעות ביממה',
    type: 'website',
    locale: 'he_IL',
    url: 'https://grira24.co.il',
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