export const developerProfile = {
  name: 'Alex_Rivers',
  role: 'Full Stack Engineer',
  xp: 8,
  tagline:
    'Architecting scalable systems and pixel-perfect interfaces with a performance-first mindset. Available for deployment to high-impact engineering teams.',
  terminalData: {
    identity: {
      name: 'Alex_Rivers',
      role: 'Full Stack',
      xp: 8,
    },
    stack: ['React.js', 'Node.js', 'Rust', 'AWS'],
  },
};

export const skillTags = [
  { label: "const tech = 'Typescript'", color: 'text-secondary' as const },
  { label: "let db = 'PostgreSQL'", color: 'text-primary' as const },
  { label: "const ui = 'TailwindCSS'", color: 'text-tertiary' as const },
  { label: 'import { Docker }', color: 'text-on-secondary-container' as const },
  { label: 'function kubernetes()', color: 'text-error' as const },
];

export const aboutData = {
  background:
    'Driven by the intersection of efficient systems and human-centric design. My journey started in the terminal, building automation scripts for small workflows, which evolved into architecting scalable cloud-native applications. I specialize in turning complex technical debt into clean, maintainable codebases.',
  philosophy:
    'Code is a communication medium first, and a set of instructions second. If your peer cannot read it, your machine should not execute it.',
  philosophyBody:
    'I believe in Extreme Simplicity. Whether it is choosing a tech stack or designing a UI component, the goal is always to minimize the cognitive load for the end-user and the maintaining developer.',
  hobbies: [
    {
      title: 'Analog Photography',
      icon: 'camera',
      imageAlt:
        'vintage film camera on a rustic wooden desk with moody low-key lighting and warm tones',
    },
    {
      title: 'Mechanical Keyboards',
      icon: 'keyboard',
      imageAlt:
        'close up of a custom mechanical keyboard with glowing RGB lighting and specialty keycaps in a dark room',
    },
  ],
  quickStats: {
    expYears: '08',
    coffeeUnits: '4.2k',
    projDeployed: '124',
    commitsYtd: '892',
  },
  systemStatus: {
    osKernel: 'PROD-UX v10.4.1',
    uptime: '2,920 DAYS',
    cpuLoad: '82% OPTIMIZED',
    memory: 'ECC_READY',
  },
  availability:
    'Currently focusing on distributed systems and high-throughput API design. Open for technical consultation and senior engineering roles.',
};

export const projectsData = {
  heading: '/usr/bin/showcase',
  description:
    'A technical deep-dive into engineered solutions. Each card represents a production-ready environment deployed in the cloud.',
  projects: [
    {
      id: '01',
      filename: 'project_alpha.tsx',
      title: 'Project Alpha',
      description:
        'Real-time telemetry processing engine for distributed satellite clusters. High-throughput data ingestion and visualization.',
      tags: [
        "const tech = 'React'",
        "const backend = 'Node.js'",
        "const db = 'PostgreSQL'",
      ],
      primaryColor: 'text-tertiary',
    },
    {
      id: '02',
      filename: 'neural_nexus.py',
      title: 'Neural Nexus',
      description:
        'Self-optimizing neural network architecture for edge devices. Implements weight pruning and quantization on-the-fly.',
      tags: ["const core = 'Python'", "const lib = 'TensorFlow'"],
      primaryColor: 'text-tertiary',
    },
    {
      id: '03',
      filename: 'cyber_shell.sh',
      title: 'Cyber Shell',
      description:
        'A custom-built penetration testing framework focusing on automated reconnaissance and vulnerability mapping.',
      tags: ["const lang = 'Rust'", "const env = 'Docker'"],
      primaryColor: 'text-tertiary',
    },
    {
      id: '04',
      filename: 'grid_system.css',
      title: 'Grid Matrix',
      description:
        'Design system orchestration engine for multi-tenant SaaS platforms. Supports dynamic theming and sub-millisecond CSS injections.',
      tags: ["const style = 'Tailwind'", "const tool = 'PostCSS'"],
      primaryColor: 'text-tertiary',
    },
    {
      id: '05',
      filename: 'quantum_vault.rs',
      title: 'Quantum Vault',
      description:
        'High-security storage layer utilizing post-quantum cryptographic primitives. Zero-knowledge proof verification at every access layer.',
      tags: ["const core = 'Rust'", "const proto = 'gRPC'"],
      primaryColor: 'text-tertiary',
      featured: true,
    },
  ],
};

export const capabilitiesData = {
  heading: '// CAPABILITIES',
  description:
    'system.init() — Analyzing structural architecture and deployment stack. Expertise localized in full-cycle engineering from distributed cloud systems to pixel-perfect client interfaces.',
  panels: [
    {
      filename: 'frontend.tsx',
      title: 'Interface Tier',
      icon: 'terminal',
      items: [
        "export const React = 'v18.2';",
        "import { NextJS } from 'AppDir';",
        'type Styling = Tailwind | Framer;',
        "const State = ['Redux', 'Zustand'];",
        'interface Canvas { ThreeJS, WebGL }',
      ],
    },
    {
      filename: 'backend.rs',
      title: 'Logic Tier',
      icon: 'database',
      items: [
        'fn orchestrate() -> Node.js;',
        'impl DataFlow for GoLang;',
        'let dbs = [PostgreSQL, Redis];',
        'pub enum API { GraphQL, gRPC };',
        "const SEC = 'OAuth2/JWT';",
      ],
    },
    {
      filename: 'infra.yaml',
      title: 'Infrastructure',
      icon: 'cloud',
      items: [
        'provider: AWS / GCP',
        'orchestrator: Kubernetes',
        'pipeline: GitHub Actions',
        'iac: Terraform',
        'monitoring: Prometheus',
      ],
    },
  ],
  cta: {
    label: 'Initialization Ready',
    heading: 'Ready to scale your next build?',
    button: '$ DEPLOY_CONSULT',
  },
};

export const contactData = {
  heading: 'START YOUR NEXT PROJECT',
  subheading: '// INIT_COMMUNICATION_SEQUENCE',
  status: {
    availability: 'OPEN_FOR_WORK',
    timezone: 'UTC-5 (EST)',
    responseTime: '< 24HR',
  },
  socials: [
    { label: 'github.com/dev_root', icon: 'code', href: '#' },
    { label: 'linkedin.com/in/dev_root', icon: 'lan', href: '#' },
    { label: 'admin@root.sh', icon: 'alternate_email', href: 'mailto:admin@root.sh' },
  ],
  form: {
    aliasLabel: 'Enter your alias:',
    emailLabel: 'Provide access_email:',
    messageLabel: 'Execute project_brief:',
    submitLabel: 'EXECUTE_SUBMIT',
  },
};

export const navLinks = [
  { label: 'work', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#capabilities' },
  { label: 'uses', href: '#contact' },
  { label: 'contact', href: '#contact' },
];

export const footerData = {
  copyright: 'SYSTEM_STABLE // 2024',
  uptime: '99.9%',
  branch: 'main',
  latency: '24ms',
  status: 'LIVE',
};

export const heroMeta = {
  location: 'Remote',
  timezone: 'UTC+5:30',
  version: 'v1.0.0',
};
