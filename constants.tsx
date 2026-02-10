
import React from 'react';
import { 
  Diamond, 
  Receipt, 
  BarChart3, 
  ShieldCheck, 
  UserCircle2, 
  Globe,
  Briefcase,
  Building2,
  BookOpen,
  Scale,
  Search,
  PieChart,
  FileText
} from 'lucide-react';
import { Service, Industry, NavigationItem, TeamMember, BlogPost } from './types.ts';

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Rakesh Sodavadiya',
    designation: 'Managing Director & CEO',
    summary: 'Visionary, results-driven leader blending strategic foresight with financial governance to deliver compliant, growth-ready solutions.',
    bio: 'A seasoned CEO with extensive experience in institutional advisory, financial governance, and corporate strategy. Over the years, Rakesh has successfully guided organizations across the UAE in strengthening governance frameworks, optimizing financial performance, and driving sustainable growth. Known for blending strategic foresight with operational excellence, he delivers actionable solutions that enhance stakeholder confidence, ensure regulatory compliance, and create long-term value.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'manager-assets',
    name: 'Mitesh Savaliya',
    designation: 'Manager - Asset & Inventory',
    summary: 'Asset and inventory specialist focused on efficient governance, client retention, and transparent communication.',
    bio: 'Meet Mitesh Savaliya, an accomplished professional with extensive experience in asset and inventory management services. Known for his strong communication skills, client relationship expertise, and dedication to client retention, Mitesh consistently ensures efficient asset management while delivering exceptional service and value to every organization he works with.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'tax-compliance',
    name: 'Varsha Sharma',
    designation: 'Tax & Compliance',
    summary: 'Specialist in VAT and Corporate Tax compliance, helping businesses stay ahead of evolving UAE regulations.',
    bio: 'Varsha partners with clients to simplify VAT, Corporate Tax, and statutory compliance. She focuses on accurate filings, efficient reporting, and proactive risk mitigation so businesses can operate with confidence.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=900'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    description: 'Flexible bookkeeping solutions tailored to keep every ledger accurate and audit-ready.',
    intro: 'We provide flexible bookkeeping solutions tailored to your business needs. Our accounting services are customizable, offering both part-time and full-time engagement options to suit your operational requirements.',
    offers: [
      'Day-to-day bookkeeping and reconciliations',
      'IFRS-aligned accounting and ledger hygiene',
      'Payroll processing and WPS management',
      'MIS dashboards for decision-makers',
      'On-demand support for month- and year-end closes'
    ],
    benefits: [
      'Accurate, well-maintained financial records',
      'Engagement options that flex with your workload',
      'Cleaner data for faster reporting and filing',
      'Confidence in audit and compliance readiness'
    ],
    icon: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'financial-reports',
    title: 'Financial Reports',
    description: 'Accurate, standards-based financial statements that translate performance into clear insights.',
    intro: "We prepare accurate and comprehensive financial reports that provide clear insights into your company's financial performance and position. Our reports are prepared in accordance with applicable accounting standards, supporting informed decision-making and regulatory compliance.",
    offers: [
      'IFRS-compliant financial statements and disclosures',
      'Audit-ready working papers and reconciliations',
      'Budget vs. actual tracking and variance insights',
      'Periodic management reports and dashboards',
      'Board and investor reporting packs'
    ],
    benefits: [
      'Clarity on business performance at a glance',
      'Stakeholder-ready reports that build trust',
      'Audit and compliance readiness with clean support',
      'Data for faster, smarter decisions'
    ],
    icon: 'FileText',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning & Filing',
    description: 'Comprehensive VAT and Corporate Tax support to keep you fully compliant with UAE regulations.',
    intro: 'We provide VAT and Corporate Tax consultancy services to help businesses in Dubai and across the UAE remain fully compliant with evolving tax regulations. Our expert guidance ensures accurate tax planning, efficient reporting, and risk mitigation while supporting long-term financial stability.',
    offers: [
      'VAT and Corporate Tax registration and timely filings',
      'Scenario planning for cash flow and risk mitigation',
      'FTA/MoF correspondence and audit support',
      'Voluntary disclosure guidance',
      'Tax calendar setup and reminders for internal teams'
    ],
    benefits: [
      'Accurate reporting that reduces penalties',
      'Forward-looking planning that protects cash flow',
      'Confidence in meeting evolving UAE regulations',
      'Executive visibility into tax positions'
    ],
    icon: 'Receipt',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'aml-compliance',
    title: 'AML Compliance Service',
    description: 'Structured AML frameworks, policies, and training to keep your business aligned with UAE regulations.',
    intro: 'Our AML Compliance Services help businesses in Dubai and across the UAE meet regulatory requirements and mitigate financial crime risks. We provide structured frameworks, policies, and ongoing support to ensure adherence to UAE Anti-Money Laundering laws and regulatory guidelines.',
    offers: [
      'Gap assessment and policy framework',
      'KYC/UBO procedures and checklists',
      'GoAML registration and filing guidance',
      'Staff training and ongoing refreshers',
      'Independent AML audits and monitoring'
    ],
    benefits: [
      'Reduced regulatory and reputational risk',
      'Consistent, documented compliance workflows',
      'Confidence during inspections and inquiries',
      'Culture of vigilance across teams'
    ],
    icon: 'Search',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description: 'Reliable audit and assurance that strengthen financial credibility and stakeholder confidence.',
    intro: 'We deliver reliable audit and assurance services that enhance financial credibility and strengthen stakeholder confidence. Our experienced auditors ensure compliance, identify risks, and support sound financial governance.',
    offers: [
      'External and internal audit support',
      'Risk and controls assessment',
      'Readiness support for statutory submissions',
      'Special purpose reviews and agreed-upon procedures',
      'Management letter action plans'
    ],
    benefits: [
      'Clear view of risks and gaps',
      'Greater trust with banks, investors, and regulators',
      'Smooth statutory audit cycles',
      'Practical remediation guidance'
    ],
    icon: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory Services',
    description: 'Strategic guidance to improve performance, make informed decisions, and sustain growth.',
    icon: 'PieChart',
    intro: 'Our Business Advisory Services provide strategic guidance to help businesses make informed decisions, improve performance, and achieve sustainable growth. We partner with clients to address operational, financial, and strategic challenges effectively.',
    offers: [
      'Market entry and operating model design',
      'Cash flow optimization and working capital tuning',
      'Feasibility studies and valuations',
      'Process redesign and performance dashboards',
      'Board-level strategy workshops'
    ],
    benefits: [
      'Actionable insights tailored to your goals',
      'Improved operational efficiency and profitability',
      'Confidence in capital allocation and growth moves',
      'Collaborative partnership for long-term success'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  }
];

