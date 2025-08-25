export const CONTACT_INFO = {
  phone: '+96896747611',
  email: 'sales@flexihi.com',
  whatsapp: '+96896747611'
} as const;

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://instagram.com/'
} as const;

export const APP_LINKS = {
  appStore: 'https://www.apple.com/app-store/',
  googlePlay: 'https://play.google.com/'
} as const;

export const EXTERNAL_LINKS = {
  backOffice: process.env.NEXT_PUBLIC_BACK_OFFICE_URL || '#'
} as const;

export const NAVIGATION_SECTIONS = {
  features: '#features',
  pricing: '#pricing',
  faqs: '#faqs'
} as const;