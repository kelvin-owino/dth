import { ServiceItem, ProjectCaseStudy, EstimatorServiceOption, EstimatorFeatureOption } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Custom Web & SaaS Development',
    shortDesc: 'High-speed, scalable web applications built with modern architectures designed for conversion and velocity.',
    fullDesc: 'We architect bespoke digital products, single-page applications, and high-load web systems using React 19, Next.js, TypeScript, and modern edge infrastructure. Every system is built mobile-first, fully responsive, and audited for sub-second page loads.',
    icon: 'Code2',
    basePriceKES: 95000,
    basePriceUSD: 750,
    turnaroundWeeks: '3 - 6 weeks',
    deliverables: [
      'Interactive React/Next.js frontend with clean typography & fluid micro-interactions',
      'Robust backend APIs (Node.js/Express, Python FastAPI, or Serverless)',
      'Automated CI/CD deployment pipelines on Vercel, AWS, or Cloudflare',
      'Full database schema modeling (PostgreSQL / Redis) & caching',
      'Complete accessibility compliance (WCAG 2.1 AA) and Core Web Vitals guarantees'
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    idealFor: 'Growing startups, scale-ups, corporate brands, and professional services looking to outperform competitors.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & M-Pesa Gateways',
    shortDesc: 'Frictionless storefronts with instant M-Pesa STK Push, Card payments, inventory synchronization, and logistics dispatch.',
    fullDesc: 'We build high-converting e-commerce experiences tailored to East African and global consumer behavior. From custom headless commerce to hardened Shopify Plus builds, our platforms eliminate checkout drop-offs with seamless Daraja M-Pesa STK Push, Pesapal, Stripe, and PayPal.',
    icon: 'ShoppingCart',
    basePriceKES: 85000,
    basePriceUSD: 650,
    turnaroundWeeks: '2 - 5 weeks',
    deliverables: [
      'Instant Safaricom M-Pesa STK Push & C2B webhook validation',
      'Multi-currency checkout (KES, USD, GBP, EUR) with live exchange rates',
      'Automated WhatsApp/SMS order notifications to customer & fulfillment center',
      'Abandoned cart recovery workflows and dynamic discount engines',
      'Inventory, coupon codes, and shipping rate calculations'
    ],
    techStack: ['Shopify Plus', 'WooCommerce', 'Next.js Commerce', 'M-Pesa Daraja API', 'Stripe', 'Redis'],
    idealFor: 'Retailers, DTC brands, FMCG distributors, and African exporters expanding globally.'
  },
  {
    id: 'crm-systems',
    title: 'Custom CRM & Internal Systems',
    shortDesc: 'Eliminate spreadsheets with custom role-based dashboards, sales pipelines, client portals, and automated operations.',
    fullDesc: 'Off-the-shelf software often forces you into rigid workflows. We engineer tailor-made CRM, ERP, and operations management portals that mirror your exact business processes, complete with granular staff roles, PDF invoice generation, and audit trails.',
    icon: 'Layers',
    basePriceKES: 120000,
    basePriceUSD: 950,
    turnaroundWeeks: '4 - 8 weeks',
    deliverables: [
      'Role-based access control (Super Admin, Manager, Agent, Client Portal)',
      'Custom lead-capture pipelines with automatic task assignments',
      'One-click PDF quotes, proforma invoices, and automated M-Pesa receipting',
      'Interactive real-time charts and KPI telemetry dashboards',
      'Secure export to Excel/CSV and scheduled email digest reports'
    ],
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Prisma / Drizzle', 'Express', 'Tailwind UI'],
    idealFor: 'Logistics firms, real estate agencies, law offices, medical practices, and B2B service providers.'
  },
  {
    id: 'seo-performance',
    title: 'Technical SEO & Search Dominance',
    shortDesc: 'Data-driven on-page architecture, Schema markup, and speed optimization that rank your business on Google Page 1.',
    fullDesc: 'Search rankings are driven by technical precision: semantic HTML5, fast Time to First Byte (TTFB), structured JSON-LD schemas, and strategic keyword clustering. We optimize your web infrastructure so Google indexes and prioritizes your domain over competitors.',
    icon: 'Search',
    basePriceKES: 45000,
    basePriceUSD: 350,
    turnaroundWeeks: '1 - 3 weeks',
    deliverables: [
      'Comprehensive Core Web Vitals audit & code minification (90+ mobile Lighthouse score)',
      'Rich Google Rich Snippets & JSON-LD structured data implementation',
      'Local SEO setup (Google Business Profile, Nairobi & regional citations)',
      'Competitor keyword gap analysis and content architecture blueprint',
      'XML sitemaps, canonical tags, robots.txt, and 301 redirect map'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Lighthouse Engine', 'Schema.org', 'Cloudflare Edge'],
    idealFor: 'Local businesses seeking Nairobi/regional dominance, e-commerce stores, and high-ticket service firms.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Conversion CRO',
    shortDesc: 'High-ROI performance advertising, landing page conversion funnels, and data analytics attribution.',
    fullDesc: 'Traffic without conversion is vanity. We combine strategic Google Ads, Meta advertising, and high-converting landing page design with precise Google Analytics 4 (GA4) event tracking to scale your qualified customer acquisition.',
    icon: 'TrendingUp',
    basePriceKES: 55000,
    basePriceUSD: 420,
    turnaroundWeeks: 'Ongoing / 2 weeks setup',
    deliverables: [
      'High-converting landing page design with A/B variant testing',
      'Full GA4, Meta Pixel, and Google Tag Manager conversion tracking setup',
      'Targeted search & social ad campaigns with granular audience targeting',
      'Automated email nurture sequences and WhatsApp re-engagement flows',
      'Monthly performance audit with transparent cost-per-lead reporting'
    ],
    techStack: ['Google Ads', 'Meta Business Suite', 'GA4', 'Google Tag Manager', 'Mailchimp / Resend'],
    idealFor: 'Businesses with established products ready to accelerate monthly revenue and lead generation.'
  },
  {
    id: 'ai-solutions',
    title: 'AI Integrations & Smart Automation',
    shortDesc: 'Integrate conversational intelligence, Gemini LLM workflows, automated customer service, and document triage.',
    fullDesc: 'Empower your customer support and internal teams with specialized AI agents. We safely integrate generative AI models (Gemini 2.5/Flash, Claude, OpenAI) into your existing databases to provide 24/7 accurate customer assistance and automated data processing.',
    icon: 'Sparkles',
    basePriceKES: 80000,
    basePriceUSD: 600,
    turnaroundWeeks: '2 - 4 weeks',
    deliverables: [
      'Custom AI Knowledge Base assistant trained on your company FAQs & docs',
      'Direct WhatsApp chatbot integration with human handoff fallback',
      'Automated document data extraction (receipts, contracts, invoices)',
      'Smart customer query routing and automated support ticket generation',
      'Strict safety guardrails and privacy protections for company data'
    ],
    techStack: ['Gemini 2.5 API', 'LangChain', 'Python', 'Vector DB', 'WhatsApp Cloud API'],
    idealFor: 'Companies handling high-volume customer inquiries, support requests, or repetitive document parsing.'
  }
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'safaripay',
    title: 'SafariPay Checkout & Merchant Hub',
    category: 'fintech',
    categoryLabel: 'FinTech & Payments',
    client: 'SafariPay Africa Ltd',
    location: 'Nairobi, Kenya',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    summary: 'A unified merchant gateway and instant STK Push settlement portal serving over 40,000 monthly transactions across East Africa.',
    challenge: 'Existing payment flow required manual payment confirmations via SMS, leading to an 18% cart abandonment rate and delayed order fulfillment.',
    solution: 'Engineered an automated Daraja M-Pesa STK Push engine with fallback QR codes, instant webhook verification, and an analytics dashboard for merchant transaction reconciliation.',
    metrics: [
      { label: 'Drop-off Reduction', value: '-84%' },
      { label: 'Monthly Volume', value: '40,000+' },
      { label: 'Settlement Time', value: '< 2.4 sec' },
      { label: 'System Uptime', value: '99.98%' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Safaricom Daraja API', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://safaripay-demo.domaintechhub.com',
    featured: true
  },
  {
    id: 'kifaru-logistics',
    title: 'Kifaru Fleet & Freight Management ERP',
    category: 'crm-systems',
    categoryLabel: 'Custom CRM & ERP',
    client: 'Kifaru Logistics Network',
    location: 'Mombasa / Nairobi Corridor',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Comprehensive logistics ERP with live GPS vehicle dispatch, fuel logging, automated waybill generation, and client tracking links.',
    challenge: 'Dispatchers managed over 85 commercial trucks using scattered WhatsApp groups and manual spreadsheets, causing dispatch delays and lost consignment records.',
    solution: 'Designed and deployed a responsive, role-based cloud system connecting drivers via mobile web, dispatchers in the control room, and corporate cargo owners.',
    metrics: [
      { label: 'Dispatch Velocity', value: '+310%' },
      { label: 'Paperwork Eliminated', value: '100%' },
      { label: 'Fleet Managed', value: '85+ Trucks' },
      { label: 'Fuel Discrepancies', value: '-92%' }
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Google Maps API', 'Twilio SMS'],
    liveUrl: 'https://kifaru-demo.domaintechhub.com',
    featured: true
  },
  {
    id: 'serengeti-luxe',
    title: 'Serengeti Luxe Living E-Store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    client: 'Serengeti Luxe Interiors',
    location: 'Karen, Nairobi & Export',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke artisan furniture & interior decor brand storefront featuring 3D room visualization, M-Pesa express, and international DHL shipping.',
    challenge: 'High-ticket buyers hesitated to purchase luxury furniture online without clear scale representation and straightforward checkout methods.',
    solution: 'Crafted a clean minimalist editorial storefront with custom material selectors, instant room-scale previews, and one-tap checkout in KES and USD.',
    metrics: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Average Order Value', value: '+45%' },
      { label: 'Mobile Page Speed', value: '98 / 100' },
      { label: 'International Sales', value: '38%' }
    ],
    techStack: ['Shopify Plus', 'Liquid / Next.js', 'Tailwind CSS', 'M-Pesa STK', 'Stripe'],
    liveUrl: 'https://serengeti-demo.domaintechhub.com',
    featured: true
  },
  {
    id: 'amani-health',
    title: 'Amani Health Telemedicine Web App',
    category: 'web-apps',
    categoryLabel: 'Web Apps & SaaS',
    client: 'Amani Healthcare Alliance',
    location: 'Nairobi & Kampala',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Telehealth consultation portal enabling remote video appointments, digital prescriptions, and direct pharmacy fulfillment across Kenya.',
    challenge: 'Patients in remote towns struggled to access top medical specialists without making costly 6-hour trips to Nairobi hospitals.',
    solution: 'Built a lightweight, low-bandwidth video consultation web app with automated SMS appointment reminders and M-Pesa payment escrow.',
    metrics: [
      { label: 'Patient Consults', value: '18,500+' },
      { label: 'Avg Wait Time', value: '< 6 mins' },
      { label: 'Bandwidth Footprint', value: '< 200KB' },
      { label: 'Patient Rating', value: '4.95 / 5' }
    ],
    techStack: ['React 19', 'WebRTC', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'AfricasTalking'],
    liveUrl: 'https://amanihealth-demo.domaintechhub.com',
    featured: false
  },
  {
    id: 'boma-heights',
    title: 'Boma Heights Real Estate Portal',
    category: 'web-apps',
    categoryLabel: 'Web Apps & SaaS',
    client: 'Boma Premier Developers',
    location: 'Westlands, Nairobi',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    summary: 'Commercial and luxury residential property portal with interactive 3D floorplans, WhatsApp tour booking, and mortgage calculator.',
    challenge: 'Traditional static PDF brochures were ignored and generated low-quality leads for premier real estate developments in Nairobi.',
    solution: 'Engineered an interactive property showcase with dynamic unit availability, virtual tours, and automated qualification questionnaires.',
    metrics: [
      { label: 'Qualified Leads', value: '+240%' },
      { label: 'Tour Booking Rate', value: '18.2%' },
      { label: 'Time On Site', value: '4m 32s' },
      { label: 'Units Sold Out', value: '9 Weeks' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Supabase'],
    liveUrl: 'https://boma-demo.domaintechhub.com',
    featured: false
  },
  {
    id: 'zuri-organics',
    title: 'Zuri Organics Global B2B Export',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    client: 'Zuri Agri-Export Kenya',
    location: 'Nairobi & London',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    summary: 'B2B international wholesale platform for specialty Kenyan coffee, tea, and macadamia with live freight quote calculator.',
    challenge: 'International buyers faced complicated quotation timelines and lacked transparent customs certification verification.',
    solution: 'Built an enterprise wholesale portal with volume tiered pricing, instant container freight estimation, and verified phytosanitary certificates.',
    metrics: [
      { label: 'B2B Inquiries', value: '+180%' },
      { label: 'Deal Close Time', value: '12d vs 45d' },
      { label: 'Export Destinations', value: '14 Countries' },
      { label: 'Annual Contract Vol', value: '$1.4M+' }
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe B2B', 'SendGrid'],
    liveUrl: 'https://zuriorganics-demo.domaintechhub.com',
    featured: false
  }
];

export const ESTIMATOR_SERVICES: EstimatorServiceOption[] = [
  {
    id: 'custom-web',
    name: 'Custom Web Application',
    description: 'High-performance interactive web app or SaaS MVP built with React / Next.js',
    baseCostKES: 85000,
    baseCostUSD: 650,
    baseWeeks: 3
  },
  {
    id: 'ecommerce-store',
    name: 'E-Commerce & Online Store',
    description: 'Complete online shop with cart, inventory, M-Pesa STK Push, and card payments',
    baseCostKES: 80000,
    baseCostUSD: 600,
    baseWeeks: 3
  },
  {
    id: 'crm-erp',
    name: 'Custom CRM & Operations Portal',
    description: 'Tailored staff dashboard, client management, invoices, and workflow automation',
    baseCostKES: 110000,
    baseCostUSD: 850,
    baseWeeks: 4
  },
  {
    id: 'corporate-brand',
    name: 'Corporate Brand Website',
    description: 'Showcase your company credibility, services, team, and lead capture funnels',
    baseCostKES: 55000,
    baseCostUSD: 420,
    baseWeeks: 2
  }
];

export const ESTIMATOR_SCALE_TIERS = [
  {
    id: 'startup',
    name: 'Startup / MVP',
    multiplier: 1.0,
    weeksAdd: 0,
    description: 'Core functional requirements to launch fast and validate your business.'
  },
  {
    id: 'growth',
    name: 'Growth Scale',
    multiplier: 1.4,
    weeksAdd: 1.5,
    description: 'Deeper feature sets, advanced animations, third-party integrations, and automated pipelines.'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Grade',
    multiplier: 2.1,
    weeksAdd: 3,
    description: 'High concurrency, multi-tenant roles, strict security compliance, and custom reporting.'
  }
];

export const ESTIMATOR_FEATURES: EstimatorFeatureOption[] = [
  {
    id: 'mpesa-daraja',
    name: 'M-Pesa STK Push & Daraja API',
    description: 'Instant mobile payment trigger on customer phone with automated reconciliation',
    costKES: 25000,
    costUSD: 190,
    weeks: 0.5,
    recommendedFor: ['ecommerce-store', 'custom-web']
  },
  {
    id: 'user-auth-roles',
    name: 'User Accounts & Role Permissions',
    description: 'JWT / OAuth authentication, password reset, admin vs staff vs client privilege tiers',
    costKES: 20000,
    costUSD: 150,
    weeks: 0.5,
    recommendedFor: ['custom-web', 'crm-erp']
  },
  {
    id: 'ai-smart-bot',
    name: 'AI Smart Assistant / Chatbot',
    description: 'Gemini LLM-powered conversational agent trained on your business documents',
    costKES: 35000,
    costUSD: 270,
    weeks: 1,
    recommendedFor: ['custom-web', 'corporate-brand', 'ecommerce-store']
  },
  {
    id: 'seo-audit-bundle',
    name: 'Advanced SEO & Schema Architecture',
    description: 'Technical on-page SEO, rich snippets, Core Web Vitals optimization, and XML sitemaps',
    costKES: 18000,
    costUSD: 140,
    weeks: 0.5
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Business API Integration',
    description: 'Automated order confirmations, appointment alerts, and customer chat dispatch',
    costKES: 22000,
    costUSD: 170,
    weeks: 0.5
  },
  {
    id: 'analytics-dashboard',
    name: 'Custom Telemetry & Reporting Dashboard',
    description: 'Interactive real-time visual charts, PDF report export, and CSV download',
    costKES: 30000,
    costUSD: 230,
    weeks: 1,
    recommendedFor: ['crm-erp', 'custom-web']
  },
  {
    id: 'multi-currency',
    name: 'Multi-Currency & Geolocation Pricing',
    description: 'Automatic detection of visitor country with price switching (KES, USD, GBP, EUR)',
    costKES: 15000,
    costUSD: 115,
    weeks: 0.5
  }
];

export const TESTIMONIALS = [
  {
    quote: "Domain Tech Hub completely transformed how we process payments. Their Daraja M-Pesa integration reduced our checkout drop-off rate by over 80%. We've processed tens of millions of shillings without a single hitch.",
    author: "Evans Mwangi",
    role: "Head of Product",
    company: "SafariPay Africa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verifiedProject: "FinTech Gateway & Merchant Dashboard"
  },
  {
    quote: "We replaced three disjointed software subscriptions with one custom CRM built specifically for our East Africa trucking routes. The turnaround was under 6 weeks and our dispatchers couldn't be happier.",
    author: "Amina Al-Harthy",
    role: "Managing Director",
    company: "Kifaru Logistics Network",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    verifiedProject: "Fleet Management ERP"
  },
  {
    quote: "Their technical SEO work was remarkable. Within 45 days, our luxury furniture store was ranking on Page 1 for 'contemporary living Nairobi' and 'custom furniture Kenya', directly generating high-value walk-ins and web sales.",
    author: "David Kariuki",
    role: "Co-Founder & Creative Director",
    company: "Serengeti Luxe Living",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    verifiedProject: "E-Commerce & Technical SEO Overhaul"
  }
];

export const FAQS = [
  {
    question: "Where is Domain Tech Hub located and can we meet in person?",
    answer: "Our physical headquarters is in Westlands, Nairobi, Kenya (Commercial Center, Chiromo Road). We regularly host clients for in-person project discovery sessions and strategy workshops. We also collaborate remotely with clients across the UK, United States, UAE, and continental Africa via Google Meet and dedicated Slack/WhatsApp channels."
  },
  {
    question: "How do your payments and milestone contracts work?",
    answer: "We believe in transparent, low-risk collaboration. Most projects are broken into standard milestone phases: 40% upfront commencement deposit, 30% upon approval of interactive staging environment, and 30% upon live deployment and training sign-off. We accept direct Bank Wire, M-Pesa Lipa na Bonga/Paybill, and Stripe/Credit Card."
  },
  {
    question: "Can you integrate Safaricom M-Pesa STK Push into our existing website?",
    answer: "Yes, absolutely! We specialize in direct Safaricom Daraja 2.0 API integrations. We can add instant STK Push, Paybill, Till number C2B, and automated B2C payout capabilities to any custom website, WooCommerce, Shopify, or mobile application."
  },
  {
    question: "Do you provide ongoing maintenance and post-launch support?",
    answer: "Every project built by Domain Tech Hub includes 30 to 60 days of complimentary post-launch bug warranty and monitoring. After launch, we offer flexible Monthly Support SLAs that cover server uptime, automated backups, security patches, speed optimizations, and feature updates."
  },
  {
    question: "How long does a typical project take from kick-off to launch?",
    answer: "A standard brand website or landing page takes approximately 2 to 3 weeks. A full custom e-commerce portal or web app typically takes 4 to 6 weeks. Complex enterprise CRM or multi-role software takes 6 to 10 weeks. We provide clear weekly sprint milestones so you always know exact delivery dates."
  },
  {
    question: "Will our website be mobile-responsive and fast on Kenyan mobile networks?",
    answer: "100%. Over 80% of web traffic in Kenya and Africa comes through smartphones. We engineer every application to load in under 1.2 seconds even on standard 3G/4G connections, using image compression, edge CDNs, and zero bloated plugins."
  }
];
