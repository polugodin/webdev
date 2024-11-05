import reactLogo from '@/public/icons/react.svg'
import electronLogo from '@/public/icons/electron.svg'
import nextraLogo from '@/public/icons/nextra.svg'
import nextraDarkLogo from '@/public/icons/nextraDark.svg'
import reduxToolkitLogo from '@/public/icons/redux-toolkit.svg'
import tailwindcssLogo from '@/public/icons/tailwindcss.svg'
import lucideLogo from '@/public/icons/lucide.svg'
import zustandLogo from '@/public/icons/zustand.png'
import chakrauiLogo from '@/public/icons/chakraui1.svg'
import shadcnuiLogo from '@/public/icons/shadcnui.png'
import tanstackQueryLogo from '@/public/icons/tanstackQuery.png'
import helloPangeaDndLogo from '@/public/icons/helloPangeaDnd.svg'
import reactRouterLogo from '@/public/icons/reactRouter.png'
import reactRouterDarkLogo from '@/public/icons/reactRouterDark.png'
import nodejsLogo from '@/public/icons/nodejs.svg'
import { cn } from '@/src/utils/cn'

type Card = {
  name: string
  icon?: string
  iconDark?: string
  href: string
}

type CollectionNames =
  | 'frameworks'
  | 'react'
  | 'stateManagementAndQuery'
  | 'style'
  | 'components'
  | 'nodejs'

const collection: Record<CollectionNames, Card[]> = {
  frameworks: [
    {
      name: 'Electron',
      icon: electronLogo.src,
      href: 'https://www.electronjs.org/docs/latest/',
    },
    {
      name: 'Electron Forge',
      icon: electronLogo.src,
      href: 'https://www.electronforge.io/',
    },
    {
      name: 'Nextra Docs Theme',
      icon: nextraLogo.src,
      iconDark: nextraDarkLogo.src,
      href: 'https://nextra.site/docs/docs-theme/start',
    },
  ],
  react: [
    {
      name: 'React',
      icon: reactLogo.src,
      href: 'https://react.dev/reference/react',
    },
    {
      name: 'React Router',
      icon: reactRouterLogo.src,
      iconDark: reactRouterDarkLogo.src,
      href: 'https://reactrouter.com/en/main',
    },
    {
      name: 'Mantine Hooks',
      href: 'https://mantine.dev/hooks/use-click-outside/',
    },
  ],
  stateManagementAndQuery: [
    {
      name: 'Redux Toolkit',
      icon: reduxToolkitLogo.src,
      href: 'https://redux-toolkit.js.org/introduction/getting-started',
    },
    {
      name: 'Zustand',
      icon: zustandLogo.src,
      href: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
    },
    {
      name: 'TanStack Query',
      icon: tanstackQueryLogo.src,
      href: 'https://tanstack.com/query/latest/docs/framework/react/overview',
    },
  ],
  style: [
    {
      name: 'Tailwind CSS',
      icon: tailwindcssLogo.src,
      href: 'https://tailwindcss.com/docs/guides/vite',
    },
    {
      name: 'Lucide icons',
      icon: lucideLogo.src,
      href: 'https://lucide.dev/guide/installation',
    },
  ],
  components: [
    {
      name: 'Chakra UI',
      icon: chakrauiLogo.src,
      href: 'https://www.chakra-ui.com/docs/get-started/installation',
    },
    {
      name: 'shadcn/ui',
      icon: shadcnuiLogo.src,
      href: 'https://ui.shadcn.com/docs',
    },
    {
      name: '@hello-pangea/dnd',
      icon: helloPangeaDndLogo.src,
      href: 'https://github.com/hello-pangea/dnd',
    },
    {
      name: 'React Select',
      href: 'https://react-select.com/home',
    },
  ],
  nodejs: [
    {
      name: 'Node.js',
      icon: nodejsLogo.src,
      href: 'https://nodejs.org/en',
    },
    {
      name: 'lowdb',
      href: 'https://github.com/typicode/lowdb',
    },
    {
      name: 'Chokidar',
      href: 'https://github.com/paulmillr/chokidar',
    },
    {
      name: 'cheerio',
      href: 'https://www.npmjs.com/package/cheerio',
    },
    {
      name: 'node-cron',
      href: 'https://www.npmjs.com/package/node-cron',
    },
  ],
}

const createCardsComponent = (cards: Card[]) => () =>
  (
    <div className={cn('flex flex-wrap', 'gap-4 mt-6 mb-12')}>
      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  )

export const CardsFrameworks = createCardsComponent(collection.frameworks)
export const CardsReact = createCardsComponent(collection.react)
export const CardsStateManagementAndQuery = createCardsComponent(collection.stateManagementAndQuery)
export const CardsStyle = createCardsComponent(collection.style)
export const CardsComponents = createCardsComponent(collection.components)
export const CardsNodejs = createCardsComponent(collection.nodejs)

function Card({ card }: { card: Card }) {
  return (
    <a
      href={card.href}
      target='_blank'
      className={cn(
        'group flex items-center rounded-lg text-sm gap-0.5',
        'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors',
        'pr-3',
        !card.icon && 'pl-3',
      )}
    >
      {card.icon && (
        <div className={cn('flex size-10 flex-none justify-center items-center rounded-lg')}>
          <img
            className={cn(
              'flex-none size-5 pointer-events-none object-contain',
              card.iconDark && 'dark:hidden',
            )}
            src={card.icon}
          />
          {card.iconDark && (
            <img
              className='flex-none size-6 pointer-events-none object-contain hidden dark:block'
              src={card.iconDark}
            />
          )}
        </div>
      )}
      <div>
        <span className='font-semibold text-gray-900 dark:text-gray-100'>{card.name}</span>
      </div>
    </a>
  )
}
