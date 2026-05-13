import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import profilepic from '../../images/profilepic.jpg';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-neutral-50">
        <Image
          alt={`${name}-image`}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-neutral-50/95 to-stone-100/90" />
        <div className="z-10 mx-auto w-full max-w-screen-xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_440px]">
            <div className="flex max-w-3xl flex-col gap-y-7">
              <span className="w-max rounded-full border border-amber-700/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                Digital Project Manager
              </span>
              <h1 className="text-5xl font-bold leading-tight text-neutral-950 sm:text-6xl lg:text-7xl">{name}</h1>
              <h2 className="text-xl font-semibold leading-8 text-neutral-800 sm:text-2xl">
                Digital Project Manager | Product-minded BA | AI & Enterprise Systems
              </h2>
              {description}
              <div className="flex flex-col gap-3 sm:flex-row">
                {actions.map(({href, text, primary, Icon}) => (
                  <a
                    className={classNames(
                      'inline-flex items-center justify-center gap-x-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                      primary
                        ? 'border-neutral-950 bg-neutral-950 text-white ring-neutral-950 hover:bg-neutral-800'
                        : 'border-neutral-300 bg-white/80 text-neutral-900 ring-amber-700 hover:border-amber-700 hover:text-amber-800',
                    )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden justify-self-center lg:block">
              <div className="relative h-[460px] w-[340px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-neutral-300/70 xl:h-[520px] xl:w-[390px]">
                <Image
                  alt={`${name} portrait`}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  priority
                  src={profilepic}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full border border-neutral-200 bg-white p-1 shadow-sm ring-amber-700 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 sm:p-2"
            href={`#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent text-neutral-700 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
