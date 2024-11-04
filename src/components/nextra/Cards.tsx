import reactLogo from '@/public/icons/react.svg'
import electronLogo from '@/public/icons/electron.svg'
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
  href: string
}

type CollectionNames = 'frameworks' | 'stateManagementAndQuery' | 'style' | 'components'

const collection: Record<CollectionNames, Card[]> = {
  frameworks: [
    {
      name: 'React',
      icon: reactLogo.src,
      href: 'https://react.dev/reference/react',
    },
    {
      name: 'Electron',
      icon: electronLogo.src,
      href: 'https://www.electronjs.org/docs/latest/',
    },
    {
      name: 'Nextra Docs Theme',
      icon: nextraLogo.src,
      iconDark: nextraDarkLogo.src,
      href: 'https://nextra.site/docs/docs-theme/start',
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
  ],
  components: [
    {
      name: 'shadcn/ui',
      icon: shadcnuiLogo.src,
      href: 'https://ui.shadcn.com/docs',
    },
  ],
}

const createCardsComponent = (cards: Card[]) => () =>
  (
    <div className={cn('flex flex-wrap', 'gap-4 mt-6 mb-16')}>
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
        'group flex items-center rounded-lg text-sm',
        'bg-gray-50 hover:bg-white dark:bg-[rgb(20_20_20)] dark:hover:bg-[rgb(17_17_17)]',
      )}
    >
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
      <div>
        <span className='font-semibold text-gray-900 dark:text-gray-100 pl-1 pr-3'>
          {card.name}
        </span>
      </div>
    </a>
  )
}
