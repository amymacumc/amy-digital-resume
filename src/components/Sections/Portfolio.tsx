import {FC, memo} from 'react';

import {projects, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-50" sectionId={SectionId.Projects}>
      <div className="flex flex-col gap-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-950">Projects</h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Selected case studies focused on structured delivery, stakeholder alignment, AI-enabled business ideas, and
            enterprise systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((item, index) => (
            <ProjectCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ProjectCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {actions, impact, problem, role, skills, summary, title} = item;
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Case Study</span>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-neutral-950">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{summary}</p>
        </div>
        <div className="space-y-5 lg:col-span-3">
          <CaseBlock label="Problem" text={problem} />
          <CaseBlock label="My Role" text={role} />
          <div>
            <h4 className="text-sm font-bold text-neutral-950">Actions</h4>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-sm leading-6 text-neutral-600 md:grid-cols-2">
              {actions.map(action => (
                <li className="rounded-lg bg-neutral-50 px-3 py-2" key={action}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
          <CaseBlock label="Impact" text={impact} />
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

const CaseBlock: FC<{label: string; text: string}> = memo(({label, text}) => (
  <div>
    <h4 className="text-sm font-bold text-neutral-950">{label}</h4>
    <p className="mt-1 text-sm leading-7 text-neutral-600">{text}</p>
  </div>
));

CaseBlock.displayName = 'CaseBlock';
