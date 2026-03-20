import type { HTMLAttributes } from 'astro/types'
import type { SiteType, SocialLinkType } from './types/site'

export const SITE: SiteType = {
  title: 'John Site',
  description: 'John site description',
  langCode: 'id',
  locale: 'id-ID',
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    twitter: "@johndoe"
  },
  copyright: {
    license: 'All Rights Reserved.',
    url: '/',
    year: new Date().getFullYear()
  }
}

export const HEADER_LINKS: HTMLAttributes<'a'>[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about/'
  },
  {
    name: 'Blogs',
    href: '/blogs/'
  },
  {
    name: 'Projects',
    href: '/projects/'
  },
  {
    name: 'Tags',
    href: '/tags/'
  }
]

export const SOCIAL_LINKS: SocialLinkType[] = [
  {
    name: 'Twitter (X)',
    icon: 'bi:twitter-x',
    href: 'https://x.com',
    target: '_blank'
  },
  {
    name: 'Instagram',
    icon: 'bi:instagram',
    href: 'https://instagram.com',
    target: '_blank'
  },
  {
    name: 'Facebook',
    icon: 'bi:facebook',
    href: 'https://facebook.com',
    target: '_blank'
  },
  {
    name: 'Discord',
    icon: 'bi:discord',
    href: 'https://discord.com',
    target: '_blank'
  },
  {
    name: 'Github',
    icon: 'bi:github',
    href: 'https://github.com',
    target: '_blank'
  }
]

export const FAVICONS: HTMLAttributes<'link'>[] = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico'
  }
]
