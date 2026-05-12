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
  background: 'Columbia Biostatistics, Public Health Data Science, Enterprise Digital Transformation',
  email: 'amyma2024@outlook.com',
  focus: 'Digital Project Management, Product Delivery, AI Applications, Enterprise Systems',
  github: 'https://github.com/amymacumc',
  interests: 'Tennis, Astrology & BaZi, Climbing, Baking',
  linkedIn: 'https://www.linkedin.com/in/amy-m-6818b8218/',
  location: 'Shanghai, China',
  name: 'Amy',
  phone: '+86 198 0215 8850',
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
    'I am a digital project manager with experience across enterprise systems, CRM, digital marketing platforms, AI-enabled campaigns, and marketplace integration. My strength lies in connecting business goals, user needs, system logic, and delivery execution. With a Columbia University biostatistics and public health data science background, I bring machine learning, statistical modeling, R, Python, SQL, and evidence-based reasoning into product and project work. I am strongest where ambiguity needs to become structured execution: project planning, stakeholder communication, requirement clarification, cross-functional coordination, vendor management, product thinking, risk tracking, and issue resolution.',
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
      {name: 'Scrum delivery'},
      {name: 'Backlog refinement'},
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
      {name: 'Machine learning concepts'},
      {name: 'Statistical modeling'},
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
      {name: 'Python'},
      {name: 'R'},
      {name: 'MySQL'},
      {name: 'LaTeX'},
      {name: 'Unix'},
      {name: 'Power BI concepts'},
      {name: 'GitHub'},
      {name: 'Microsoft Office'},
      {name: 'Notion'},
      {name: 'Obsidian'},
    ],
  },
  {
    name: 'Certifications & Languages',
    skills: [
      {name: 'AWS Certified AI Practitioner (AIF-C01)'},
      {name: 'Mandarin Chinese - Native'},
      {name: 'English - TOEFL 103'},
      {name: 'CET-6 650'},
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
    impact:
      'Delivered an on-schedule AI campaign launch while balancing generation quality, API reliability, cost, privacy, and China data compliance.',
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
      'Productized an AI-generated personalized visual campaign, turning a global marketing idea into a localized digital activation for China.',
    title: 'AIGC Digital Marketing Campaign',
  },
  {
    actions: [
      'Clarified business logic with stakeholders',
      'Translated operational needs into system requirements',
      'Coordinated with developers and vendors',
      'Supported UAT and issue resolution',
      'Helped improve process visibility and digital traceability',
    ],
    impact:
      'Delivered CRM modules that improved process traceability and contributed over CNY 1.5M in estimated business value.',
    problem:
      'Business teams needed stronger CRM capabilities to support operational workflows and improve digital traceability.',
    role: 'Supported requirement analysis, feature delivery, testing, and stakeholder communication.',
    skills: ['CRM', 'Business Analysis', 'Stakeholder Management', 'UAT', 'Process Optimization', 'System Delivery'],
    summary: 'Owned CRM business analysis and product support across sales, channel, and customer service workflows.',
    title: 'Enterprise CRM Product Support',
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
      'Supported the design of a unified marketplace platform connecting multiple suppliers and standardizing product, order, cancellation, after-sales, and integration logic.',
    title: 'Multi-supplier Marketplace Integration',
  },
  {
    actions: [
      'Compared third-party and in-house model options',
      'Coordinated model testing and business validation',
      'Evaluated accuracy, cost, and operational feasibility',
      'Translated model performance into business-facing language',
    ],
    impact:
      'Supported an in-house recognition path that reached approximately 97% accuracy while reducing overall recognition cost by about 50%.',
    problem:
      'The business needed a more accurate and cost-effective image recognition capability for product or bottle-code related scenarios.',
    role: 'Supported AI product/project coordination, model evaluation, and business validation.',
    skills: [
      'AI Product Management',
      'Model Evaluation',
      'Business Validation',
      'Technical Translation',
      'Stakeholder Communication',
    ],
    summary:
      'Led product/project coordination for an AI image recognition capability upgrade, balancing accuracy, cost, automation value, and business feasibility.',
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
    title: 'AI Travel Agent Hackathon MVP',
  },
];

export const education: TimelineItem[] = [
  {
    content: (
      <>
        <p>
          <strong>Public health data science training:</strong> Built a rigorous foundation in statistical inference,
          causal inference, machine learning, deep learning, relational databases, and SQL programming.
        </p>
        <p>
          <strong>Applied technical toolkit:</strong> Developed hands-on experience with R, Python, SQL, statistical
          modeling, data science workflows, and evidence-based analysis.
        </p>
      </>
    ),
    date: 'September 2022 - May 2024',
    location: 'Columbia University',
    skills: ['Machine Learning', 'Statistical Modeling', 'R', 'Python', 'SQL', 'Causal Inference', 'GPA 3.9'],
    title: 'Master of Science in Biostatistics, Public Health Data Science Track',
  },
  {
    content: (
      <p>
        <strong>Scientific and analytical foundation:</strong> Studied bioscience with training in structured research,
        biological systems, quantitative reasoning, and technical communication.
      </p>
    ),
    date: 'September 2018 - May 2022',
    location: 'East China University of Science and Technology',
    skills: ['Bioscience', 'Research Thinking', 'Data Awareness', 'GPA 3.6'],
    title: 'Bachelor of Science in Bioscience',
  },
];

