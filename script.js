/**
 * ==========================================================================
 * PORTFOLIO CLIENT ENGINE — ABDLRHMAN AL HELEWAH
 * Digital Marketing Specialist | Performance + Content + AI & Automation
 * 100% Vanilla JavaScript · Zero External Runtime Dependencies
 * ==========================================================================
 */

'use strict';

/**
 * --------------------------------------------------------------------------
 * 1. VERIFIED PROOF DATA ARCHITECTURE (Raw Screenshots & Telemetry)
 * --------------------------------------------------------------------------
 */
const VERIFIED_PROOFS = {
  'ijadah-leadgen': {
    eyebrow: 'IJADAH · Inbound Lead Gen Telemetry',
    title: 'Meta Ads Manager · Lead Generation Telemetry (28 Flights)',
    image: './assets/aistudio/Screenshot_2026-10-19_092823_ca68f816.png',
    alt: 'Meta Ads Manager Dashboard Screenshot showing $8,514.67 spend, 1,437,356 impressions, 352 leads, 628 messaging conversations across 28 campaigns',
    stats: [
      { label: 'Total Managed Spend', value: '$8,514.67' },
      { label: 'Impressions / Reach', value: '1.43M / 394.5K' },
      { label: 'Form Leads Generated', value: '352 Leads' },
      { label: 'WhatsApp Chats', value: '628 Convos' },
      { label: 'Lowest Cost / Lead', value: '$4.14 CPL' },
      { label: 'Total Verified Inquiries', value: '980 Leads' }
    ],
    analysis: 'Unedited Meta Ads Manager export showing 28 live flights. Key performance highlight: The "Lead Gen | Parents" flight generated 127 leads at $4.14/lead (-83% vs account benchmark), while direct WhatsApp campaigns captured 330 high-intent consultations at $6.22 CPA, delivering 980 total verified leads.'
  },
  'kitchen-snapchat-ecommerce': {
    eyebrow: 'Kitchen Bazaar · Saudi Arabia E-Commerce Telemetry',
    title: 'Snapchat Ads Manager · Purchases & ROAS Dashboard',
    image: './assets/aistudio/Screenshot_2026-10-27_151306_18255336.png',
    alt: 'Snapchat Ads Manager Dashboard Screenshot for Kitchen Bazaar showing $24,352.55 spend, $169,455.17 purchase value, 6.95 average ROAS, 1,643 purchases, 26,955 add to carts',
    stats: [
      { label: 'Purchases Value (Revenue)', value: '$169,455.17' },
      { label: 'Average Purchase ROAS', value: '6.95x Avg ROAS' },
      { label: 'Total Snapchat Spend', value: '$24,352.55' },
      { label: 'Completed Purchases', value: '1,643 Orders' },
      { label: 'Cost Per Purchase', value: '$14.54 CPA' },
      { label: 'Total Adds to Cart', value: '26,955 ($0.90)' }
    ],
    analysis: 'Unedited Snapchat Ads Manager performance export for Kitchen Bazaar in Saudi Arabia. With $24,352.55 invested across prospecting and retargeting sets, the campaigns drove $169,455.17 in verified e-commerce revenue (6.95x overall ROAS). Peak scaling ad sets hit 15.43x ROAS, acquiring 26,955 add-to-carts at an ultra-low $0.90 per ATC.'
  },
  // Alias for backward compatibility with existing triggers
  get 'kitchen-meta-ecommerce'() {
    return this['kitchen-snapchat-ecommerce'];
  },
  'kitchen-google-ads': {
    eyebrow: 'Kitchen Bazaar · High-Intent Search Telemetry',
    title: 'Google Ads · Search & Performance Dashboard',
    image: './assets/aistudio/Screenshot_2026-10-27_151535_ee61dba3.png',
    alt: 'Google Ads Dashboard Screenshot for Kitchen Bazaar showing 78.4K clicks, 1.31K conversions, SAR 29.23 cost per conversion, and SAR 38.3K total spend',
    stats: [
      { label: 'High-Intent Clicks', value: '78.4K Clicks' },
      { label: 'Verified Conversions', value: '1,310 (1.31K)' },
      { label: 'Cost / Conversion', value: 'SAR 29.23' },
      { label: 'Total Google Spend', value: 'SAR 38.3K' },
      { label: 'Market Region', value: 'Saudi Arabia (KSA)' },
      { label: 'Campaign Window', value: 'Dec 2025 – Oct 2026' }
    ],
    analysis: 'Live Google Ads performance report for Kitchen Bazaar capturing search and shopping intent across Saudi Arabia. Generated 78,400 qualified clicks and 1,310 verified conversions at an efficient SAR 29.23 cost-per-conversion across SAR 38,300 total spend.'
  }
};

/**
 * --------------------------------------------------------------------------
 * 2. CASE STUDIES DATA ARCHITECTURE
 * --------------------------------------------------------------------------
 */
const CASE_STUDIES = [
  {
    id: 'kitchen-bazaar',
    client: 'Kitchen Bazaar',
    industry: 'Retail, Home Living & E-Commerce',
    region: 'Saudi Arabia (KSA)',
    category: 'paid-media',
    status: 'completed',
    statusLabel: 'Completed Client Work',
    services: 'Snapchat Ads · Google Ads · TikTok Promotion · ROAS Optimization',
    headline: 'Omnichannel E-Commerce Scaling: $169,455 Revenue at 6.95x ROAS',
    teaser: 'Managed $24,352.55 Snapchat Ads spend generating $169,455.17 in purchases at 6.95x average ROAS (1,643 orders, 26,955 add-to-carts at $0.90) and SAR 38.3K Google Ads delivering 78.4K clicks and 1,310 conversions.',
    challenge: 'Scaling an e-commerce brand in the competitive Saudi household and kitchen retail niche, where high-season CPMs spike significantly and broad audience targeting frequently causes cart abandonment without purchase completion.',
    objective: 'Maximize e-commerce purchase transactions and gross revenue, sustain return on ad spend (ROAS) well above 5x, keep add-to-cart acquisition costs below $1.00, and capture intent-driven search traffic across Saudi Arabia.',
    strategy: 'Orchestrated a dual-engine acquisition funnel: 1) Snapchat Ads dynamic catalog prospecting, targeted female 25-44 cohorts, and urgent discount creative angles scaling top ad sets up to 15.43x ROAS; 2) Google Ads Search & Performance campaigns capturing high-intent search keywords at SAR 29.23 per conversion.',
    execution: 'Managed 20+ ad sets with disciplined efficiency thresholds: rapidly sunset fatigued creative angles while scaling top-performing sets (such as Ramadan and seasonal kitchenware flights) to over $4,300 per flight. Captured 26,955 add-to-carts at an average cost of only $0.90, closing 1,643 verified purchase transactions at $14.54 CPA.',
    results: [
      { label: 'Purchases Value (Revenue)', value: '$169,455.17' },
      { label: 'Overall Purchase ROAS', value: '6.95x Avg ROAS' },
      { label: 'Total Managed Snapchat Spend', value: '$24,352.55' },
      { label: 'Completed Purchases', value: '1,643 Orders' },
      { label: 'Google High-Intent Clicks', value: '78.4K Clicks' },
      { label: 'Google Search Conversions', value: '1,310 Conversions' },
      { label: 'Google Media Spend', value: 'SAR 38.3K ($10.2K USD)' },
      { label: 'Total Adds to Cart', value: '26,955 ($0.90 CPA)' }
    ],
    takeaway: 'Omnichannel synergy between Snapchat visual discovery and Google high-intent search delivered $169,455.17 in purchases at 6.95x ROAS. Disciplined ad set pruning kept the average purchase acquisition cost down to $14.54 across 1,643 e-commerce orders.',
    proofs: [
      {
        key: 'kitchen-snapchat-ecommerce',
        title: 'Snapchat Ads Manager · Purchases & ROAS',
        highlight: '$169,455.17 Revenue · 6.95x ROAS',
        desc: '$24,352.55 Snapchat spend, 1,643 purchases, 26,955 add-to-carts'
      },
      {
        key: 'kitchen-google-ads',
        title: 'Google Ads · Search & Performance',
        highlight: '78.4K Clicks · 1,310 Conversions',
        desc: 'SAR 38.3K spend, SAR 29.23 cost per conversion'
      }
    ]
  },
  {
    id: 'ijadah-education',
    client: 'IJADAH Education',
    industry: 'Education & Professional Training',
    region: 'United Arab Emirates (UAE)',
    category: 'paid-media',
    status: 'completed',
    statusLabel: 'Completed Client Work',
    services: 'Lead Gen · Meta Ads · B2B Audience Architecture · Reporting',
    headline: 'Multi-Stage Inbound Lead Generation & WhatsApp Qualification System',
    teaser: 'Deployed 28 multi-cohort Meta ad flights capturing 980 verified inquiries across parent & school segments, achieving an 83% CPL reduction to $4.14.',
    challenge: 'High advertising fatigue across competitive UAE expat demographics, causing inflated cost-per-click and unqualified conversational messages that overburdened the admissions and advisory team.',
    objective: 'Generate verified, high-intent prospective student leads and school stakeholder inquiries with complete contact credentials while reducing wasted spend on unqualified conversational clicks.',
    strategy: 'Segmented the account into distinct psychological cohorts: top-of-funnel educational credibility video creatives, retargeting engaged viewers with native Meta Instant Forms containing qualification screening questions, plus dedicated B2B messaging for schools and educators.',
    execution: 'Deployed multi-variant creative sets testing curriculum credibility against professional growth angles. Excluded unengaged traffic, deployed custom Lookalike audiences from historical verified students, and optimized for completed high-intent inquiries.',
    results: [
      { label: 'Total Inbound Inquiries', value: '980 Verified Contacts' },
      { label: 'Record Low CPL (Parents)', value: '$4.14 (vs $24.19 Avg)' },
      { label: 'Total Managed Media Spend', value: '$8,514.67 (28 Flights)' },
      { label: 'Verified Impressions & Reach', value: '1.43M Imp / 394.5K Reach' }
    ],
    takeaway: 'Separating educational messaging into dedicated psychological cohorts (parents vs. school administrators vs. teachers) dropped lead acquisition cost by 83% to $4.14, while direct click-to-WhatsApp generated 330 parent consultations at $6.22 each.',
    proofImage: './assets/aistudio/Screenshot_2026-10-19_092823_ca68f816.png',
    proofs: [
      {
        key: 'ijadah-leadgen',
        title: 'Meta Ads Manager · Lead Gen Telemetry',
        highlight: '980 Leads · $4.14 Lowest CPL',
        desc: '$8,514.67 spend across 28 multi-cohort flights'
      }
    ]
  },
  {
    id: 'cardip-automotive',
    client: 'Cardip',
    industry: 'Automotive & Luxury XPEL PPF Protection',
    region: 'Saudi Arabia (KSA)',
    category: 'paid-media',
    status: 'completed',
    statusLabel: 'Completed Client Work',
    services: 'XPEL PPF · Instagram Ad Audit · WhatsApp Inbound Leads',
    headline: 'High-Ticket Paint Protection Film (PPF) Audit & WhatsApp Lead Acquisition',
    teaser: 'Audited ~50 Instagram Reels & ~35 campaigns across SAR 15,800 spend, securing 436 qualified WhatsApp leads at an average SAR 36.24 per inquiry.',
    challenge: 'High-ticket automotive styling and paint protection require deep consumer trust. Standard landing page funnels had steep drop-offs because luxury vehicle owners demanded immediate direct consultation before booking.',
    objective: 'Review past campaign and content performance, identify top creative drivers, and structure a visual-first Instagram response channel connecting vehicle owners with service advisors.',
    strategy: 'Audited approximately 50 Reels and 35 ad campaigns. Highlighted cinematic craft videos showcasing paint clarity, self-healing demonstrations, and XPEL warranty assurances, paired with direct WhatsApp routing.',
    execution: 'Analyzed media spend efficiency across Riyadh and Eastern Province metropolitan hubs. Formulated actionable creative recommendations to prune non-performing angles and double down on proof-of-workmanship videos.',
    results: [
      { label: 'Direct WhatsApp Leads', value: '436 Qualified Leads' },
      { label: 'Total Analyzed Spend', value: 'SAR 15,800' },
      { label: 'Average Cost Per WhatsApp Lead', value: 'SAR 36.24 CPL' },
      { label: 'Creative Content Audited', value: '~50 Reels / ~35 Campaigns' }
    ],
    takeaway: 'For luxury automotive crafts in the GCC, visual proof of workmanship paired with frictionless WhatsApp consultation routes delivers an efficient SAR 36.24 average lead cost on high-ticket services.'
  },
  {
    id: 'instagram-page-growth',
    client: '3shwaee_ (عشوائي)',
    industry: 'Personal Brand & Social Media Growth',
    region: 'Middle East / Organic Growth',
    category: 'growth',
    status: 'completed',
    statusLabel: 'Completed Growth',
    services: 'Content Strategy · Organic Reach · Account Insights Analysis',
    headline: 'Organic Instagram Scaling: 0 to 20,000+ Followers & 1.8M Reels Views',
    teaser: 'Grew an Instagram account from zero to 20,000+ followers organically through a systematic content strategy centered on reach, viral hooks, and data-informed iteration.',
    challenge: 'Building an active, engaged audience on Instagram from complete scratch without paid advertising budget, standing out amid dense content saturation.',
    objective: 'Establish a sustainable organic content engine, identify high-engagement content pillars, and scale followers past 20,000 using video Reels.',
    strategy: 'Formulated content direction focused on high-curiosity opening hooks, emotional resonance, and strong shareability. Used built-in Instagram Professional Insights to analyze retention curves and double down on winning themes.',
    execution: 'Consistently produced and published short-form video reels between May 2022 and March 2024. Monitored watch time and completion rates, refining pacing and typography hooks.',
    results: [
      { label: 'Follower Growth', value: '0 → 20,000+ Followers' },
      { label: 'Peak Reel Views', value: '1.8M, 1.5M, 1.4M Views' },
      { label: 'Acquisition Cost', value: '$0 (100% Organic)' },
      { label: 'Active Strategy Window', value: 'May 2022 — Mar 2024' }
    ],
    takeaway: 'Disciplined retention analysis and curiosity-driven opening hooks can scale an account from zero to over 20,000 followers organically, generating multiple viral hits exceeding 1.4M views.'
  },
  {
    id: 'heart-of-life-rehabilitation',
    client: 'Muasasat Qalb Al-Hayah for Speech Therapy',
    industry: 'Pediatric Healthcare & Speech Rehabilitation',
    region: 'Egypt',
    category: 'strategy-audit',
    status: 'in-progress',
    statusLabel: 'In Progress',
    services: 'Campaign Messaging · Egyptian Arabic Copy · Keyword Research',
    headline: 'Children’s Motor Rehabilitation & Visual-Motor Perception Awareness',
    teaser: 'Developing campaign messaging and audience-targeting direction for a specialized children’s motor rehabilitation service in Egypt, communicating the developmental value of visual-motor perception support to parents.',
    challenge: 'Reaching concerned parents with empathetic, medically accurate, and culturally resonant messaging about early childhood motor development without triggering undue fear.',
    objective: 'Build an empathetic, high-trust campaign framework for October 2026, articulating the importance of visual-motor perception exercises for children with speech and developmental delays.',
    strategy: 'Drafting warm, approachable Egyptian Arabic captions, headlines, and parent-focused descriptions. Conducting keyword research to map common parental queries on motor-visual coordination.',
    execution: 'Structuring campaign communication pillars addressing parent observations (e.g. hand-eye coordination, balance, motor reflexes) and pairing them with clear calls-to-action for developmental evaluations.',
    results: [
      { label: 'Campaign Status', value: 'Active Development (In Progress)' },
      { label: 'Target Audience', value: 'Parents of Toddlers & Kids (Egypt)' },
      { label: 'Tone & Style', value: 'Warm Egyptian Arabic' },
      { label: 'Launch Window', value: 'October 2026' }
    ],
    takeaway: 'In specialized healthcare marketing, empathetic communication that educates parents on developmental indicators builds genuine trust and inbound inquiries far better than generic promotional appeals.'
  },
  {
    id: 'cro-audit',
    client: 'E-Commerce Storefront',
    industry: 'Conversion Rate Optimization (CRO)',
    region: 'E-Commerce Web',
    category: 'strategy-audit',
    status: 'completed',
    statusLabel: 'Audit & Strategy',
    services: 'Funnel Diagnostics · Checkout Flow · Trust Signals & UX',
    headline: 'E-Commerce Website Conversion Rate Optimization (CRO) Audit',
    teaser: 'Conducted an in-depth CRO evaluation across an e-commerce storefront, identifying drop-off bottlenecks in product presentation, mobile cart flow, and trust signals to lift sales conversion.',
    challenge: 'The storefront was driving steady traffic from paid ads, but mobile conversion rates lagged behind industry benchmarks due to subtle user friction points along the buyer journey.',
    objective: 'Diagnose conversion leaks across product detail pages (PDP), cart page, and checkout funnel, providing prioritized, testable recommendations to improve purchase velocity.',
    strategy: 'Analyzed user navigation paths from landing to purchase. Identified friction points in product variant selection, cart summary clarity, mobile sticky CTAs, and shipping transparency.',
    execution: 'Delivered an actionable audit matrix categorizing fixes by impact vs. effort: highlighted missing payment trust badges, simplified mobile checkout fields, and refined value proposition headlines above the fold.',
    results: [
      { label: 'Audit Scope', value: 'Full Storefront Funnel' },
      { label: 'Friction Points Mapped', value: '18 Actionable Findings' },
      { label: 'Primary Focus', value: 'Mobile Cart & PDP Flow' },
      { label: 'Objective Frame', value: 'Online Sales Velocity' }
    ],
    takeaway: 'Even high-performing ad campaigns fail to achieve optimal ROAS if website checkout friction is neglected; systematic CRO audits unlock immediate revenue gains from existing traffic.'
  },
  {
    id: 'hookify-ai-saas',
    client: 'Hookify (AI Experiment & Prototype)',
    industry: 'MarTech & Generative AI',
    region: 'Google AI Studio Prototype',
    category: 'ai-experiments',
    status: 'experiment',
    statusLabel: 'AI Prototype & Tool',
    services: 'Google AI Studio · Gemini API · Full-Stack Copy Engine',
    headline: 'Hookify — AI-Assisted Social Media Copywriting & Viral Hook Generator',
    teaser: 'Engineered an AI-powered copywriting prototype built on Google AI Studio & Gemini API to produce high-converting hooks, video reels scripts, and virality scoring.',
    challenge: 'Performance marketers and creators spend hours brainstorming ad angles, hooks, and video scripts, while generic chatbots often produce bland copy without proven psychological frameworks.',
    objective: 'Prototype a domain-specific generative tool applying copywriting frameworks (AIDA, PAS, Curiosity Gap) to generate tailored hooks, short-form video scripts, and platform-specific social copy.',
    strategy: 'Leveraged Google AI Studio and Gemini API (@google/genai) to design prompt matrices for hooks, 30-second reels scripts (Hook, Body, CTA), and virality scoring algorithms.',
    execution: 'Built an interactive full-stack interface featuring smart API pooling, multi-format generators, Arabic/English bilingual capability, and real-time retention score simulations.',
    results: [
      { label: 'Architecture Uptime', value: '99.9% Resilient Pooling' },
      { label: 'Copy Frameworks', value: 'AIDA, PAS, Curiosity Gap' },
      { label: 'Supported Platforms', value: 'TikTok, IG, LinkedIn, X' },
      { label: 'Bilingual Support', value: 'Arabic & English (RTL/LTR)' }
    ],
    takeaway: 'Hookify demonstrates how combining structured direct-response copywriting principles with modern LLM prompt engineering elevates ad creative production and creative ideation speed.'
  },
  {
    id: 'nyckel-porsche-bmw',
    client: 'Computer Vision Experiment',
    industry: 'Machine Learning / Image Classification',
    region: 'Nyckel ML Platform',
    category: 'ai-experiments',
    status: 'experiment',
    statusLabel: 'AI Experiment',
    services: 'Nyckel Platform · Computer Vision · Category Classification',
    headline: 'Porsche vs. BMW — Image Classification Machine Learning Experiment',
    teaser: 'Trained and evaluated a specialized image classification model on Nyckel to test computer vision model precision and feature recognition between luxury sports car brands.',
    challenge: 'Evaluating no-code / low-code machine learning platforms to understand practical computer vision workflows, dataset curation requirements, and classification accuracy.',
    objective: 'Train a supervised visual classification model capable of distinguishing between subtle vehicle styling cues of two iconic automotive brands (Porsche vs. BMW).',
    strategy: 'Curated balanced image training sets covering various angles, vehicle models, lighting conditions, and exterior colors. Evaluated confidence thresholds and misclassification edge cases.',
    execution: 'Utilized Nyckel’s quick-training classification pipeline, tested against validation images, and analyzed how model confidence varies with perspective and vehicle occlusion.',
    results: [
      { label: 'Tool Utilized', value: 'Nyckel Platform' },
      { label: 'Classification Task', value: 'Porsche vs. BMW Recognition' },
      { label: 'Domain', value: 'Computer Vision Experiment' },
      { label: 'Status', value: 'Completed Experiment' }
    ],
    takeaway: 'Hands-on experimentation with machine learning platforms like Nyckel builds practical intuition for how computer vision categorizes visual assets, directly informing AI-assisted creative workflows.'
  },
  {
    id: 'marketing-kpi-dashboard',
    client: 'Analytics & Media Buying Framework',
    industry: 'Marketing Analytics & Reporting',
    region: 'Cross-Platform Framework',
    category: 'strategy-audit',
    status: 'concept',
    statusLabel: 'Analytics Framework',
    services: 'Performance Reporting · Pacing Tracking · Conversion Funnels',
    headline: 'Cross-Channel Marketing KPI & Ad Pacing Dashboard',
    teaser: 'Designed a consolidated campaign intelligence framework unifying paid ad telemetry across Meta, Snapchat, and Google into standardized KPIs and automated budget pacing.',
    challenge: 'Marketing managers often struggle with fragmented dashboards across multiple ad networks, leading to delayed budget reallocations and undetected ad fatigue.',
    objective: 'Standardize core performance marketing metrics (CPL, CPA, ROAS, CPM, CTR, Hook Rate) into a single, cohesive reporting and pacing architecture.',
    strategy: 'Defined attribution logic and mathematical models for budget run-rates, projected monthly spend, and conversion velocity alerts to prevent overspend and under-delivery.',
    execution: 'Implemented interactive pacing calculators and ledger views that normalize cross-network metrics, providing clear visualization of budget utilization and performance trends.',
    results: [
      { label: 'Architecture Type', value: 'Campaign Intelligence Model' },
      { label: 'Connected Channels', value: 'Meta, Snapchat, Google Ads' },
      { label: 'Calculated Outputs', value: 'Daily Pacing & Target CPL' },
      { label: 'Status', value: 'Standardized Framework' }
    ],
    takeaway: 'Unified KPI frameworks and automated budget pacing eliminate human calculation errors, enabling agile media-buying decisions across fast-paced GCC advertising campaigns.'
  },
  {
    id: 'marketing-ai-agent-platform',
    client: 'AI Product Architecture',
    industry: 'MarTech Automation & Agentic Systems',
    region: 'Proposed Scope & Architecture',
    category: 'ai-experiments',
    status: 'concept',
    statusLabel: 'Concept in Planning',
    services: 'Agentic Systems · GEO Exploration · Media Buying Workflows',
    headline: 'AI Marketing Agent Platform — Proposed Architecture & Roadmap',
    teaser: 'Exploring architectural requirements for a unified AI agent platform connecting campaign ideation, GEO optimization, performance monitoring, and actionable media-buying recommendations.',
    challenge: 'Digital marketers navigate dozens of disconnected tools for research, copywriting, ad setup, monitoring, and reporting, creating operational inefficiencies and fragmented insights.',
    objective: 'Conceptualize a unified agentic platform specification capable of supporting campaign ideation, Generative Engine Optimization (GEO), performance monitoring, and controllable dashboards.',
    strategy: 'Mapped user journeys and functional agent modules: idea generation agent, copy generation agent, pacing/anomaly detection agent, and reporting agent with human-in-the-loop controls.',
    execution: 'Documented architectural requirements, API dependencies, prompt workflows, and controllable dashboard UI wireframes for future prototype implementation.',
    results: [
      { label: 'Development Stage', value: 'Requirements & Planning' },
      { label: 'Core Exploration', value: 'Generative Engine Optimization' },
      { label: 'Control Model', value: 'Human-in-the-Loop Dashboard' },
      { label: 'Status', value: 'Proposed Concept' }
    ],
    takeaway: 'Designing agentic marketing systems requires rigorous boundary definitions: prioritizing human control and explainability over fully autonomous black-box ad execution.'
  }
];

