import { useRouter } from 'next/router'
import { Logo } from '@/components/Logo'

export default {
  logo: <Logo />,
  primaryHue: 202,
  primarySaturation: 80,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: 'WebDev | %s',
      }
    }
    return { title: 'WebDev', titleTemplate: '%s' }
  },
  search: {
    placeholder: 'Search...',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    extraContent: <></>,
  },
}
