import { useRouter } from 'next/router';
import { Logo } from '@/src/components/nextra/Logo';

export default {
  logo: <Logo />,
  primaryHue: 28,
  primarySaturation: 65,
  head: (
    <>
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: 'WebDev | %s',
      };
    }
    return { title: 'WebDev', titleTemplate: '%s' };
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
  gitTimestamp: null,
};
