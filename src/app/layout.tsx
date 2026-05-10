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
    title: 'Thunder Fusion — Films and Software for Humanitarian Missions',
    description:
        'A creative and engineering studio. Films for IFRC, British Red Cross, UN Women, FIND. Software shipped at Okra Solar, Route Reports, Trinny London, Stylist Magazine.',
    keywords: [
        'humanitarian storytelling',
        'documentary filmmaking',
        'NGO communications',
        'creative consultancy',
        'product engineering',
        'AI-assisted development',
        'humanitarian video production',
        'social impact'
    ],
    authors: [{ name: 'Thunder Fusion' }],
    creator: 'Thunder Fusion',
    publisher: 'Thunder Fusion',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    metadataBase: new URL('https://thunderfusion.pt'),
    openGraph: {
        title: 'Thunder Fusion — Films and Software for Humanitarian Missions',
        description:
            'A creative and engineering studio. Films for IFRC, British Red Cross, UN Women, FIND. Software shipped at Okra Solar, Route Reports, Trinny London, Stylist Magazine.',
        url: 'https://thunderfusion.pt',
        siteName: 'Thunder Fusion',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Thunder Fusion — Creative and Engineering Studio'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thunder Fusion — Films and Software for Humanitarian Missions',
        description:
            "A creative and engineering studio. Films for the world's largest aid orgs. Software shipped at Okra Solar, Route Reports, Trinny London, Stylist Magazine.",
        images: ['/twitter-image.jpg']
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
