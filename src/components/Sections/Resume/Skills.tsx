import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <span className="text-lg font-bold text-neutral-950">{name}</span>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round(((level ?? 0) / max) * 100), [level, max]);

  if (!level) {
    return <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">{name}</span>;
  }

  return (
    <div className="flex w-full flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-amber-700" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
