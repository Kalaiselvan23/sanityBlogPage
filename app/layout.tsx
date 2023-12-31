import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const poppins=Poppins({
  subsets:["latin"],
  weight:"400",
})

export const metadata: Metadata = {
  title: "Kalaiselvan's Blog",
  description: 'Personal Blog Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className}`}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
