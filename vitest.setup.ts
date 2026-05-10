import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
    cleanup()
})

/**
 * happy-dom ships no IntersectionObserver. framer-motion's `whileInView`
 * depends on it, so we stub it with an immediate-fire implementation that
 * resolves animations synchronously in tests.
 */
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
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords(): IntersectionObserverEntry[] {
        return []
    }
    root = null
    rootMargin = ''
    thresholds = []
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

// happy-dom doesn't implement scrollIntoView.
Element.prototype.scrollIntoView = vi.fn()

// happy-dom's iframe will attempt a real fetch of `src` and emit unhandled
// rejections on cleanup. Stub `window.fetch` to no-op for tests.
vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 200 })))
