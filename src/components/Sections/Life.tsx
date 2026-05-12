import {FC, memo} from 'react';

import {hobbies, lifeIntro, SectionId} from '../../data/data';
import {CardItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Life: FC = memo(() => {
  return (
    <Section className="bg-neutral-50" sectionId={SectionId.Life}>
      <div className="flex flex-col gap-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-950">Life</h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">{lifeIntro}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {hobbies.map(item => (
            <LifeCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Life.displayName = 'Life';
export default Life;

const LifeCard: FC<{item: CardItem}> = memo(({item}) => {
  const {description, keywords, title} = item;
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-neutral-950">{title}</h3>
      {!!keywords?.length && (
        <div className="mt-3 flex flex-wrap gap-2">
          {keywords.map(keyword => (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      )}
      <p className="mt-5 text-sm leading-7 text-neutral-600">{description}</p>
    </article>
  );
});

LifeCard.displayName = 'LifeCard';
