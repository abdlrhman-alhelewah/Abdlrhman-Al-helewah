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
  initNavigation();
  renderCaseStudies('all');
  initCaseStudyFilters();
  initCaseStudyModal();
  initHeroDashboard();
  initMetaProofTerminal();
  initProofModal();
  initPacingCalculator();
  initContactForm();
  initCvModal();
  initHookifyDemoEngine();
  initScrollSpy();
  initScrollAnimations();
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

    // Close when clicking any link/button inside the drawer
    drawer.querySelectorAll('a, button').forEach(link => {
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

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    });
  }

  // Smooth scroll while keeping browser URL clean (no unsightly #hashes)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname);
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
function renderCaseStudies(filterCategory) {
  const grid = document.getElementById('case-studies-grid');
  if (!grid) return;

  const filtered = filterCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === filterCategory);

  grid.innerHTML = filtered.map(cs => `
    <article class="case-study-card" data-category="${cs.category}">
      <div class="case-study-card-body">
        <div class="card-top-meta">
          <span class="card-client">${escapeHtml(cs.client)}</span>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end;">
            <span class="card-status-badge ${escapeHtml(cs.status)}">${escapeHtml(cs.statusLabel || cs.status)}</span>
            <span class="card-industry">${escapeHtml(cs.region)}</span>
          </div>
        </div>
        <h3 class="card-title">${escapeHtml(cs.headline)}</h3>
        <p class="card-summary">${escapeHtml(cs.teaser)}</p>
        
        <div class="card-teaser-result">
          <strong>Key Objective &amp; Focus</strong>
          <span>${escapeHtml(cs.services)}</span>
        </div>
      </div>

      <div class="card-footer">
        <span class="card-services-text">${escapeHtml(cs.industry)}</span>
        <button type="button" class="btn btn-secondary btn-sm open-modal-btn" data-id="${cs.id}" aria-haspopup="dialog">
          View Case Study
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </article>
  `).join('');

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

  titleEl.textContent = study.headline;
  if (clientEl) {
    clientEl.textContent = `${study.client} · ${study.region} · ${study.industry}`;
  }

  bodyEl.innerHTML = `
    <!-- Top Metadata Grid -->
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Client</span>
        <span class="modal-meta-val">${escapeHtml(study.client)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Industry</span>
        <span class="modal-meta-val">${escapeHtml(study.industry)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Market</span>
        <span class="modal-meta-val">${escapeHtml(study.region)}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Core Scope</span>
        <span class="modal-meta-val">${escapeHtml(study.services)}</span>
      </div>
    </div>

    <!-- Objective & Challenge -->
    <div class="modal-section-block">
      <h4 class="modal-block-label">01. Objective</h4>
      <p class="modal-block-text">${escapeHtml(study.objective)}</p>
    </div>

    <div class="modal-section-block">
      <h4 class="modal-block-label">02. Challenge</h4>
      <p class="modal-block-text">${escapeHtml(study.challenge)}</p>
    </div>

    <!-- Strategy & Execution -->
    <div class="modal-section-block">
      <h4 class="modal-block-label">03. Strategy & Hypotheses</h4>
      <p class="modal-block-text">${escapeHtml(study.strategy)}</p>
    </div>

    <div class="modal-section-block">
      <h4 class="modal-block-label">04. Tactical Execution</h4>
      <p class="modal-block-text">${escapeHtml(study.execution)}</p>
    </div>

    <!-- Measurable Results -->
    <div class="modal-result-box">
      <h4 class="modal-block-label" style="margin-bottom: 12px;">05. Verified Key Results</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px;">
        ${study.results.map(r => `
          <div style="background-color: var(--bg-primary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">${escapeHtml(r.label)}</div>
            <div class="tabular-nums" style="font-size: 18px; font-weight: 700; color: var(--accent-blue); margin-top: 4px;">${escapeHtml(r.value)}</div>
          </div>
        `).join('')}
      </div>
      ${study.proofs && study.proofs.length > 0 ? `
        <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px;">
          <div style="font-size: 11px; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.08em;">
            Verified Campaign Proof &amp; Live Telemetry
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
                  Inspect Raw Screenshot
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : study.proofImage ? `
        <div style="margin-top: 14px; background-color: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div>
            <span style="font-size: 12px; font-weight: 700; color: var(--accent-emerald);">Live Meta Ads Manager Telemetry Verified</span>
            <div style="font-size: 11px; color: var(--text-muted);">Inspect unedited 28-campaign manager proof screenshot</div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm inspect-proof-trigger" data-proof-key="ijadah-leadgen" style="font-size: 12px; padding: 6px 12px;">Inspect Proof</button>
        </div>
      ` : `
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 10px; font-family: var(--font-mono);">
          * Performance indicators documented in accordance with client confidentiality and non-disclosure standards.
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

  const proof = VERIFIED_PROOFS[proofKey] || VERIFIED_PROOFS['ijadah-leadgen'];

  const eyebrowEl = document.getElementById('proof-modal-eyebrow');
  const titleEl = document.getElementById('proof-modal-title');
  const imgEl = document.getElementById('proof-screenshot-img');
  const highlightsEl = document.getElementById('proof-highlights-grid');
  const analysisEl = document.getElementById('proof-analysis-box');

  if (eyebrowEl && proof.eyebrow) eyebrowEl.textContent = proof.eyebrow;
  if (titleEl && proof.title) titleEl.textContent = proof.title;
  if (imgEl && proof.image) {
    imgEl.src = proof.image;
    imgEl.alt = proof.alt || 'Campaign Proof Screenshot';
  }
  if (highlightsEl && proof.stats) {
    highlightsEl.innerHTML = proof.stats.map(s => `
      <div class="proof-highlight-item">
        <span class="proof-hl-title">${escapeHtml(s.label)}</span>
        <div class="proof-hl-val tabular-nums">${escapeHtml(s.value)}</div>
      </div>
    `).join('');
  }
  if (analysisEl && proof.analysis) {
    analysisEl.innerHTML = `<strong>Authenticity &amp; Methodology Verification:</strong> ${escapeHtml(proof.analysis)}`;
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
 * 9. SCROLL SPY FOR NAVIGATION
 * --------------------------------------------------------------------------
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
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
    'section.section, .experience-card, .case-study-card, .skill-category-card, .cert-card, .contact-direct-card, .reveal-on-scroll'
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
 * 11. EXECUTIVE CV & PROFESSIONAL DOSSIER MODAL
 * --------------------------------------------------------------------------
 */
function initCvModal() {
  const modal = document.getElementById('cv-modal');
  const closeBtn = document.getElementById('cv-modal-close');
  const printBtn = document.getElementById('cv-print-btn');
  const openBtns = [
    document.getElementById('open-cv-modal-nav-btn'),
    document.getElementById('open-cv-modal-hero-btn'),
    document.getElementById('open-cv-modal-mobile-btn'),
    document.getElementById('open-cv-modal-contact-btn')
  ].filter(Boolean);

  function openCvModal() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeCvModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCvModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCvModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeCvModal();
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // CV Tab Switching
  const cvTabs = document.querySelectorAll('.cv-tab-btn');
  const cvPanels = document.querySelectorAll('.cv-panel');

  cvTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      cvTabs.forEach(t => t.classList.remove('active'));
      cvPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const target = tab.getAttribute('data-cv-tab');
      const panel = document.getElementById(`cv-tab-${target}`);
      if (panel) panel.classList.add('active');
    });
  });

  // Copy English CV Bullets
  const copyEnBtn = document.getElementById('copy-full-cv-en-btn');
  if (copyEnBtn) {
    copyEnBtn.addEventListener('click', () => {
      const enText = `ABDL RHMAN AL HELEWAH — DIGITAL MARKETING SPECIALIST
