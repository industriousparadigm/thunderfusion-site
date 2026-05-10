// All marketing copy used by home-page sections. Editing here updates the page
// without touching component files.
import type { Accent } from './studio'

export const hero = {
    eyebrow: 'Thunder Fusion · Films + Software',
    titleLines: [
        { lead: 'We tell ', accent: 'stories.', tone: 'pink' as Accent },
        { lead: 'We build ', accent: 'tools.', tone: 'cyan' as Accent }
    ],
    closer: { lead: 'For missions ', italic: 'that matter.' },
    sub: 'A creative and engineering studio. Films for IFRC, British Red Cross, UN Women, FIND. Software shipped at Okra Solar, Route Reports, Trinny London, Stylist Magazine.',
    showreelVideoId: 'pRLBLh7OBpA',
    sideLabel: 'EST · MATOSINHOS · PORTUGAL',
    scrollHint: 'SCROLL ↓',
    ctaLabel: 'Watch the showreel'
} as const

export const sectionHeaders = {
    films: {
        number: '01',
        title: 'Films',
        meta: "Documentaries, campaigns, and field stories — produced for the world's largest humanitarian organizations."
    },
    software: {
        number: '02',
        title: 'Software',
        meta: 'Senior product engineering. AI-native. Built to ship.'
    },
    studio: {
        number: '03',
        title: 'The studio',
        meta: 'Two founders. One studio.'
    },
    contact: {
        number: '04',
        title: 'Get in touch',
        meta: "Tell us what you're working on."
    }
} as const

export interface ContactCta {
    label: string
    cta: string
    mailto: string
    accent: Accent
}

export const contactCtas: ContactCta[] = [
    {
        label: 'Films · Campaigns · Comms',
        cta: 'Send a brief',
        mailto: 'mailto:hi@thunderfusion.pt?subject=Films%2C%20campaigns%2C%20comms',
        accent: 'pink'
    },
    {
        label: 'Software · AI · Prototypes',
        cta: 'Pitch a project',
        mailto: 'mailto:hi@thunderfusion.pt?subject=Software%2C%20AI%2C%20prototypes',
        accent: 'cyan'
    }
]

export const footer = {
    location: 'Thunder Fusion · Matosinhos, Portugal',
    mark: 'TF'
} as const
