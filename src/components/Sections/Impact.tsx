import {FC, memo} from 'react';

import {communityExperiences, impactClosing, impactIntro, SectionId} from '../../data/data';
import {CardItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Impact: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Impact}>
      <div className="flex flex-col gap-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-950">Impact</h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">{impactIntro}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {communityExperiences.map(item => (
            <ImpactCard item={item} key={item.title} />
          ))}
        </div>
        <p className="mx-auto max-w-3xl text-center text-base leading-8 text-neutral-700">{impactClosing}</p>
      </div>
    </Section>
  );
});

Impact.displayName = 'Impact';
export default Impact;

const ImpactCard: FC<{item: CardItem}> = memo(({item}) => {
  const {description, focus, role, title} = item;
  return (
    <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <h3 className="text-xl font-bold text-neutral-950">{title}</h3>
      {role && <p className="mt-2 text-sm font-semibold text-amber-800">{role}</p>}
      <p className="mt-4 text-sm leading-7 text-neutral-600">{description}</p>
      {!!focus?.length && (
        <div className="mt-5 flex flex-wrap gap-2">
          {focus.map(item => (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700" key={item}>
              {item}
            </span>
          ))}
        </div>
      )}
    </article>
  );
});

ImpactCard.displayName = 'ImpactCard';
