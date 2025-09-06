import type { Metadata } from 'next'
import { Prata, Jost, Permanent_Marker } from 'next/font/google'
import './globals.css'
import Analytics from './components/Analytics'

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
    title: 'Thunder Fusion - Bold Filmmaking with a Human Purpose',
    description: 'Creative consultancy specializing in humanitarian storytelling and impactful media solutions for international organizations and NGOs.',
    keywords: ['video production', 'humanitarian storytelling', 'NGO communications', 'creative consultancy', 'documentary filmmaking', 'digital marketing', 'social impact'],
    authors: [{ name: 'Thunder Fusion' }],
    creator: 'Thunder Fusion',
    publisher: 'Thunder Fusion',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://thunderfusion.com'),
    openGraph: {
        title: 'Thunder Fusion - Bold Filmmaking with a Human Purpose',
        description: 'Creative consultancy specializing in humanitarian storytelling and impactful media solutions.',
        url: 'https://thunderfusion.com',
        siteName: 'Thunder Fusion',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Thunder Fusion - Creative Consultancy',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thunder Fusion - Bold Filmmaking with a Human Purpose',
        description: 'Creative consultancy specializing in humanitarian storytelling and impactful media solutions.',
        images: ['/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${prata.variable} ${jost.variable} ${permanentMarker.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
