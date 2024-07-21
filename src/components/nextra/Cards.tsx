import { Tilt } from '@/src/components/Tilt';
import { cn } from '@/src/utils/cn';
import { CSSProperties, useCallback, useMemo } from 'react';
import styles from './card.module.scss';

import reactLogo from '@/public/cards/react.svg';
import reduxToolkitLogo from '@/public/cards/redux-toolkit.svg';
import tailwindcssLogo from '@/public/cards/tailwindcss.svg';
import zustandLogo from '@/public/cards/zustand.png';
import shadcnuiLogo from '@/public/cards/shadcnui.png';

type Card = {
  name: string;
  hue?: number;
  img?: string;
  href: string;
};

function hslColor(hue: number | undefined, s: number, l: number, a?: number) {
  return `hsl(${hue ?? 0}deg ${hue === undefined ? 0 : s}% ${l}%${a !== undefined ? ` / ${a}%` : ''})`;
}

interface CardCSSProperties extends CSSProperties {
  '--card-shadow': string;
  '--card-shadow-hover': string;
}

const CARDS: Card[] = [
  {
    name: 'React',
    hue: 191,
    img: reactLogo.src,
    href: 'https://react.dev/reference/react',
  },
  {
    name: 'Redux Toolkit',
    hue: 263,
    img: reduxToolkitLogo.src,
    href: 'https://redux-toolkit.js.org/introduction/getting-started',
  },
  {
    name: 'Tailwind CSS',
    hue: 198.44,
    img: tailwindcssLogo.src,
    href: 'https://tailwindcss.com/docs/guides/vite',
  },
  {
    name: 'Zustand',
    hue: 11,
    img: zustandLogo.src,
    href: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  {
    name: 'shadcn/ui',
    hue: 80,
    img: shadcnuiLogo.src,
    href: 'https://ui.shadcn.com/docs',
  },
];

export function Cards() {
  return (
    <div className='flex flex-wrap gap-4'>
      {CARDS.map((card, i) => (
        <Card key={card.name} card={card} index={i} />
      ))}
    </div>
  );
}

function Card({ card }: { card: Card; index: number }) {
  const slColor = useCallback((...args: [s: number, l: number, a?: number]) => hslColor(card.hue, ...args), []);

  const CSS_VARS = useMemo(() => {
    // shadow config
    const smallSL = [80, 60] as const;
    const bigSL = [90, 50] as const;
    const smallAlpha = 80;
    const bigAlpha = 60;

    return {
      shadow: `0 0 10px ${slColor(...smallSL, 0)}, 0 0 40px ${slColor(...bigSL, 0)}`,
      shadowHover: `0 0 10px ${slColor(...smallSL, smallAlpha)}, 0 0 40px ${slColor(...bigSL, bigAlpha)}`,
      border: `1px solid ${slColor(80, 60)}`,
      cardBackgroundColor: slColor(40, 30),
      frontBackgroundColor: slColor(70, 40, 40),
      nameBackgroundColor: slColor(40, 20, 80),
    };
  }, []);

  return (
    <Tilt
      // options={defaultOptions}
      className='w-[80px] h-[116px] rounded-md [transform-style:preserve-3d] relative select-none'
    >
      <a
        href={card.href}
        target='_blank'
        className={cn('block w-full h-full [transform-style:preserve-3d] rounded-md', styles.card)}
        style={
          {
            backgroundColor: CSS_VARS.cardBackgroundColor,
            border: CSS_VARS.border,
            '--card-shadow': CSS_VARS.shadow,
            '--card-shadow-hover': CSS_VARS.shadowHover,
          } as CardCSSProperties
        }
      >
        {/* back image */}
        <div className='absolute inset-2 flex flex-col justify-center rounded-md'>
          <div
            className='bg-contain bg-no-repeat bg-center opacity-10 aspect-square'
            style={{ backgroundImage: `url(${card.img})` }}
          />
        </div>

        {/* front */}
        <div
          className='absolute inset-0 [transform:translateZ(10px)] flex flex-col items-stretch justify-center rounded-md overflow-hidden'
          style={{
            border: CSS_VARS.border,
            backgroundColor: CSS_VARS.frontBackgroundColor,
          }}
        >
          {/* icon */}
          <div className='grow flex justify-center items-center'>
            <div
              className='size-12 bg-contain bg-no-repeat bg-center rounded'
              style={{ backgroundImage: `url(${card.img})` }}
            />
          </div>

          {/* name */}
          <div
            className='h-[36px] p-1 flex justify-center items-center'
            style={{
              backgroundColor: CSS_VARS.nameBackgroundColor,
              borderTop: CSS_VARS.border,
            }}
          >
            <div
              className='px-1 line-clamp-2 text-center text-[12px]/[14px] text-white'
              style={{
                textShadow: '0 1px 1px black',
              }}
            >
              {card.name}
            </div>
          </div>
        </div>
      </a>
    </Tilt>
  );
}
