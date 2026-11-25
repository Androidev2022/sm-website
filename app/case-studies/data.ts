export type CaseStudy = {
  slug: string;
  category: string;
  tag: string;
  tagColor: string;
  /** Short title used on the listing card */
  title: string;
  /** Long title used on the detail page hero */
  heroTitle: string;
  description: string;
  heroDescription: string;
  image: string;
  /** First 4 show on the listing card, all 5 show on the detail page */
  metrics: { value: string; label: string }[];
  duration: string;
  services: string;
  client: string;
  industry: string;
  engagementType: string;
  liveUrl?: string;
  /** Optional long-form write-up (e.g. the full Tefal story) */
  fullStoryHref?: string;
  story: {
    challenge: string;
    approach: string;
    solution: string;
    technology: string;
    results: string;
  };
  techStack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tefal-india",
    category: "E-Commerce",
    tag: "E-Commerce",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    title: "E-Commerce Growth Boost for Tefal India",
    heroTitle: "Digital Experience Optimization for Tefal India",
    description:
      "Redesigned the shopping journey, improved product discoverability and optimised checkout to drive double-digit conversion growth across the D2C store.",
    heroDescription:
      "Enhancing user journeys, product discoverability, and driving double-digit growth for India's leading cookware and small appliances brand.",
    image: "/images/tefal-hero-mockup.png",
    metrics: [
      { value: "+156%", label: "Organic Traffic" },
      { value: "+142%", label: "E-commerce Revenue" },
      { value: "+87%", label: "Conversion Rate" },
      { value: "+65%", label: "Keyword Rankings" },
      { value: "4.9/5", label: "Client Happiness" },
    ],
    duration: "6 Months",
    services: "SEO, CRO, Content Marketing",
    client: "Tefal India",
    industry: "Home & Kitchen",
    engagementType: "Audit & Redesign",
    liveUrl: "https://www.tefal.co.in",
    fullStoryHref: "/casedetails",
    story: {
      challenge:
        "Low product discoverability and complex user journeys were impacting engagement and conversions.",
      approach:
        "We followed a research-led, user-first approach to simplify journeys and optimize every touchpoint.",
      solution:
        "A modern, scalable digital experience built for discovery, engagement and seamless commerce.",
      technology:
        "A future-ready technology stack ensuring performance, scalability and continuous optimization.",
      results:
        "Measurable improvements across traffic, revenue, and key engagement metrics.",
    },
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "MySQL", "AWS", "Cloudflare", "Redis", "Google Analytics", "Sentry"],
  },
  {
    slug: "saas-lead-gen",
    category: "SaaS",
    tag: "SaaS",
    tagColor: "bg-violet-50 text-violet-600 border-violet-100",
    title: "SaaS Lead Generation for a B2B Platform",
    heroTitle: "Scaling Qualified Pipeline for a B2B SaaS Platform",
    description:
      "Built a full-funnel acquisition engine with high-intent landing pages and paid campaigns that lowered acquisition costs while scaling qualified demos.",
    heroDescription:
      "A full-funnel acquisition engine that tripled qualified demos while cutting cost per lead for a fast-growing B2B platform.",
    image: "/images/interface-showcase.png",
    metrics: [
      { value: "+230%", label: "Qualified Leads" },
      { value: "+180%", label: "Demo Bookings" },
      { value: "-40%", label: "Cost per Lead" },
      { value: "+75%", label: "Pipeline Value" },
      { value: "4.8/5", label: "Client Happiness" },
    ],
    duration: "4 Months",
    services: "PPC, Landing Pages, Analytics",
    client: "B2B SaaS Platform",
    industry: "Software",
    engagementType: "Growth Marketing",
    story: {
      challenge:
        "High acquisition costs and low-intent traffic meant sales spent time on leads that never converted.",
      approach:
        "We mapped the buyer journey, identified high-intent segments and built a test-and-learn campaign plan.",
      solution:
        "Persona-led landing pages, paid search and retargeting tied together with clean conversion tracking.",
      technology:
        "Headless landing pages, CRM integration and analytics dashboards for real-time funnel visibility.",
      results:
        "More qualified demos at a lower cost, with a predictable, scalable pipeline.",
    },
    techStack: ["Next.js", "TypeScript", "HubSpot", "Google Ads", "LinkedIn Ads", "Google Analytics", "Vercel"],
  },
  {
    slug: "local-seo",
    category: "Real Estate",
    tag: "Real Estate",
    tagColor: "bg-sky-50 text-sky-600 border-sky-100",
    title: "Local SEO Success for a Real Estate Brand",
    heroTitle: "Owning Local Search for a Multi-City Real Estate Brand",
    description:
      "Dominated local search across key cities with optimised listings, location pages and review strategy — turning search visibility into site visits.",
    heroDescription:
      "Location-first SEO that turned local search visibility into calls, enquiries and site visits across key cities.",
    image: "/e_commarce_image.png",
    metrics: [
      { value: "+300%", label: "Local Visibility" },
      { value: "+250%", label: "Calls & Enquiries" },
      { value: "+120%", label: "Site Visits" },
      { value: "+90%", label: "Review Rating" },
      { value: "4.9/5", label: "Client Happiness" },
    ],
    duration: "5 Months",
    services: "Local SEO, GMB, Reviews",
    client: "Realty Group",
    industry: "Real Estate",
    engagementType: "Local SEO",
    story: {
      challenge:
        "The brand was invisible in local map results, losing high-intent buyers to competitors in every city.",
      approach:
        "We audited listings city by city and prioritised the searches buyers actually make.",
      solution:
        "Optimised business profiles, location landing pages and a steady review-generation programme.",
      technology:
        "Structured data, fast location pages and call tracking to attribute every enquiry.",
      results:
        "Top-3 map rankings in key cities and a sharp rise in calls and site visits.",
    },
    techStack: ["WordPress", "Schema.org", "Google Business Profile", "Google Analytics", "Search Console", "CallRail"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const testimonials = [
  {
    quote:
      "SM Solutions transformed our online store. The new experience is fast, beautiful and our conversions have never been higher.",
    name: "Anil Sharma",
    role: "Head of Digital, Tefal India",
    avatar: "/images/testimonial/anil-sharma.png",
  },
  {
    quote:
      "Their team understood our funnel better than we did. Qualified demos tripled within a single quarter.",
    name: "Sandeep Sharma",
    role: "Marketing Director, SaaS Co.",
    avatar: "/images/testimonial/sandeep-sharma.png",
  },
  {
    quote:
      "Professional, data-driven and genuinely invested in our growth. Highly recommend SM Solutions.",
    name: "Akash Verma",
    role: "Founder, Realty Group",
    avatar: "/akash.png",
  },
];