Email: abdlrhmanmahmoud69@gmail.com | Phone: +20 155 340 4607 | LinkedIn: linkedin.com/in/abdlrhman-al-helewah | Location: Cairo, Egypt

PROFESSIONAL EXPERIENCE:

1. eMarketing Egypt — Digital Marketing Specialist (Full-time | Aug 2026 — Present | Dokki, Giza, Egypt)
• Manage and execute multi-channel digital marketing campaigns across Meta Ads, Snapchat Ads, and Google Ads for regional client accounts in Saudi Arabia, UAE, and Egypt.
• Monitor daily campaign KPIs, prepare performance and attribution reports, and deliver data-driven optimization recommendations.
• Contribute to campaign strategy, high-converting ad copy, audience segmentation, and creative angle testing.
• Scaled Kitchen Bazaar (Saudi Arabia e-commerce retail): managed $24,352.55 Snapchat Ads spend generating $169,455.17 in purchases at a 6.95x average ROAS (1,643 orders, 26,955 add-to-carts at $0.90 CPA) paired with SAR 38.3K Google Ads delivering 78.4K clicks and 1,310 conversions.
• Scaled IJADAH educational account in UAE: generated 980 verified inquiries across 28 flights with record low $4.14 CPL on parent cohorts (-83% vs account benchmark) and 628 WhatsApp chats.
• Explored AI-enabled marketing workflows and internal campaign ideation tools.

