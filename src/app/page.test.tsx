import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// next/image renders an <img>; mock to keep the test contract simple.
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: Record<string, unknown>) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} alt={(props.alt as string) ?? ''} />
    }
}))

import HomePage from './page'
import { featuredFilms } from './data/films'
import { founders } from './data/studio'
import { softwareFeatures } from './data/software'
import { contactCtas, contactEmail, footer, hero } from './data/copy'

describe('HomePage', () => {
    it('renders the dual-pillar tagline from the copy data file', () => {
        render(<HomePage />)
        for (const line of hero.titleLines) {
            const expected = `${line.lead}${line.accent}`.replace(/\s+/g, ' ').trim()
            expect(document.body).toHaveTextContent(expected)
        }
        expect(document.body).toHaveTextContent(`${hero.closer.lead}${hero.closer.italic}`.trim())
    })

    it('exposes the section anchors that the header navigates to', () => {
        const { container } = render(<HomePage />)
        for (const id of ['films', 'software', 'studio', 'contact']) {
            expect(container.querySelector(`#${id}`)).not.toBeNull()
        }
    })

    it('routes both contact CTAs through hi@ without exposing personal addresses', () => {
        render(<HomePage />)
        for (const card of contactCtas) {
            const link = screen.getByRole('link', { name: new RegExp(card.label, 'i') })
            expect(link.getAttribute('href')).toMatch(/^mailto:hi@thunderfusion\.pt\?subject=/)
        }
    })

    it('routes both studio email links through hi@ as well', () => {
        render(<HomePage />)
        const emailLinks = screen.getAllByRole('link', { name: /^Email$/i })
        expect(emailLinks).toHaveLength(founders.length)
        for (const link of emailLinks) {
            expect(link.getAttribute('href')).toMatch(/^mailto:hi@thunderfusion\.pt\?subject=/)
        }
    })

    it('never exposes personal addresses anywhere in rendered HTML (raw or encoded)', () => {
        render(<HomePage />)
        const html = document.body.innerHTML
        for (const personal of ['mariana@thunderfusion.pt', 'diogo@thunderfusion.pt']) {
            expect(html).not.toContain(personal)
            // URL-encoded forms must not slip through either
            expect(html).not.toContain(personal.replace('@', '%40'))
        }
    })

    it('renders the featured Brainwave product screenshot at the optimized path', () => {
        render(<HomePage />)
        const img = screen.getByAltText(/Brainwave/)
        expect(img).toHaveAttribute('src', '/products/brainwave.jpg')
    })

    it('renders the RC3 feature with a link to the live database', () => {
        render(<HomePage />)
        const rc3 = softwareFeatures.find((feature) => feature.name === 'RC3 Research Database')
        const link = screen.getByRole('link', { name: new RegExp(rc3!.linkLabel!, 'i') })
        expect(link).toHaveAttribute('href', rc3!.href)
    })

    it('links the footer to the studio YouTube channel', () => {
        render(<HomePage />)
        const youtube = footer.links.find((link) => link.label === 'YouTube')!
        const link = screen.getByRole('link', { name: youtube.label })
        expect(link).toHaveAttribute('href', youtube.href)
    })

    it('shows the contact email as a plain, visible mailto link', () => {
        render(<HomePage />)
        const link = screen.getByRole('link', { name: contactEmail })
        expect(link).toHaveAttribute('href', `mailto:${contactEmail}`)
    })

    it('renders all featured films from the data file', () => {
        render(<HomePage />)
        const buttons = screen.getAllByRole('button', { name: /^Play /i })
        expect(buttons).toHaveLength(featuredFilms.length)
    })

    it('opens the showreel modal when the hero CTA is clicked', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        await user.click(screen.getByRole('button', { name: new RegExp(hero.ctaLabel, 'i') }))
        const iframe = screen.getByTitle('YouTube video player')
        expect(iframe).toBeInTheDocument()
        expect(iframe.getAttribute('src')).toContain(hero.showreelVideoId)
    })

    it('opens the modal with the right videoId for the first film (data-driven, not hardcoded)', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        const firstFilm = screen.getAllByRole('button', { name: /^Play /i })[0]
        await user.click(firstFilm)
        const iframe = screen.getByTitle('YouTube video player')
        expect(iframe.getAttribute('src')).toContain(featuredFilms[0].videoId)
    })

    it('closes the modal when the close button is clicked', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        await user.click(screen.getAllByRole('button', { name: /^Play /i })[0])
        expect(screen.getByTitle('YouTube video player')).toBeInTheDocument()
        await user.click(screen.getByRole('button', { name: /Close video/i }))
        expect(screen.queryByTitle('YouTube video player')).not.toBeInTheDocument()
    })

    it('closes the modal on Escape', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        await user.click(screen.getAllByRole('button', { name: /^Play /i })[0])
        expect(screen.getByTitle('YouTube video player')).toBeInTheDocument()
        await user.keyboard('{Escape}')
        expect(screen.queryByTitle('YouTube video player')).not.toBeInTheDocument()
    })

    it('marks the open modal with aria-modal="true" and a labelledby reference', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        await user.click(screen.getByRole('button', { name: new RegExp(hero.ctaLabel, 'i') }))
        const dialog = screen.getByRole('dialog')
        expect(dialog).toHaveAttribute('aria-modal', 'true')
        expect(dialog).toHaveAttribute('aria-labelledby')
    })
})
