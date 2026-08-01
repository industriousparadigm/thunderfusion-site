// Founders shown in section 03. `accent` chooses the color of the giant
// initial. `mailto` and `linkedin` drive the per-founder action links.
export type Accent = 'pink' | 'cyan'

export interface Founder {
    initial: string
    accent: Accent
    role: string
    name: string
    body: string
    mailto: string
    linkedin?: string
}

export const founders: Founder[] = [
    {
        initial: 'M',
        accent: 'pink',
        role: 'Creative Director',
        name: 'Mariana Miragaia',
        body: "More than a decade producing humanitarian films, campaigns, and learning content for the world's largest aid organizations. Leads field production and editorial direction.",
        mailto: 'mailto:hi@thunderfusion.pt?subject=For%20Mariana',
        linkedin: 'https://www.linkedin.com/in/mariana-miragaia-5244965b/'
    },
    {
        initial: 'D',
        accent: 'cyan',
        role: 'Engineering Lead',
        name: 'Diogo Costa',
        body: 'Senior product engineer. Currently at Okra Solar. Previously Route Reports, Trinny London, Stylist Magazine. Among the earliest practitioners of AI-native engineering.',
        mailto: 'mailto:hi@thunderfusion.pt?subject=For%20Diogo',
        linkedin: 'https://www.linkedin.com/in/diogosalvinicosta/'
    }
]
