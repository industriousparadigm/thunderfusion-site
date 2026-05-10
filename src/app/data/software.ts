// Software work shown in section 02. The "feature" gets the big slot with a
// screenshot; "items" are the typographic rows below it.

export interface SoftwareFeature {
    name: string
    org: string
    body: string
    image: { src: string; alt: string; width: number; height: number }
}

export interface SoftwareItem {
    title: string
    org: string
    body: string
}

export const softwareFeature: SoftwareFeature = {
    name: 'Brainwave',
    org: 'at Okra Solar',
    body: 'A natural-language interface to a complex enterprise data warehouse. Ask in plain English, get queries, charts, and answers. Used daily by leadership and analysts.',
    image: {
        src: '/products/brainwave.jpg',
        alt: "Brainwave — Okra Solar's natural-language analytics product",
        width: 1600,
        height: 1000
    }
}

export const softwareItems: SoftwareItem[] = [
    {
        title: 'Product engineering',
        org: 'at Route Reports, Trinny London, Stylist Magazine',
        body: 'Years across editorial, e-commerce, and B2B startups. Senior IC, full-stack, things-that-actually-shipped.'
    },
    {
        title: 'AI-assisted development',
        org: 'shipped fast',
        body: 'Among the earliest practitioners of AI-native engineering inside production teams. We use AI to outpace bigger shops and ship better software, faster.'
    }
]
