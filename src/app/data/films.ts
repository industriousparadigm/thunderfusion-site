// Films shown on the home page. The full library lives in `thumbnails.ts`;
// this file curates an ordered subset by videoId so reordering the library
// doesn't reshuffle the home-page presentation.
import { thumbnails } from './thumbnails'

const FEATURED_VIDEO_IDS = [
    '-k4LTkx3dAQ', // Household Economics Security — British Red Cross
    'xV30PdZKh2k', // Capacity Building Fund — IFRC
    'O5KnUVj0jwc', // 16 Days of Activism — IFRC / UN Women
    'dOrI1kxhp5U', // Market Assessment — IFRC
    'z7haT6I7P0Q', // IFPMA Interview Series
    'MKV72jMMAg4' // Hepatitis C Diagnosis — FIND
] as const

export const featuredFilms = FEATURED_VIDEO_IDS.map((id) => {
    const film = thumbnails.find((t) => t.videoId === id)
    if (!film) throw new Error(`featuredFilms: videoId not found in thumbnails: ${id}`)
    return film
})
