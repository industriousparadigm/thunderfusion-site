import type { Metadata } from 'next'
import { Prata, Jost, Permanent_Marker } from 'next/font/google'
import './globals.css'

const prata = Prata({
    variable: '--font-prata',
    weight: '400',
    subsets: ['latin']
})

const jost = Jost({
    variable: '--font-jost',
    subsets: ['latin'],
    display: 'swap' // Optional for faster font rendering
})

const permanentMarker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-permanent-marker'
})

export const metadata: Metadata = {
    title: 'Thunder Fusion',
    description: 'Boldness and filmmaking'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${prata.variable} ${jost.variable} ${permanentMarker.variable}`}>{children}</body>
        </html>
    )
}
