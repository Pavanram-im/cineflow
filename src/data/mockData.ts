import { Job } from '../types';

/**
 * Clearly labeled fictional job listings for prototype testing.
 * As noted in AUDIT_REPORT.md, these are demonstration records
 * and do not represent verified real vacancies.
 */
export const MOCK_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Frontend Engineer (React & TypeScript)',
    company: 'NovaWave Cloud',
    location: 'San Francisco, CA',
    mode: 'Remote',
    level: 'Senior',
    department: 'Engineering',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'GraphQL'],
    salary: '$150,000 – $185,000 / yr',
    postedHoursAgo: 2,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true },
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'NovaWave Cloud is seeking a Senior Frontend Engineer to build modern, high-throughput cloud observability dashboards. You will drive front-end architecture, improve runtime performance, and craft responsive user experiences.',
    responsibilities: [
      'Architect robust web applications using React 19, TypeScript, and modern styling libraries.',
      'Collaborate with product managers and UX designers to build intuitive dashboard workflows.',
      'Optimize web performance, Core Web Vitals, and responsive layouts across viewports.',
      'Mentor junior and mid-level engineers through code reviews and architecture discussions.'
    ],
    requirements: [
      '5+ years of production experience with modern React and TypeScript.',
      'Deep understanding of state management, browser rendering cycles, and Web APIs.',
      'Experience with component-driven architecture and automated testing (Vitest, Playwright).',
      'Strong communication skills in distributed, asynchronous team environments.'
    ],
    benefits: [
      '100% remote flexibility with home office stipend',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited paid time off (minimum 3 weeks recommended)',
      '$2,500 annual professional development budget'
    ],
    applyUrl: '#demo-apply',
    featured: true
  },
  {
    id: 'job-2',
    title: 'Full Stack Developer',
    company: 'LatticeWorks Software',
    location: 'Bengaluru, India',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Engineering',
    skills: ['Node.js', 'React', 'PostgreSQL', 'Express', 'Docker', 'Redis'],
    salary: '₹18,00,000 – ₹28,00,000 / yr',
    postedHoursAgo: 5,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Join LatticeWorks as a Full Stack Developer building enterprise workflow automation software. You will design scalable RESTful APIs, interact with relational databases, and construct modern React user interfaces.',
    responsibilities: [
      'Design, build, and maintain REST/GraphQL APIs with Node.js and TypeScript.',
      'Develop modular frontend user interfaces connected to backend microservices.',
      'Write optimized SQL queries, database migrations, and schema indexes in PostgreSQL.',
      'Participate in agile sprint ceremonies, code reviews, and deployment pipelines.'
    ],
    requirements: [
      '3+ years of professional full-stack development experience.',
      'Proficiency in React, modern JavaScript/TypeScript, and Node.js.',
      'Solid understanding of relational database modeling and transactional integrity.',
      'Familiarity with containerization (Docker) and CI/CD pipelines.'
    ],
    benefits: [
      'Hybrid flexibility (2 days office / 3 days remote)',
      'Health insurance covering dependents',
      'Annual wellness bonus and learning allowance',
      'Generous parental leave'
    ],
    applyUrl: '#demo-apply',
    featured: true
  },
  {
    id: 'job-3',
    title: 'Lead AI & Machine Learning Systems Architect',
    company: 'Orbit Intelligence',
    location: 'New York, NY',
    mode: 'Hybrid',
    level: 'Lead',
    department: 'AI & Research',
    skills: ['Python', 'PyTorch', 'LLMs', 'Vector DBs', 'Kubernetes', 'FastAPI'],
    salary: '$210,000 – $260,000 / yr',
    postedHoursAgo: 8,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true },
      { name: 'Demo ATS Ingest', url: '#demo-source', isDemo: true }
    ],
    description: 'Orbit Intelligence develops retrieval-augmented generation systems for enterprise knowledge bases. We are seeking an AI Systems Architect to lead the design and deployment of scalable LLM pipelines.',
    responsibilities: [
      'Lead architecture of high-reliability inference infrastructure and semantic search pipelines.',
      'Evaluate open-source and proprietary foundation models for latency, cost, and accuracy.',
      'Partner with product teams to translate business questions into grounded generative solutions.',
      'Establish testing benchmarks for hallucination mitigation and model drift.'
    ],
    requirements: [
      '7+ years in software engineering with 3+ years dedicated to ML/AI production systems.',
      'Demonstrated expertise deploying model serving pipelines using Triton, vLLM, or Ray.',
      'Deep fluency with Python, vector search (Pinecone, Qdrant, pgvector), and PyTorch.',
      'Track record leading technical strategy across cross-functional teams.'
    ],
    benefits: [
      'Top-tier equity package',
      'Full healthcare coverage including mental wellness',
      '401(k) matching up to 5%',
      'Flexible annual conference travel budget'
    ],
    applyUrl: '#demo-apply',
    featured: true
  },
  {
    id: 'job-4',
    title: 'Product Designer (Design Systems & UI)',
    company: 'Pinecrest Labs',
    location: 'London, UK',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Design',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
    salary: '£60,000 – £80,000 / yr',
    postedHoursAgo: 11,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Pinecrest Labs seeks a versatile Product Designer to refine our multi-platform design system and craft intuitive workflows for analytics and collaboration tools.',
    responsibilities: [
      'Create polished UI components, interactive prototypes, and scalable design token systems in Figma.',
      'Ensure WCAG AA/AAA compliance across typography, color palettes, and interactive states.',
      'Conduct usability tests, synthesize feedback, and iterate based on quantitative metrics.',
      'Partner closely with frontend engineers to ensure pixel-perfect production parity.'
    ],
    requirements: [
      '3+ years of digital product design experience for web or SaaS platforms.',
      'Strong portfolio demonstrating systemic thinking, micro-interactions, and visual craftsmanship.',
      'Deep familiarity with Figma auto-layout, variables, component properties, and tokenization.',
      'Solid understanding of frontend HTML/CSS constraints and possibilities.'
    ],
    benefits: [
      'Flexible working hours across UK & European time zones',
      'Private medical insurance with Vitality',
      'Generous hardware allowance (MacBook Pro + 4K monitor)',
      '28 days annual leave plus bank holidays'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-5',
    title: 'DevOps & Cloud Infrastructure Engineer',
    company: 'Velox Systems',
    location: 'Austin, TX',
    mode: 'Remote',
    level: 'Senior',
    department: 'Infrastructure',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'CI/CD', 'Prometheus', 'Linux'],
    salary: '$140,000 – $175,000 / yr',
    postedHoursAgo: 14,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Velox Systems builds resilient cloud hosting networks. We are looking for an experienced Cloud Infrastructure Engineer to manage multi-region AWS environments and automate deployment pipelines.',
    responsibilities: [
      'Provision and manage multi-cloud infrastructure as code using Terraform and GitOps.',
      'Maintain Kubernetes clusters (EKS) ensuring 99.99% uptime, auto-scaling, and disaster recovery.',
      'Improve observability with Grafana, Prometheus, and structured log pipelines.',
      'Conduct security hardening, secret rotation, and SOC 2 compliance automation.'
    ],
    requirements: [
      '4+ years managing production cloud infrastructure at scale on AWS or GCP.',
      'Strong scripting skills in Bash, Python, or Go.',
      'Production experience with Kubernetes, Helm, and zero-downtime blue/green deployments.',
      'Solid grasp of networking concepts (VPCs, BGP, DNS, CDN routing, mTLS).'
    ],
    benefits: [
      'Comprehensive medical, vision, and dental plans',
      'Home gym or wellness reimbursement',
      'Cell phone and internet stipend',
      'Annual company offsite retreat'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-6',
    title: 'Junior Backend Engineer (Go / Node)',
    company: 'Apex Fintech',
    location: 'Bengaluru, India',
    mode: 'On-site',
    level: 'Entry-level',
    department: 'Engineering',
    skills: ['Golang', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
    salary: '₹8,00,000 – ₹13,00,000 / yr',
    postedHoursAgo: 16,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Kickstart your engineering career at Apex Fintech! You will join our Core Ledger team, learning best practices in financial-grade software, high-concurrency systems, and robust database operations.',
    responsibilities: [
      'Build and test backend endpoints under the guidance of senior staff engineers.',
      'Write unit and integration tests to ensure data precision and edge-case handling.',
      'Diagnose API performance bottlenecks and refine query response times.',
      'Collaborate on documentation and technical specifications for developer APIs.'
    ],
    requirements: [
      'Degree in Computer Science or demonstrable portfolio of backend projects.',
      'Solid grasp of object-oriented or functional programming concepts in Go, TypeScript, or Python.',
      'Familiarity with SQL relational databases and basic REST architectural patterns.',
      'Curiosity, attention to detail, and enthusiasm for continuous learning.'
    ],
    benefits: [
      'Dedicated senior engineer mentorship program',
      'Subsidized daily meals and commuter transport',
      'Health insurance cover for employee and parents',
      'Annual certification and learning sponsorship'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-7',
    title: 'Senior Product Manager – Search & Discovery',
    company: 'Starlight Media',
    location: 'Berlin, Germany',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Product',
    skills: ['Product Strategy', 'Search Relevance', 'A/B Testing', 'Analytics', 'SQL'],
    salary: '€85,000 – €110,000 / yr',
    postedHoursAgo: 19,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Starlight Media is looking for a data-driven Product Manager to lead our Search and Recommendations squad. You will shape how millions of daily users discover digital content and community creations.',
    responsibilities: [
      'Define product roadmap, metrics (NDCG, CTR, Retention), and feature specifications.',
      'Work alongside ML researchers and frontend engineers to deploy search ranking updates.',
      'Run rigorous experimentation frameworks (A/B testing, multi-armed bandits).',
      'Communicate product strategy and qualitative user research findings to leadership.'
    ],
    requirements: [
      '4+ years experience in product management for consumer software or discovery engines.',
      'Analytical fluency: ability to write SQL queries, interpret analytics, and model impact.',
      'Deep user empathy paired with technical comfort discussing algorithms and API latency.',
      'Fluency in English; experience in international product environments.'
    ],
    benefits: [
      'Public transit BVG ticket subsidy',
      'German language classes stipend',
      '30 vacation days per year',
      'Hybrid working model (2 days office)'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-8',
    title: 'Cybersecurity Analyst & Incident Responder',
    company: 'Sentinel Guard',
    location: 'Chicago, IL',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Security',
    skills: ['SIEM', 'Threat Detection', 'Wireshark', 'Python', 'SOC Analysis', 'ISO 27001'],
    salary: '$110,000 – $135,000 / yr',
    postedHoursAgo: 22,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Sentinel Guard provides automated compliance and intrusion detection. As a Cybersecurity Analyst, you will monitor security telemetry, hunt anomalies, and coordinate containment procedures.',
    responsibilities: [
      'Monitor alerts across SIEM, EDR, and cloud infrastructure audit logs.',
      'Perform root-cause analysis on anomalous network spikes and potential malware indicators.',
      'Script detection rules (YARA, Sigma) and automate alert triage in Python.',
      'Conduct regular vulnerability scans and collaborate with engineering on remediations.'
    ],
    requirements: [
      '3+ years experience in a Security Operations Center (SOC) or threat analyst role.',
      'Hands-on experience with tools like Splunk, CrowdStrike, or Elastic Security.',
      'Certifications such as Security+, CySA+, or GCIH are advantageous.',
      'Strong analytical mindset and calm approach during incident triage.'
    ],
    benefits: [
      'Full health, dental, and vision care',
      'Certification exam vouchers and study materials paid',
      'Competitive 401(k) match',
      'Paid volunteer time off'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-9',
    title: 'Data Engineer (Snowflake & dbt)',
    company: 'QuantPulse Analytics',
    location: 'Toronto, Canada',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Data',
    skills: ['Snowflake', 'dbt', 'SQL', 'Python', 'Airflow', 'Kafka'],
    salary: 'CAD $115,000 – $140,000 / yr',
    postedHoursAgo: 26,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Build modern data pipelines that power real-time analytics dashboards. QuantPulse is looking for a Data Engineer passionate about clean models, automated data testing, and scalable warehouse architecture.',
    responsibilities: [
      'Design and maintain dbt models, data transformations, and Snowflake data warehouses.',
      'Orchestrate ETL/ELT pipelines using Apache Airflow and Dagster.',
      'Enforce data hygiene, schema validations, and automated anomaly alerts.',
      'Partner with data scientists and business intelligence leads to deliver curated marts.'
    ],
    requirements: [
      '3+ years in data engineering with deep SQL proficiency.',
      'Demonstrated experience building transformation workflows with dbt.',
      'Hands-on experience with cloud data warehouses (Snowflake, BigQuery, or Redshift).',
      'Familiarity with event-driven data streaming (Kafka, Kinesis) is a plus.'
    ],
    benefits: [
      'Remote-first Canadian benefits plan',
      'RRSP matching',
      'Flexible lifestyle spending account',
      'Ergonomic home office equipment provided'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-10',
    title: 'Frontend Engineering Intern (Summer 2026 / 2027)',
    company: 'NovaWave Cloud',
    location: 'San Francisco, CA',
    mode: 'Hybrid',
    level: 'Internship',
    department: 'Engineering',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Tailwind'],
    salary: '$45 – $55 / hr',
    postedHoursAgo: 30,
    sources: [
      { name: 'Demo University Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Looking to gain hands-on experience building production React applications? NovaWave Cloud offers a comprehensive 12-week internship where you will ship customer-facing code alongside senior mentors.',
    responsibilities: [
      'Build reusable UI components and user onboarding flows in React and Tailwind.',
      'Write clean, accessible HTML/CSS with proper semantic structure.',
      'Participate in team sprint planning, retrospectives, and engineering showcases.',
      'Complete a capstone feature that ships to production by the end of your term.'
    ],
    requirements: [
      'Currently enrolled in a Computer Science or related degree, or recent bootcamp graduate.',
      'Basic knowledge of modern JavaScript (ES6+), React hooks, and Git version control.',
      'Demonstrated portfolio or GitHub projects showing personal interest in UI engineering.',
      'Eagerness to receive feedback and grow your technical capabilities.'
    ],
    benefits: [
      'Paid competitive hourly rate',
      'Housing stipend or corporate housing assistance',
      'Executive leadership speaker series and networking events',
      'Direct pathway to full-time new-grad offers'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-11',
    title: 'Lead Mobile Engineer (React Native & iOS/Android)',
    company: 'Horizon Healthtech',
    location: 'Boston, MA',
    mode: 'Remote',
    level: 'Lead',
    department: 'Mobile',
    skills: ['React Native', 'TypeScript', 'Swift', 'Kotlin', 'Mobile CI/CD'],
    salary: '$180,000 – $220,000 / yr',
    postedHoursAgo: 33,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Horizon Healthtech builds patient monitoring and wellness mobile applications. We need a Lead Mobile Engineer to steer our cross-platform React Native architecture and ensure high security and offline reliability.',
    responsibilities: [
      'Lead mobile application architecture for both iOS and Android platforms.',
      'Optimize native bridge performance, offline data synchronization, and Bluetooth device pairing.',
      'Manage automated build, code signing, and release pipelines through Fastlane.',
      'Ensure strict HIPAA-compliant cryptographic storage and transmission of patient data.'
    ],
    requirements: [
      '6+ years in mobile development with 3+ years in production React Native applications.',
      'Deep knowledge of native iOS (Swift/Obj-C) or Android (Kotlin) module development.',
      'Proven experience releasing and maintaining apps on App Store and Google Play.',
      'Strong leadership skills and passion for healthcare impact.'
    ],
    benefits: [
      'Comprehensive health coverage with zero deductible options',
      'Generous equity incentive plan',
      'Home fitness stipend and mental health support',
      'Annual hardware refresh'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-12',
    title: 'Site Reliability Engineer (SRE)',
    company: 'QuantPulse Analytics',
    location: 'Seattle, WA',
    mode: 'Remote',
    level: 'Senior',
    department: 'Infrastructure',
    skills: ['Golang', 'Kubernetes', 'SLO/SLI', 'Grafana', 'Terraform', 'Chaos Engineering'],
    salary: '$160,000 – $195,000 / yr',
    postedHoursAgo: 36,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure our high-volume analytics services achieve five-nines availability. As an SRE, you will eliminate toil through automation, run incident postmortems, and build resilient infrastructure.',
    responsibilities: [
      'Define and monitor Service Level Indicators (SLIs) and Service Level Objectives (SLOs).',
      'Build internal developer tooling and self-healing automation in Go or Python.',
      'Lead blameless postmortems and conduct game days to test disaster scenarios.',
      'Participate in a humane on-call rotation with dedicated follow-the-sun coverage.'
    ],
    requirements: [
      '4+ years in SRE, DevOps, or systems engineering roles.',
      'Strong expertise in distributed systems debugging under high load.',
      'Familiarity with modern observability stacks (OpenTelemetry, Grafana, Honeycomb).',
      'Experience managing multi-cluster Kubernetes deployments.'
    ],
    benefits: [
      'Comprehensive medical and family benefits',
      'On-call compensation and compensatory time off',
      'Retirement plan with 6% company match',
      'Continuous learning budget'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-13',
    title: 'Technical Content & Developer Advocate',
    company: 'LatticeWorks Software',
    location: 'Remote (US / Canada)',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Marketing & DevRel',
    skills: ['Technical Writing', 'Developer Advocacy', 'React', 'Documentation', 'Video Tutorials'],
    salary: '$105,000 – $130,000 / yr',
    postedHoursAgo: 40,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Bridge the gap between engineering and the developer community. Create code-rich tutorials, documentation, and video walkthroughs that help developers succeed with LatticeWorks APIs.',
    responsibilities: [
      'Write engaging, code-complete guides, architectural tutorials, and sample apps.',
      'Deliver talks at developer conferences, webinars, and local community meetups.',
      'Gather developer feedback and champion developer experience improvements to engineering.',
      'Maintain open-source sample repositories and quickstart templates.'
    ],
    requirements: [
      '2+ years of software development experience or developer advocacy experience.',
      'Exceptional written English skills and ability to break down complex concepts.',
      'Hands-on comfort building quick demo apps in React, Node, or Python.',
      'Active presence in developer communities (GitHub, YouTube, or tech blogs).'
    ],
    benefits: [
      'Unlimited travel budget for approved speaking engagements',
      'Full home studio recording kit provided',
      'Flexible remote schedule',
      'Comprehensive healthcare coverage'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-14',
    title: 'QA Automation Engineer',
    company: 'Apex Fintech',
    location: 'Dublin, Ireland',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Quality Assurance',
    skills: ['Cypress', 'Playwright', 'TypeScript', 'Jest', 'API Testing', 'Postman'],
    salary: '€65,000 – €82,000 / yr',
    postedHoursAgo: 44,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure the highest degree of reliability across our financial transactions. Build resilient automated end-to-end and regression test suites integrated into CI pipelines.',
    responsibilities: [
      'Author automated end-to-end and integration tests in Playwright and TypeScript.',
      'Execute automated performance tests and load tests for payment endpoints.',
      'Identify and document bug reports with clear reproduction steps and network logs.',
      'Work alongside feature squads to establish test plans before sprint execution.'
    ],
    requirements: [
      '3+ years in automated software testing for web applications and APIs.',
      'Solid programming foundations in TypeScript or JavaScript.',
      'Experience incorporating automated tests into GitHub Actions or GitLab CI.',
      'Knowledge of financial regulations or PCI-DSS testing practices is a bonus.'
    ],
    benefits: [
      'Hybrid working (2 days in Dublin docklands office)',
      'Pension contribution up to 7%',
      'Private health insurance (VHI)',
      'Cycle to work scheme'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-15',
    title: 'Staff Security Engineer (Cloud & Application Security)',
    company: 'NovaWave Cloud',
    location: 'Seattle, WA',
    mode: 'Remote',
    level: 'Lead',
    department: 'Security',
    skills: ['AppSec', 'Threat Modeling', 'OAuth2', 'CloudTrail', 'Penetration Testing'],
    salary: '$200,000 – $245,000 / yr',
    postedHoursAgo: 48,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Lead application security reviews, threat modeling, and secure software development lifecycle standards across our multi-tenant cloud products.',
    responsibilities: [
      'Drive threat modeling sessions for new architectures and microservices.',
      'Architect identity and access management (IAM), zero-trust networking, and key management.',
      'Oversee external penetration tests and manage bug bounty triage pipelines.',
      'Educate development teams on secure coding principles and common OWASP risks.'
    ],
    requirements: [
      '7+ years experience in application security or cloud security engineering.',
      'Proven expertise in cryptographic protocols, OAuth/OIDC, and web security models.',
      'Track record executing architecture reviews at enterprise scale.',
      'Clear, empathetic communication when collaborating with feature developers.'
    ],
    benefits: [
      'Equity package with generous vesting',
      'Comprehensive medical, dental, and vision insurance',
      'Generous parental leave and childcare assistance',
      'Remote home office setup budget'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-16',
    title: 'Customer Success Engineer',
    company: 'Velox Systems',
    location: 'Atlanta, GA',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Customer Experience',
    skills: ['Customer Support', 'SQL', 'REST APIs', 'Troubleshooting', 'SaaS'],
    salary: '$80,000 – $100,000 / yr',
    postedHoursAgo: 52,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Velox Systems is seeking a Customer Success Engineer to help enterprise clients integrate our cloud hosting platform, troubleshoot technical issues, and ensure seamless onboarding.',
    responsibilities: [
      'Act as technical point of contact for enterprise clients during implementation.',
      'Diagnose webhook failures, API rate limits, and configuration errors.',
      'Write technical knowledge base articles, onboarding guides, and code samples.',
      'Advocate for client feature requests during product roadmap meetings.'
    ],
    requirements: [
      '2+ years in technical support, solutions engineering, or QA.',
      'Ability to read and debug JSON payloads, REST APIs, and SQL database queries.',
      'Excellent verbal and written communication skills with business clients.',
      'Strong problem-solving persistence and empathy.'
    ],
    benefits: [
      'Competitive base salary plus performance quarterly bonus',
      'Comprehensive healthcare options',
      '401(k) retirement plan',
      'Paid company holidays and flexible PTO'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-17',
    title: 'Senior Data Scientist (Recommendation Systems)',
    company: 'Starlight Media',
    location: 'Paris, France',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Data Science',
    skills: ['Python', 'Scikit-learn', 'TensorFlow', 'RecSys', 'A/B Testing', 'Spark'],
    salary: '€78,000 – €98,000 / yr',
    postedHoursAgo: 56,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Drive the personalized discovery algorithms behind Starlight Media. Design machine learning models that deliver tailored recommendations to millions of active listeners.',
    responsibilities: [
      'Develop collaborative filtering, graph neural networks, and contextual multi-armed bandits.',
      'Evaluate model performance offline and validate impact through online A/B testing.',
      'Collaborate with data engineering to productionize feature stores and batch pipelines.',
      'Present experimental outcomes to technical and business stakeholders.'
    ],
    requirements: [
      'MS or PhD in Computer Science, Statistics, or related quantitative field.',
      '4+ years of industrial experience developing recommendation systems.',
      'Solid coding practices in Python and experience with distributed computing (Spark).',
      'Deep statistical foundation in hypothesis testing and causal inference.'
    ],
    benefits: [
      'Health insurance (Mutuelle) with 100% employer coverage',
      'Restaurant ticket vouchers (Tickets Restaurant)',
      'RTT days and 5 weeks paid vacation',
      'Hybrid balance (2 days central Paris office)'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-18',
    title: 'Product Operations Specialist',
    company: 'Pinecrest Labs',
    location: 'Remote (EU / UK)',
    mode: 'Remote',
    level: 'Entry-level',
    department: 'Product',
    skills: ['Product Ops', 'Notion', 'Jira', 'Data Analysis', 'Process Optimization'],
    salary: '€42,000 – €54,000 / yr',
    postedHoursAgo: 60,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure product teams run smoothly. The Product Operations Specialist streamlines customer feedback loops, organizes release notes, and maintains operational data dashboards.',
    responsibilities: [
      'Aggregate qualitative user feedback from support tickets and social channels into Jira.',
      'Coordinate cross-functional release readiness checklists for upcoming feature launches.',
      'Build internal Notion documentation and standardize product team workflows.',
      'Analyze churn metrics and trial conversion funnels.'
    ],
    requirements: [
      '1+ years in product operations, customer success, or tech consulting.',
      'Extreme attention to organization, deadlines, and clear communication.',
      'Familiarity with tools like Notion, Jira, Airtable, and Google Analytics.',
      'Proactive self-starter in remote environments.'
    ],
    benefits: [
      'Remote work stipend',
      'Private health insurance coverage',
      '25 days paid holiday',
      'Annual team meetup in Europe'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-19',
    title: 'Senior Blockchain & Smart Contract Auditor',
    company: 'Apex Fintech',
    location: 'Singapore',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Security',
    skills: ['Solidity', 'Rust', 'EVM', 'Foundry', 'Slither', 'DeFi Security'],
    salary: 'SGD $160,000 – $210,000 / yr',
    postedHoursAgo: 64,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Perform formal verification, static analysis, and manual code audits on DeFi protocols and institutional asset tokenization contracts.',
    responsibilities: [
      'Review complex Solidity and Rust smart contracts for logic bugs and reentrancy vectors.',
      'Produce comprehensive audit reports with severity classifications and remediation steps.',
      'Construct automated fuzzing and invariant test suites using Foundry and Echidna.',
      'Advise clients on gas optimization and cryptographic primitives.'
    ],
    requirements: [
      '4+ years auditing smart contracts or building high-value Web3 protocols.',
      'Deep understanding of EVM internals, memory layouts, and opcode gas costs.',
      'Public portfolio of audit findings or bug bounty submissions.',
      'Clear, concise technical writing in English.'
    ],
    benefits: [
      'Competitive salary with bonus incentives',
      'Full Singapore medical coverage',
      'Flexible working arrangements',
      'Sponsored attendance at global security summits'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-20',
    title: 'Growth Marketing Manager',
    company: 'NovaWave Cloud',
    location: 'New York, NY',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Marketing',
    skills: ['SEO', 'Google Ads', 'Content Strategy', 'HubSpot', 'Conversion Optimization'],
    salary: '$95,000 – $125,000 / yr',
    postedHoursAgo: 68,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Accelerate user acquisition for our cloud developer tools. Drive multi-channel campaigns, optimize self-serve sign-up funnels, and scale high-intent organic search traffic.',
    responsibilities: [
      'Manage paid search and social acquisition budgets with a strong focus on CAC and payback period.',
      'Collaborate with design and content to produce high-converting landing pages.',
      'Run rigorous A/B experiments on sign-up flows and trial conversion touchpoints.',
      'Report weekly on organic pipeline, lead volume, and marketing-influenced revenue.'
    ],
    requirements: [
      '3+ years in B2B SaaS growth or digital marketing.',
      'Hands-on expertise with analytics tools (Google Analytics 4, Mixpanel, HubSpot).',
      'Proven track record scaling lead generation while maintaining efficient spend.',
      'Strong creative instincts coupled with analytical discipline.'
    ],
    benefits: [
      'Hybrid schedule in our Manhattan office',
      'Comprehensive healthcare and dental coverage',
      '401(k) with company match',
      'Commuter benefit and monthly wellness allowance'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-21',
    title: 'Lead Database Administrator (PostgreSQL & CockroachDB)',
    company: 'Velox Systems',
    location: 'Dallas, TX',
    mode: 'Remote',
    level: 'Lead',
    department: 'Infrastructure',
    skills: ['PostgreSQL', 'CockroachDB', 'Query Tuning', 'HA / DR', 'WAL Archiving', 'Linux'],
    salary: '$170,000 – $210,000 / yr',
    postedHoursAgo: 72,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Manage mission-critical, petabyte-scale distributed databases. Oversee query optimization, disaster recovery replication, and zero-downtime schema migrations.',
    responsibilities: [
      'Architect distributed PostgreSQL and CockroachDB clusters with low-latency cross-region replication.',
      'Conduct performance diagnostics on slow queries, index fragmentation, and lock contention.',
      'Automate backup verification, PITR (point-in-time recovery), and failover testing.',
      'Establish database access governance, encryption at rest, and audit compliance.'
    ],
    requirements: [
      '7+ years experience administering PostgreSQL in high-transaction environments.',
      'Expertise in Linux system tuning for database workloads (I/O schedulers, huge pages, memory caches).',
      'Demonstrated experience leading major database version upgrades with zero downtime.',
      'Familiarity with distributed SQL engines.'
    ],
    benefits: [
      '100% remote with home office setup fund',
      'Top-tier health and dental insurance',
      '401(k) matching up to 5%',
      'Generous paid parental and family leave'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-22',
    title: 'Frontend Engineer (Accessibility & Design Systems)',
    company: 'Horizon Healthtech',
    location: 'Denver, CO',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Engineering',
    skills: ['React', 'Accessibility (WCAG)', 'ARIA', 'Storybook', 'TypeScript', 'CSS'],
    salary: '$120,000 – $145,000 / yr',
    postedHoursAgo: 75,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure healthcare software is accessible to everyone regardless of disability or device. Build accessible React components tested thoroughly with screen readers and keyboard navigation.',
    responsibilities: [
      'Build and document fully accessible UI components in Storybook adhering to WCAG 2.2 AA standards.',
      'Audit existing patient portals using assistive technologies (VoiceOver, NVDA, JAWS).',
      'Write automated accessibility unit tests using axe-core and Jest.',
      'Conduct accessibility workshops for engineering and design teams.'
    ],
    requirements: [
      '3+ years of front-end engineering experience with strong HTML/CSS/TypeScript fundamentals.',
      'Demonstrated practical knowledge of WAI-ARIA guidelines and screen reader testing.',
      'Experience with component libraries and documentation tools (Storybook).',
      'Passionate advocate for inclusive user design.'
    ],
    benefits: [
      'Remote flexibility throughout the United States',
      'Comprehensive medical and dental coverage',
      'Generous wellness and ergonomic equipment stipend',
      'CPACC or WAS certification sponsorship'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-23',
    title: 'Junior Data Analyst',
    company: 'QuantPulse Analytics',
    location: 'Bengaluru, India',
    mode: 'Hybrid',
    level: 'Entry-level',
    department: 'Data',
    skills: ['SQL', 'Tableau', 'Python', 'Excel', 'Data Cleaning', 'PowerBI'],
    salary: '₹7,00,000 – ₹10,50,000 / yr',
    postedHoursAgo: 80,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Transform raw business data into actionable dashboards and executive insights. Collaborate with product managers and finance leads on KPI monitoring.',
    responsibilities: [
      'Write clean SQL queries to pull and clean data from our cloud data warehouse.',
      'Build intuitive dashboards in Tableau and PowerBI for executive leadership.',
      'Assist in weekly cohort retention analyses and marketing funnel attribution.',
      'Document data definitions in our central data dictionary.'
    ],
    requirements: [
      'Bachelor degree in Mathematics, Economics, Computer Science, or equivalent experience.',
      'Strong command of SQL (joins, window functions, aggregations).',
      'Experience visualizing datasets in Tableau, PowerBI, or Metabase.',
      'Curious, detail-oriented mindset with strong problem-solving skills.'
    ],
    benefits: [
      'Hybrid work model (3 days office)',
      'Comprehensive medical insurance for employee and parents',
      'Training allowance for cloud and analytics certifications',
      'Annual performance bonus'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-24',
    title: 'Engineering Manager – Platform Infrastructure',
    company: 'LatticeWorks Software',
    location: 'San Francisco, CA',
    mode: 'Hybrid',
    level: 'Lead',
    department: 'Engineering Management',
    skills: ['People Management', 'Platform Engineering', 'Agile', 'System Architecture', 'Mentorship'],
    salary: '$220,000 – $265,000 / yr',
    postedHoursAgo: 85,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Lead and empower a team of 8 infrastructure and tooling engineers. Foster a culture of technical excellence, continuous delivery, and engineering growth.',
    responsibilities: [
      'Manage career growth, 1-on-1s, performance evaluations, and hiring for the platform team.',
      'Collaborate with staff engineers to define the 12-month technical infrastructure roadmap.',
      'Ensure high team delivery cadence while actively protecting work-life balance.',
      'Act as liaison between engineering leadership and business product managers.'
    ],
    requirements: [
      '3+ years of experience directly managing software engineering teams.',
      'Prior background as a senior individual contributor in backend or infrastructure engineering.',
      'Proven ability to hire, retain, and elevate top engineering talent.',
      'Exceptional interpersonal communication and conflict resolution skills.'
    ],
    benefits: [
      'Substantial equity grant with early liquidity opportunities',
      'Top-tier PPO/HMO health options',
      'Flexible time off and wellness days',
      'Executive coaching and leadership development'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-25',
    title: 'Product Marketing Specialist',
    company: 'Starlight Media',
    location: 'London, UK',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Marketing',
    skills: ['Product Marketing', 'Go-to-Market', 'Messaging', 'Competitive Intelligence', 'Sales Enablement'],
    salary: '£55,000 – £70,000 / yr',
    postedHoursAgo: 90,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Drive go-to-market strategies for our creator monetization features. Craft compelling messaging, launch campaigns, and customer case studies.',
    responsibilities: [
      'Develop positioning, value propositions, and messaging hierarchies for new product launches.',
      'Create high-impact product launch assets including email announcements, blogs, and sales decks.',
      'Conduct competitive intelligence audits and summarize market shifts for leadership.',
      'Partner with user research to map buyer personas and user journey pain points.'
    ],
    requirements: [
      '2+ years in product marketing within tech or digital entertainment.',
      'Superb storytelling and copywriting ability with clear attention to tone and brevity.',
      'Experience running cross-functional product launches with product and design teams.',
      'Analytical ability to measure launch campaign engagement and conversion rates.'
    ],
    benefits: [
      'Central London office with free breakfast and coffee bar',
      'Private medical and dental care',
      '25 days annual leave plus Christmas closure',
      'Annual creative learning allowance'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-26',
    title: 'Machine Learning Research Intern (Computer Vision)',
    company: 'Orbit Intelligence',
    location: 'New York, NY',
    mode: 'On-site',
    level: 'Internship',
    department: 'AI & Research',
    skills: ['PyTorch', 'Computer Vision', 'Diffusion Models', 'Python', 'NumPy'],
    salary: '$50 – $65 / hr',
    postedHoursAgo: 95,
    sources: [
      { name: 'Demo University Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Join Orbit Intelligence for a summer internship exploring generative diffusion models and vision-language integration. Publish research and collaborate with leading scientists.',
    responsibilities: [
      'Implement and benchmark novel vision-language conditioning architectures in PyTorch.',
      'Curate, preprocess, and augment large-scale image and video datasets.',
      'Run ablation experiments on multi-GPU training clusters.',
      'Co-author research findings for submission to top tier venues (CVPR, NeurIPS).'
    ],
    requirements: [
      'Enrolled in a Master’s or PhD program in Computer Science, Data Science, or related field.',
      'Demonstrated experience with PyTorch and deep learning research codebases.',
      'Familiarity with transformer architectures and modern generative models.',
      'Strong mathematical background in linear algebra and probability.'
    ],
    benefits: [
      'Competitive hourly salary plus housing relocation subsidy',
      'Direct mentorship from senior research scientists',
      'Access to dedicated GPU compute clusters',
      'Weekly research reading groups and speaker symposiums'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-27',
    title: 'Senior Solutions Architect (Enterprise Integrations)',
    company: 'Apex Fintech',
    location: 'Toronto, Canada',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Solutions Engineering',
    skills: ['Architecture Design', 'REST/gRPC', 'Fintech APIs', 'Pre-Sales', 'Cloud Architecture'],
    salary: 'CAD $155,000 – $190,000 / yr',
    postedHoursAgo: 100,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Guide enterprise financial institutions through API integration designs, security assessments, and custom high-throughput ledger deployments.',
    responsibilities: [
      'Lead technical discovery sessions and author detailed Architecture Design Documents.',
      'Address technical due diligence questions covering encryption, high availability, and compliance.',
      'Build proof-of-concept integrations demonstrating Apex APIs in client environments.',
      'Provide technical guidance to customer engineering leads throughout implementation.'
    ],
    requirements: [
      '5+ years in solutions architecture, technical consulting, or senior software engineering.',
      'Deep fluency with REST, gRPC, webhooks, and microservice integration patterns.',
      'Experience in financial technologies, payment gateways, or banking integrations.',
      'Polished communication and presentation skills in front of C-suite stakeholders.'
    ],
    benefits: [
      'Comprehensive Canadian health and dental coverage',
      'Annual incentive bonus linked to enterprise revenue milestones',
      'Flexible hybrid schedule (Toronto financial district)',
      'RRSP matching program'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-28',
    title: 'Lead Technical Recruiter',
    company: 'Pinecrest Labs',
    location: 'Remote (US)',
    mode: 'Remote',
    level: 'Senior',
    department: 'People & Talent',
    skills: ['Technical Sourcing', 'ATS (Greenhouse)', 'Candidate Experience', 'Talent Strategy'],
    salary: '$110,000 – $135,000 / yr',
    postedHoursAgo: 105,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Shape the future of Pinecrest Labs by hiring exceptional engineering, design, and product talent. Champion inclusive hiring practices and an extraordinary candidate experience.',
    responsibilities: [
      'Manage full-lifecycle recruiting across senior and staff technical roles.',
      'Partner closely with hiring managers to calibrate job scorecards and interview loops.',
      'Source diverse candidate pools through proactive outreach and community networking.',
      'Analyze recruiting funnel metrics (time to hire, pass-through rates) to improve hiring velocity.'
    ],
    requirements: [
      '4+ years technical recruiting experience in high-growth tech companies.',
      'Demonstrated track record closing competitive engineering and product candidates.',
      'High emotional intelligence and dedication to respectful candidate communication.',
      'Familiarity with modern ATS platforms (Greenhouse, Ashby).'
    ],
    benefits: [
      '100% remote with home office stipend',
      'Medical, dental, and vision insurance',
      'Unlimited paid time off with mandatory minimums',
      'Quarterly company-wide rest days'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-29',
    title: 'Senior Systems Engineer (Linux Kernel & Networking)',
    company: 'Velox Systems',
    location: 'Seattle, WA',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Infrastructure',
    skills: ['C', 'Rust', 'eBPF', 'Linux Kernel', 'TCP/IP', 'BGP'],
    salary: '$175,000 – $215,000 / yr',
    postedHoursAgo: 110,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Work at the lowest levels of our networking infrastructure. Build high-performance packet routing tools using eBPF and XDP for millisecond packet inspection.',
    responsibilities: [
      'Develop kernel-level packet filtering and DDoS mitigation utilities in C and Rust.',
      'Profile memory latency and CPU cache misses using perf and custom eBPF probes.',
      'Configure carrier-grade routing protocols (BGP, OSPF) across distributed edge PoPs.',
      'Collaborate with datacenter operations on bare-metal provisioning automation.'
    ],
    requirements: [
      '5+ years programming in C or Rust for Linux systems.',
      'Deep understanding of Linux network stack (sk_buff, XDP, TC, netfilter).',
      'Experience building low-latency or high-throughput network applications.',
      'Solid debugging skills using gdb, valgrind, and system tap.'
    ],
    benefits: [
      'Competitive compensation package with high base salary',
      'Relocation assistance available',
      'Full healthcare and retirement package',
      'Generous paid parental leave'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-30',
    title: 'Frontend Developer (Next.js & Design Tokens)',
    company: 'Starlight Media',
    location: 'Berlin, Germany',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Engineering',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Figma Tokens'],
    salary: '€62,000 – €78,000 / yr',
    postedHoursAgo: 115,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Help build the next generation of Starlight web applications. Focus on blazing fast server-rendered page loads, clean animations, and accessible component libraries.',
    responsibilities: [
      'Implement rich web applications using Next.js App Router and React Server Components.',
      'Ensure high fidelity implementation of Figma designs and micro-animations.',
      'Optimize web assets, font loading, and responsive layouts across global audiences.',
      'Write clean, typed TypeScript code with thorough test coverage.'
    ],
    requirements: [
      '3+ years experience with React and modern frontend web tooling.',
      'Experience building production applications with Next.js or Remix.',
      'Eye for design details, spacing rhythm, and fluid animations.',
      'Strong grasp of CSS layout models (Flexbox, Grid, CSS variables).'
    ],
    benefits: [
      'Remote work from anywhere within European time zones',
      'Home office hardware package',
      '28 days paid leave',
      'Annual team retreat in Europe'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-31',
    title: 'Data Privacy & Compliance Counsel',
    company: 'Horizon Healthtech',
    location: 'Washington, DC',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Legal & Compliance',
    skills: ['HIPAA', 'GDPR', 'Data Governance', 'Contract Negotiation', 'SOC 2'],
    salary: '$165,000 – $205,000 / yr',
    postedHoursAgo: 120,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Guide Horizon Healthtech through domestic and international health data regulations. Provide pragmatic legal counsel on product features, vendor agreements, and privacy by design.',
    responsibilities: [
      'Advise engineering and product teams on HIPAA, HITECH, and GDPR compliance.',
      'Draft and negotiate Business Associate Agreements (BAAs) and enterprise master services agreements.',
      'Conduct Data Protection Impact Assessments (DPIAs) for new AI-assisted diagnostics.',
      'Lead responses to regulatory audits and customer security questionnaires.'
    ],
    requirements: [
      'JD from an accredited law school and active state bar membership.',
      '4+ years practicing privacy law with emphasis on healthcare and digital health.',
      'CIPP/US, CIPP/E, or CIPM certifications highly desirable.',
      'Ability to provide actionable, business-friendly guidance.'
    ],
    benefits: [
      'Comprehensive legal bar dues and CLE conference reimbursement',
      'Generous retirement plan with matching',
      'Full healthcare and dental benefits',
      'Hybrid schedule in DC office'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-32',
    title: 'Senior iOS Engineer (Swift & SwiftUI)',
    company: 'Orbit Intelligence',
    location: 'San Francisco, CA',
    mode: 'Hybrid',
    level: 'Senior',
    department: 'Mobile',
    skills: ['Swift', 'SwiftUI', 'CoreData', 'Combine', 'App Store Release', 'Local LLMs'],
    salary: '$165,000 – $200,000 / yr',
    postedHoursAgo: 125,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Craft beautiful, native iOS applications that integrate on-device neural processing. Build fluid SwiftUI gestures, offline sync, and delightful micro-interactions.',
    responsibilities: [
      'Architect native iOS applications utilizing SwiftUI, Combine, and modern Swift concurrency.',
      'Integrate on-device machine learning models utilizing Apple CoreML and Metal.',
      'Ensure 60fps/120fps fluid scrolling, instant animations, and minimal battery consumption.',
      'Manage TestFlight distributions, automated UI tests, and App Store submissions.'
    ],
    requirements: [
      '5+ years experience building native iOS apps in Swift.',
      'Deep understanding of SwiftUI lifecycles, state management, and custom view modifiers.',
      'Experience profiling memory leaks and CPU hitches with Xcode Instruments.',
      'Portfolio of published iOS apps on the App Store.'
    ],
    benefits: [
      'Market-leading equity compensation',
      'Full healthcare coverage (medical, dental, vision)',
      'Free catered lunch and snacks in SF office',
      'Annual tech and gadget upgrade allowance'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-33',
    title: 'Technical Project Manager',
    company: 'Pinecrest Labs',
    location: 'Austin, TX',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Operations',
    skills: ['Project Management', 'Jira', 'Agile/Scrum', 'Risk Management', 'Stakeholder Comms'],
    salary: '$95,000 – $120,000 / yr',
    postedHoursAgo: 130,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure cross-functional engineering initiatives hit milestones smoothly. Facilitate sprint planning, clear dependencies, and communicate timelines to stakeholders.',
    responsibilities: [
      'Drive agile ceremonies (standups, sprint planning, retrospectives) across 3 engineering squads.',
      'Identify cross-team dependencies and proactively mitigate delivery risks.',
      'Maintain transparency through sprint burndown charts and executive milestone reports.',
      'Help refine engineering workflows to remove friction and boost morale.'
    ],
    requirements: [
      '3+ years technical project management experience in software organizations.',
      'Strong grasp of modern software development life cycles (SDLC).',
      'Proficiency with Jira, Confluence, and roadmapping software.',
      'Calm, organized, and proactive communication approach.'
    ],
    benefits: [
      'Hybrid schedule in downtown Austin',
      '401(k) matching',
      'Comprehensive medical and dental plans',
      'Company-sponsored social events and team lunches'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-34',
    title: 'Security Operations Engineer (Cloud Detection)',
    company: 'NovaWave Cloud',
    location: 'Remote (US)',
    mode: 'Remote',
    level: 'Mid-level',
    department: 'Security',
    skills: ['AWS GuardDuty', 'Splunk', 'Python', 'Incident Response', 'IAM Policies'],
    salary: '$125,000 – $155,000 / yr',
    postedHoursAgo: 135,
    sources: [
      { name: 'Demo Greenhouse Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Detect and neutralize security threats before they impact cloud customers. Build automated alerting pipelines, conduct forensic log analyses, and harden IAM perimeters.',
    responsibilities: [
      'Author automated detection logic for cloud threats using Python and AWS EventBridge.',
      'Respond to alerts, triage potential compromises, and coordinate containment.',
      'Audit least-privilege IAM policies and service control policies (SCPs).',
      'Conduct tabletop exercises to prepare engineering teams for incident readiness.'
    ],
    requirements: [
      '3+ years in cloud security or incident response on AWS or GCP.',
      'Proficiency scripting in Python or Go for automation tasks.',
      'Solid understanding of attack patterns (MITRE ATT&CK framework).',
      'Clear technical writing for post-incident summaries.'
    ],
    benefits: [
      '100% remote within North America',
      'Comprehensive health coverage',
      'Home office and internet reimbursement',
      'Annual training and security conference fund'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-35',
    title: 'Lead Product Analyst',
    company: 'Apex Fintech',
    location: 'London, UK',
    mode: 'Hybrid',
    level: 'Lead',
    department: 'Product',
    skills: ['SQL', 'Product Analytics', 'Amplitude', 'Hypothesis Testing', 'Cohort Analysis'],
    salary: '£85,000 – £105,000 / yr',
    postedHoursAgo: 140,
    sources: [
      { name: 'Demo Workable Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Empower product leadership with rigorous quantitative insights. Define user tracking schemas, analyze onboarding bottlenecks, and measure feature adoption.',
    responsibilities: [
      'Lead analytics strategy across consumer web and mobile products.',
      'Build standardized dashboards in Amplitude and Looker tracking core north-star metrics.',
      'Design sample sizes and statistical significance thresholds for product A/B tests.',
      'Mentor junior product analysts in SQL optimization and business communication.'
    ],
    requirements: [
      '5+ years experience in product analytics or business intelligence.',
      'Advanced SQL skills and experience with event-based analytics tools (Amplitude, Mixpanel).',
      'Strong statistical foundation and understanding of user behavior funnels.',
      'Track record influencing senior product strategy with data-driven narratives.'
    ],
    benefits: [
      'Hybrid model in London central office',
      'Private health and dental insurance',
      'Generous pension scheme with employer match up to 8%',
      '27 days annual leave plus UK bank holidays'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-36',
    title: 'Senior Rust Systems Developer',
    company: 'QuantPulse Analytics',
    location: 'Remote (Worldwide)',
    mode: 'Remote',
    level: 'Senior',
    department: 'Engineering',
    skills: ['Rust', 'Async IO (Tokio)', 'Zero-copy', 'Performance Profiling', 'WebSockets'],
    salary: '$160,000 – $200,000 / yr',
    postedHoursAgo: 145,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true }
    ],
    description: 'Build real-time market data ingestion engines capable of processing millions of ticks per second with predictable microsecond tail latencies.',
    responsibilities: [
      'Develop high-throughput streaming consumers in Rust using Tokio and crossbeam.',
      'Implement zero-copy memory buffers, lock-free queues, and custom serialization formats.',
      'Conduct rigorous benchmarks and flamegraph profiling to eliminate bottlenecks.',
      'Ensure memory safety and fault-tolerant network socket recovery.'
    ],
    requirements: [
      '4+ years programming in Rust or modern C++ in high-performance contexts.',
      'Deep knowledge of multi-threaded concurrency, cache coherence, and OS system calls.',
      'Experience working with binary network protocols and WebSocket streaming.',
      'Passion for extreme performance engineering.'
    ],
    benefits: [
      'Work from anywhere in the world on a flexible schedule',
      'All equipment provided (high-end workstation)',
      'Global health insurance coverage',
      'Annual co-working stipend'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-37',
    title: 'Brand & Visual Communications Designer',
    company: 'Starlight Media',
    location: 'Berlin, Germany',
    mode: 'Hybrid',
    level: 'Mid-level',
    department: 'Design',
    skills: ['Branding', 'Typography', 'Illustration', 'Motion Graphics', 'Figma', 'After Effects'],
    salary: '€50,000 – €65,000 / yr',
    postedHoursAgo: 150,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Elevate the Starlight visual identity across marketing websites, campaign graphics, social media, and conference experiences.',
    responsibilities: [
      'Create visual brand guidelines, iconography systems, and illustration styles.',
      'Design marketing landing pages and digital social campaign creative.',
      'Produce short motion graphics and kinetic typography animations for video announcements.',
      'Maintain brand asset libraries and guide external creative agencies.'
    ],
    requirements: [
      '3+ years in brand, visual, or graphic design.',
      'Strong portfolio demonstrating typography finesse, composition, and color mastery.',
      'Proficiency in Figma, Illustrator, Photoshop, and After Effects.',
      'Understanding of web design principles and responsive layouts.'
    ],
    benefits: [
      'Creative budget for fonts, software, and inspiration materials',
      'Hybrid schedule in creative Kreuzberg studio',
      '30 vacation days per year',
      'Company hardware and Wacom tablet provided'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-38',
    title: 'Cloud Cost Optimization Engineer (FinOps)',
    company: 'NovaWave Cloud',
    location: 'Remote (US)',
    mode: 'Remote',
    level: 'Senior',
    department: 'Infrastructure',
    skills: ['AWS Cost Explorer', 'Terraform', 'Kubernetes Rightsizing', 'Python', 'Datadog'],
    salary: '$145,000 – $180,000 / yr',
    postedHoursAgo: 155,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Help engineering teams build cost-efficient architectures without sacrificing performance. Analyze multi-million dollar cloud bills and automate compute rightsizing.',
    responsibilities: [
      'Analyze AWS and GCP spend to identify idle resources, over-provisioned nodes, and inefficient queries.',
      'Partner with engineering squads on architectural rightsizing and spot-instance strategies.',
      'Build automated alerting dashboards for abnormal spend spikes and anomalous resource usage.',
      'Negotiate enterprise discount programs and manage Reserved Instance/Savings Plan portfolios.'
    ],
    requirements: [
      '4+ years in cloud infrastructure with direct FinOps experience.',
      'FinOps Certified Practitioner (FOCP) or equivalent practical experience.',
      'Proficiency scripting in Python or Bash for resource tagging and cleanup automation.',
      'Strong communication skills when presenting financial trade-offs to engineers.'
    ],
    benefits: [
      '100% remote flexibility',
      'Comprehensive health benefits with employer HSA contribution',
      'Performance bonus linked to efficiency outcomes',
      '401(k) matching'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-39',
    title: 'Customer Onboarding & Implementation Specialist',
    company: 'LatticeWorks Software',
    location: 'Chicago, IL',
    mode: 'On-site',
    level: 'Entry-level',
    department: 'Customer Experience',
    skills: ['Customer Onboarding', 'SaaS Training', 'CRM', 'Problem Solving', 'Communication'],
    salary: '$60,000 – $75,000 / yr',
    postedHoursAgo: 160,
    sources: [
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Ensure new enterprise customers have a five-star onboarding experience. Walk new teams through workspace setup, user permission configuration, and best practices.',
    responsibilities: [
      'Conduct interactive onboarding webinars and setup walkthroughs for new customers.',
      'Assist customer admins with user invitations, data imports, and permission roles.',
      'Follow up on onboarding milestones to drive early product engagement and feature adoption.',
      'Document common customer onboarding roadblocks and share insights with product teams.'
    ],
    requirements: [
      '1+ years in customer success, tech onboarding, account coordination, or hospitality/retail tech.',
      'Warm, confident communication and presentation skills.',
      'Tech-savvy with the ability to quickly master web SaaS applications.',
      'High organizational discipline and prompt follow-up habits.'
    ],
    benefits: [
      'Downtown Chicago office with free snacks and daily lunch stipend',
      'Health, dental, and vision insurance coverage',
      'Generous PTO and paid holidays',
      'Career growth pathway into customer success management or sales'
    ],
    applyUrl: '#demo-apply'
  },
  {
    id: 'job-40',
    title: 'Director of Information Security (CISO Track)',
    company: 'Horizon Healthtech',
    location: 'Boston, MA',
    mode: 'Hybrid',
    level: 'Lead',
    department: 'Security & Leadership',
    skills: ['Information Security', 'SOC 2 Type II', 'HITRUST', 'Executive Leadership', 'Vendor Risk'],
    salary: '$240,000 – $295,000 / yr',
    postedHoursAgo: 168,
    sources: [
      { name: 'Demo Lever Feed', url: '#demo-source', isDemo: true },
      { name: 'Demo Career Portal', url: '#demo-source', isDemo: true }
    ],
    description: 'Lead our comprehensive information security program. Oversee healthcare regulatory audits, security governance, incident response planning, and enterprise risk management.',
    responsibilities: [
      'Lead the company-wide Information Security and Compliance strategy reporting to the CTO.',
      'Direct annual SOC 2 Type II, HITRUST, and ISO 27001 third-party audits.',
      'Oversee vendor risk management, employee security awareness, and vulnerability management.',
      'Represent company security posture during enterprise sales diligence and investor meetings.'
    ],
    requirements: [
      '8+ years in information security with 3+ years in security leadership roles.',
      'Deep domain knowledge of healthcare privacy frameworks (HIPAA, HITRUST, FedRAMP).',
      'Certifications such as CISSP, CISM, or CISA.',
      'Proven experience articulating technical risks to board members and executive stakeholders.'
    ],
    benefits: [
      'Executive equity grant',
      'Premier health, dental, and vision insurance coverage',
      'Flexible executive PTO policy',
      'Annual executive wellness exam and health concierge'
    ],
    applyUrl: '#demo-apply'
  }
];

export const POPULAR_SEARCH_TAGS = [
  'React', 'TypeScript', 'Remote', 'Python', 'Frontend', 'Full Stack', 'DevOps', 'Product Manager', 'AI / ML', 'Design Systems'
];
