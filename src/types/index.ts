export type Currency = 'KES' | 'USD';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  basePriceKES: number;
  basePriceUSD: number;
  turnaroundWeeks: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'web-apps' | 'ecommerce' | 'crm-systems' | 'fintech';
  categoryLabel: string;
  client: string;
  location: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
}

export interface EstimatorServiceOption {
  id: string;
  name: string;
  description: string;
  baseCostKES: number;
  baseCostUSD: number;
  baseWeeks: number;
}

export interface EstimatorFeatureOption {
  id: string;
  name: string;
  description: string;
  costKES: number;
  costUSD: number;
  weeks: number;
  recommendedFor?: string[];
}

export interface AuditResult {
  url: string;
  overallScore: number;
  performanceScore: number;
  seoScore: number;
  mobileScore: number;
  securityScore: number;
  metrics: {
    firstContentfulPaint: string;
    largestContentfulPaint: string;
    speedIndex: string;
    cumulativeLayoutShift: string;
    sslActive: boolean;
    mobileViewport: boolean;
    metaTitleStatus: 'optimal' | 'warning' | 'missing';
    schemaStructuredData: boolean;
    sitemapFound: boolean;
  };
  recommendations: {
    category: string;
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
  }[];
}

export interface BookingSubmission {
  meetingType: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName: string;
  preferredChannel: 'google-meet' | 'whatsapp' | 'in-person';
  projectSummary: string;
}
