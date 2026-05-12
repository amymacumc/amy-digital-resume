import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-950" sectionId={SectionId.Contact}>
      <div className="mx-auto flex max-w-4xl flex-col gap-y-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <EnvelopeIcon className="h-12 w-12 text-amber-500" />
          <h2 className="text-3xl font-bold text-white">{headerText}</h2>
          <p className="max-w-2xl leading-7 text-neutral-300">{description}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <dl className="grid grid-cols-1 gap-4 text-base text-neutral-400 md:grid-cols-2">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div key={text}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center justify-center md:justify-start">
                      <a
                        className={classNames(
                          '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600',
                          {'hover:text-white': href},
                        )}
                        href={href}
                        target="_blank">
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                        <span className="ml-3 break-all text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
