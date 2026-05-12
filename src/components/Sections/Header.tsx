import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId, sectionLabels} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [
      SectionId.About,
      SectionId.Work,
      SectionId.Projects,
      SectionId.Impact,
      SectionId.Life,
      SectionId.Resume,
      SectionId.Contact,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md text-sm font-semibold hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 sm:hover:text-amber-700 text-neutral-700';
    const activeClass = classNames(baseClass, 'text-amber-700');
    const inactiveClass = classNames(baseClass, 'text-neutral-700');
    return (
      <header className="fixed top-0 z-50 hidden w-full border-b border-neutral-200/80 bg-white/80 p-4 backdrop-blur sm:block" id={headerID}>
        <nav className="flex justify-center gap-x-7">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600';
    const activeClass = classNames(baseClass, 'bg-amber-700 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-700 font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-3 top-3 z-40 rounded-md bg-amber-700 p-2 ring-offset-white hover:bg-amber-800 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-40" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-neutral-50 shadow-xl">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`#${section}`}
      key={section}
      onClick={onClick}>
      {sectionLabels[section as SectionId] ?? section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