/**
 * --------------------------------------------------------------------------
 * 2. INITIALIZATION
 * --------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initNavigation();
  renderCaseStudies('all');
  initCaseStudyFilters();
  initCaseStudyModal();
  initHeroDashboard();
  initMetaProofTerminal();
  initProofModal();
  initPacingCalculator();
  initThemeToggle();
  initContactForm();
  initHookifyDemoEngine();
  initScrollSpy();
  initScrollProgress();
  initScrollAnimations();
  initPlaybookEngine();
  initOnePagerModal();
});

/**
 * --------------------------------------------------------------------------
 * 3. NAVIGATION & MOBILE DRAWER
 * --------------------------------------------------------------------------
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  const floatingTopBtn = document.getElementById('floating-back-to-top');

  function closeDrawer() {
    if (drawer && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close only when clicking a navigation link inside the drawer (preserve theme toggle)
    drawer.querySelectorAll('a.nav-link, a.nav-link-cta').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });
  }

  // Floating Back to Top Button
  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    });
  }

  // Smooth scroll with precise dynamic header offset and immediate active state
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();

        // Close mobile drawer if currently open
        closeDrawer();

        if (targetId === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const header = document.querySelector('.site-header');
          const headerHeight = header ? header.offsetHeight : 64;
          const targetRect = targetEl.getBoundingClientRect();
          const targetPosition = targetRect.top + window.pageYOffset - (headerHeight + 12);
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }

        // Immediately update active nav state for crisp feedback
        document.querySelectorAll('.site-nav .nav-link, .mobile-nav-drawer .nav-link').forEach(link => {
          if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', targetId);
        }
      }
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 4. CASE STUDIES RENDERING & FILTERING
 * --------------------------------------------------------------------------
 */
let currentActiveFilter = 'all';

function getCurrentLang() {
  return document.documentElement.getAttribute('lang') || 'en';
}

