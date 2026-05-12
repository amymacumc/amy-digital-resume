import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  CardItem,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  ResumeDownload,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

export const personalInfo = {
  background: 'Biostatistics, Enterprise Systems, Digital Transformation',
  email: 'your.email@example.com',
  focus: 'Digital Project Management, Product Delivery, AI-enabled Business Projects',
  github: 'https://github.com/your-username',
  interests: 'Tennis, Astrology & BaZi, Climbing, Baking',
  linkedIn: 'https://www.linkedin.com/in/your-profile',
  location: 'Shanghai, China',
  name: 'Amy',
  title: 'Digital Project Manager | Product-minded BA | AI & Enterprise Systems',
};

export const homePageMeta: HomepageMeta = {
  description:
    'Amy is a digital project manager and product-minded business analyst focused on enterprise systems, AI-enabled business projects, and structured delivery.',
  title: 'Amy | Digital Project Manager',
};

export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Hero: 'hero',
  Impact: 'impact',
  Life: 'life',
  Projects: 'projects',
  Resume: 'resume',
  Work: 'work',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const sectionLabels: Record<SectionId, string> = {
  [SectionId.About]: 'About',
  [SectionId.Contact]: 'Contact',
  [SectionId.Hero]: 'Home',
  [SectionId.Impact]: 'Impact',
  [SectionId.Life]: 'Life',
  [SectionId.Projects]: 'Projects',
  [SectionId.Resume]: 'Resume',
  [SectionId.Work]: 'Work',
};

export const heroData: Hero = {
  actions: [
    {
      href: `#${SectionId.Projects}`,
      primary: true,
      text: 'View Projects',
    },
    {
      href: './Amy_Resume.pdf',
      Icon: ArrowDownTrayIcon,
      primary: false,
      text: 'Download Resume',
    },
    {
      href: `mailto:${personalInfo.email}`,
      primary: false,
      text: 'Contact Me',
    },
  ],
  description: (
    <p className="max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
      I manage digital projects that translate complex business needs into scalable product and system solutions.
    </p>
  ),
  imageSrc: heroImage,
  name: personalInfo.name,
};

export const aboutData: About = {
  aboutItems: [
    {Icon: MapIcon, label: 'Location', text: personalInfo.location},
    {Icon: BriefcaseIcon, label: 'Focus', text: personalInfo.focus},
    {Icon: BuildingOffice2Icon, label: 'Background', text: personalInfo.background},
    {Icon: SparklesIcon, label: 'Interests', text: personalInfo.interests},
  ],
  description:
    'I am a digital project manager with experience across enterprise systems, CRM, digital marketing platforms, AI-enabled campaigns, and marketplace integration. My strength lies in connecting business goals, user needs, system logic, and delivery execution. With a Columbia University biostatistics background and digital transformation experience in an energy company, I bring analytical discipline and practical delivery judgment to projects across healthcare, AI, product design, and enterprise systems. I am strongest where ambiguity needs to become structured execution: project planning, stakeholder communication, requirement clarification, cross-functional coordination, vendor management, product thinking, risk tracking, and issue resolution.',
  profileImageSrc: profilepic,
};

export const skills: SkillGroup[] = [
  {
    name: 'Project Management',
    skills: [
      {name: 'Project planning'},
      {name: 'Timeline management'},
      {name: 'Scope definition'},
      {name: 'Risk and issue tracking'},
      {name: 'Sprint coordination'},
      {name: 'UAT planning'},
      {name: 'Launch readiness'},
      {name: 'Post-launch iteration'},
    ],
  },
  {
    name: 'Stakeholder & Vendor Management',
    skills: [
      {name: 'Cross-functional communication'},
      {name: 'Business-IT alignment'},
      {name: 'Vendor coordination'},
      {name: 'Requirement workshops'},
      {name: 'Meeting facilitation'},
      {name: 'Executive summary writing'},
      {name: 'Bilingual communication in English and Chinese'},
    ],
  },
  {
    name: 'Product & Business Analysis',
    skills: [
      {name: 'Requirement analysis'},
      {name: 'User journey design'},
      {name: 'Process mapping'},
      {name: 'PRD / functional specification writing'},
      {name: 'Business logic clarification'},
      {name: 'Feature prioritization'},
      {name: 'Operational workflow design'},
    ],
  },
  {
    name: 'Technical Understanding',
    skills: [
      {name: 'API integration concepts'},
      {name: 'CRM systems'},
      {name: 'Digital marketing platforms'},
      {name: 'Marketplace systems'},
      {name: 'AI image generation'},
      {name: 'AI image recognition'},
      {name: 'Data and analytics background'},
    ],
  },
  {
    name: 'Tools',
    skills: [
      {name: 'Azure DevOps'},
      {name: 'Figma'},
      {name: 'Axure'},
      {name: 'MoDao'},
      {name: 'SQL basics'},
      {name: 'Power BI concepts'},
      {name: 'GitHub'},
      {name: 'Microsoft Office'},
      {name: 'Notion'},
      {name: 'Obsidian'},
    ],
  },
];

