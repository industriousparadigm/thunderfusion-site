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
    display: 'swap'
})

const permanentMarker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-permanent-marker'
})

export const metadata: Metadata = {
    title: 'Thunder Fusion - Empowering Humanitarian Narratives',
    description: 'Partnering with NGOs to create compelling media that drives social change.',
    keywords: ['digital media agency', 'humanitarian media', 'NGO partnerships', 'social impact storytelling']
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
