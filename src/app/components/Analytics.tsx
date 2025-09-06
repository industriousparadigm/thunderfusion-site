'use client'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

export default function Analytics() {
    useEffect(() => {
        // Google Analytics initialization
        if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
            const script1 = document.createElement('script')
            script1.async = true
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
            document.head.appendChild(script1)

            const script2 = document.createElement('script')
            script2.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `
            document.head.appendChild(script2)
        }
    }, [])

    return <VercelAnalytics />
}