export const projects: PortfolioItem[] = [
  {
    actions: [
      'Clarified campaign requirements and user flow',
      'Coordinated AIGC API integration',
      'Supported prompt optimization and image generation quality control',
      'Managed testing, issue tracking, and launch preparation',
      'Considered privacy safeguards for user-uploaded images',
    ],
    impact: 'Supported scalable AI-powered engagement and digital campaign activation.',
    problem:
      'The business needed to transform a global campaign idea into a scalable local digital activation with AI-generated visuals and a smooth user journey.',
    role: 'Acted as product/project coordinator, bridging business teams, vendors, technical teams, and campaign stakeholders.',
    skills: [
      'AI Project Management',
      'Campaign Delivery',
      'API Integration',
      'Vendor Coordination',
      'User Journey Design',
      'Risk Control',
    ],
    summary:
      'Localized and delivered an AI-powered digital campaign for Castrol China, turning a global brand concept into an interactive China-market activation.',
    title: 'Win+ AIGC Truck Hero Campaign',
  },
  {
    actions: [
      'Clarified business logic with stakeholders',
      'Translated operational needs into system requirements',
      'Coordinated with developers and vendors',
      'Supported UAT and issue resolution',
      'Helped improve process visibility and digital traceability',
    ],
    impact: 'Improved sales operation workflows and supported digital enablement across business teams.',
    problem:
      'Business teams needed stronger CRM capabilities to support operational workflows and improve digital traceability.',
    role: 'Supported requirement analysis, feature delivery, testing, and stakeholder communication.',
    skills: ['CRM', 'Business Analysis', 'Stakeholder Management', 'UAT', 'Process Optimization', 'System Delivery'],
    summary: 'Supported CRM enhancements for sales operations, distributor management, and channel activity management.',
    title: 'Lightning CRM Digital Capabilities',
  },
  {
    actions: [
      'Helped define Phase 1 scope and delivery priorities',
      'Coordinated supplier onboarding logic',
      'Supported product, order, cancellation, and after-sales flow design',
      'Clarified API and data integration requirements',
      'Aligned internal and external stakeholders on key constraints and priorities',
    ],
    impact: 'Created a clearer foundation for multi-supplier marketplace integration and future scalability.',
    problem:
      'The business needed a scalable integration foundation for multiple suppliers, standardized data flows, and clearer marketplace operations.',
    role: 'Worked on project scoping, supplier communication, requirement clarification, and integration logic design.',
    skills: [
      'Project Scoping',
      'Vendor Management',
      'API Integration',
      'Marketplace Operations',
      'Requirement Prioritization',
      'Process Design',
    ],
    summary:
      'Supported the design of a unified platform connecting multiple suppliers and standardizing product, order, cancellation, after-sales, and integration logic.',
    title: 'Multi-supplier Shopping Mall / JiaPinHui Integration',
  },
  {
    actions: [
      'Compared third-party and in-house model options',
      'Coordinated model testing and business validation',
      'Evaluated accuracy, cost, and operational feasibility',
      'Translated model performance into business-facing language',
    ],
    impact: 'Supported improved recognition capability and potential cost optimization.',
    problem:
      'The business needed a more accurate and cost-effective image recognition capability for product or bottle-code related scenarios.',
    role: 'Supported AI product/project coordination, model evaluation, and business validation.',
    skills: ['AI Product Management', 'Model Evaluation', 'Business Validation', 'Technical Translation', 'Stakeholder Communication'],
    summary:
      'Supported product/project coordination for an AI image recognition model upgrade, balancing accuracy, cost, and business feasibility.',
    title: 'AI Image Recognition Upgrade',
  },
  {
    actions: [
      'Defined product concept and MVP scope',
      'Designed user flows and AI agent personas',
      'Coordinated collaboration across a 4-person team',
      'Integrated map-based and LLM-based planning concepts',
      'Presented the solution as an AI-powered travel planning experience',
    ],
    impact: 'Built an MVP concept demonstrating AI agent product thinking and user-centered design.',
    problem: 'Travel planning is often fragmented, generic, and disconnected from deeper user preferences.',
    role: 'Led a cross-functional hackathon team and owned product concept, MVP scope, user flows, and product storytelling.',
    skills: [
      'AI Agent Product Design',
      'MVP Planning',
      'Team Coordination',
      'User Flow Design',
      'Prompt Design',
      'Product Storytelling',
    ],
    summary:
      'Led a hackathon team to design and prototype an AI travel-planning agent focused on personalized and emotionally aware itinerary planning.',
    title: 'WanderPal AI Travel Agent',
  },
];

