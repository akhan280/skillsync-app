import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillSync',
  description: 'Create a comprehensive job search profile and strategy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster />
      <Analytics/>
      </body>
    </html>
  )
}
