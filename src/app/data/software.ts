// Software work shown in section 02. Each "feature" gets the big slot with a
// screenshot; "items" are the typographic rows below it.

export interface SoftwareFeature {
    label: string
    name: string
    org: string
    body: string
    image: { src: string; alt: string; width: number; height: number }
    href?: string
    linkLabel?: string
}

export interface SoftwareItem {
    title: string
    org: string
    body: string
}

export const softwareFeatures: SoftwareFeature[] = [
    {
        label: 'Featured client work',
        name: 'RC3 Research Database',
        org: 'for the French Red Cross',
        body: 'A research library for the Red Cross Red Crescent Movement: faceted search across 600+ publications, an admin back office, and a documented public API. Commissioned by the French Red Cross, built and delivered by Thunder Fusion.',
        href: 'https://database.rc3research.org',
        linkLabel: 'Visit the live database',
        image: {
            src: '/products/rc3-links.jpg',
            alt: 'RC3 Research Database — the research library Thunder Fusion built for the French Red Cross',
            width: 1600,
            height: 1000
        }
    },
    {
        label: 'Also built',
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
]

export const softwareItems: SoftwareItem[] = [
    {
        title: 'AI systems & agents',
        org: 'design and build',
        body: "Agent workflows, LLM-backed tools, and natural-language interfaces over real data. AI that ships into an organization's daily work, not a demo."
    },
    {
        title: 'Product engineering',
        org: 'at Route Reports, Trinny London, Stylist Magazine',
        body: 'Years across editorial, e-commerce, and B2B startups. Senior IC, full-stack, things-that-actually-shipped.'
    }
]