export const education: TimelineItem[] = [
  {
    content: (
      <p>
        Built a quantitative foundation in statistical reasoning, evidence-based analysis, data quality, and structured
        problem solving.
      </p>
    ),
    date: 'Graduate study',
    location: 'Columbia University',
    title: 'Biostatistics Background',
  },
];

export const work: TimelineItem[] = [
  {
    content: (
      <>
        <p>
          Supported digital transformation initiatives for Castrol China across Win+ digital marketing platform,
          Lightning CRM system, AI-enabled campaigns, and marketplace integration. Worked with business users, IT teams,
          vendors, and external partners to clarify requirements, coordinate delivery, support testing, manage issues,
          and drive post-launch improvements.
        </p>
        <ul>
          <li>Coordinated cross-functional digital projects across business, IT, vendors, and external partners.</li>
          <li>Translated business needs into structured requirements, user flows, and delivery tasks.</li>
          <li>Supported project scoping, timeline tracking, UAT coordination, launch readiness, and iteration.</li>
          <li>Worked on CRM, digital marketing platforms, and multi-supplier marketplace integration.</li>
          <li>Supported AI-enabled business projects involving AIGC, image recognition, and API integration.</li>
        </ul>
      </>
    ),
    date: 'Recent',
    location: 'bp Castrol China',
    skills: [
      'Project Management',
      'Business Analysis',
      'Stakeholder Management',
      'Vendor Coordination',
      'UAT',
      'System Integration',
      'Sprint Tracking',
      'Risk Management',
    ],
    title: 'Digital Graduate / Digital Project Manager',
  },
  {
    content: (
      <>
        <p>
          Worked in a regulated, evidence-driven environment, applying analytical thinking, statistical reasoning,
          documentation discipline, and data quality awareness.
        </p>
        <ul>
          <li>Supported structured analysis in a regulatory context.</li>
          <li>Built experience in evidence-based reasoning and documentation.</li>
          <li>Strengthened analytical rigor and attention to data quality.</li>
        </ul>
      </>
    ),
    date: 'Internship',
    location: 'U.S. FDA',
    skills: ['Statistical Thinking', 'Documentation', 'Data Quality', 'Regulatory Context', 'Analytical Reasoning'],
    title: 'Statistician Intern',
  },
  {
    content: (
      <>
        <p>
          Supported market research, competitor analysis, policy tracking, and strategic planning in the healthcare
          industry.
        </p>
        <ul>
          <li>Conducted market and competitor research across therapeutic areas.</li>
          <li>Supported commercial analysis and strategic planning.</li>
          <li>Synthesized policy, market, and product information into structured internal materials.</li>
        </ul>
      </>
    ),
    date: 'Internship',
    location: 'Pharmaceutical Industry',
    skills: ['Market Research', 'Strategic Analysis', 'Healthcare Business', 'Policy Research', 'Cross-functional Communication'],
    title: 'Strategic Planning & Business Development Intern',
  },
];

