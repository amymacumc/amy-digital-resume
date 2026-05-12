import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-white" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-8', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm md:h-36 md:w-36">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-8', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl font-bold text-neutral-950">About</h2>
            <p className="text-base leading-8 text-neutral-700 sm:text-lg">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 rounded-xl border border-neutral-200 bg-neutral-50 p-4" key={idx}>
                <div className="flex items-start gap-x-3">
                  {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />}
                  <div>
                    <span className="block text-sm font-bold text-neutral-950">{label}</span>
                    <span className="text-sm leading-6 text-neutral-600">{text}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