export const work: TimelineItem[] = [
  {
    content: (
      <>
        <p>
          Digital graduate in the Technology department, rotating across product and project management workstreams for
          enterprise CRM, AI innovation, digital marketing platforms, and marketplace integration.
        </p>
        <ul>
          <li>
            <strong>CRM business analysis:</strong> Owned CRM requirements planning and system analysis across sales,
            channel, and customer service workflows, helping deliver modules with more than CNY 1.5M in estimated
            business value.
          </li>
          <li>
            <strong>Product design and prioritization:</strong> Wrote PRD/functional specification documents, created
            user roadmaps and high-fidelity prototypes with Axure and MoDao, and prioritized features based on business
            ROI.
          </li>
          <li>
            <strong>End-to-end delivery:</strong> Participated in architecture and API design discussions, led UAT
            execution, collected feedback, and improved system usability and delivery quality.
          </li>
          <li>
            <strong>AI image recognition upgrade:</strong> Led vendor replacement and in-house model evaluation,
            coordinating business, IT, and algorithm teams to support an EfficientNet-based recognition path with
            approximately 97% accuracy and around 50% cost reduction.
          </li>
          <li>
            <strong>Automation delivery:</strong> Supported YOLO-based object detection for multi-SKU recognition and
            shelf compliance scenarios, clarifying business goals, acceptance criteria, and scalable analytics needs.
          </li>
          <li>
            <strong>AIGC productization:</strong> Designed an end-to-end AI marketing workflow from portrait upload to
            personalized image generation and social sharing, while coordinating model selection, API stability, cost,
            privacy, and China data compliance.
          </li>
          <li>
            <strong>Agile collaboration:</strong> Built multi-vendor collaboration routines, facilitated backlog
            refinement, requirement alignment, and risk reviews, and tracked delivery through Azure DevOps and Alibaba
            Cloud Yunxiao.
          </li>
        </ul>
      </>
    ),
    date: 'August 2024 - Present',
    location: 'bp China',
    skills: [
      'Project Management',
      'Product Management',
      'Business Analysis',
      'Stakeholder Management',
      'Vendor Coordination',
      'UAT',
      'PRD / FS Writing',
      'API Design Concepts',
      'AI Applications',
      'Scrum',
      'Azure DevOps',
      'Alibaba Cloud Yunxiao',
      'System Integration',
      'Risk Management',
    ],
    title: 'Digital Graduate, Product / Project Management Rotations',
  },
  {
    content: (
      <>
        <p>
          Supported portfolio management, business development, market research, competitor analysis, policy tracking,
          and strategic planning in the pharmaceutical industry.
        </p>
        <ul>
          <li>
            <strong>Project initiation support:</strong> Researched 10+ potential CNS assets and 20+ pipeline or
            marketed competitors to support generic drug and licence-in project decisions.
          </li>
          <li>
            <strong>Commercial analysis:</strong> Synthesized clinical guidelines, literature, KOL interviews, and sales
            data to analyze unmet needs in cardiovascular and metabolic disease areas.
          </li>
          <li>
            <strong>Market sizing:</strong> Supported China market opportunity and pricing range analysis for strategic
            planning discussions.
          </li>
          <li>
            <strong>Policy tracking:</strong> Interpreted national volume-based procurement policy updates and supported
            product participation in bidding and implementation processes.
          </li>
        </ul>
      </>
    ),
    date: 'May 2023 - August 2023',
    location: 'Viatris, Strategic Planning & Business Development',
    skills: [
      'Portfolio Management',
      'Business Development',
      'Market Research',
      'Commercial Analysis',
      'Healthcare Business',
      'Policy Research',
      'Strategic Planning',
    ],
    title: 'Portfolio Management & Business Development Intern',
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
      'Co-founded a digital health public-interest learning initiative and led the course content team. Designed the course structure, coordinated speakers and materials, and ensured the delivery of three online sessions that translated healthcare and technology topics into accessible community-facing conversations.',
    focus: ['Co-founder', 'Digital Health', 'Course Design', 'Online Program Delivery', 'Healthcare Communication'],
    role: 'Co-founder / Course Content Lead',
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
  description: 'Open to digital project management, product, AI product, and enterprise transformation opportunities.',
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
      href: `tel:${personalInfo.phone.replaceAll(' ', '')}`,
      text: personalInfo.phone,
      type: ContactType.Phone,
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