export const communityExperiences: CardItem[] = [
  {
    description:
      'Contributed to a women-led knowledge community supporting academic growth, peer learning, and cross-disciplinary dialogue. Helped organize initiatives that create accessible spaces for women to exchange experience, build confidence, and support one another.',
    focus: ['Women Empowerment', 'Knowledge Sharing', 'Academic Community', 'Event Design'],
    role: 'Committee Member / Volunteer Organizer',
    title: 'SheShapes Academia',
  },
  {
    description:
      'Supported online public-interest sharing sessions focused on digital health and healthcare knowledge. Helped translate complex health and technology topics into accessible community-facing conversations.',
    focus: ['Digital Health', 'Public Welfare', 'Community Education', 'Healthcare Communication'],
    role: 'Volunteer Organizer',
    title: 'SheShapes Health',
  },
  {
    description:
      'Participated in initiatives that connect art, emotional wellbeing, and community care. Supported creative spaces where individuals can explore self-expression, reflection, and healing through art.',
    focus: ['Art for Wellness', 'Emotional Wellbeing', 'Creative Expression', 'Community Care'],
    role: 'Community Volunteer',
    title: 'ArtSync for Wellness',
  },
  {
    description:
      'Contributed to women-centered community activities that encourage dialogue, mutual support, and personal growth. Helped create safer and more open spaces for women to share lived experiences and build connections.',
    focus: ["Women's Space", 'Mutual Support', 'Community Building', 'Personal Growth'],
    role: 'Community Volunteer',
    title: 'HerRoom',
  },
];

export const hobbies: CardItem[] = [
  {
    description:
      'Tennis keeps me grounded in movement, timing, and focus. It trains consistency, strategic thinking, and the ability to stay composed under pressure.',
    keywords: ['Discipline', 'Rhythm', 'Resilience'],
    title: 'Tennis',
  },
  {
    description:
      'I explore astrology and BaZi as symbolic systems for understanding personality, timing, and human complexity: a reflective practice in pattern recognition rather than a substitute for judgment.',
    keywords: ['Pattern Recognition', 'Symbolic Thinking', 'Self-Reflection'],
    title: 'Metaphysics',
  },
  {
    description:
      'Climbing turns abstract problem-solving into physical experience. It teaches me to pause, observe, trust the process, and move through uncertainty step by step.',
    keywords: ['Problem-solving', 'Courage', 'Body Awareness'],
    title: 'Climbing',
  },
  {
    description:
      'Baking is where structure meets intuition. I enjoy the balance between measurement, timing, texture, and small creative decisions.',
    keywords: ['Precision', 'Patience', 'Creativity'],
    title: 'Baking',
  },
];

export const resume: ResumeDownload = {
  description:
    "Download Amy's resume as a PDF. Replace public/Amy_Resume.pdf with the latest version whenever the resume is updated.",
  href: './Amy_Resume.pdf',
  title: 'Resume',
};

export const contact: ContactSection = {
  description:
    'Open to digital project management, product, AI product, and enterprise transformation opportunities.',
  headerText: "Let's connect.",
  items: [
    {
      href: `mailto:${personalInfo.email}`,
      text: personalInfo.email,
      type: ContactType.Email,
    },
    {
      href: personalInfo.linkedIn,
      text: personalInfo.linkedIn,
      type: ContactType.LinkedIn,
    },
    {
      href: personalInfo.github,
      text: personalInfo.github,
      type: ContactType.Github,
    },
    {
      text: personalInfo.location,
      type: ContactType.Location,
    },
  ],
};

export const socialLinks: Social[] = [
  {Icon: LinkedInIcon, href: personalInfo.linkedIn, label: 'LinkedIn'},
  {Icon: GithubIcon, href: personalInfo.github, label: 'Github'},
];

export const impactIntro =
  'I care about building systems, not only digital systems, but also human spaces where people feel seen, supported, and empowered.';

export const impactClosing =
  'These experiences shaped how I think about product, community, and impact: good systems are not only efficient, they should also be inclusive, understandable, and humane.';

export const lifeIntro =
  'I am shaped not only by the systems I build, but also by the practices that keep me curious, grounded, and alive to complexity.';
