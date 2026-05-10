import type { Metadata, Viewport } from 'next'
import { Prata, Jost } from 'next/font/google'
import Script from 'next/script'
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
    alternates: {
        canonical: '/'
    },
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
            'max-snippet': -1
        }
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a0f14'
}

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Thunder Fusion',
    url: 'https://thunderfusion.pt',
    logo: 'https://thunderfusion.pt/tflogo-new-transparent.png',
    description:
        'A creative and engineering studio producing humanitarian films and shipping product software for organizations working on missions that matter.',
    foundingLocation: {
        '@type': 'Place',
        name: 'Matosinhos, Portugal'
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Matosinhos',
        addressCountry: 'PT'
    },
    founder: [
        { '@type': 'Person', name: 'Mariana Miragaia', jobTitle: 'Creative Director' },
        { '@type': 'Person', name: 'Diogo Costa', jobTitle: 'Engineering Lead' }
    ],
    knowsAbout: [
        'Humanitarian storytelling',
        'Documentary filmmaking',
        'Product engineering',
        'AI-assisted development'
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            email: 'mariana@thunderfusion.pt',
            contactType: 'films and communications'
        },
        {
            '@type': 'ContactPoint',
            email: 'diogo@thunderfusion.pt',
            contactType: 'software and engineering'
        }
    ]
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${prata.variable} ${jost.variable}`}>
                <Script
                    id="organization-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                {children}
                <Analytics />
            </body>
        </html>
    )
}
