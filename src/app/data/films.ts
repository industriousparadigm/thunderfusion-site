// Films shown on the home page, in the order they appear.
const youTubeThumbnail = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`

export interface Film {
    title: string
    client: string
    src: string
    alt: string
    videoId: string
}

export const featuredFilms: Film[] = [
    {
        title: 'Household Economics Security',
        client: 'British Red Cross',
        src: '/thumbnails/hes.jpeg',
        alt: 'Thumbnail for HES',
        videoId: '-k4LTkx3dAQ'
    },
    {
        title: 'Capacity Building Fund',
        client: 'IFRC',
        src: youTubeThumbnail('xV30PdZKh2k'),
        alt: 'Thumbnail for CBF',
        videoId: 'xV30PdZKh2k'
    },
    {
        title: '16 Days of Activism Against Gender-Based Violence',
        client: 'IFRC / UN Women',
        src: youTubeThumbnail('O5KnUVj0jwc'),
        alt: 'Thumbnail for Gender-Based Violence',
        videoId: 'O5KnUVj0jwc'
    },
    {
        title: 'Introduction to Market Assessment',
        client: 'IFRC',
        src: youTubeThumbnail('dOrI1kxhp5U'),
        alt: 'Thumbnail for Market Assessment',
        videoId: 'dOrI1kxhp5U'
    },
    {
        title: 'IFPMA Interview Series: Innovation Ecosystem',
        client: 'International Federation of Pharmaceutical Manufacturers and Associations',
        src: youTubeThumbnail('z7haT6I7P0Q'),
        alt: 'Thumbnail for IFPMA',
        videoId: 'z7haT6I7P0Q'
    },
    {
        title: 'Hepatitis C virus (HCV) Diagnosis',
        client: 'FIND',
        src: youTubeThumbnail('MKV72jMMAg4'),
        alt: 'Thumbnail for FIND',
        videoId: 'MKV72jMMAg4'
    }
]
