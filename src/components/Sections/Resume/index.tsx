import {FC, memo} from 'react';

import {education, SectionId, skills, work} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Work: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Work}>
      <div className="flex flex-col divide-y divide-neutral-200">
        <ResumeSection title="Work">
          {work.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8 leading-7 text-neutral-700">
            A project management capability map across delivery, stakeholder alignment, product analysis, technical
            understanding, and daily execution tools.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Work.displayName = 'Work';
export default Work;
