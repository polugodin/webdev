import reactLogo from '@/public/icons/react.svg'
import nextraLogo from '@/public/icons/nextra.svg'
import nextraDarkLogo from '@/public/icons/nextraDark.svg'
import reduxToolkitLogo from '@/public/icons/redux-toolkit.svg'
import tailwindcssLogo from '@/public/icons/tailwindcss.svg'
import zustandLogo from '@/public/icons/zustand.png'
import shadcnuiLogo from '@/public/icons/shadcnui.png'
import tanstackQueryLogo from '@/public/icons/tanstackQuery.png'
import { cn } from '@/src/utils/cn'

type Card = {
  name: string
  icon: string
  iconDark?: string
  description?: string
  href: string
}

type CollectionNames = 'frameworks' | 'stateManagementAndQuery' | 'style' | 'components'

const collection: Record<CollectionNames, Card[]> = {
  frameworks: [
    {
      name: 'React',
      icon: reactLogo.src,
      description: 'The library for web and native user interfaces',
      href: 'https://react.dev/reference/react',
    },
    {
      name: 'Nextra Docs Theme',
      icon: nextraLogo.src,
      iconDark: nextraDarkLogo.src,
      description: 'A theme that includes almost everything you need to build a modern documentation website',
      href: 'https://nextra.site/docs/docs-theme/start',
    },
  ],
  stateManagementAndQuery: [
    {
      name: 'Redux Toolkit',
      icon: reduxToolkitLogo.src,
      description: 'The official, opinionated, batteries-included toolset for efficient Redux development',
      href: 'https://redux-toolkit.js.org/introduction/getting-started',
    },
    {
      name: 'Zustand',
      icon: zustandLogo.src,
      description: 'A small, fast and scalable state-management solution using simplified flux principles',
      href: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
    },
    {
      name: 'TanStack Query',
      icon: tanstackQueryLogo.src,
      description: 'Data-fetching library for web applications',
      href: 'https://tanstack.com/query/latest/docs/framework/react/overview',
    },
  ],
  style: [
    {
      name: 'Tailwind CSS',
      icon: tailwindcssLogo.src,
      description: 'Rapidly build modern websites without ever leaving your HTML',
      href: 'https://tailwindcss.com/docs/guides/vite',
    },
  ],
  components: [
    {
      name: 'shadcn/ui',
      icon: shadcnuiLogo.src,
      description: 'Beautifully designed components that you can copy and paste into your apps.',
      href: 'https://ui.shadcn.com/docs',
    },
  ],
}

const createCardsComponent = (cards: Card[]) => () =>
  (
    <div
      className={cn(
        'grid',
        'grid-cols-1 gap-x-2 gap-y-2 mt-6 mb-8',
        'sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:mt-7 sm:mb-10',
        'md:grid-cols-1 md:gap-x-2 md:gap-y-2 md:mt-6 md:mb-8',
        'lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0 lg:mt-7 lg:mb-10',
      )}
    >
      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  )

export const CardsFrameworks = createCardsComponent(collection.frameworks)
export const CardsStateManagementAndQuery = createCardsComponent(collection.stateManagementAndQuery)
export const CardsStyle = createCardsComponent(collection.style)
export const CardsComponents = createCardsComponent(collection.components)

function Card({ card }: { card: Card }) {
  return (
    <a
      href={card.href}
      target='_blank'
      className={cn(
        'group flex gap-6 rounded-lg text-sm leading-6 hover:bg-gray-50 dark:hover:bg-[rgb(20_20_20)]',
        'flex-row p-3',
        'sm:flex-col sm:p-6',
        'md:flex-row md:p-3',
        'lg:flex-col lg:p-6',
      )}
    >
      <div
        className={cn(
          'flex size-11 flex-none justify-center items-center rounded-lg',
          'bg-gray-50 group-hover:bg-white dark:bg-[rgb(20_20_20)] dark:group-hover:bg-[rgb(17_17_17)]',
        )}
      >
        <img
          className={cn('flex-none size-6 pointer-events-none object-contain', card.iconDark && 'dark:hidden')}
          src={card.icon}
        />
        {card.iconDark && (
          <img className='flex-none size-6 pointer-events-none object-contain hidden dark:block' src={card.iconDark} />
        )}
      </div>
      <div>
        <span className='font-semibold text-gray-900 dark:text-gray-100'>{card.name}</span>
        {card.description && <p className='mt-1 text-gray-600 dark:text-gray-400'>{card.description}</p>}
      </div>
    </a>
  )
}
