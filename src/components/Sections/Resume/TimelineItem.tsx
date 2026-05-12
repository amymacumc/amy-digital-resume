import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, skills} = item;
  return (
    <div className="flex flex-col pb-10 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-neutral-950">{title}</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-neutral-600 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="prose prose-neutral max-w-none text-sm leading-7 text-neutral-700 prose-ul:my-3 prose-li:my-1">
        {content}
      </div>
      {!!skills?.length && (
        <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          {skills.map(skill => (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