function renderCaseStudies(filterCategory) {
  const grid = document.getElementById('case-studies-grid');
  if (!grid) return;

  if (filterCategory) {
    currentActiveFilter = filterCategory;
  }
  const activeCategory = currentActiveFilter || 'all';
  const isAr = getCurrentLang() === 'ar';

  const filtered = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeCategory);

  grid.innerHTML = filtered.map(cs => {
    const arData = (isAr && typeof CASE_STUDIES_AR !== 'undefined' && CASE_STUDIES_AR[cs.id]) ? CASE_STUDIES_AR[cs.id] : null;

    const client = arData ? arData.client : cs.client;
    const region = arData ? arData.region : cs.region;
    const headline = arData ? arData.headline : cs.headline;
    const teaser = arData ? arData.teaser : cs.teaser;
    const services = arData ? arData.services : cs.services;
    const industry = arData ? arData.industry : cs.industry;
    const statusLabel = arData ? arData.statusLabel : (cs.statusLabel || cs.status);
    const keyDeliverablesText = isAr ? 'أبرز الأهداف والنتائج' : 'Key Objective & Focus';
    const viewButtonText = isAr ? 'عرض دراسة الحالة' : 'View Case Study';

    return `
      <article class="case-study-card" data-category="${cs.category}">
        <div class="case-study-card-body">
          <div class="card-top-meta">
            <span class="card-client">${escapeHtml(client)}</span>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end;">
              <span class="card-status-badge ${escapeHtml(cs.status)}">${escapeHtml(statusLabel)}</span>
              <span class="card-industry">${escapeHtml(region)}</span>
            </div>
          </div>
          <h3 class="card-title">${escapeHtml(headline)}</h3>
          <p class="card-summary">${escapeHtml(teaser)}</p>
          
          <div class="card-teaser-result">
            <strong>${escapeHtml(keyDeliverablesText)}</strong>
            <span>${escapeHtml(services)}</span>
          </div>
        </div>

        <div class="card-footer">
          <span class="card-services-text">${escapeHtml(industry)}</span>
          <button type="button" class="btn btn-secondary btn-sm open-modal-btn" data-id="${cs.id}" aria-haspopup="dialog">
            ${escapeHtml(viewButtonText)}
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${isAr ? 'M19 12H5M12 19l-7-7 7-7' : 'M5 12h14M12 5l7 7-7 7'}"/></svg>
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Re-attach modal trigger events to newly rendered buttons
  attachModalTriggers();

  // Ensure newly rendered cards participate in the scroll reveal observer
  initScrollAnimations();
}

function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.case-studies-filter .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter') || 'all';
      renderCaseStudies(category);
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 5. MODAL WINDOW HANDLER
 * --------------------------------------------------------------------------
 */
let lastFocusedElement = null;

function initCaseStudyModal() {
  const backdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop) return;

  // Close when clicking outside dialog
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // Close on button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function attachModalTriggers() {
  const buttons = document.querySelectorAll('.open-modal-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const study = CASE_STUDIES.find(item => item.id === id);
      if (study) {
        lastFocusedElement = btn;
        openModalWithData(study);
      }
    });
  });
}

function openModalWithData(study) {
  const backdrop = document.getElementById('case-study-modal');
  const titleEl = document.getElementById('modal-study-title');
  const clientEl = document.getElementById('modal-study-client');
  const bodyEl = document.getElementById('modal-study-body');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop || !titleEl || !bodyEl) return;

  const isAr = getCurrentLang() === 'ar';
  const arData = (isAr && typeof CASE_STUDIES_AR !== 'undefined' && CASE_STUDIES_AR[study.id]) ? CASE_STUDIES_AR[study.id] : null;

  const headline = arData ? arData.headline : study.headline;
  const client = arData ? arData.client : study.client;
  const region = arData ? arData.region : study.region;
  const industry = arData ? arData.industry : study.industry;
  const services = arData ? arData.services : study.services;
  const objective = arData ? arData.objective : study.objective;
  const challenge = arData ? arData.challenge : study.challenge;
  const strategy = arData ? arData.strategy : study.strategy;
  const execution = arData ? arData.execution : study.execution;

  titleEl.textContent = headline;
  if (clientEl) {
    clientEl.textContent = `${client} · ${region} · ${industry}`;
  }

  bodyEl.innerHTML = `
    <!-- Top Metadata Grid -->
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isAr ? 'العميل' : 'Client'}</span>
        <span class="modal-meta-val">${escapeHtml(client)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isAr ? 'القطاع' : 'Industry'}</span>
        <span class="modal-meta-val">${escapeHtml(industry)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isAr ? 'السوق' : 'Market'}</span>
        <span class="modal-meta-val">${escapeHtml(region)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isAr ? 'نطاق العمل' : 'Core Scope'}</span>
        <span class="modal-meta-val">${escapeHtml(services)}</span>
      </div>
    </div>

    <!-- Objective & Challenge -->
    <div class="modal-section-block">
      <h4 class="modal-block-label">${isAr ? '01. الهدف الرئيسي' : '01. Objective'}</h4>
      <p class="modal-block-text">${escapeHtml(objective)}</p>
    </div>

    <div class="modal-section-block">
      <h4 class="modal-block-label">${isAr ? '02. التحدي والسياق' : '02. Challenge'}</h4>
      <p class="modal-block-text">${escapeHtml(challenge)}</p>
    </div>

    <!-- Strategy & Execution -->
    <div class="modal-section-block">
      <h4 class="modal-block-label">${isAr ? '03. الاستراتيجية والفرضيات' : '03. Strategy & Hypotheses'}</h4>
      <p class="modal-block-text">${escapeHtml(strategy)}</p>
    </div>

    <div class="modal-section-block">
      <h4 class="modal-block-label">${isAr ? '04. التنفيذ التكتيكي' : '04. Tactical Execution'}</h4>
      <p class="modal-block-text">${escapeHtml(execution)}</p>
    </div>

    <!-- Measurable Results -->
    <div class="modal-result-box">
      <h4 class="modal-block-label" style="margin-bottom: 12px;">${isAr ? '05. النتائج المؤكدة والمخرجات' : '05. Verified Key Results'}</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px;">
        ${study.results.map(r => {
          const labelMap = {
            'Purchases Value (Revenue)': 'قيمة المبيعات المحققة',
            'Overall Purchase ROAS': 'معدل العائد على الإنفاق (ROAS)',
            'Average Purchase ROAS': 'معدل العائد على الإنفاق (ROAS)',
            'Total Managed Snapchat Spend': 'إجمالي الإنفاق الإعلاني (سناب)',
            'Total Snapchat Spend': 'إجمالي الإنفاق الإعلاني (سناب)',
            'Completed Purchases': 'طلبات الشراء المكتملة',
            'Google High-Intent Clicks': 'نقرات البحث عالية النية (جوجل)',
            'Google Search Conversions': 'التحويلات المؤكدة (جوجل)',
            'Google Media Spend': 'الإنفاق الإعلاني على جوجل',
            'Total Adds to Cart': 'إجمالي الإضافات للسلة',
            'Cost Per Purchase': 'متوسط تكلفة طلب الشراء (CPA)',
            'Total Managed Spend': 'إجمالي الميزانية المدارة',
            'Impressions / Reach': 'مرات الظهور والوصول',
            'Form Leads Generated': 'العملاء المحتملون عبر النماذج',
            'WhatsApp Chats': 'محادثات واتساب المباشرة',
            'Lowest Cost / Lead': 'أقل تكلفة للعميل (CPL)',
            'Total Verified Inquiries': 'إجمالي الاستفسارات المؤكدة',
            'High-Intent Clicks': 'نقرات البحث المباشر',
            'Verified Conversions': 'المبيعات والتحويلات المؤكدة',
            'Cost / Conversion': 'تكلفة التحويل الواحد',
            'Total Google Spend': 'إجمالي الإنفاق على جوجل',
            'Market Region': 'السوق المستهدف',
            'Campaign Window': 'الفترة الزمنية للحملات'
          };
          const translatedLabel = isAr && labelMap[r.label] ? labelMap[r.label] : r.label;
          return `
            <div style="background-color: var(--bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">${escapeHtml(translatedLabel)}</div>
              <div class="tabular-nums" style="font-size: 18px; font-weight: 700; color: var(--accent-blue); margin-top: 4px;">${escapeHtml(r.value)}</div>
            </div>
          `;
        }).join('')}
      </div>
      ${study.proofs && study.proofs.length > 0 ? `
        <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px;">
          <div style="font-size: 11px; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.08em;">
            ${isAr ? 'إثباتات الحملة والبيانات الحية الموثقة' : 'Verified Campaign Proof & Live Telemetry'}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
            ${study.proofs.map(p => `
              <div style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px;">
                <div>
                  <div style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 3px;">${escapeHtml(p.title)}</div>
                  <div style="font-size: 13px; color: var(--accent-emerald); font-weight: 700;">${escapeHtml(p.highlight)}</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${escapeHtml(p.desc)}</div>
                </div>
                <button type="button" class="btn btn-secondary btn-sm inspect-proof-trigger" data-proof-key="${p.key}" style="font-size: 12px; padding: 6px 12px; width: 100%; justify-content: center;">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  ${isAr ? 'معاينة لقطة الشاشة الأصلية' : 'Inspect Raw Screenshot'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : study.proofImage ? `
        <div style="margin-top: 14px; background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div>
            <span style="font-size: 12px; font-weight: 700; color: var(--accent-emerald);">${isAr ? 'بيانات موثقة من مدير إعلانات ميتا' : 'Live Meta Ads Manager Telemetry Verified'}</span>
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'معاينة لقطة الشاشة المباشرة لـ 28 حملة إعلانية' : 'Inspect unedited 28-campaign manager proof screenshot'}</div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm inspect-proof-trigger" data-proof-key="ijadah-leadgen" style="font-size: 12px; padding: 6px 12px;">${isAr ? 'معاينة الإثبات' : 'Inspect Proof'}</button>
        </div>
      ` : `
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 10px; font-family: var(--font-mono);">
          ${isAr ? '* تم توثيق جميع مؤشرات الأداء والنتائج مع الالتزام التام بمعايير السرية واتفاقيات عدم الإفصاح (NDA) للعملاء.' : '* Performance indicators documented in accordance with client confidentiality and non-disclosure standards.'}
        </p>
      `}
    </div>

    <!-- Key Takeaway -->
    <div class="modal-takeaway-box">
      <div style="font-size: 11px; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 4px;">Strategic Takeaway</div>
      <p style="font-size: 14px; font-weight: 500; color: var(--text-primary); margin: 0; line-height: 1.5;">"${escapeHtml(study.takeaway)}"</p>
    </div>

    ${study.id === 'hookify-ai-saas' ? `
      <!-- Deep Feature Architecture -->
      <div class="modal-section-block" style="margin-top: 24px;">
        <h4 class="modal-block-label">06. AI Content Suite & Feature Modules</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-top: 10px;">
          <div style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">Viral Hooks Generator</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Psychological stop-the-scroll hooks customized by platform (TikTok, IG, X, LinkedIn) and framework (AIDA, PAS).</div>
          </div>
          <div style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--accent-blue); margin-bottom: 4px;">Video Scripts Generator</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Second-by-second structured video reels scripts partitioned into Hook, High-Retention Body, and Conversion CTA.</div>
          </div>
          <div style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--accent-emerald); margin-bottom: 4px;">Content Virality Analyzer</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Evaluates raw drafts, scores retention probability, detects audience drop-off points, and provides instant psychological alternatives.</div>
          </div>
          <div style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px;">
            <div style="font-size: 12px; font-weight: 700; color: #a855f7; margin-bottom: 4px;">Swipe File & Calendar</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Global viral swipe file archive, content planning calendar, and competitor intelligence benchmarking.</div>
          </div>
        </div>
      </div>

      <!-- Resiliency & Enterprise Architecture -->
      <div class="modal-section-block" style="background-color: rgba(59, 130, 246, 0.05); border: 1px solid var(--border-focus); border-radius: var(--radius-md); padding: 16px;">
        <h4 class="modal-block-label" style="color: var(--accent-blue);">07. Enterprise Reliability & Backend Resiliency</h4>
        <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;">
          Engineered smart API key pooling across Google Gemini AI endpoints with exponential backoff retries and 429 rate-limit mitigation, ensuring <strong>99.9% uptime</strong> under high generation concurrency. Accompanied by role-based auth and seamless bilingual localization (Arabic / English / RTL).
        </p>
      </div>

      <!-- CV Ready Highlights (Copyable) -->
      <div class="modal-section-block" style="background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <h4 class="modal-block-label" style="margin: 0;">08. Resume / CV Highlights (Ready to Copy)</h4>
          <button type="button" class="btn btn-secondary btn-sm" id="copy-hookify-cv-btn" style="font-size: 11px; padding: 4px 8px;">Copy CV Bullets</button>
        </div>
        <ul style="font-size: 12px; color: var(--text-secondary); line-height: 1.6; padding-left: 18px; margin: 0;">
          <li>Architected & developed a full-stack Generative AI SaaS utilizing React 19, TypeScript, and Express.js, integrated with Google Gemini AI for high-conversion social media copywriting.</li>
          <li>Engineered Multi-Format AI Generators for viral hooks, video reels scripts, captions, angles, and carousels across TikTok, IG, LinkedIn, and X with AIDA & PAS frameworks.</li>
          <li>Built Content Intelligence tools, including an AI-powered Content Analyzer scoring hook retention potential, a Social Media Calendar, and a Competitor Intel suite.</li>
          <li>Designed Enterprise-Grade Resiliency: smart API key pooling, exponential backoff retries, and rate-limit mitigation (429 handling) ensuring 99.9% uptime.</li>
        </ul>
      </div>

      <!-- Future Roadmap -->
      <div class="modal-section-block">
        <h4 class="modal-block-label">09. Technical Roadmap & Future Enhancements</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
          <span class="tech-pill highlight">Direct Social Publishing (Meta, TikTok & LinkedIn APIs)</span>
          <span class="tech-pill highlight">Multimodal Generation (Carousels & Thumbnails)</span>
          <span class="tech-pill">AI Voiceover & Automated Subtitles (TTS/SRT)</span>
          <span class="tech-pill">Real-Time Social Performance Tracking</span>
          <span class="tech-pill">Agency Multi-User Workspaces</span>
        </div>
      </div>
    ` : ''}
  `;

  // Attach proof button handlers (supporting multiple proof dashboards)
  bodyEl.querySelectorAll('.inspect-proof-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-proof-key') || 'ijadah-leadgen';
      openProofScreenshotModal(key);
    });
  });

  // Attach Hookify CV copy button handler if present
  const copyHookifyBtn = document.getElementById('copy-hookify-cv-btn');
  if (copyHookifyBtn) {
    copyHookifyBtn.addEventListener('click', () => {
      const cvText = `• Architected & Developed a full-stack Generative AI SaaS utilizing React 19, TypeScript, and Express.js, integrated with Google Gemini AI for high-conversion social media copywriting.
• Engineered Multi-Format AI Generators for viral hooks, video reels scripts, captions, angles, and full carousel posts with customizable tones, platforms (TikTok, Instagram, LinkedIn, X, YouTube Shorts), and frameworks (AIDA, PAS, Curiosity Gap).
• Built Content Intelligence & Analytics Tools, including an AI-powered Content Analyzer that scores hook retention potential, a Social Media Calendar, and a Competitor Intel suite.
• Designed Enterprise-Grade Resiliency: Implemented smart API key pooling, exponential backoff retries, and rate-limit mitigation (429 handling) ensuring 99.9% generation uptime.
• Crafted High-End UX: Implemented bilingual localization (Arabic / English), dynamic Dark/Light theming, responsive dashboards with Recharts, and role-based access control.`;

      navigator.clipboard.writeText(cvText).then(() => {
        copyHookifyBtn.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
          copyHookifyBtn.textContent = 'Copy CV Bullets';
        }, 2000);
      });
    });
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Set focus into modal for accessibility
  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeModal() {
  const backdrop = document.getElementById('case-study-modal');
  if (!backdrop) return;

  backdrop.classList.remove('open');
  document.body.style.overflow = '';

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

/**
 * --------------------------------------------------------------------------
 * 6. HERO MARKETING DASHBOARD (Interactive Visualization)
 * --------------------------------------------------------------------------
 * Visually grounds Abdlrhman's philosophy:
 * DATA → STRATEGY → EXECUTION → RESULTS
 */
function initHeroDashboard() {
  const tabBtns = document.querySelectorAll('.dashboard-tab-btn');
  const viewPanels = document.querySelectorAll('.dashboard-view-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetView = btn.getAttribute('data-view');
      const panel = document.getElementById(`dash-view-${targetView}`);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 7. META ADS MANAGER PROOF TERMINAL & LIGHTBOX MODAL
 * --------------------------------------------------------------------------
 * Handles interactive tabs for 28 verified campaigns telemetry and raw proof
 */
function initMetaProofTerminal() {
  const terminalTabs = document.querySelectorAll('.terminal-tab-btn');
  const terminalPanels = document.querySelectorAll('.terminal-panel');

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      terminalTabs.forEach(t => t.classList.remove('active'));
      terminalPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const tabTarget = tab.getAttribute('data-tab');
      const targetPanel = document.getElementById(`term-tab-${tabTarget}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

function openProofScreenshotModal(proofKey = 'ijadah-leadgen') {
  const modal = document.getElementById('proof-screenshot-modal');
  const closeBtn = document.getElementById('proof-modal-close');
  if (!modal) return;

  const isAr = getCurrentLang() === 'ar';
  const proof = VERIFIED_PROOFS[proofKey] || VERIFIED_PROOFS['ijadah-leadgen'];

  const eyebrowEl = document.getElementById('proof-modal-eyebrow');
  const titleEl = document.getElementById('proof-modal-title');
  const imgEl = document.getElementById('proof-screenshot-img');
  const highlightsEl = document.getElementById('proof-highlights-grid');
  const analysisEl = document.getElementById('proof-analysis-box');

  const PROOF_TITLES_AR = {
    'ijadah-leadgen': {
      eyebrow: 'إجادة للتعليم · بيانات استقطاب العملاء المحتملين',
      title: 'مدير إعلانات ميتا · بيانات جلب وتأهيل العملاء (28 حملة إعلانية)',
      analysis: 'تقرير فعلي غير معدل من مدير إعلانات ميتا يوضح 28 حملة إعلانية نشطة. النقطة المحورية: حملة "أولياء الأمور" حققت 127 عميلاً بتكلفة 4.14$ للعميل (-83% عن متوسط الحساب)، بينما حققت حملات واتساب المباشرة 330 استشارة بتكلفة 6.22$، بإجمالي 980 استفساراً مؤكداً.'
    },
    'kitchen-snapchat-ecommerce': {
      eyebrow: 'مطبخ بازار · بيانات مبيعات التجارة الإلكترونية بالسعودية',
      title: 'مدير إعلانات سناب شات · لوحة تحكم المبيعات ومضاعفة الـ ROAS',
      analysis: 'تصدير أداء حقيقي من سناب شات لمتجر Kitchen Bazaar بالسعودية. بإنفاق 24,352.55$ على حملات الاستكشاف وإعادة الاستهداف، حققت الحملات 169,455.17$ إيرادات مؤكدة (بمتوسط عائد 6.95x ROAS). وصلت أفضل المجموعات الإعلانية إلى 15.43x ROAS، مع تحقيق 26,955 إضافة للسلة بمتوسط 0.90$ فقط.'
    },
    'kitchen-google-ads': {
      eyebrow: 'مطبخ بازار · بيانات شبكة بحث جوجل ذات النية العالية',
      title: 'إعلانات جوجل · لوحة أداء شبكة البحث والتحويلات',
      analysis: 'تقرير أداء إعلانات جوجل لمتجر مطبخ بازار لاقتناص نية الشراء في السعودية. حقق 78,400 نقرة مؤهلة و1,310 تحويلات مؤكدة بتكلفة فعالة 29.23 ريال لكل تحويل ضمن إنفاق إجمالي 38,300 ريال.'
    }
  };

  const PROOF_STAT_LABELS_AR = {
    'Total Managed Spend': 'إجمالي الميزانية المدارة',
    'Impressions / Reach': 'الظهور / الوصول',
    'Form Leads Generated': 'عملاء النماذج المؤهلون',
    'WhatsApp Chats': 'محادثات واتساب المباشرة',
    'Lowest Cost / Lead': 'أقل تكلفة للعميل (CPL)',
    'Total Verified Inquiries': 'إجمالي الاستفسارات المؤكدة',
    'Purchases Value (Revenue)': 'قيمة المبيعات المحققة',
    'Average Purchase ROAS': 'متوسط العائد الإعلاني (ROAS)',
    'Total Snapchat Spend': 'إنفاق إعلانات سناب شات',
    'Completed Purchases': 'طلبات الشراء المكتملة',
    'Cost Per Purchase': 'متوسط تكلفة الشراء (CPA)',
    'Total Adds to Cart': 'إجمالي الإضافات للسلة',
    'High-Intent Clicks': 'نقرات البحث عالية النية',
    'Verified Conversions': 'التحويلات المؤكدة',
    'Cost / Conversion': 'تكلفة التحويل الواحد',
    'Total Google Spend': 'إجمالي الإنفاق على جوجل',
    'Market Region': 'السوق المستهدف',
    'Campaign Window': 'الفترة الزمنية للحملة'
  };

  const arInfo = (isAr && PROOF_TITLES_AR[proofKey]) ? PROOF_TITLES_AR[proofKey] : null;

  if (eyebrowEl) eyebrowEl.textContent = arInfo ? arInfo.eyebrow : (proof.eyebrow || '');
  if (titleEl) titleEl.textContent = arInfo ? arInfo.title : (proof.title || '');
  if (imgEl && proof.image) {
    imgEl.src = proof.image;
    imgEl.alt = proof.alt || 'Campaign Proof Screenshot';
  }
  if (highlightsEl && proof.stats) {
    highlightsEl.innerHTML = proof.stats.map(s => {
      const label = isAr && PROOF_STAT_LABELS_AR[s.label] ? PROOF_STAT_LABELS_AR[s.label] : s.label;
      return `
        <div class="proof-highlight-item">
          <span class="proof-hl-title">${escapeHtml(label)}</span>
          <div class="proof-hl-val tabular-nums">${escapeHtml(s.value)}</div>
        </div>
      `;
    }).join('');
  }
  if (analysisEl) {
    const analysisText = arInfo ? arInfo.analysis : proof.analysis;
    const headerPrefix = isAr ? 'التحقق من صحة ومصداقية البيانات والمنهجية:' : 'Authenticity & Methodology Verification:';
    if (analysisText) {
      analysisEl.innerHTML = `<strong>${headerPrefix}</strong> ${escapeHtml(analysisText)}`;
    }
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeProofScreenshotModal() {
  const modal = document.getElementById('proof-screenshot-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initProofModal() {
  const openBtn = document.getElementById('open-proof-btn');
  const heroOpenBtn = document.getElementById('hero-inspect-proof-btn');
  const closeBtn = document.getElementById('proof-modal-close');
  const modal = document.getElementById('proof-screenshot-modal');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      openProofScreenshotModal();
    });
  }

  if (heroOpenBtn) {
    heroOpenBtn.addEventListener('click', () => {
      openProofScreenshotModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeProofScreenshotModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProofScreenshotModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProofScreenshotModal();
      }
    });
  }
}

// Global exposure for case study modal trigger
window.openProofScreenshotModal = openProofScreenshotModal;
window.closeProofScreenshotModal = closeProofScreenshotModal;

/**
 * --------------------------------------------------------------------------
 * 8. PERFORMANCE MEDIA PACING CALCULATOR
 * --------------------------------------------------------------------------
 * Demonstrates analytical calculation: Monthly Spend, Days in Flight, Target CPL
 */
function initPacingCalculator() {
  const budgetInput = document.getElementById('calc-budget');
  const daysInput = document.getElementById('calc-days');
  const cplInput = document.getElementById('calc-cpl');
  const dailySpendEl = document.getElementById('calc-res-daily');
  const projLeadsEl = document.getElementById('calc-res-leads');

  function calculate() {
    const budget = parseFloat(budgetInput?.value) || 0;
    const days = parseInt(daysInput?.value) || 1;
    const cpl = parseFloat(cplInput?.value) || 1;

    if (days > 0 && budget >= 0) {
      const dailySpend = budget / days;
      if (dailySpendEl) {
        dailySpendEl.textContent = `$${dailySpend.toFixed(2)}`;
      }
    }

    if (cpl > 0 && budget >= 0) {
      const projLeads = Math.floor(budget / cpl);
      if (projLeadsEl) {
        projLeadsEl.textContent = `${projLeads.toLocaleString()} Leads`;
      }
    }
  }

  if (budgetInput && daysInput && cplInput) {
    budgetInput.addEventListener('input', calculate);
    daysInput.addEventListener('input', calculate);
    cplInput.addEventListener('input', calculate);
    // Initial calculation
    calculate();
  }
}

/**
 * --------------------------------------------------------------------------
 * 8. CONTACT FORM (Functional mailto with fallback and clipboard copy)
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const copyBtn = document.getElementById('copy-form-btn');
  const statusMsg = document.getElementById('form-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const type = document.getElementById('form-type')?.value;
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      showStatus('Please complete all required fields.', 'error');
      return;
    }

    const emailTo = 'abdlrhmanmahmoud69@gmail.com';
    const subject = encodeURIComponent(`Portfolio Inquiry: ${type} from ${name}`);
    const body = encodeURIComponent(
      `Hi Abdlrhman,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}\nInquiry Type: ${type}`
    );

    // Open mailto link directly in default mail client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    showStatus('Preparing your email client. You can also use the copy button below.', 'success');
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const name = document.getElementById('form-name')?.value.trim() || 'Prospective Partner';
      const email = document.getElementById('form-email')?.value.trim() || '[Your Email]';
      const type = document.getElementById('form-type')?.value || 'Discussion';
      const message = document.getElementById('form-message')?.value.trim() || 'Let\'s connect to discuss digital marketing performance and opportunities.';

      const formattedText = `To: abdlrhmanmahmoud69@gmail.com\nSubject: Portfolio Inquiry: ${type} from ${name}\n\nHi Abdlrhman,\n\n${message}\n\nSender: ${name} (${email})\nInquiry: ${type}`;

      navigator.clipboard.writeText(formattedText)
        .then(() => {
          showStatus('Inquiry text copied to clipboard! Paste it directly into your email or LinkedIn.', 'success');
        })
        .catch(() => {
          showStatus('Could not access clipboard. Please send email directly to abdlrhmanmahmoud69@gmail.com', 'error');
        });
    });
  }

  function showStatus(text, type) {
    if (!statusMsg) return;
    statusMsg.textContent = text;
    statusMsg.style.color = type === 'error' ? '#f87171' : '#38bdf8';
  }
}

/**
 * --------------------------------------------------------------------------
 * 9. INTERSECTION OBSERVER SCROLL SPY (HIGH-PERFORMANCE ZERO-JANK)
 * --------------------------------------------------------------------------
 * Tracks active sections using an Intersection Observer as the user scrolls.
 * When a section becomes active, applies the '.active' class to the corresponding
 * nav-link and updates the glowing edge indicator without triggering layout thrashing.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id], section#home');
  const navLinks = document.querySelectorAll('.site-nav .nav-link, .mobile-nav-drawer .nav-link');
  const progressBar = document.getElementById('scroll-progress-bar');

  if (!sections.length || !navLinks.length) return;

  let currentActiveId = '';

  function setActiveSection(sectionId) {
    if (!sectionId || sectionId === currentActiveId) return;
    currentActiveId = sectionId;

    // 1. Apply specific 'active' class to matching nav-link
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // 2. Psychological Color Coding: update edge glow only when section changes
    if (progressBar) {
      let edgeGlow = 'rgba(37, 99, 235, 0.95)'; // Royal Blue (Experience / B2B)
      if (sectionId === 'contact' || sectionId === 'education-certs') {
        edgeGlow = 'rgba(16, 185, 129, 0.95)'; // Emerald Green (Results / Contact)
      } else if (sectionId === 'case-studies' || sectionId === 'skills') {
        edgeGlow = 'rgba(6, 182, 212, 0.95)'; // Electric Cyan (Case Studies / AI & Automation)
      }
      progressBar.style.setProperty('--scroll-edge-glow', edgeGlow);
    }
  }

  // Use a lean Intersection Observer with a single threshold for peak 60fps performance
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          setActiveSection(id);
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Default active section
  setActiveSection('home');
}

/**
 * --------------------------------------------------------------------------
 * 9B. UNIFIED SCROLL COORDINATOR (PROGRESS BAR, ELEVATION & FLOATING BUTTON)
 * --------------------------------------------------------------------------
 * Single-frame requestAnimationFrame loop handling all scroll-driven UI:
 * - Fluid 0-100% progress bar width
 * - Header elevated state (.scrolled)
 * - Floating back to top button visibility (.visible)
 * Zero redundant listeners · Zero layout thrashing · Butter-smooth 60/120fps.
 */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const siteHeader = document.querySelector('.site-header');
  const floatingTopBtn = document.getElementById('floating-back-to-top');
  if (!progressBar && !siteHeader) return;

  let ticking = false;

  function updateScrollMetrics() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

    // 1. Progress Bar width
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // 2. Elevated Header state
    if (siteHeader) {
      if (scrollTop > 18) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // 3. Floating Back to Top Button
    if (floatingTopBtn) {
      if (scrollTop > 280) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollMetrics);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateScrollMetrics();
}

/**
 * --------------------------------------------------------------------------
 * 10. SCROLL REVEAL (IntersectionObserver)
 * --------------------------------------------------------------------------
 * Seamlessly fades and slides sections and cards into view as the user scrolls.
 * Respects prefers-reduced-motion and gracefully falls back for older browsers.
 */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    'section, .reveal-on-scroll, .experience-card, .case-study-card, .skill-category-card, .cert-card, .contact-direct-card'
  );

  if (!targets.length) return;

  // Ensure base class is present on all targets
  targets.forEach(el => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
    }
  });

  // Respect reduced motion accessibility setting
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || prefersReduced) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach(el => {
    // If element is already in the viewport upon initial load, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });
}

/**
 * Helper to escape HTML characters
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * --------------------------------------------------------------------------
 * 11. THEME TOGGLER (Light & Dark Mode)
 * --------------------------------------------------------------------------
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-theme-toggle');
  const storageKey = 'abdlrhman_theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.remove('light');
    }
  }

  // Determine initial theme: strictly default to light mode unless 'dark' was chosen
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'dark') {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  function toggle() {
    const isCurrentLight = document.documentElement.getAttribute('data-theme') === 'light' || document.documentElement.classList.contains('light');
    const nextTheme = isCurrentLight ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggle);
  }
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', toggle);
  }
}

/**
 * --------------------------------------------------------------------------
 * 12. HOOKIFY VIRAL HOOK GENERATION ENGINE (INTERACTIVE SIMULATOR)
 * --------------------------------------------------------------------------
 */
function initHookifyDemoEngine() {
  const generateBtn = document.getElementById('demo-generate-btn');
  const platformSelect = document.getElementById('demo-platform-select');
  const frameworkSelect = document.getElementById('demo-framework-select');
  const topicInput = document.getElementById('demo-topic-input');
  const resultsContainer = document.getElementById('demo-results-container');

  if (!generateBtn || !resultsContainer) return;

  const HOOK_PATTERNS = {
    curiosity: [
      {
        tag: 'Curiosity Gap #1',
        score: '97% Virality Score',
        template: (topic, platform) => `Most marketers think ${topic} requires a huge budget. Here's why 95% of ad accounts are failing silently—and the 1 fix that reversed our CPA.`
      },
      {
        tag: 'Curiosity Gap #2',
        score: '94% Virality Score',
        template: (topic, platform) => `I spent $8,500+ testing ${topic} so you don't have to. The result wasn't what anyone on ${platform} predicted.`
      },
      {
        tag: 'Curiosity Gap #3',
        score: '91% Virality Score',
        template: (topic, platform) => `Stop doing ${topic} the traditional way. This counter-intuitive nuance cut our acquisition cost by 83% in under 14 days.`
      }
    ],
    pas: [
      {
        tag: 'PAS #1 (Problem Agitation Solution)',
        score: '98% Virality Score',
        template: (topic, platform) => `Tired of burning ad budget on ${topic} without qualified leads? Every day you rely on broad targeting, auction CPMs eat your margins. Here is our 3-stage funnel.`
      },
      {
        tag: 'PAS #2 (Agitation Lever)',
        score: '95% Virality Score',
        template: (topic, platform) => `The real reason your ${topic} campaigns fatigue after 48 hours isn't your ad spend—it's your hook velocity. Here is how to fix it before your next flight.`
      },
      {
        tag: 'PAS #3 (Direct Route)',
        score: '92% Virality Score',
        template: (topic, platform) => `If you are still sending ${topic} traffic to slow multi-step landing pages, you are losing 64% of high-intent buyers. Route them straight to direct consultation.`
      }
    ],
    aida: [
      {
        tag: 'AIDA #1 (Attention + Desire)',
        score: '96% Virality Score',
        template: (topic, platform) => `Attention: This exact ${topic} ad structure generated 980 verified inquiries at $4.14 per lead. Save this breakdown for your next strategy meeting.`
      },
      {
        tag: 'AIDA #2 (Desire Engine)',
        score: '93% Virality Score',
        template: (topic, platform) => `What if your ${topic} ad sets never suffered from creative burnout? Here is the systematic rotation schedule we deploy on ${platform}.`
      },
      {
        tag: 'AIDA #3 (Call-to-Action Focus)',
        score: '91% Virality Score',
        template: (topic, platform) => `3 proven psychological hooks for ${topic} that stop the thumb scroll within the first 2 seconds on ${platform}. Swipe through to test variant #1.`
      }
    ],
    contrarian: [
      {
        tag: 'Contrarian #1 (Belief Shatterer)',
        score: '99% Virality Score',
        template: (topic, platform) => `Unpopular opinion about ${topic}: Clicks and impressions are vanity metrics. If it doesn't drop your cost-per-qualified-lead, turn the campaign off.`
      },
      {
        tag: 'Contrarian #2 (Industry Truth)',
        score: '95% Virality Score',
        template: (topic, platform) => `Why the standard agency advice about ${topic} is completely wrong for the GCC market in 2026.`
      },
      {
        tag: 'Contrarian #3 (Testing Truth)',
        score: '92% Virality Score',
        template: (topic, platform) => `You don't have a budget problem with ${topic}—you have a retention problem in the first 3 seconds. Here is the telemetry proof.`
      }
    ]
  };

  function renderHooks() {
    const platform = platformSelect?.value || 'tiktok';
    const framework = frameworkSelect?.value || 'curiosity';
    const topic = topicInput?.value.trim() || 'Paid Acquisition';

    const platformName = platform === 'tiktok' ? 'TikTok'
      : platform === 'instagram' ? 'Instagram Reels'
      : platform === 'linkedin' ? 'LinkedIn'
      : 'X (Twitter)';

    const patternList = HOOK_PATTERNS[framework] || HOOK_PATTERNS.curiosity;

    resultsContainer.innerHTML = patternList.map((item, index) => {
      const hookText = item.template(topic, platformName);
      return `
        <div class="demo-hook-card">
          <div class="demo-hook-meta">
            <span class="demo-hook-tag">${escapeHtml(item.tag)} · ${escapeHtml(platformName)}</span>
            <span class="demo-hook-score">⚡ ${escapeHtml(item.score)}</span>
          </div>
          <div class="demo-hook-body">"${escapeHtml(hookText)}"</div>
          <div class="demo-hook-actions">
            <span>Stop-the-Scroll Retention: 0–3s Verified</span>
            <button type="button" class="demo-hook-copy-btn" data-hook-text="${escapeHtml(hookText)}">
              Copy Hook
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach copy buttons
    resultsContainer.querySelectorAll('.demo-hook-copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-hook-text') || '';
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied!';
          btn.style.color = 'var(--accent-emerald)';
          setTimeout(() => {
            btn.textContent = 'Copy Hook';
            btn.style.color = '';
          }, 2000);
        });
      });
    });
  }

  generateBtn.addEventListener('click', renderHooks);
  platformSelect?.addEventListener('change', renderHooks);
  frameworkSelect?.addEventListener('change', renderHooks);

  // Initial render
  renderHooks();
}

/**
 * ==========================================================================
 * 13. BILINGUAL LOCALIZATION ENGINE (ARABIC / ENGLISH)
 * ==========================================================================
 */
const CASE_STUDIES_AR = {
  'kitchen-bazaar': {
    client: 'مطبخ بازار (Kitchen Bazaar)',
    region: 'السعودية (KSA) · تجارة إلكترونية',
    headline: 'توسيع مبيعات متجر إلكتروني: 169,455$ مبيعات بعائد 6.95x ROAS',
    teaser: 'إدارة إنفاق 24,352$ إعلانات سناب شات محققة 169,455$ مبيعات مؤكدة بعائد 6.95x ROAS (1,643 طلباً و26,955 إضافة للسلة بـ 0.90$) و38.3 ألف ريال إعلانات جوجل جلبت 78.4 ألف نقرة و1,310 تحويل.',
    services: 'سناب شات · إعلانات جوجل · تيك توك · مضاعفة الـ ROAS',
    industry: 'مبيعات التجزئة والتجارة الإلكترونية',
    statusLabel: 'مشروع عميل مكتمل',
    objective: 'تعظيم إيرادات المبيعات وعدد الطلبات للمتجر، مع الحفاظ على عائد إنفاق إعلاني (ROAS) يتجاوز 5x، وخفض تكلفة إضافة السلة عن 1.00$، واقتناص نية الشراء العالية عبر بحث جوجل في السعودية.',
    challenge: 'المنافسة الشديدة في قطاع مستلزمات المطبخ والمنزل بالسعودية، حيث ترتفع تكلفة الظهور (CPM) في المواسم، ويؤدي الاستهداف العشوائي إلى التخلي عن السلات دون إتمام الشراء.',
    strategy: 'تصميم قمع استحواذ ثنائي المحور: 1) إعلانات سناب شات باستخدام الكتالوج الديناميكي والتركيز على شريحة السيدات 25-44 مع عروض موسمية حققت بعض مجموعاتها 15.43x ROAS؛ 2) إعلانات بحث جوجل لاقتناص الكلمات ذات نية الشراء المباشرة.',
    execution: 'إدارة أكثر من 20 مجموعة إعلانية مع إيقاف فوري للزوايا المرهقة وتوسيع الحملات الرابحة. تحقيق 26,955 إضافة للسلة بتكلفة 0.90$ وإغلاق 1,643 طلب شراء بمتوسط تكلفة استحواذ 14.54$.'
  },
  'ijadah-education': {
    client: 'إجادة للتعليم (IJADAH)',
    region: 'الإمارات العربية المتحدة (UAE)',
    headline: 'منظومة متعددة المراحل لجلب وتأهيل استفسارات الطلاب عبر واتساب',
    teaser: 'إطلاق 28 حملة إعلانية على ميتا جلبت 980 استفساراً مؤكداً لشرائح أولياء الأمور والمدارس مع خفض تكلفة العميل بنسبة 83% لتصل إلى 4.14$.',
    services: 'إعلانات ميتا · استهداف B2B وأولياء الأمور · تأهيل عبر واتساب',
    industry: 'التعليم والتدريب المهني',
    statusLabel: 'مشروع عميل مكتمل',
    objective: 'جلب استفسارات مؤكدة عالية الجودة من أولياء الأمور وإدارات المدارس مع بيانات اتصال كاملة، مع خفض الهدر الإعلاني في الرسائل غير المؤهلة.',
    challenge: 'إرهاق إعلاني مرتفع لدى المقيمين في الإمارات، مما رفع تكلفة النقرة وتسبب في رسائل استفسار عشوائية غير مؤهلة استنزفت فريق التسجيل والاستشارات.',
    strategy: 'تقسيم الحساب الإعلاني إلى شرائح نفسية محددة: فيديوهات بناء المصداقية التعليمية، إعادة استهداف المتفاعلين بنماذج ميتا الفورية (Instant Forms) المحتوية على أسئلة تأهيلية، وحملات محادثات B2B للمدارس.',
    execution: 'اختبار زوايا إعلانية متعددة تفاضل بين المناهج التعليمية والمستقبل المهني. استبعاد الجماهير غير المهتمة واستخدام جماهير مشابهة (Lookalike) لعملاء سابقين.'
  },
  'cardip-automotive': {
    client: 'كارديب (Cardip)',
    region: 'المملكة العربية السعودية (KSA)',
    headline: 'تدقيق حملات أفلام حماية السيارات (XPEL PPF) واستقطاب عملاء واتساب',
    teaser: 'تدقيق ما يقارب 50 ريلز و35 حملة إعلانية بإنفاق 15,800 ريال، وتحقيق 436 عميل واتساب مؤهل بمتوسط 36.24 ريال للاستفسار.',
    services: 'أفلام حماية XPEL · إعلانات إنستجرام · توجيه مباشر لواتساب',
    industry: 'خدمات وتعديل سيارات فاخرة',
    statusLabel: 'مشروع عميل مكتمل',
    objective: 'مراجعة أداء الحملات والمحتوى السابق، وتحديد أفضل الزوايا الإبداعية المؤثرة، وبناء مسار استجابة مرئي يربط أصحاب السيارات الفاخرة مباشرة بمستشاري الخدمة عبر واتساب.',
    challenge: 'خدمات حماية وتلميع السيارات عالية القيمة تتطلب ثقة عميقة. صفحات الهبوط التقليدية شهدت تسرباً كبيراً لأن ملاك السيارات يفضلون الاستفسار الفوري ومناقشة تفاصيل الضمان قبل الحجز.',
    strategy: 'تدقيق 50 مقطع ريلز و35 حملة إعلانية، والتركيز على مقاطع إثبات الجودة والحرفية (وضوح الطلاء، المعالجة الذاتية للخدوش، وضمان XPEL) مع التوجيه المباشر لمحادثات واتساب.',
    execution: 'تحليل كفاءة الإنفاق الإعلاني في الرياض والمنطقة الشرقية، وتوجيه الميزانيات نحو الفيديوهات الأكثر إقناعاً مع استبعاد الزوايا غير المجدية.'
  },
  'instagram-page-growth': {
    client: '3shwaee_ (عشوائي)',
    region: 'الشرق الأوسط / نمو عضوي',
    headline: 'تنمية حساب إنستجرام عضوياً: من 0 إلى 20,000+ متابع و1.8M مشاهدة ريلز',
    teaser: 'بناء وتنمية حساب إنستجرام من الصفر لأكثر من 20 ألف متابع بدون أي تمويل إعلاني، عبر استراتيجية محتوى ممنهجة تركز على الهوكات القوية والتحليل المبني على البيانات.',
    services: 'استراتيجية المحتوى · الانتشار العضوي · تحليل إحصائيات الحساب',
    industry: 'صناعة المحتوى والعلامات الشخصية',
    statusLabel: 'نمو عضوي مكتمل',
    objective: 'تأسيس محرك محتوى مستدام، واكتشاف الركائز الأعلى تفاعلاً، وتخطي حاجز 20,000 متابع حقيقي باستخدام مقاطع الريلز.',
    challenge: 'بناء جمهور متفاعل على إنستجرام من الصفر التام دون ميزانية إعلانية مدفوعة، وسط تشبع كبير بالمحتوى المنافس.',
    strategy: 'صياغة هوكات بداية تثير الفضول وتوقف التمرير (Thumb-Stop Hooks)، واستخدام تحليلات إنستجرام الاحترافية لدراسة منحنيات الاحتفاظ بالمشاهدين ومضاعفة المحتوى الرابح.',
    execution: 'إنتاج ونشر مقاطع ريلز قصيرة بانتظام بين مايو 2022 ومارس 2024، مع تحسين الإيقاع والخطوط المستخدمة.'
  },
  'heart-of-life-rehabilitation': {
    client: 'مؤسسة قلب الحياة للتخاطب والتأهيل',
    region: 'مصر',
    headline: 'التأهيل الحركي للأطفال والتوعية بالإدراك البصري الحركي',
    teaser: 'تطوير الرسائل التسويقية وتوجيه الجمهور المستهدف لخدمة تأهيل حركي للأطفال في مصر، وتوعية أولياء الأمور بأهمية دعم الإدراك البصري الحركي.',
    services: 'صياغة الرسائل الإعلانية · اللهجة المصرية · أبحاث الكلمات المفتاحية',
    industry: 'رعاية صحية وتأهيل أطفال',
    statusLabel: 'قيد التنفيذ والمتابعة',
    objective: 'بناء إطار حملة إعلانية إنسانية عالية الثقة، توضح لأولياء الأمور أهمية التمارين البصرية الحركية للأطفال ذوي التأخر في الكلام والنمو.',
    challenge: 'الوصول إلى أولياء الأمور القلقين برسائل دقيقة طبياً ومتعاطفة دون إثارة الفزع أو المبالغة.',
    strategy: 'صياغة نصوص وعناوين باللهجة المصرية الدافئة والقريبة من الأسرة، وإجراء بحث للكلمات المفتاحية لرصد استفسارات الأمهات والآباء الشائعة.',
    execution: 'هيكلة ركائز التواصل الإعلاني وتناول علامات الملاحظة لدى الأطفال (التناسق بين العين واليد، التوازن، ردود الفعل) مع دعوة واضحة لطلب التقييم.'
  },
  'cro-audit': {
    client: 'متجر تجارة إلكترونية',
    region: 'مواقع المتاجر الإلكترونية',
    headline: 'تدقيق وتحسين معدل التحويل (CRO) لمتجر تجارة إلكترونية',
    teaser: 'إجراء تقييم شامل لمعدل التحويل عبر المتجر الإلكتروني، واكتشاف نقاط تسرب العملاء في عرض المنتجات، وتدفق سلة الجوال، وعوامل الثقة لزيادة المبيعات.',
    services: 'تشخيص مسار الشراء · تجربة الجوال · إشارات الثقة و UX',
    industry: 'تحسين معدلات التحويل (CRO)',
    statusLabel: 'تدقيق واستراتيجية',
    objective: 'تشخيص تسرب التحويلات عبر صفحات تفاصيل المنتجات وسلة الشراء والدفع، وتقديم توصيات قابلة للاختبار لرفع سرعة الشراء.',
    challenge: 'المتجر يجلب زيارات منتظمة من الإعلانات الممولة، لكن معدل تحويل الجوال كان أقل من المعايير بسبب احتكاك خفي في خطوات الشراء.',
    strategy: 'تحليل مسارات تصفح الزوار من الدخول وحتى إتمام الطلب، واكتشاف عوائق اختيار خيارات المنتج، ووضوح ملخص السلة، وأزرار الشراء الثابتة للجوال.',
    execution: 'تسليم مصفوفة تدقيق تصنف الإصلاحات حسب الأثر والجهد، مع إبراز شارات الأمان والدفع المفقودة، وتبسيط حقول الدفع على الجوال.'
  },
  'hookify-ai-saas': {
    client: 'منصة Hookify AI (أداة ومسرع الميديا باينج)',
    region: 'مشروع وأداة إنتاجية',
    headline: 'Hookify — محرك ذكاء اصطناعي لصناعة الهوكات الإعلانية ونصوص الريلز',
    teaser: 'ابتكار وهندسة أداة ذكاء اصطناعي متكاملة باستخدام React وNode ونماذج Gemini AI لإنتاج هوكات إعلانية جذابة، ونصوص ريلز مدتها 30 ثانية، مع تحليل احتمالية الانتشار.',
    services: 'Google AI Studio · Gemini API · محرك كتابة الإعلانات',
    industry: 'تكنولوجيا التسويق والذكاء الاصطناعي',
    statusLabel: 'أداة ومسرع إعلاني',
    objective: 'تطوير أداة تسرع عمل الميديا باير عبر تطبيق أطر الإعلانات المباشرة (AIDA, PAS, Curiosity Gap) لإنتاج أفكار وهوكات إعلانية بلمح البصر.',
    challenge: 'يقضي الميديا بايرز وصناع الإعلانات ساعات طويلة في ابتكار زوايا إعلانية جديدة، بينما تنتج روبوتات الدردشة العامة نصوصاً تقليدية لا تبيع.',
    strategy: 'الاستفادة من Google AI Studio وGemini API لتصميم مصفوفات أوامر ذكية تصنع هوكات ونصوصاً مقسمة (Hook, Body, CTA) مع درجات تفاعل متوقعة.',
    execution: 'بناء واجهة تفاعلية كاملة تدعم العربية والإنجليزية (RTL/LTR) مع محاكاة فورية لمعدلات الاحتفاظ بالمشاهدة في أول 3 ثوانٍ.'
  },
  'nyckel-porsche-bmw': {
    client: 'تجربة تصنيف الصور بالرؤية الحاسوبية',
    region: 'منصة Nyckel ML',
    headline: 'بورشه مقابل بي إم دبليو — تجربة تعلم الآلة وتصنيف الصور',
    teaser: 'تدريب واختبار نموذج تصنيف صور متخصص عبر منصة Nyckel لاختبار دقة التعرف على الملامح التصميمية الفاخرة بين سيارات بورشه وبي إم دبليو.',
    services: 'منصة Nyckel · رؤية حاسوبية · تصنيف آلي',
    industry: 'تعلم الآلة والذكاء الاصطناعي',
    statusLabel: 'تجربة تعلم آلة',
    objective: 'تدريب نموذج تصنيف مرئي قادر على التمييز بين التفاصيل التصميمية الدقيقة لعلامتين تجاريتين رائدتين في عالم السيارات.',
    challenge: 'فهم آليات عمل منصات تعلم الآلة السريعة ومتطلبات جمع البيانات وتقييم دقة التصنيف.',
    strategy: 'جمع بيانات تدريب متوازنة تغطي زوايا وموديلات وظروف إضاءة مختلفة، وتقييم مؤشرات الثقة وحالات الالتباس.',
    execution: 'استخدام مسار التدريب السريع على Nyckel واختبار النموذج مقابل صور تحقق ودراسة تغير ثقة النموذج باختلاف الزاوية.'
  },
  'marketing-kpi-dashboard': {
    client: 'إطار تحليل البيانات والميديا باينج',
    region: 'إطار متعدد المنصات',
    headline: 'لوحة تحكم مؤشرات الأداء (KPIs) ومعدل الإنفاق اليومي للحملات',
    teaser: 'تصميم نموذج موحد لبيانات الحملات الإعلانية يدمج أرقام ميتا وسناب شات وجوجل في مؤشرات موحدة وأتمتة وتيرة الإنفاق.',
    services: 'تقارير الأداء · وتيرة الإنفاق Pacing · مسارات التحويل',
    industry: 'تحليل البيانات وإعداد التقارير',
    statusLabel: 'إطار عمل تحليلي',
    objective: 'توحيد مقاييس التسويق الأساسية (CPL, CPA, ROAS, CPM, CTR, Hook Rate) في لوحة واحدة واضحة ودقيقة.',
    challenge: 'تشتت مديري الحملات بين لوحات إعلانية متعددة، مما يؤخر إعادة توزيع الميزانيات ويخفي إرهاق الإعلانات.',
    strategy: 'تحديد منطق الإسناد والنماذج الرياضية لحساب معدلات الإنفاق اليومي والتنبؤ بالميزانية لمنع الهدر وتنبيه الفريق.',
    execution: 'بناء حاسبات تفاعلية لوتيرة الصرف تسوي بين مقاييس المنصات المختلفة وتقدم رؤية فورية لحالة الميزانية.'
  },
  'marketing-ai-agent-platform': {
    client: 'هندسة منتجات الذكاء الاصطناعي',
    region: 'مخطط ومعمارية مقترحة',
    headline: 'منصة وكلاء الذكاء الاصطناعي للميديا باينج — الرؤية والمعمارية',
    teaser: 'دراسة المتطلبات المعمارية لمنصة وكلاء ذكاء اصطناعي موحدة تربط بين توليد الأفكار، تحسين محركات التوليد (GEO)، والمتابعة التلقائية للحملات.',
    services: 'أنظمة الوكلاء الذاتية · أبحاث GEO · مسارات الميديا باينج',
    industry: 'أتمتة التسويق والأنظمة الذكية',
    statusLabel: 'مفهوم قيد التخطيط',
    objective: 'وضع مواصفات لمنصة وكلاء موحدة تدعم ابتكار الحملات ومراقبة الأداء مع إبقاء التحكم النهائي بيد الإنسان.',
    challenge: 'تنقل المسوقين بين عشرات الأدوات المنفصلة للبحث والكتابة وإطلاق الإعلانات والمراقبة، مما يخلق هدراً في الوقت.',
    strategy: 'تحديد مسارات العمل ووحدات الوكلاء: وكيل الأفكار، وكيل النصوص، وكيل رصد وتيرة الصرف والانحرافات، مع لوحة تحكم تفاعلية.',
    execution: 'توثيق المتطلبات المعمارية واحتياجات الـ API وهندسة الأوامر لتطبيقها في النماذج الأولية المستقبلية.'
  }
};

const I18N_DICTIONARY = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_experience: 'الخبرات المهنية',
    nav_work: 'سوابق الأعمال',
    nav_playbook: 'منظومة التشغيل',
    nav_skills: 'المهارات والقدرات',
    nav_education: 'التعليم والشهادات',
    nav_contact: 'تواصل معي',
    cta_whatsapp: 'واتساب',
    drawer_role: 'مختص إعلانات ممولة ومضاعفة المبيعات',
    toggle_theme: 'تبديل الوضع الليلي / الفاتح',
    chat_whatsapp: 'تواصل عبر واتساب',

    // Hero
    hero_status: 'متاح لإدارة وتوسيع الحملات الإعلانية · دول الخليج وعن بُعد',
    hero_name: 'عبدالرحمن الحليوة',
    hero_role: 'مختص إعلانات ممولة ومضاعفة المبيعات (Performance Media Buyer)',
    hero_pitch: 'مختص إعلانات ممولة (Performance Media Buyer) يركز على إدارة وتوسيع الحملات الإعلانية عالية الربحية عبر <strong>سناب شات، إعلانات بحث جوجل، وميتا (فيسبوك وإنستجرام)</strong> في أسواق الخليج العربي ومصر. حققت <strong>169,455$ مبيعات موثقة في التجارة الإلكترونية بعائد استثمار 6.95x ROAS</strong> واستقطاب <strong>980 عميلاً محتملاً عالي الجودة</strong> (بأقل تكلفة استحواذ 4.14$). أستثمر أدوات الذكاء الاصطناعي، الأتمتة، وتحليل البيانات كميزة داعمة لاختبار الزوايا الإعلانية بمرونة فائقة ورفع كفاءة النتائج.',

    // KPIs
    kpi_1_label: 'إيرادات مبيعات التجارة الإلكترونية',
    kpi_1_sub: '1,643 طلب شراء مكتمل · السوق السعودي (سناب شات)',
    kpi_2_label: 'استفسارات وعملاء مؤهلون',
    kpi_2_sub: '4.14$ أقل تكلفة استحواذ · الإمارات (28 حملة إعلانية)',
    kpi_3_label: 'ميزانيات إعلانية مدارة',
    kpi_3_badge: 'قنوات متعددة',
    kpi_3_sub: 'سناب شات، بحث جوجل وميتا عبر دول الخليج',
    kpi_4_label: 'أداة تسريع صناعة الإعلانات',
    kpi_4_badge: 'محرك نصوص ذكي',
    kpi_4_sub: 'ابتكار وتطوير · تسريع اختبار الزوايا الإعلانية',

    // Hero CTAs
    hero_cta_wa: 'تواصل عبر واتساب',
    hero_cta_work: 'استعراض دراسات الحالة',
    hero_cta_proof: 'معاينة إثبات ميتا المباشر',
    hero_cta_onepager: 'الملخص التنفيذي',

    // Experience
    exp_eyebrow: 'الخبرات العملية والأدوار',
    exp_title: 'الخبرة المهنية الميدانية.',
    exp_desc: 'تنفيذ احترافي ومباشر لإعلانات التجارة الإلكترونية الخليجية، استقطاب العملاء المحتملين ذوي القيمة العالية، وتدريب وتأهيل الكوادر التسويقية.',
    exp_r1_title: 'مختص إعلانات ممولة ومضاعفة المبيعات (Performance Media Buyer)',
    exp_r1_badge: 'دوام كامل حالي',
    exp_r1_company: 'إي ماركتنج إيجيبت (eMarketing Egypt) · الدقي، الجيزة، مصر',
    exp_r1_dates: 'أغسطس 2026 — حتى الآن',
    exp_r1_b1: 'إدارة وتوسيع ميزانيات إعلانية ممولة (+32.8 ألف دولار) عبر <strong>إعلانات سناب شات، شبكة جوجل، وإعلانات ميتا</strong> لعملاء ومتاجر في السعودية والإمارات ومصر.',
    exp_r1_b2: 'توسيع مبيعات <strong>مطبخ بازار (Kitchen Bazaar - متجر سعودي)</strong>: تحقيق <strong>169,455$ مبيعات موثقة بعائد 6.95x ROAS</strong> عبر سناب شات (1,643 طلب شراء، و26,955 إضافة للسلة بتكلفة 0.90$) وإدارة 38.3 ألف ريال إعلانات جوجل (78.4 ألف نقرة، 1,310 تحويل شراء).',
    exp_r1_b3: 'توسيع نتائج <strong>إجادة للتعليم (الإمارات)</strong>: استقطاب <strong>980 استفساراً مؤهلاً</strong> عبر 28 حملة مع خفض تكلفة العميل بنسبة 83% لتصل إلى <strong>4.14$</strong> و628 محادثة واتساب مباشرة.',
    exp_r1_b4: 'متابعة يومية دقيقة لمؤشرات الأداء (KPIs)، وإعادة توجيه الميزانيات، وتقارير الإسناد، والاستفادة من الذكاء الاصطناعي في ابتكار أفكار النصوص لمعالجة تراجع الإعلانات.',

    exp_r2_title: 'مدرب تسويق رقمي وإعلانات ممولة',
    exp_r2_badge: 'دور حالي',
    exp_r2_company: 'أدهم حسام · مصر / أونلاين',
    exp_r2_dates: 'دور حالي',
    exp_r2_b1: 'تقديم تدريب تطبيقي عملي في إدارة الإعلانات وهيكلة المنصات واستراتيجيات توسيع الميزانيات باحترافية.',
    exp_r2_b2: 'تفكيك وتحليل مسارات الشراء (Funnels)، تكتيكات المزايدة، وتشخيص إجهاد وتراجع تفاعل الجماهير.',

    exp_r3_title: 'مرشد وموجّه فرق إعلانية',
    exp_r3_company: 'أدهم حسام · مصر / أونلاين',
    exp_r3_dates: 'دور سابق',
    exp_r3_b1: 'متابعة وتقييم فردي وجماعي مباشر لحملات المتدربين وصياغة الرسائل الإعلانية المقنعة.',
    exp_r3_b2: 'إدارة المناهج والورش التدريبية، ودعم مجتمع المتدربين، ومتابعة الدفعات الجديدة خطوة بخطوة.',

    exp_r4_title: 'مختص إعلانات ممولة مستقل (Freelance Performance Media Buyer)',
    exp_r4_badge: 'مشاريع خاصة',
    exp_r4_company: 'ممارسة مهنية مستقلة · عن بُعد / الخليج ومصر',
    exp_r4_dates: 'ممارسة مستمرة',
    exp_r4_b1: 'إدارة وتخصيص الحملات الممولة، صياغة الإعلانات، وتدقيق تحسين معدل التحويل (CRO) لعملاء ومتاجر خاصة.',
    exp_r4_b2: 'تدقيق حملات Cardip لأفلام حماية XPEL (إنفاق 15.8 ألف ريال، 436 عميل واتساب مؤهل)؛ وتنمية براند شخصي (@3shwaee_) من الصفر لأكثر من 20 ألف متابع حقيقي بدون إعلانات مدفوعة.',

    // Case Studies Section Header
    cs_eyebrow: 'دراسات الحالة وسوابق الأعمال',
    cs_title: 'مشاريع ونتائج الحملات الإعلانية الموثقة.',
    cs_desc: 'حملات واقعية مبنية على الأرقام والبيانات تثبت القدرة على مضاعفة المبيعات، خفض تكاليف الاستحواذ، وهندسة مسارات الشراء كاملة. اضغط على أي مشروع للاطلاع على التفاصيل والبيانات.',

    // Enterprise Playbook Section Header & Tabs
    playbook_eyebrow: 'منظومة العمل وتوسيع الميزانيات',
    playbook_title: 'بروتوكول التوسع ومحاكي الأرباح.',
    playbook_desc: 'منهجية منضبطة لإدارة المخاطر وتوسيع الحسابات الكبرى، تجمع بين قواعد إيقاف الخسائر ومحاكاة العائد لاتخاذ قرارات سريعة ومربحة.',
    pb_tab_scaling: 'قواعد التوسع وإيقاف الخسائر',
    pb_tab_roi: 'محاكي العائد المتوقع',
    pb_tab_roadmap: 'خارطة أول 90 يوماً',
    pb_tab_faq: 'الضمانات والأسئلة الشائعة',

    // Playbook Tab 1: Rules
    rule_1_badge: '+15% إلى +20% / كل 48-72 ساعة',
    rule_1_title: 'التوسع الرأسي المنضبط للميزانيات',
    rule_1_desc: 'لا نرفع الميزانية عشوائياً؛ الزيادة بنسبة 15%–20% كل يومين إلى ثلاثة فقط عند ثبات العائد (ROAS) فوق الهدف، لتجنب إعادة ضبط خوارزميات المنصة أو ارتفاع تكلفة الظهور CPM.',
    rule_1_trigger: 'الشرط الحاكم:',
    rule_1_trigger_val: 'استقرار الـ ROAS فوق الهدف لـ 3 أيام متتالية',
    rule_2_badge: 'إيقاف فوري عند 1.5x CPA',
    rule_2_title: 'قواعد إيقاف الخسائر الصارمة (Stop Loss)',
    rule_2_desc: 'تجريد كامل من العواطف تجاه الإعلانات. أي زاوية إعلانية يصل إنفاقها إلى 1.5 ضعف تكلفة الاستحواذ المستهدفة دون تحقيق مبيعات أو عملاء مؤهلين يتم إيقافها فوراً لحماية أرباح العميل.',
    rule_2_trigger: 'الشرط الحاكم:',
    rule_2_trigger_val: 'بلوغ الإنفاق 1.5x CPA دون أي تحويل',
    rule_3_badge: 'تدوير واستبدال أسبوعي',
    rule_3_title: 'المعالجة الاستباقية لتراجع الإعلانات',
    rule_3_desc: 'مراقبة يومية لمعدل الهوك في أول 3 ثوانٍ ونسبة النقر CTR. بمجرد تراجع التفاعل بنسبة 20%، يتم إطلاق 3 زوايا إعلانية جديدة أسبوعياً قبل أن تتدهور تكلفة العميل.',
    rule_3_trigger: 'الدورة التشغيلية:',
    rule_3_trigger_val: 'إطلاق 3 زوايا إبداعية جديدة مطلع كل أسبوع',

    // Playbook Tab 2: ROI Simulator
    sim_market_label: 'السوق المستهدف ونوع الحملة',
    sim_spend_label: 'الميزانية الإعلانية الشهرية ($ بالدولار)',
    sim_aov_label: 'متوسط قيمة الطلب أو السلة ($)',
    sim_res_eyebrow: 'نموذج الأداء المتوقع المخصص',
    sim_res_badge: 'محاكاة مبنية على سوابق الأعمال',
    sim_res_conversions: 'عدد طلبات الشراء المتوقعة',
    sim_res_revenue: 'إجمالي المبيعات المتوقعة',
    sim_res_roas: 'العائد الإعلاني المستهدف:',
    sim_res_cpa: 'الحد الأقصى لتكلفة الطلب (CPA):',
    sim_cta_discuss: 'ناقش هذا السيناريو مباشرة عبر واتساب',

    // Playbook Tab 3: Roadmap
    stage_1_time: 'الأيام 1 — 30',
    stage_1_title: 'التدقيق الشامل وتأسيس المسارات',
    stage_1_b1: 'مراجعة وتدقيق ربط البكسل وConversions API وأحداث التحويل.',
    stage_1_b2: 'الإيقاف الفوري للمجموعات الإعلانية المستنزفة للميزانية بدون مردود.',
    stage_1_b3: 'إطلاق أول 5 زوايا وهوكات إعلانية لاكتشاف الزاوية الأكثر ربحية.',
    stage_1_goal: 'الهدف: سد فجوات الهدر واكتشاف الهوك الإعلاني الرابح.',
    stage_2_time: 'الأيام 31 — 60',
    stage_2_title: 'استقرار الأداء وتعميق مسارات الشراء',
    stage_2_b1: 'تفعيل حملات إعادة الاستهداف الذكية والكتالوجات الديناميكية.',
    stage_2_b2: 'توصيات وتعديلات CRO لصفحات الهبوط لمنع تسرب السلات.',
    stage_2_b3: 'تثبيت خط الأساس للعائد المستهدف وتكلفة الاستحواذ Blended CPA.',
    stage_2_goal: 'الهدف: استقرار تحقيق أهداف الـ CPA والـ ROAS بانتظام.',
    stage_3_time: 'الأيام 61 — 90',
    stage_3_title: 'التوسع المربح ومضاعفة المبيعات',
    stage_3_b1: 'توسيع الميزانية رأسياً (+20%) على الزوايا الإعلانية الأعلى عائداً.',
    stage_3_b2: 'التوسع الأفقي واستهداف شرائح وجماهير شبيهة Lookalike جديدة.',
    stage_3_b3: 'دمج قنوات داعمة لاقتناص نية الشراء العالية (مثل إعلانات بحث جوجل).',
    stage_3_goal: 'الهدف: تعظيم حجم الأرباح الصافية مع الحفاظ على هامش الأمان.',

    // Playbook Tab 4: FAQ & Guarantees
    faq_q1: 'كيف يتم ضمان سرية بيانات مبيعاتنا وأرباحنا (NDA)؟',
    faq_a1: 'التزام تام باتفاقية عدم إفصاح رسمية ملزمة للطرفين (NDA). جميع الحسابات الإعلانية، وبيانات البكسل، وقوائم العملاء تظل ملكيتكم بنسبة 100%. أية دراسات حالة يتم استعراضها تكون بموافقة كتابية صريحة أو مع تجهيل كامل للبيانات.',
    faq_q2: 'ما هو الحد الأدنى للميزانية الشهرية المقترحة للبدء؟',
    faq_a2: 'تتراوح الميزانيات المعتادة بين 3,000$ وحتى 50,000$+ شهرياً في أسواق الخليج ومصر. يتيح هذا النطاق توفير حجم بيانات كافٍ لخوارزميات المنصات لتحديد العملاء الرابحين واختبار الزوايا الإعلانية بفاعلية.',
    faq_q3: 'كيف يتم التنسيق مع فريق المبيعات الداخلي أو الـ CRM لدينا؟',
    faq_a3: 'يتم ربط بيانات العملاء واستفسارات واتساب فورياً عبر Webhooks وWhatsApp Business API إلى صندوق محادثات فريقكم أو نظام الـ CRM مباشرة، مع مراقبة سرعة استجابة الفريق لضمان إغلاق أعلى نسبة من الصفقات.',
    faq_q4: 'ما هي وتيرة التقارير والمتابعة ومراجعة الأداء؟',
    faq_a4: 'وصول حي على مدار الساعة للوحة متابعة مؤشرات الأداء، بالإضافة إلى تقرير ملخص تنفيذي أسبوعي (الصرف، العائد، وتكلفة الاستحواذ، واختبارات الأسبوع القادم) ومكالمة استراتيجية شهرية.',

    // Executive One-Pager Modal
    op_eyebrow: 'ملخص تنفيذي للنمو',
    op_title: 'عبدالرحمن الحليوة · مختص إعلانات ممولة ومضاعفة المبيعات',
    op_print_btn: 'طباعة / حفظ PDF',
    op_kpi_1: 'مبيعات موثقة (عائد 6.95x)',
    op_kpi_2: 'استفسارات مؤهلة (4.14$ للعميل)',
    op_kpi_3: 'ميزانيات إعلانية مدارة',
    op_kpi_4: 'الأولوية: الربحية وهامش الأمان',
    op_sec_summary: 'الملخص التنفيذي',
    op_sec_platforms: 'المنصات الإعلانية الأساسية',
    op_sec_rules: 'بروتوكولات التوسع وإدارة المخاطر',
    op_sec_edu: 'التعليم والمؤهلات الأكاديمية',
    op_plat_1: '<strong>مدير إعلانات سناب شات:</strong> كتالوج ديناميكي وتوسيع مبيعات (169.4 ألف دولار مبيعات، عائد 6.95x).',
    op_plat_2: '<strong>إعلانات جوجل:</strong> شبكة البحث وحملات الأداء الأقصى لاقتناص نية الشراء (1,310 تحويل شراء).',
    op_plat_3: '<strong>مدير إعلانات ميتا:</strong> استقطاب وتأهيل العملاء عبر واتساب والنماذج (980 استفساراً مؤكداً).',
    op_plat_4: '<strong>إعلانات تيك توك:</strong> إعلانات محتوى المستخدم UGC واختبار الهوكات السريعة.',
    op_rule_1: '<strong>قاعدة +15% إلى +20%:</strong> زيادة رأسية منضبطة كل 48-72 ساعة.',
    op_rule_2: '<strong>إيقاف الخسائر عند 1.5x CPA:</strong> إيقاف فوري لأي مجموعة تتجاوز الحد.',
    op_rule_3: '<strong>التدوير الأسبوعي:</strong> استبدال الزوايا لتفادي إجهاد الإعلانات استباقياً.',
    op_rule_4: '<strong>الإسناد والتحليل:</strong> ربط Conversions API (CAPI) وترميز روابط UTM.',
    op_edu_desc: '<strong>بكالوريوس تكنولوجيا التسويق والتجارة الإلكترونية</strong> — جامعة الزقازيق (معدل تراكمي 3.040) · <strong>دبلومات الذكاء الاصطناعي والأتمتة وتحليل البيانات</strong> من المعهد القومي للاتصالات NTI · <strong>أخصائي معتمد من جوجل</strong> في التسويق الرقمي.',

    // Skills
    skills_eyebrow: 'أدوات الميديا باير والقدرات الداعمة',
    skills_title: 'الخبرة الأساسية والميزات التقنية الداعمة.',
    skills_desc: 'المجال والمهنة الأساسية: إدارة وتوسيع الإعلانات الممولة (Performance Media Buying). وتأتي مهارات أتمتة العمليات، البرمجة بلغة بايثون، وتحليل البيانات كأدوات مساعدة تمنحني سرعة استثنائية في اختبار زوايا الإعلانات، خفض تكلفة الاستحواذ، ومضاعفة العائد الإعلاني.',
    skills_p1_title: 'إدارة الإعلانات الممولة (التخصص الأساسي)',
    skills_p2_title: 'استراتيجية وتصميم الإعلانات الإبداعية',
    skills_p3_title: 'تحليل البيانات وإسناد مسارات التحويل',
    skills_p4_title: 'الذكاء الاصطناعي والأتمتة (أدوات داعمة لتسريع العمل)',

    s_snap: 'إدارة إعلانات سناب شات (Snapchat Ads)',
    s_google: 'إعلانات شبكة بحث وأداء جوجل (Google Ads)',
    s_meta: 'إدارة إعلانات ميتا (فيسبوك وإنستجرام)',
    s_tiktok: 'إدارة إعلانات تيك توك (TikTok Ads)',
    s_buying: 'تكتيكات المزايدة والميديا باينج المتقدمة',
    s_opt: 'توسيع نطاق الحملات وخفض تكلفة الاستحواذ (CPA)',
    s_audiences: 'بناء الجماهير المخصصة والشبيهة (Lookalike)',
    s_retarget: 'مسارات إعادة الاستهداف الذكية (Retargeting)',
    s_fatigue: 'تشخيص ومعالجة إجهاد وتراجع الإعلانات (Fatigue)',

    s_paid_strat: 'هندسة أقماع الشراء ومسارات التحويل (Funnels)',
    s_hooks: 'صياغة هوكات لافتة واختبار الزوايا الإعلانية',
    s_persona: 'أبحاث سلوك المستهلك والشخصيات الشرائية',
    s_briefs: 'إعداد خطط وموجهات تصوير المحتوى الإعلاني (UGC)',
    s_offers: 'صياغة العروض التسويقية عالية الإقناع والتحويل',
    s_audits: 'تدقيق إعلانات وتحركات المنافسين بالسوق',
    s_cro: 'تحسين معدلات التحويل وتجربة صفحات الشراء',
    s_prop: 'اختبار رسائل القيمة ومحفزات الشراء المباشرة',

    s_kpi: 'بناء مؤشرات الأداء وحساب العائد الإعلاني (ROAS)',
    s_ga4: 'تحليل الزوار عبر جوجل أناليتكس 4 (GA4)',
    s_capi: 'ربط بيكسل ميتا وواجهة التحويلات (Conversions API)',
    s_utm: 'هيكلة وتتبع روابط الحملات الإعلانية (UTMs)',
    s_rep: 'تقارير تكلفة الاستحواذ والعائد الإجمالي المدمج',
    s_dash: 'لوحات المتابعة ومراقبة كفاءة الإنفاق اليومي',
    s_attr: 'نماذج إسناد التحويل وتوزيع مصادر الشراء',
    s_sql: 'معالجة وتنقية بيانات الحملات التسويقية',

    s_ai_copy: 'توليد أفكار ونصوص الإعلانات بمساعدة الذكاء الاصطناعي',
    s_prompt: 'هندسة أوامر دقيقة متخصصة لصناع الإعلانات',
    s_auto_bid: 'أتمتة تنبيهات سرعة الإنفاق وانحراف الميزانية',
    s_hookify: 'أداة Hookify AI لتسريع ابتكار الهوكات',
    s_creative_mat: 'مصفوفة تنويع واختبار الزوايا الإبداعية',
    s_scripts: 'برمجة سكربتات بايثون لأتمتة المهام الروتينية',
    s_persona_mod: 'محاكاة ردود أفعال واعتراضات العملاء بالذكاء الاصطناعي',
    s_workflow: 'المراقبة المؤتمتة لحملات المنافسين',

    // Education & Certifications
    edu_eyebrow: 'المؤهلات الأكاديمية والشهادات المهنية',
    edu_title: 'التعليم والشهادات المعتمدة.',
    edu_desc: 'درجة جامعية تخصصية في تكنولوجيا التسويق والتجارة الإلكترونية، مدعومة بدبلومات واعتمادات مكثفة في إدارة الإعلانات الممولة، الذكاء الاصطناعي، وتحليل البيانات.',
    degree_level: 'مؤهل جامعي تخصصي',
    degree_title: 'بكالوريوس تكنولوجيا التسويق والتجارة الإلكترونية',
    degree_uni: 'جامعة الزقازيق · كلية التجارة',
    degree_gpa: 'المعدل التراكمي (GPA): 3.040',
    degree_desc: 'برنامج دراسي جامعي متخصص يجمع بين هندسة التجارة الإلكترونية الحديثة، أدوات تكنولوجيا التسويق، تحليل سلوك وبيانات المستهلكين، وإدارة قنوات الاستحواذ والنمو الرقمي.',

    cert_completed: 'مكتمل',
    cert_ongoing: 'مستمر / تطوير مهني',

    cert_1_issuer: 'المعهد القومي للاتصالات (NTI) / ESE',
    cert_1_title: 'برنامج سفراء الذكاء الاصطناعي',
    cert_1_org: 'المعهد القومي للاتصالات',
    cert_1_date: 'يوليو 2026',

    cert_2_issuer: 'المعهد القومي للاتصالات (NTI)',
    cert_2_title: 'دبلومة الذكاء الاصطناعي، الأتمتة وتحليل البيانات (المستوى المبتدئ)',
    cert_2_org: 'دبلومة مهنية متخصصة',

    cert_3_issuer: 'المعهد القومي للاتصالات (NTI)',
    cert_3_title: 'دبلومة الذكاء الاصطناعي، الأتمتة وتحليل البيانات (المستوى المتقدم)',
    cert_3_org: 'دبلومة متقدمة معتمدة',

    cert_4_issuer: 'أدهم حسام',
    cert_4_title: 'دبلومة التسويق الرقمي والميديا باينج',
    cert_4_org: 'دبلومة شاملة متقدمة',

    cert_5_issuer: 'جوجل (Google)',
    cert_5_title: 'أساسيات التسويق الرقمي',
    cert_5_org: 'أخصائي معتمد من جوجل',
    cert_5_date: 'مارس 2026',

    cert_6_issuer: 'Digital Ad Expert',
    cert_6_title: 'شهادة الإعلانات الرقمية الاحترافية',
    cert_6_date: 'يوليو 2024',

    cert_7_issuer: 'أكاديمية IMP',
    cert_7_title: 'برامج ودورات التسويق الرقمي المتخصصة',
    cert_7_org: 'برامج تدريبية متخصصة',

    cert_8_issuer: 'تطوير مهني مستمر',
    cert_8_title: 'دورات وبرامج تدريبية تخصصية إضافية في نمو المبيعات',
    cert_8_org: 'تعلم وتطوير مستمر',

    // Contact
    contact_eyebrow: 'تواصل مباشر',
    contact_title: 'دعنا نناقش حملتك الإعلانية القادمة.',
    contact_desc: 'متاح لأدوار الميديا باينج، توسيع الحسابات الإعلانية، واستشارات نمو المبيعات. تواصل مباشرة عبر وسيلتك المفضلة:',
    contact_wa_label: 'الرد الأسرع',
    contact_wa_val: 'محادثة واتساب',
    contact_email_label: 'البريد الإلكتروني المباشر',
    contact_email_val: 'إرسال بريد',
    contact_li_label: 'الشبكة المهنية',
    contact_li_val: 'الملف الشخصي على لينكد إن',

    // Footer
    footer_name: 'عبدالرحمن الحليوة',
    footer_role: 'مختص إعلانات ممولة ومضاعفة المبيعات (Performance Media Buyer)'
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_experience: 'Experience',
    nav_work: 'Work',
    nav_playbook: 'Playbook',
    nav_skills: 'Skills',
    nav_education: 'Education & Certs',
    nav_contact: 'Contact',
    cta_whatsapp: 'WhatsApp',
    drawer_role: 'Performance Media Buyer',
    toggle_theme: 'Toggle Light / Dark Mode',
    chat_whatsapp: 'Chat on WhatsApp',

    // Hero
    hero_status: 'Available for Scaling & Media Buying · GCC & Remote',
    hero_name: 'Abdlrhman Al Helewah',
    hero_role: 'Performance Media Buyer · Paid Acquisition & Scaled Growth',
    hero_pitch: 'Performance Media Buyer managing high-growth acquisition across <strong>Snapchat, Google & Meta Ads</strong> in the GCC and Egypt. Generated <strong>$169,455 in verified e-commerce revenue at 6.95x ROAS</strong> and <strong>980 qualified leads</strong> ($4.14 lowest CPL). Leverages custom AI automation & deep data analytics as power tools to test angles faster and maximize client profit.',

    // KPIs
    kpi_1_label: 'E-Com Purchases Revenue',
    kpi_1_sub: '1,643 Orders · Saudi Arabia (Snapchat Ads)',
    kpi_2_label: 'Qualified Leads Captured',
    kpi_2_sub: '$4.14 Lowest CPL · UAE (28 Meta Flights)',
    kpi_3_label: 'Managed Ad Spend',
    kpi_3_badge: 'Multi-Channel',
    kpi_3_sub: 'Snapchat, Google & Meta Ads across GCC',
    kpi_4_label: 'Ad Multiplier Tool',
    kpi_4_badge: 'AI Hook Engine',
    kpi_4_sub: 'Creator & Media Buyer Edge · Ad Velocity',

    // Hero CTAs
    hero_cta_wa: 'Chat on WhatsApp',
    hero_cta_work: 'View Case Studies',
    hero_cta_proof: 'Inspect Meta Proof',
    hero_cta_onepager: 'Executive One-Pager',

    // Experience
    exp_eyebrow: 'Work History & Roles',
    exp_title: 'Professional Experience.',
    exp_desc: 'Hands-on performance media buying execution across GCC e-commerce, high-ticket lead generation, instructional training, and client scaling engagements.',
    exp_r1_title: 'Performance Media Buyer',
    exp_r1_badge: 'Current Full-Time',
    exp_r1_company: 'eMarketing Egypt · Dokki, Giza, Egypt',
    exp_r1_dates: 'Aug 2026 — Present',
    exp_r1_b1: 'Direct and scale multi-channel performance media spend ($32.8K+) across <strong>Snapchat Ads, Google Ads, and Meta Ads</strong> for regional clients in Saudi Arabia, UAE, and Egypt.',
    exp_r1_b2: 'Scaled <strong>Kitchen Bazaar (Saudi E-Com)</strong>: generated <strong>$169,455 in verified purchases at 6.95x ROAS</strong> via Snapchat Ads (1,643 orders, 26,955 add-to-carts at $0.90) and managed SAR 38.3K Google Ads (78.4K clicks, 1,310 conversions).',
    exp_r1_b3: 'Scaled <strong>IJADAH Education (UAE)</strong>: captured <strong>980 verified inquiries</strong> across 28 flights with an 83% reduction in CPL to a record <strong>$4.14</strong> and 628 direct WhatsApp chats.',
    exp_r1_b4: 'Drive daily KPI monitoring, budget reallocation, attribution reporting, and custom AI-assisted ad copywriting workflows to counter creative fatigue.',

    exp_r2_title: 'Digital Marketing Instructor',
    exp_r2_badge: 'Current Role',
    exp_r2_company: 'Adham Hossam · Egypt / Online',
    exp_r2_dates: 'Current Role',
    exp_r2_b1: 'Delivers hands-on training in media buying, ad platform architecture, and budget scaling strategies.',
    exp_r2_b2: 'Breaks down real-world conversion funnel design, bidding tactics, and creative fatigue diagnostics.',

    exp_r3_title: 'Digital Marketing Mentor / Group Mentor',
    exp_r3_company: 'Adham Hossam · Egypt / Online',
    exp_r3_dates: 'Previous Mentoring Role',
    exp_r3_b1: 'Provided direct 1-on-1 and group feedback on trainee campaign builds and ad copywriting assignments.',
    exp_r3_b2: 'Managed learning resources, recap schedules, community engagement, and new cohort onboarding.',

    exp_r4_title: 'Independent Performance Media Buyer',
    exp_r4_badge: 'Independent Practice',
    exp_r4_company: 'Independent Practice · Remote / GCC & Egypt',
    exp_r4_dates: 'Ongoing Practice',
    exp_r4_b1: 'Delivers tailored paid advertising, ad copywriting, and conversion rate optimization (CRO) audits for private clients.',
    exp_r4_b2: 'Audited Cardip XPEL PPF (SAR 15.8K spend, 436 qualified WhatsApp leads); grew personal brand (@3shwaee_) from 0 to 20,000+ organic followers.',

    // Case Studies Section Header
    cs_eyebrow: 'Selected Case Studies',
    cs_title: 'Verified Client Projects & Results.',
    cs_desc: 'Data-backed campaigns demonstrating scalable revenue, low acquisition costs, and full-funnel execution. Click any project for the full strategic audit.',

    // Enterprise Playbook Section Header & Tabs
    playbook_eyebrow: 'Enterprise Operating System',
    playbook_title: 'Scaling Protocol & ROI Simulator.',
    playbook_desc: 'A disciplined, risk-managed operating system designed for enterprise brands and high-ticket clients. Fast decision-making without guesswork.',
    pb_tab_scaling: 'Scaling & Kill Rules',
    pb_tab_roi: 'Instant ROI Simulator',
    pb_tab_roadmap: '30-60-90 Day Roadmap',
    pb_tab_faq: 'Guarantees & FAQ',

    // Playbook Tab 1: Rules
    rule_1_badge: '+15% to +20% / 48-72h',
    rule_1_title: 'Controlled Vertical Scaling',
    rule_1_desc: 'Budget is only scaled by 15%–20% every 48–72 hours when verified ROAS consistently exceeds account baseline. Prevents algorithm learning reset and auction CPM spikes.',
    rule_1_trigger: 'Condition:',
    rule_1_trigger_val: 'ROAS > Target for 3 consecutive days',
    rule_2_badge: 'Hard Stop at 1.5x CPA',
    rule_2_title: 'Disciplined Kill Rules (Stop Loss)',
    rule_2_desc: 'Zero emotional attachment to creative angles. Any ad set reaching 1.5x of target CPA without generating verified purchases or leads is sunset immediately to protect margin.',
    rule_2_trigger: 'Condition:',
    rule_2_trigger_val: 'Spend ≥ 1.5x Target CPA with 0 conversions',
    rule_3_badge: 'Weekly Rotation',
    rule_3_title: 'Proactive Fatigue Refresh',
    rule_3_desc: 'Tracking 3-second Hook Rate and Outbound CTR daily. When creative engagement dips >20% below baseline, 3 fresh hook variants are deployed before CPA degradation occurs.',
    rule_3_trigger: 'Cycle:',
    rule_3_trigger_val: '3 new angles deployed every Monday',

    // Playbook Tab 2: ROI Simulator
    sim_market_label: 'Target Market & Goal',
    sim_spend_label: 'Monthly Media Spend ($ USD)',
    sim_aov_label: 'Average Order Value (AOV in $)',
    sim_res_eyebrow: 'Projected Performance Model',
    sim_res_badge: 'Data-Backed Simulation',
    sim_res_conversions: 'Projected Completed Orders',
    sim_res_revenue: 'Projected Gross Revenue',
    sim_res_roas: 'Expected ROAS:',
    sim_res_cpa: 'Target CPA Limit:',
    sim_cta_discuss: 'Discuss This Scenario on WhatsApp',

    // Playbook Tab 3: Roadmap
    stage_1_time: 'Days 1 — 30',
    stage_1_title: 'Audit & Foundation',
    stage_1_b1: 'Pixel, CAPI, and GA4 event tracking verification.',
    stage_1_b2: 'Immediate shutdown of bleeding ad sets wasting spend.',
    stage_1_b3: 'Deploy initial 5 creative angles & hook tests.',
    stage_1_goal: 'Goal: Plug budget leaks & identify winning hook.',
    stage_2_time: 'Days 31 — 60',
    stage_2_title: 'Funnel Depth & Stabilization',
    stage_2_b1: 'Activate structured retargeting & dynamic catalogs.',
    stage_2_b2: 'Landing page CRO suggestions to eliminate checkout drop-offs.',
    stage_2_b3: 'Establish verified Blended CPA & target ROAS baseline.',
    stage_2_goal: 'Goal: Consistently hit target CPA & ROAS.',
    stage_3_time: 'Days 61 — 90',
    stage_3_title: 'Controlled Scaled Growth',
    stage_3_b1: 'Vertical budget scale (+20%) on winning ad sets.',
    stage_3_b2: 'Horizontal expansion into Lookalikes & new buyer personas.',
    stage_3_b3: 'Cross-channel synergy (e.g. Google Search capturing Snap interest).',
    stage_3_goal: 'Goal: Maximize gross profit volume while holding margin.',

    // Playbook Tab 4: FAQ & Guarantees
    faq_q1: 'How is client data confidentiality (NDA) handled?',
    faq_a1: 'Strict bilateral NDA compliance. All ad accounts, pixels, customer lists, and financial telemetry remain 100% under your ownership. Case studies presented on this site are either published with explicit client consent or fully anonymized.',
    faq_q2: 'What is the minimum monthly media budget you manage?',
    faq_a2: 'Typically between $3,000/mo and $50,000+/mo across GCC and Egypt. This range ensures statistically valid conversion volumes for algorithmic learning and meaningful scale without wasted trial spend.',
    faq_q3: 'How do you coordinate with our sales team or CRM?',
    faq_a3: "Inbound leads and WhatsApp inquiries are routed instantly via Webhooks / WhatsApp Business API into your team's CRM or chat inbox. We audit response velocity to ensure high lead-to-close ratios.",
    faq_q4: 'How frequently are reports and pacing updates shared?',
    faq_a4: "24/7 access to live consolidated KPI dashboards, accompanied by structured weekly executive summaries (spend, CPA, ROAS, and next week's angle tests) plus monthly strategic syncs.",

    // Executive One-Pager Modal
    op_eyebrow: 'Executive Growth Brief',
    op_title: 'Abdlrhman Al Helewah · Performance Media Buyer',
    op_print_btn: 'Print / Save PDF',
    op_kpi_1: 'E-Com Purchases (6.95x ROAS)',
    op_kpi_2: 'Qualified Leads ($4.14 CPL)',
    op_kpi_3: 'Managed GCC Spend',
    op_kpi_4: 'Margin & ROI Priority',
    op_sec_summary: 'Executive Summary',
    op_sec_platforms: 'Core Paid Channels',
    op_sec_rules: 'Risk & Scaling Protocols',
    op_sec_edu: 'Education & Credentials',
    op_plat_1: '<strong>Snapchat Ads Manager:</strong> Catalog prospecting & scaling ($169.4K revenue, 6.95x ROAS).',
    op_plat_2: '<strong>Google Ads:</strong> High-intent Search & Performance Max (1,310 conversions).',
    op_plat_3: '<strong>Meta Ads Manager:</strong> Inbound lead generation & WhatsApp qualification (980 inquiries).',
    op_plat_4: '<strong>TikTok Ads:</strong> Direct UGC and short-form video creative angle tests.',
    op_rule_1: '<strong>+15%–20% Rule:</strong> Controlled vertical budget scaling every 48–72h.',
    op_rule_2: '<strong>1.5x CPA Stop-Loss:</strong> Automatic shutdown of non-performing ad sets.',
    op_rule_3: '<strong>Weekly Rotation:</strong> Proactive creative refresh countering ad fatigue.',
    op_rule_4: '<strong>Attribution:</strong> Conversions API (CAPI), UTM tagging & blended CPA reporting.',
    op_edu_desc: "<strong>Bachelor's in Marketing Technology & E-Commerce</strong> — Zagazig University (Cumulative GPA: 3.040) · <strong>NTI AI, Automation & Data Analysis Diplomas</strong> (Beginner & Advanced) · <strong>Google Certified Specialist</strong> in Digital Marketing.",

    // Skills
    skills_eyebrow: 'Media Buying Toolkit & Multipliers',
    skills_title: 'Core Competencies & Technical Edge.',
    skills_desc: 'Primary Trade: Performance Media Buying & Paid Scaling. AI automation, custom Python scripts, and deep data analysis act as unfair speed levers to test creative hooks, diagnose fatigue, and maximize ROAS.',
    skills_p1_title: 'Performance Media Buying',
    skills_p2_title: 'Paid Creative Strategy',
    skills_p3_title: 'Data Analytics & Attribution',
    skills_p4_title: 'AI & Automation (The Edge)',

    s_snap: 'Snapchat Ads Manager',
    s_google: 'Google Ads (Search & PMax)',
    s_meta: 'Meta Ads Manager',
    s_tiktok: 'TikTok Ads Manager',
    s_buying: 'Media Buying & Bidding',
    s_opt: 'Campaign Scaling & CPA Opt',
    s_audiences: 'Lookalike & Custom Audiences',
    s_retarget: 'Retargeting Funnels',
    s_fatigue: 'Ad Fatigue Diagnostics',

    s_paid_strat: 'Ad Funnel Architecture',
    s_hooks: 'Hook Formulation & Angle Testing',
    s_persona: 'Audience & Persona Research',
    s_briefs: 'Creative Briefing for Video/UGC',
    s_offers: 'High-Converting Offer Angles',
    s_audits: 'Competitive Ad Audits',
    s_cro: 'Landing Page CRO & Direct Routing',
    s_prop: 'Value Proposition Testing',

    s_kpi: 'ROAS & KPI Architecture',
    s_ga4: 'Google Analytics 4 (GA4)',
    s_capi: 'Meta Pixel & CAPI Tracking',
    s_utm: 'UTM Tagging Taxonomy',
    s_rep: 'Telemetry & Blended CPA Reports',
    s_dash: 'Executive Growth Dashboards',
    s_attr: 'Multi-Touch Attribution',
    s_sql: 'Data Analysis & Normalization',

    s_ai_copy: 'AI-Powered Ad Copy Generation',
    s_prompt: 'Prompt Engineering for Media Buyers',
    s_auto_bid: 'Daily Pacing & Spend Alert Logic',
    s_hookify: 'Hookify AI Engine',
    s_creative_mat: 'Creative Angle Matrix Scaling',
    s_scripts: 'Python & Workflow Automation',
    s_persona_mod: 'Synthetic Buyer Persona Simulation',
    s_workflow: 'Automated Competitive Telemetry',

    // Education & Certifications
    edu_eyebrow: 'Academic & Professional Credentials',
    edu_title: 'Education & Certifications.',
    edu_desc: 'Formal university degree in marketing technology combined with specialized diplomas and accreditations in performance advertising, artificial intelligence, and data analytics.',
    degree_level: 'Higher Education Degree',
    degree_title: "Bachelor's in Marketing Technology & E-Commerce",
    degree_uni: 'Zagazig University · Faculty of Commerce',
    degree_gpa: 'Cumulative GPA: 3.040',
    degree_desc: 'Rigorous undergraduate program focused on the intersection of modern e-commerce architectures, marketing technology stacks, consumer data analytics, and digital acquisition channels.',

    cert_completed: 'Completed',
    cert_ongoing: 'Ongoing',

    cert_1_issuer: 'NTI / ESE',
    cert_1_title: 'Artificial Intelligence Ambassadors Program',
    cert_1_org: 'National Telecommunication Institute',
    cert_1_date: 'Jul 2026',

    cert_2_issuer: 'National Telecommunication Institute',
    cert_2_title: 'AI, Automation & Data Analysis Diploma (Beginner Level)',
    cert_2_org: 'NTI Professional Diploma',

    cert_3_issuer: 'National Telecommunication Institute',
    cert_3_title: 'AI, Automation & Data Analysis Diploma (Advanced Level)',
    cert_3_org: 'NTI Advanced Diploma',

    cert_4_issuer: 'Adham Hossam',
    cert_4_title: 'Digital Marketing Diploma',
    cert_4_org: 'Comprehensive Diploma',

    cert_5_issuer: 'Google',
    cert_5_title: 'Fundamentals of Digital Marketing',
    cert_5_org: 'Google Certified Specialist',
    cert_5_date: 'Mar 2026',

    cert_6_issuer: 'Digital Ad Expert',
    cert_6_title: 'Digital Ad Certificate – Digital Marketing',
    cert_6_date: 'Jul 2024',

    cert_7_issuer: 'IMP',
    cert_7_title: 'IMP Digital Marketing Courses',
    cert_7_org: 'Specialized Programs',

    cert_8_issuer: 'Professional Development',
    cert_8_title: 'Additional Professional Courses & Specialized Training',
    cert_8_org: 'Continuous Learning',

    // Contact
    contact_eyebrow: 'Get In Touch',
    contact_title: 'Let’s Discuss Your Next Campaign.',
    contact_desc: 'Available for performance media buying roles, ad account scaling, and growth consultations. Connect directly via your preferred channel:',
    contact_wa_label: 'Fastest Response',
    contact_wa_val: 'WhatsApp Chat',
    contact_email_label: 'Direct Inbox',
    contact_email_val: 'Send Email',
    contact_li_label: 'Professional Network',
    contact_li_val: 'LinkedIn Profile',

    // Footer
    footer_name: 'Abdlrhman Al Helewah',
    footer_role: 'Performance Media Buyer'
  }
};

/**
 * --------------------------------------------------------------------------
 * 13B. ROBUST CLIENT-SIDE i18n ENGINE (JSON DICTIONARY + RTL/LTR DYNAMICS)
 * --------------------------------------------------------------------------
 * Maps all data-i18n attributes in the document to the active JSON dictionary.
 * Dynamically synchronizes document direction (html[dir]="rtl|ltr"), language code
 * (html[lang]="ar|en"), text contents, input placeholders, aria labels, and
 * dynamic component rendering.
 */
function initLanguageToggle() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');
  const storageKey = 'abdlrhman_lang';

  function applyLanguage(lang) {
    const isAr = lang === 'ar';
    const activeDir = isAr ? 'rtl' : 'ltr';
    const activeLang = isAr ? 'ar' : 'en';

    // 1. Manage RTL/LTR switching dynamically by updating html attributes
    document.documentElement.setAttribute('lang', activeLang);
    document.documentElement.setAttribute('dir', activeDir);

    const dict = I18N_DICTIONARY[activeLang];
    if (!dict) return;

    // 2. Map data-i18n elements to JSON dictionary
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) {
        const btnText = el.querySelector('.btn-text');
        if (btnText) {
          btnText.textContent = dict[key];
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // 3. Support dynamic attribute translations (placeholder, title, aria-label)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (key && dict[key]) el.title = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (key && dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    // 4. Update Language Toggle Button Labels & Tooltips
    const desktopBtnText = document.querySelector('#lang-toggle .lang-btn-text');
    if (desktopBtnText) {
      desktopBtnText.textContent = isAr ? 'English' : 'العربية';
    }
    if (langToggleBtn) {
      langToggleBtn.setAttribute('title', isAr ? 'Switch to English' : 'تغيير اللغة إلى العربية');
      langToggleBtn.setAttribute('aria-label', isAr ? 'Switch to English' : 'تغيير اللغة إلى العربية');
    }

    const mobileBtnText = document.querySelector('#mobile-lang-toggle .mobile-lang-text');
    if (mobileBtnText) {
      mobileBtnText.textContent = isAr ? 'English' : 'العربية';
    }

    // 5. Update Floating Back to Top Button
    const floatingTopBtn = document.getElementById('floating-back-to-top');
    if (floatingTopBtn) {
      floatingTopBtn.setAttribute('title', isAr ? 'العودة إلى أعلى الصفحة' : 'Back to top');
      floatingTopBtn.setAttribute('aria-label', isAr ? 'العودة إلى أعلى الصفحة' : 'Back to top');
    }

    // 6. Update Case Study Filter Button Labels
    const filterLabels = {
      'all': isAr ? 'جميع المشاريع (10)' : 'All Projects (10)',
      'paid-media': isAr ? 'الإعلانات الممولة والنتائج' : 'Paid Media & Performance',
      'growth': isAr ? 'النمو والمحتوى العضوي' : 'Organic & Social Growth',
      'ai-experiments': isAr ? 'الذكاء الاصطناعي والأتمتة' : 'AI & Automation',
      'strategy-audit': isAr ? 'التدقيق والحملات الحالية' : 'Audits & In Progress'
    };

    document.querySelectorAll('.case-studies-filter .filter-btn').forEach(btn => {
      const filter = btn.getAttribute('data-filter');
      if (filter && filterLabels[filter]) {
        btn.textContent = filterLabels[filter];
      }
    });

    // 7. Re-render case studies cards in active language
    if (typeof renderCaseStudies === 'function') {
      renderCaseStudies(currentActiveFilter || 'all');
    }

    // 7. Dispatch custom event for extensible dynamic components
    try {
      document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { lang: activeLang, dir: activeDir }
      }));
    } catch (e) {
      // Ignore in older environments
    }
  }

  // Load saved preference safely with try/catch
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem(storageKey) || 'en';
  } catch (e) {
    savedLang = 'en';
  }

  if (savedLang === 'ar') {
    applyLanguage('ar');
  } else {
    applyLanguage('en');
  }

  function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
    try {
      localStorage.setItem(storageKey, nextLang);
    } catch (e) {
      // Ignore quota or security errors
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  if (mobileLangToggleBtn) {
    mobileLangToggleBtn.addEventListener('click', toggleLanguage);
  }
}

/**
 * --------------------------------------------------------------------------
 * 14. ENTERPRISE PLAYBOOK ENGINE & ROI SIMULATOR
 * --------------------------------------------------------------------------
 * Powers the 4-module executive operating system:
 * - Tab switching across scaling protocols, simulator, roadmap, and FAQ
 * - Interactive ROI & profit calculator based on verified client benchmarks
 * - Dynamic pre-filled WhatsApp lead generation routing
 */
function initPlaybookEngine() {
  const tabButtons = document.querySelectorAll('.playbook-tab-btn');
  const panels = document.querySelectorAll('.playbook-panel');

  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;

        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        panels.forEach(p => {
          p.classList.remove('active');
        });
        const targetPanel = document.getElementById(`pb-panel-${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  // ROI Simulator Logic
  const marketSelect = document.getElementById('sim-market-select');
  const spendInput = document.getElementById('sim-spend-input');
  const spendDisplay = document.getElementById('sim-spend-display');
  const aovInput = document.getElementById('sim-aov-input');
  const aovGroup = document.getElementById('sim-aov-group');
  const spendChips = document.querySelectorAll('.spend-chip');

  const metricConversionsLabel = document.getElementById('sim-metric-conversions-label');
  const metricRevenueLabel = document.getElementById('sim-metric-revenue-label');
  const valConversions = document.getElementById('sim-val-conversions');
  const valRevenue = document.getElementById('sim-val-revenue');
  const valRoas = document.getElementById('sim-val-roas');
  const valCpa = document.getElementById('sim-val-cpa');
  const whatsappCta = document.getElementById('sim-whatsapp-cta');

  if (!spendInput || !valRevenue) return;

  function calculateROI() {
    const isAr = document.documentElement.getAttribute('lang') === 'ar';
    const market = marketSelect?.value || 'ksa-ecom';
    const spend = Math.max(1000, Number(spendInput?.value) || 10000);
    const aov = Math.max(10, Number(aovInput?.value) || 75);

    if (spendDisplay) {
      spendDisplay.textContent = `$${spend.toLocaleString()}`;
    }

    let conversions = 0;
    let revenue = 0;
    let roasText = '';
    let cpaText = '';
    let conversionsLabel = '';
    let revenueLabel = '';
    let waMarketName = '';

    if (market === 'ksa-ecom') {
      // Benchmark based on Kitchen Bazaar telemetry: ~6.0x ROAS, ~$12.50 CPA
      const estimatedRoas = 6.00;
      revenue = Math.round(spend * estimatedRoas);
      conversions = Math.round(revenue / aov);
      const cpa = conversions > 0 ? (spend / conversions).toFixed(2) : '12.50';

      conversionsLabel = isAr ? 'عدد طلبات الشراء المتوقعة' : 'Projected Completed Orders';
      revenueLabel = isAr ? 'إجمالي المبيعات المتوقعة' : 'Projected Gross Revenue';
      valConversions.textContent = `~${conversions.toLocaleString()} ${isAr ? 'طلب' : 'Orders'}`;
      valRevenue.textContent = `$${revenue.toLocaleString()}`;
      roasText = `${estimatedRoas.toFixed(2)}x ROAS`;
      cpaText = `$${cpa} ${isAr ? '/ طلب' : '/ Order'}`;
      waMarketName = isAr ? 'التجارة الإلكترونية في السعودية' : 'KSA E-Commerce';
      if (aovGroup) aovGroup.style.display = 'block';

    } else if (market === 'uae-leadgen') {
      // Benchmark based on IJADAH telemetry: ~$4.50 CPL, high qualification
      const estimatedCpl = 4.50;
      conversions = Math.round(spend / estimatedCpl);
      // Average closing rate 15%, average client LTV ~$800
      const closedDeals = Math.round(conversions * 0.15);
      revenue = closedDeals * 800;

      conversionsLabel = isAr ? 'عدد الاستفسارات المؤهلة' : 'Projected Qualified Leads';
      revenueLabel = isAr ? 'القيمة التقديرية للصفقات (15% إغلاق)' : 'Estimated Deal Pipeline (15% Close)';
      valConversions.textContent = `~${conversions.toLocaleString()} ${isAr ? 'عميل مؤهل' : 'Leads'}`;
      valRevenue.textContent = `$${revenue.toLocaleString()}`;
      roasText = isAr ? 'متوسط تكلفة العميل: $4.50' : 'Avg CPL: $4.50';
      cpaText = isAr ? '$4.50 / استفسار مؤكد' : '$4.50 / Qualified Lead';
      waMarketName = isAr ? 'استقطاب العملاء في الإمارات (B2B / B2C)' : 'UAE Lead Gen';
      if (aovGroup) aovGroup.style.display = 'none';

    } else {
      // Benchmark based on Cardip High-Ticket Services: ~$9.50 CPL, deal size ~$1,200
      const estimatedCpl = 9.50;
      conversions = Math.round(spend / estimatedCpl);
      const closedDeals = Math.round(conversions * 0.12);
      revenue = closedDeals * 1200;

      conversionsLabel = isAr ? 'استفسارات واتساب المؤهلة' : 'High-Ticket Inbound Leads';
      revenueLabel = isAr ? 'قيمة مبيعات الخدمات التقديرية' : 'Estimated Services Revenue';
      valConversions.textContent = `~${conversions.toLocaleString()} ${isAr ? 'محادثة مؤهلة' : 'Inquiries'}`;
      valRevenue.textContent = `$${revenue.toLocaleString()}`;
      roasText = isAr ? 'معدل حجز مرتفع' : 'High High-Ticket Value';
      cpaText = isAr ? '$9.50 / استفسار واتساب' : '$9.50 / Inbound Lead';
      waMarketName = isAr ? 'الخدمات الفاخرة وعالية القيمة في الخليج' : 'GCC High-Ticket Services';
      if (aovGroup) aovGroup.style.display = 'none';
    }

    if (metricConversionsLabel) metricConversionsLabel.textContent = conversionsLabel;
    if (metricRevenueLabel) metricRevenueLabel.textContent = revenueLabel;
    if (valRoas) valRoas.textContent = roasText;
    if (valCpa) valCpa.textContent = cpaText;

    if (whatsappCta) {
      const waMsg = isAr
        ? `مرحباً عبدالرحمن، قمت بتجربة محاكي الأرباح بميزانية إعلانية $${spend.toLocaleString()} في قطاع (${waMarketName}) وأود مناقشة خطة التوسع لحسابنا.`
        : `Hello Abdlrhman, I tested your ROI simulator with a $${spend.toLocaleString()} budget for ${waMarketName} and would like to discuss scaling our account.`;
      whatsappCta.href = `https://wa.me/201553404607?text=${encodeURIComponent(waMsg)}`;
    }
  }

  spendInput.addEventListener('input', () => {
    spendChips.forEach(chip => {
      const val = Number(chip.getAttribute('data-spend'));
      if (val === Number(spendInput.value)) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
    calculateROI();
  });

  spendChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const spend = chip.getAttribute('data-spend');
      if (spend) {
        spendInput.value = spend;
        spendChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        calculateROI();
      }
    });
  });

  marketSelect?.addEventListener('change', calculateROI);
  aovInput?.addEventListener('input', calculateROI);

  // Recalculate on language change as well
  document.addEventListener('languageChanged', calculateROI);

  // Initial calculation
  calculateROI();
}

/**
 * --------------------------------------------------------------------------
 * 15. EXECUTIVE ONE-PAGER MODAL ENGINE
 * --------------------------------------------------------------------------
 * Manages modal visibility, accessibility, background scroll locking,
 * and native window.print() execution for 1-click A4/Letter PDF generation.
 */
function initOnePagerModal() {
  const triggerBtn = document.getElementById('hero-one-pager-btn');
  const modal = document.getElementById('one-pager-modal');
  const closeBtn = document.getElementById('one-pager-close-btn');
  const printBtn = document.getElementById('one-pager-print-btn');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (triggerBtn) triggerBtn.focus();
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}



