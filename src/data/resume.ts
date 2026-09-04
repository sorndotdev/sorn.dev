// Single source of truth for resume content.
// Consumed by the About page (/) and the printable resume page (/resume).
// Edit here; both stay in sync.

export interface Contact {
  emailUser: string;
  emailDomain: string;
  emailSubject: string;
  githubUrl: string;
  website: string;
}

export interface Experience {
  company: string;
  logo?: string;
  role: string;
  promoted?: boolean;
  period: string;
  location: string;
  description: string;
  skills: string[];
  credential?: CredentialLink;
}

export interface CredentialLink {
  href: string;
  label: string;
}

export interface Credential {
  href: string;
  label: string;
  icon: 'shield' | 'star';
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  awardHref: string;
  awardLabel: string;
}

export interface Project {
  name: string;
  subtitle: string;
  meta: string;
  url?: string;
  description: string;
}

export const profile = {
  name: 'Sorn Maksumic',
  title: 'Fintech Software Engineer',
  location: 'Amsterdam, The Netherlands',
  summary:
    'Fintech infrastructure: payments, FX, and ledgers, built and explained from first principles.',
  bio: "Engineer with experience at some of the world's leading fintech companies."
};

export const contact: Contact = {
  emailUser: 'maksumic',
  emailDomain: 'protonmail.com',
  emailSubject: 'Opportunity from sorn.dev',
  githubUrl: 'https://github.com/sorndotdev',
  website: 'https://sorn.dev'
};

export const email = `${contact.emailUser}@${contact.emailDomain}`;

export const experience: Experience[] = [
  {
    company: 'Revolut',
    logo: '/images/revolut-logo.svg',
    role: 'Software Engineer, Wealth & Trading Team',
    period: 'Jul 2025 — Present',
    location: 'Dubai, United Arab Emirates',
    description:
      'Retrieve market data from third parties, transform and store it, distribute it to internal services and in-app, and feed Revolut\u2019s AI Assistant (AIR) via tool calls.',
    skills: [
      'Java',
      'JVM',
      'Mockito',
      'JUnit',
      'Spock',
      'Gradle',
      'Groovy',
      'RDBMS',
      'PostgreSQL',
      'JOOQ',
      'Flyway',
      'Redis',
      'GCP',
      'Cloud SQL',
      'Microservices',
      'Kubernetes',
      'Grafana',
      'Prometheus',
      'NewRelic',
      'CQRS',
      'Kafka',
      'RabbitMQ',
      'TDD',
      'DDD',
      'Event Sourcing',
      'LLM Integration'
    ]
  },
  {
    company: 'Adyen',
    logo: '/images/adyen-logo.svg',
    role: 'Team Lead, Foreign Exchange Team',
    promoted: true,
    period: 'Aug 2023 — Jul 2025',
    location: 'Amsterdam, The Netherlands',
    description:
      'Led a team of 4 engineers building Adyen\u2019s foreign exchange infrastructure: multi-currency bookkeeping, internal FX rates distribution, and hedging against partner bank.',
    skills: [
      'Technical Leadership',
      'Project Management',
      'Mentoring',
      'Scrum',
      'Stakeholder Management',
      'Software Architecture',
      'Trade-off Analysis'
    ],
    credential: {
      href: 'https://www.credly.com/badges/acdabbf8-9bed-44b6-89c1-eb93bf718c47/public_url',
      label: 'Professional Scrum Master (PSM I) — Scrum.org'
    }
  },
  {
    company: 'Adyen',
    logo: '/images/adyen-logo.svg',
    role: 'Software Engineer',
    period: 'Aug 2021 — Jul 2023',
    location: 'Amsterdam, The Netherlands',
    description:
      'Worked on bank accounting at Adyen: reconciliation and nostro/vostro connections for Adyen\u2019s Balance Platform (banking side).',
    skills: [
      'Java',
      'JVM',
      'Mockito',
      'JUnit',
      'Gradle',
      'Groovy',
      'RDBMS',
      'PostgreSQL',
      'MyBatis',
      'OGNL',
      'Kafka',
      'RabbitMQ',
      'Event Sourcing',
      'Message Store',
      'Event Store'
    ]
  }
];

export const education: Education = {
  school: 'University of South Eastern Norway',
  degree: "Bachelor's degree, Computer Science",
  period: '2018 — 2021',
  location: 'Kongsberg, Norway',
  awardHref:
    'https://kongsbergdigital.com/news/students-won-award-in-collaboration-with-kongsberg-digital',
  awardLabel: 'Won Best Bachelor Project 2021'
};

export const credentials: Credential[] = [
  {
    href: 'https://www.credly.com/badges/acdabbf8-9bed-44b6-89c1-eb93bf718c47/public_url',
    label: 'Professional Scrum Master (PSM I)',
    icon: 'shield'
  },
  {
    href: education.awardHref,
    label: 'Best Bachelor Project 2021',
    icon: 'star'
  }
];

export const projects: Project[] = [
  {
    name: 'Snapstock.app',
    subtitle: 'Dividend Stock Analysis Platform',
    meta: 'snapstock.app',
    url: 'https://snapstock.app',
    description:
      'Partnered with Ryne Williams (~100K YouTube subs) to build a dividend stock analysis platform with a clear, repeatable framework. Used by 1,800+ dividend investors. Built end-to-end: Vue.js front end, Java backend, PostgreSQL, Stripe subscriptions.'
  },
  {
    name: 'TibiaPVP.com',
    subtitle: 'Private game server (pre-university project)',
    meta: '2017 — 2018',
    description:
      'Ran a custom Tibia 7.4 private server on Linux with the real game map: modified C++ server source, wrote Lua scripts for custom mechanics, and used client-side DLL injection to build an anti-bot client.'
  },
  {
    name: 'fmp4j',
    subtitle: 'Open source Java SDK for the Financial Modeling Prep API',
    meta: 'github.com/marketdataapi/fmp4j',
    url: 'https://github.com/marketdataapi/fmp4j',
    description:
      'A lightweight, type-safe Java client for stock market data, financial statements, and company profiles.'
  }
];
