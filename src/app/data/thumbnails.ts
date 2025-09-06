import { VideoPreviewThumbnail } from '../types'

// Helper function to get YouTube thumbnail URL with fallback
const getYouTubeThumbnail = (videoId: string): string => {
    return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
}

export const thumbnails: VideoPreviewThumbnail[] = [
    {
        title: 'Household Economics Security',
        client: 'British Red Coss',
        src: '/thumbnails/hes.jpeg',
        alt: 'Thumbnail for HES',
        videoId: '-k4LTkx3dAQ'
    },
    {
        title: 'Capacity Building Fund',
        client: 'IFRC',
        src: getYouTubeThumbnail('xV30PdZKh2k'),
        alt: 'Thumbnail for CBF',
        videoId: 'xV30PdZKh2k'
    },
    {
        title: '16 Days of Activism Against Gender-Based Violence',
        client: 'IFRC / UN Women',
        src: getYouTubeThumbnail('O5KnUVj0jwc'),
        alt: 'Thumbnail for Gender-Based Violence',
        videoId: 'O5KnUVj0jwc'
    },
    {
        title: 'Introduction to Market Assessment',
        client: 'IFRC',
        src: getYouTubeThumbnail('dOrI1kxhp5U'),
        alt: 'Thumbnail for Market Assessment',
        videoId: 'dOrI1kxhp5U'
    },
    {
        title: 'IFPMA Interview Series: Innovation Ecosystem',
        client: 'International Federation of Pharmaceutical Manufacturers and Associations',
        src: getYouTubeThumbnail('z7haT6I7P0Q'),
        alt: 'Thumbnail for IFPMA',
        videoId: 'z7haT6I7P0Q'
    },
    {
        title: 'Hepatitis C virus (HCV) Diagnosis',
        client: 'FIND',
        src: getYouTubeThumbnail('MKV72jMMAg4'),
        alt: 'Thumbnail for FIND',
        videoId: 'MKV72jMMAg4'
    },
    {
        title: 'International Conference 2015 - Daily Bulletins',
        client: 'IFRC / ICRC',
        src: getYouTubeThumbnail('JTDACGcvE9M'),
        alt: 'Thumbnail for International Conference',
        videoId: 'JTDACGcvE9M'
    },
    {
        title: 'Youth Empowerment Fund',
        client: 'Global Youth Mobilazation / European Union',
        src: getYouTubeThumbnail('6T9ezrP-u5Q'),
        alt: 'Thumbnail for YEF',
        videoId: '6T9ezrP-u5Q'
    },
    {
        title: 'Uniting through the Power of Football',
        client: 'YABC & Football for Development',
        src: getYouTubeThumbnail('-AxlFP46NLk'),
        alt: 'Thumbnail for Football',
        videoId: '-AxlFP46NLk'
    },
    {
        title: 'Radler Product Review',
        client: 'Thunder Fusion',
        src: getYouTubeThumbnail('SPa_kdv6eb8'),
        alt: 'Thumbnail for Radler',
        videoId: 'SPa_kdv6eb8'
    },
    {
        title: 'IFRC Archive Donors Campaign',
        client: 'IFRC',
        src: getYouTubeThumbnail('fjFj_K0Dbmc'),
        alt: 'Thumbnail for Archive Donor',
        videoId: 'fjFj_K0Dbmc'
    },
    {
        title: 'World Red Cross and Red Crescent Day 2017',
        client: 'IFRC / ICRC',
        src: getYouTubeThumbnail('e20LQLgzOYg'),
        alt: 'Thumbnail for IFRC ICRC',
        videoId: 'e20LQLgzOYg'
    },
    {
        title: 'World Humanitarian Forum: New York Summit 2020',
        client: 'WHF',
        src: getYouTubeThumbnail('ZzFgD3o0oX8'),
        alt: 'Thumbnail for WHF',
        videoId: 'ZzFgD3o0oX8'
    },
    {
        title: 'Professional Profile Interview',
        client: 'Damien Naylor',
        src: getYouTubeThumbnail('iZMcDp8dC5A'),
        alt: 'Thumbnail for Damien Naylor',
        videoId: 'iZMcDp8dC5A'
    },
    {
        title: 'Fitness Profile',
        client: 'Fitness Hut',
        src: getYouTubeThumbnail('6Uo5pZdJfB0'),
        alt: 'Thumbnail for Fitness',
        videoId: '6Uo5pZdJfB0'
    }
]
