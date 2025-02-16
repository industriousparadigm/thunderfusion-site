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
    title: "Thunder Fusion - Empowering Humanitarian Narratives",
    description: "Partnering with NGOs to create compelling media that drives social change.",
    keywords: ["digital media agency", "humanitarian media", "NGO partnerships", "social impact storytelling"],
    // openGraph: {
    //   title: "Thunder Fusion - Empowering Humanitarian Narratives",
    //   description: "Partnering with NGOs to create compelling media that drives social change.",
    //   url: "https://thunderfusion.com",
    //   siteName: "Thunder Fusion",
    //   images: [
    //     {
    //       url: "/og-image.jpg",
    //       width: 1200,
    //       height: 630,
    //       alt: "Empowering Humanitarian Narratives",
    //     },
    //   ],
    //   type: "website",
    //   locale: "en_US",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Thunder Fusion - Empowering Humanitarian Narratives",
    //   description: "Partnering with NGOs to create compelling media that drives social change.",
    //   images: ["/twitter-image.jpg"],
    //   creator: "@mrsalvini",
    // },
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