2. eMarketing Egypt — Digital Marketing Intern (Internship | Apr 2026 — Jul 2026 | Dokki, Giza, Egypt)
• Supported digital marketing execution and campaign monitoring across client accounts.
• Reviewed campaign KPIs, tracked lead-generation performance, and assisted in reporting and client debriefs.
• Developed hands-on experience in paid social, creative briefs, and campaign iteration.

3. Adham Hossam — Digital Marketing Instructor (Current Role | Egypt / Online)
• Delivers digital marketing learning support and instructional sessions to trainees.
• Provides hands-on training across paid advertising fundamentals, campaign structure, media buying workflows, and creative optimization.

4. Adham Hossam — Digital Marketing Mentor / Group Mentor (Previous Role | Egypt / Online)
• Supported trainees through regular follow-ups and detailed feedback on practical campaign assignments.
• Coordinated training session schedules, distributed learning materials and recordings, and managed group communications.
• Facilitated community onboarding and trainee group administration.

5. Freelance — Freelance Digital Marketing Specialist (Current Independent Work)
• Executes independent freelance digital marketing projects alongside other professional engagements.
• Delivers services across paid social campaigns, content strategy, ad copywriting, performance monitoring, reporting, and conversion rate optimization (CRO) audits.

6. Hookify — AI-Assisted Content Experiment & Prototype (Google AI Studio / Gemini API)
• Built an AI-powered copywriting prototype producing stop-the-scroll hooks, reels scripts, and virality scoring using AIDA and PAS frameworks.

EDUCATION:
• Zagazig University — Bachelor's in Marketing Technology & E-Commerce (2020 — 2024 | GPA: 3.040)

CERTIFICATIONS & QUALIFICATIONS:
1. Artificial Intelligence Ambassadors Program — NTI / Engineers for a Sustainable Egypt (ESE) (Completed Jul 2026)
2. AI, Automation & Data Analysis Diploma — Beginner Level, NTI
3. AI, Automation & Data Analysis Diploma — Advanced Level, NTI
4. Digital Marketing Diploma — Adham Hossam
5. Fundamentals of Digital Marketing — Google (Completed Mar 2026)
6. Digital Ad Certificate – Digital Marketing — Digital Ad Expert (Credential ID: 124261390, Jul 2024)
7. IMP Digital Marketing Courses — IMP
8. Additional Professional Courses & Specialized Training`;

      navigator.clipboard.writeText(enText).then(() => {
        const originalText = copyEnBtn.textContent;
        copyEnBtn.textContent = '✓ Copied to Clipboard!';
        setTimeout(() => {
          copyEnBtn.textContent = originalText;
        }, 2500);
      });
    });
  }

  // Copy Arabic CV Bullets
  const copyArBtn = document.getElementById('copy-full-cv-ar-btn');
  if (copyArBtn) {
    copyArBtn.addEventListener('click', () => {
      const arText = `عبدالرحمن الحليوه (Abdlrhman Al Helewah) — أخصائي تسويق رقمي وإعلانات ممولة
البريد: abdlrhmanmahmoud69@gmail.com | هاتف / واتساب: +201553404607 | لينكد إن: linkedin.com/in/abdlrhman-al-helewah | القاهرة، مصر

الخبرات المهنية وسجل العمل:

1. شركة eMarketing Egypt — أخصائي تسويق رقمي (دوام كامل | أغسطس 2026 — حتى الآن | الدقي، الجيزة)
• إدارة وتنفيذ الحملات الإعلانية المدفوعة متعددة القنوات (Meta Ads و Snapchat Ads و Google Ads) لعملاء إقليميين في السعودية والإمارات ومصر.
• متابعة مؤشرات الأداء (KPIs)، وإعداد التقارير التحليلية، وتقديم توصيات التحسين المبنية على البيانات.
• المشاركة في صياغة استراتيجيات الحملات، وكتابة النصوص الإعلانية الجاذبة، وتحديد وتجربة شرائح الجمهور المستهدف.
• إدارة وتوسيع متجر Kitchen Bazaar في السعودية: تحقيق مبيعات فعلية بقيمة 169,455 دولار بعائد إنفاق إعلاني 6.95x ROAS عبر ميزانية Snapchat إعلانية بلغت 24,352 دولار (1,643 طلب شراء، 26,955 إضافة للسلة بتكلفة 0.90 دولار)، مع إدارة حملات Google Ads بميزانية 38.3 ألف ريال سعودي محققة 78,400 نقرة و1,310 تحويل.
• تحقيق 980 استفساراً مؤكداً لحساب إجادة للتعليم (الإمارات) عبر 28 رحلة إعلانية مع خفض CPL لفئة أولياء الأمور إلى 4.14 دولار (-83% عن المعيار) و628 محادثة واتساب.
• بحث وتطبيق أساليب العمل المدعومة بالذكاء الاصطناعي في إعداد الحملات والتحليل.

2. شركة eMarketing Egypt — متدرب تسويق رقمي (تدريب عملي | أبريل 2026 — يوليو 2026 | الدقي، الجيزة)
• دعم تنفيذ الحملات الإعلانية المدفوعة ومتابعة أداء الحسابات عبر مختلف المنصات.
• تتبع مؤشرات توليد العملاء المحتملين والمساعدة في إعداد تقارير الأداء الأسبوعية والشهرية.
• اكتساب خبرة عملية مباشرة في إعداد الإعلانات وصياغة الأفكار الإبداعية.

3. أدهم حسام (Adham Hossam) — مدرب تسويق رقمي (الدور الحالي | مصر / أونلاين)
• تقديم الدعم التدريبي والتعليمي في مجالات التسويق الرقمي وإدارة الحملات الإعلانية المدفوعة.
• تدريب المتدربين على الهيكل الإعلاني، وإدارة الميزانيات، وتكتيكات التحسين والقياس.

4. أدهم حسام (Adham Hossam) — مرشد ومتابع تدريب / Mentor (دور سابق منفصل | مصر / أونلاين)
• المتابعة الدورية مع المتدربين وتقديم ملاحظات تفصيلية على المهام التطبيقية.
• تنسيق الجلسات التدريبية وتوفير المواد التعليمية والتسجيلات ومتابعة مواعيد التلخيص.
• إدارة مجموعات المتدربين وتنظيم التواصل الإداري الداخلي.

5. العمل الحر — أخصائي تسويق رقمي مستقل / Freelance (مستمر إلى جانب الأدوار المهنية)
• العمل المستقل على مشاريع تسويقية للعملاء تشمل إطلاق وإدارة الحملات المدفوعة، واستراتيجيات المحتوى، وكتابة الإعلانات، ومراجعة معدلات التحويل (CRO).

6. مشروع Hookify — نموذج أولي لصناعة المحتوى بالذكاء الاصطناعي (Google AI Studio)
• بناء نموذج أولي لتوليد الهوكات الفيروسية وسكريبتات الفيديوهات القصيرة بالاعتماد على نماذج Google Gemini وأطر الإقناع التسويقي.

التعليم الأكاديمي:
• جامعة الزقازيق — بكالوريوس تكنولوجيا التسويق والتجارة الإلكترونية (2020 — 2024 | المعدل التراكمي: 3.040)

الشهادات والدبلومات المعتمدة:
1. برنامج سفراء الذكاء الاصطناعي — المعهد القومي للاتصالات (NTI) بالتعاون مع مهندسون من أجل مصر مستدامة (ESE) (يوليو 2026)
2. دبلومة الذكاء الاصطناعي والأتمتة وتحليل البيانات — المستوى التأسيسي (NTI)
3. دبلومة الذكاء الاصطناعي والأتمتة وتحليل البيانات — المستوى المتقدم (NTI)
4. دبلومة التسويق الرقمي — أدهم حسام (Adham Hossam)
5. أساسيات التسويق الرقمي — معتمدة من Google (مارس 2026)
6. شهادة الإعلانات الرقمية / Digital Ad Expert (رقم الاعتماد: 124261390 | يوليو 2024)
7. كورسات التسويق الرقمي من IMP
8. تدريبات مهنية ودورات متخصصة إضافية`;

      navigator.clipboard.writeText(arText).then(() => {
        const originalText = copyArBtn.textContent;
        copyArBtn.textContent = '✓ تم النسخ إلى الحافظة!';
        setTimeout(() => {
          copyArBtn.textContent = originalText;
        }, 2500);
      });
    });
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

