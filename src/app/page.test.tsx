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

describe('HomePage', () => {
    it('renders the dual-pillar tagline', () => {
        render(<HomePage />)
        expect(screen.getByText(/We tell/i)).toBeInTheDocument()
        expect(screen.getByText(/We build/i)).toBeInTheDocument()
        expect(screen.getByText(/For missions/i)).toBeInTheDocument()
    })

    it('exposes the section anchors that the header navigates to', () => {
        const { container } = render(<HomePage />)
        for (const id of ['work', 'services', 'about', 'contact']) {
            expect(container.querySelector(`#${id}`)).not.toBeNull()
        }
    })

    it('renders both founder mailto links with the right addresses', () => {
        render(<HomePage />)
        const mariana = screen.getByRole('link', { name: /Films · Campaigns · Comms/i })
        const diogo = screen.getByRole('link', { name: /Software · AI · Prototypes/i })
        expect(mariana).toHaveAttribute('href', 'mailto:mariana@thunderfusion.pt')
        expect(diogo).toHaveAttribute('href', 'mailto:diogo@thunderfusion.pt')
    })

    it('renders the featured Brainwave product screenshot', () => {
        render(<HomePage />)
        const img = screen.getByAltText(/Brainwave/)
        expect(img).toHaveAttribute('src', '/products/brainwave.jpg')
    })

    it('opens the showreel modal when the hero CTA is clicked', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        await user.click(screen.getByRole('button', { name: /Watch the showreel/i }))
        const iframe = screen.getByTitle('YouTube video player')
        expect(iframe).toBeInTheDocument()
        expect(iframe.getAttribute('src')).toContain('pRLBLh7OBpA')
    })

    it('opens the modal with the right videoId when a film is clicked', async () => {
        const user = userEvent.setup()
        render(<HomePage />)
        const firstFilm = screen.getAllByRole('button', { name: /^Play /i })[0]
        await user.click(firstFilm)
        const iframe = screen.getByTitle('YouTube video player')
        // first film in the data is HES, videoId -k4LTkx3dAQ
        expect(iframe.getAttribute('src')).toContain('-k4LTkx3dAQ')
    })
})
