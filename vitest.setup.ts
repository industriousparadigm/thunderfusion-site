import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
    cleanup()
})

// happy-dom doesn't ship IntersectionObserver yet; framer-motion's whileInView
// needs it. Stub with an immediate-trigger implementation so animations resolve.
class MockIntersectionObserver {
    callback: IntersectionObserverCallback
    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
    }
    observe(target: Element) {
        this.callback(
            [
                {
                    isIntersecting: true,
                    target,
                    intersectionRatio: 1,
                    boundingClientRect: target.getBoundingClientRect(),
                    intersectionRect: target.getBoundingClientRect(),
                    rootBounds: null,
                    time: Date.now()
                } as IntersectionObserverEntry
            ],
            this as unknown as IntersectionObserver
        )
    }
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
        return []
    }
    root = null
    rootMargin = ''
    thresholds = []
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

// scrollIntoView is missing in happy-dom
Element.prototype.scrollIntoView = vi.fn()