export const FAQS = [
  {
    question: "What are the mandatory accounting requirements for UAE companies?",
    answer: "All UAE companies, whether Mainland or Free Zone, are required to maintain proper books of accounts for a minimum of 5 years (15 years for Real Estate). Under the UAE Commercial Companies Law and Tax Law, financial records must accurately reflect the company's financial position and comply with IFRS standards."
  },
  {
    question: "Who needs to register for VAT in the UAE?",
    answer: "Businesses must register for VAT if their taxable supplies and imports exceed the mandatory threshold of AED 375,000 in the previous 12 months. Voluntary registration is available for businesses exceeding AED 187,500."
  },
  {
    question: "What is the current Corporate Tax rate in the UAE?",
    answer: "The UAE Federal Corporate Tax is set at a standard rate of 9% for taxable income exceeding AED 375,000. A 0% rate applies to taxable income up to AED 375,000 to support startups and SMEs."
  },
  {
    question: "Do Free Zone companies need to pay Corporate Tax?",
    answer: "Free Zone companies are generally 'Qualifying Free Zone Persons' and can benefit from a 0% Corporate Tax rate on qualifying income, provided they maintain adequate substance and comply with all regulatory requirements."
  },
  {
    question: "What is Economic Substance Regulation (ESR)?",
    answer: "ESR requires UAE onshore and free zone companies that carry out certain 'Relevant Activities' to have actual economic substance in the UAE. This involves demonstrating that the core income-generating activities are performed within the country."
  },
  {
    question: "How often should a company conduct an internal audit?",
    answer: "While statutory audits are annual, we recommend quarterly internal audits for growing entities. This ensures ongoing compliance, identifies operational gaps early, and prepares the firm for the final year-end external audit."
  },
  {
    question: "What are the penalties for VAT non-compliance?",
    answer: "Penalties for VAT non-compliance in the UAE can be severe, ranging from AED 10,000 for failure to keep records to AED 50,000 for repeated late filings. Serious tax evasion can result in even higher fines based on the tax amount."
  },
  {
    question: "What is the goAML portal?",
    answer: "GoAML is an integrated software application launched by the UAE Financial Intelligence Unit to collect and analyze reports on suspicious transactions. Businesses in regulated sectors (DNFBPs) must register and report suspicious activities via this portal."
  },
  {
    question: "Can a company outsource its entire accounting department?",
    answer: "Yes, VR GLOBAL specializes in outsourced accounting. This allows businesses to access senior-level expertise (CFO, Senior Accountants) at a fraction of the cost of a full-time in-house team, while ensuring full compliance with UAE laws."
  },
  {
    question: "What is a 'Qualifying Free Zone Person'?",
    answer: "A Qualifying Free Zone Person (QFZP) is an entity that meets specific conditions under the Corporate Tax Law, including maintaining adequate substance, deriving 'Qualifying Income,' and not opting to be subject to the standard 9% tax."
  },
  {
    question: "Are there specific audit requirements for DMCC companies?",
    answer: "Yes, DMCC (Dubai Multi Commodities Centre) requires all member companies to submit an annual audited financial statement within 90 days from the end of their financial year. The audit must be conducted by a DMCC-approved auditor."
  },
  {
    question: "What is the threshold for mandatory VAT registration?",
    answer: "The mandatory registration threshold is AED 375,000. The threshold is calculated based on taxable supplies (taxable at 5% or 0%) and imports over the last 12 months or the next 30 days."
  },
  {
    question: "How does UAE Corporate Tax impact individual salaries?",
    answer: "UAE Corporate Tax does not apply to an individual's personal income from employment, such as salaries, allowances, or bonuses. It primarily targets the net profit of businesses and commercial activities."
  },
  {
    question: "What documents are required for VAT registration?",
    answer: "Requirements include the Trade License, Passport/Emirates ID of owners/managers, Memorandum of Association (MOA), bank account details, and a statement of income/expenses for the last 12 months."
  },
  {
    question: "What is Transfer Pricing in the context of UAE tax?",
    answer: "Transfer Pricing regulations ensure that transactions between related parties (e.g., sister companies) are conducted at 'Arm's Length'—meaning prices should be the same as if the transaction were with an unrelated third party."
  },
  {
    question: "How can VR Global help with feasibility studies?",
    answer: "We provide data-driven feasibility studies for new ventures or expansions. This includes market analysis, financial projections, break-even analysis, and risk assessment to ensure institutional confidence before capital commitment."
  },
  {
    question: "What is the importance of IFRS standards in the UAE?",
    answer: "IFRS (International Financial Reporting Standards) is the mandatory reporting framework in the UAE. It ensures that financial statements are transparent, comparable, and meet the requirements of international banks and investors."
  },
  {
    question: "Can a Mainland company trade with a Free Zone company?",
    answer: "Yes, but there are specific VAT and Corporate Tax implications depending on the nature of the goods or services. Generally, the supply of goods from a Free Zone to the Mainland is treated as an import."
  },
  {
    question: "What is the 'Small Business Relief' in UAE Corporate Tax?",
    answer: "Small Business Relief allows eligible UAE-resident businesses with gross revenue below AED 3 million in a tax period to be treated as having no taxable income, thereby exempting them from the 9% tax for that period."
  },
  {
    question: "How long should financial records be maintained in the UAE?",
    answer: "Under UAE law, records must generally be kept for 5 years from the end of the tax period. However, Real Estate related records must be kept for 15 years. We recommend digital archiving for long-term security."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Navigating UAE Corporate Tax: A Comprehensive 2024 Guide",
    category: "Corporate Tax",
    date: "March 15, 2024",
    excerpt: "An in-depth analysis of the new 9% Corporate Tax regime and its implications for Mainland and Free Zone entities in the UAE.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
    content: {
      sections: [
        {
          title: "The New Fiscal Era",
          text: "The introduction of a 9% federal Corporate Tax marks a significant evolution in the UAE's economic landscape. Every mainland and Free Zone entity must now evaluate their taxable nexus and transfer pricing strategies."
        },
        {
          title: "Qualifying Free Zone Status",
          text: "Qualifying Free Zone Persons (QFZP) may continue to benefit from a 0% rate on qualifying income, provided they meet strict economic substance requirements and MoF guidelines."
        }
      ],
      keyTakeaways: [
        "9% Standard Tax Rate for profits over AED 375,000",
        "Mandatory FTA registration for all legal entities",
        "Small Business Relief threshold of AED 3 Million"
      ]
    }
  },
  {
    id: 2,
    title: "VAT Updates in UAE: Recent FTA Circulars Explained",
    category: "VAT Updates",
    date: "March 01, 2024",
    excerpt: "Stay updated with the latest VAT amendments and procedural changes issued by the Federal Tax Authority for international trade.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read",
    content: {
      sections: [
        {
          title: "Administrative Fine Amendments",
          text: "The Federal Tax Authority has revised various administrative penalties to support taxpayers, emphasizing transparency and compliance over punitive measures."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Accounting Best Practices for Dubai Scaling Enterprises",
    category: "Best Practices",
    date: "February 12, 2024",
    excerpt: "Effective bookkeeping strategies and MIS reporting frameworks to drive financial clarity and investor confidence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
    content: {
      sections: [
        {
          title: "Cloud-Based Precision",
          text: "Modern scaling enterprises in Dubai are moving away from legacy systems toward cloud-integrated accounting (Xero, QuickBooks) to ensure real-time financial oversight."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Business Compliance: Managing GoAML and DNFBP Requirements",
    category: "Compliance Tips",
    date: "January 25, 2024",
    excerpt: "Crucial compliance tips for designated non-financial businesses to navigate the UAE's strict AML and CFT regulations.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    readTime: "7 min read",
    content: {
      sections: [
        {
          title: "The GoAML Mandate",
          text: "Registration on the GoAML portal is a mandatory requirement for DNFBPs, including accountants, auditors, and real estate agents, to report suspicious transactions effectively."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Economic Substance Regulation (ESR) Compliance: Are You Ready?",
    category: "Regulatory Alert",
    date: "April 10, 2024",
    excerpt: "Understanding the nuances of ESR filing and the 'Relevant Activities' that trigger mandatory economic substance reporting in the UAE.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200",
    readTime: "9 min read",
    content: {
      sections: [
        {
          title: "The Substance Requirement",
          text: "ESR is designed to prevent base erosion and profit shifting. UAE entities must demonstrate that their Core Income Generating Activities (CIGA) are being managed and performed within the country."
        },
        {
          title: "Relevant Activities Defined",
          text: "Banking, Insurance, Fund Management, Lease-Finance, Headquarters, Shipping, Holding Company, Intellectual Property, and Distribution & Service Center businesses are all subject to ESR."
        }
      ],
      keyTakeaways: [
        "Annual ESR Notification is mandatory for all licensees",
        "Substance Report required if Relevant Activity income is derived",
        "Non-compliance results in significant administrative fines"
      ]
    }
  },
  {
    id: 6,
    title: "Strategic Wealth Structuring for High-Net-Worth Individuals",
    category: "Wealth Advisory",
    date: "April 22, 2024",
    excerpt: "Exploring family office structures, foundations, and trust arrangements within the UAE to protect multi-generational assets.",
    image: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?auto=format&fit=crop&q=80&w=1200",
    readTime: "11 min read",
    content: {
      sections: [
        {
          title: "The Rise of Foundations",
          text: "With the introduction of DIFC and ADGM Foundations, high-net-worth families now have robust local mechanisms for succession planning and asset protection without relying on offshore jurisdictions."
        },
        {
          title: "Corporate Tax and Private Wealth",
          text: "The new tax regime has specific implications for family offices and holding companies, necessitating a review of legal structures to maintain qualifying tax status."
        }
      ],
      keyTakeaways: [
        "ADGM and DIFC Foundations offer tier-1 asset protection",
        "Succession planning avoids Sharia-based inheritance complexity",
        "Tax optimization through consolidated group reporting"
      ]
    }
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'corporates',
    name: 'MNCs & Corporates',
    description: 'Providing robust financial architecture for established local and international corporations.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'startups',
    name: 'SMEs & Startups',
    description: 'Nurturing growth with scalable accounting and strategic CFO leadership.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Hospitality',
    description: 'Specialized accounting for Dubai’s premier developers and luxury hospitality brands.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'commodities',
    name: 'Commodities Trading',
    description: 'High-value trade support for gold, diamond, and energy desks in DMCC.',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=2000'
  }
];

export const ALL_PROJECT_IMAGES = [
  'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
  ...SERVICES.map(s => s.imageUrl).filter(Boolean) as string[],
  ...INDUSTRIES.map(i => i.image).filter(Boolean) as string[],
  ...BLOG_POSTS.map(b => b.image),
  ...TEAM_MEMBERS.map(t => t.image)
];

export const SERVICE_ICONS: Record<string, React.ElementType> = {
  Diamond,
  Receipt,
  BarChart3,
  ShieldCheck,
  UserCircle2,
  Globe,
  Briefcase,
  Building2,
  BookOpen,
  Scale,
  Search,
  PieChart,
  FileText
};
