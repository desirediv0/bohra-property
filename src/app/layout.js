import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'BOHRA Property Pvt. Ltd.',
  description: 'Luxury Real Estate Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-primary text-accent min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
