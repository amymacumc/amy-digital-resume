import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {resume, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const ResumeDownload: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Resume}>
      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <h2 className="text-3xl font-bold text-neutral-950">{resume.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{resume.description}</p>
        <a
          className="mt-6 inline-flex items-center justify-center gap-x-2 rounded-full border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
          href={resume.href}>
          Download Resume
          <ArrowDownTrayIcon className="h-5 w-5" />
        </a>
      </div>
    </Section>
  );
});

ResumeDownload.displayName = 'ResumeDownload';
export default ResumeDownload;
