// lib/blogs.ts
// All blog metadata + content lives here.
// The [slug] page template renders any blog from this single source.

export const BLOGS = [
  {
    id: 1,
    slug: "ai-in-manufacturing",
    category: "Industry",
    tag: "AI & Tech",
    title: "How AI is Transforming Manufacturing Operations in India",
    excerpt:
      "From predictive maintenance to quality control, AI is rewriting the rulebook for Indian manufacturers. Here's how real factories are adopting intelligence at the floor level.",
    date: "March 18, 2025",
    readTime: "6 min read",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "India's manufacturing sector contributes roughly 17% of GDP and employs over 27 million people. For decades, the playbook was simple: more workers, longer shifts, tighter tolerances on cost. That playbook is being rewritten — not by consultants, but by sensors, models, and inference engines running on the shop floor.",
      },
      { type: "heading", text: "Predictive Maintenance: The First Domino" },
      {
        type: "paragraph",
        text: "The most immediate ROI story in AI-driven manufacturing is predictive maintenance. Traditional schedules are calendar-based — you service a machine every 30 days whether it needs it or not. AI flips this. Vibration sensors, thermal cameras, and current-draw monitors feed a continuous stream of signals into an ML model trained on historical failure patterns. The model flags anomalies before they cascade into downtime.",
      },
      {
        type: "callout",
        label: "Real Impact",
        text: "A mid-sized auto components plant in Pune reduced unplanned downtime by 38% in the first year after deploying a predictive maintenance system across 12 CNC machines.",
      },
      { type: "heading", text: "Vision-Based Quality Control" },
      {
        type: "paragraph",
        text: "Manual visual inspection is slow, inconsistent, and expensive at scale. Computer vision models — trained on thousands of labelled defect images — can inspect hundreds of parts per minute with greater consistency than a human inspector at hour eight of a shift. The defect categories the model learns are exactly the ones that matter: surface scratches, dimensional deviations, weld porosity.",
      },
      {
        type: "list",
        items: [
          "Defect detection accuracy typically exceeds 95% after 2–3 weeks of fine-tuning",
          "Inspection throughput increases 10–20× vs. manual methods",
          "Defect images are logged, creating an audit trail for quality certifications",
          "Models improve continuously as new defect types are labelled and added",
        ],
      },
      { type: "heading", text: "Supply Chain Intelligence" },
      {
        type: "paragraph",
        text: "Demand forecasting, inventory optimisation, and supplier risk scoring are areas where AI creates compounding value. A model that predicts demand 30 days out with 85% accuracy allows procurement teams to reduce safety stock without increasing stockout risk. When multiplied across dozens of SKUs and multiple suppliers, the working capital impact is significant.",
      },
      { type: "divider" },
      { type: "subheading", text: "What's Holding Adoption Back?" },
      {
        type: "paragraph",
        text: "The barrier isn't technology — it's data readiness and talent. Many Indian factories still run on paper-based processes or legacy SCADA systems that don't expose usable APIs. Before any ML model can be trained, there's a data engineering project: instrumenting machines, cleaning historical records, and building reliable pipelines. This is unglamorous work, but it's where the real project risk lives.",
      },
      {
        type: "quote",
        text: "Every AI project we've deployed started with at least 6 weeks of data infrastructure work before we wrote a single line of model code.",
        author: "DatagenixAi Engineering Team",
      },
      { type: "heading", text: "The Road Ahead" },
      {
        type: "paragraph",
        text: "The factories that invest in data infrastructure and AI talent now will have a structural cost and quality advantage within three years. The question for Indian manufacturers isn't whether to adopt AI — it's how fast they can build the foundation that makes it work.",
      },
    ],
  },
  {
    id: 2,
    slug: "iot-smart-waste-management",
    category: "Smart Cities",
    tag: "IoT",
    title: "IoT-Powered Smart Waste Management: What Municipal Corporations Need to Know",
    excerpt:
      "Smart bins, route optimization, and real-time monitoring are no longer futuristic — they're deployable today. A deep-dive into how IoT is cleaning up our cities.",
    date: "March 5, 2025",
    readTime: "8 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "India generates over 150,000 metric tonnes of solid waste every day. Less than 20% of it is scientifically processed. The gap between waste generated and waste managed isn't just an environmental failure — it's a governance and logistics failure that technology can directly address.",
      },
      { type: "heading", text: "How Smart Bins Work" },
      {
        type: "paragraph",
        text: "A smart bin is, at its core, a standard waste container fitted with an ultrasonic fill-level sensor, a microcontroller, and a cellular or LoRaWAN radio. The sensor fires a pulse every few minutes and measures the distance to the surface of the waste. That reading is transmitted to a cloud dashboard, where municipal staff can see, in real time, which bins are full and which are not.",
      },
      {
        type: "callout",
        label: "Why It Matters",
        text: "Without fill-level data, collection trucks follow fixed routes on fixed schedules. With it, routes are dynamically optimised to skip empty bins and prioritise overflowing ones — cutting collection vehicle kilometres by 20–35%.",
      },
      { type: "heading", text: "Route Optimisation at Scale" },
      {
        type: "paragraph",
        text: "Fill-level data feeds a route optimisation engine — essentially a variant of the vehicle routing problem solved in near-real-time. The engine accounts for current fill levels, truck capacity, driver shift constraints, and road network conditions to produce an optimal collection sequence each morning. As bins fill through the day, the engine can re-optimise on-the-fly.",
      },
      { type: "heading", text: "Deployment Realities" },
      {
        type: "list",
        items: [
          "LoRaWAN gateways typically cover a 2–5 km radius in urban environments",
          "Battery life on sensor nodes ranges from 18 months to 3 years depending on transmission frequency",
          "Dashboard software must integrate with existing ward-level GIS data",
          "Maintenance protocols for sensors in harsh outdoor environments are non-negotiable",
          "Pilot with 50–100 bins before scaling to prove ROI to councillors and commissioners",
        ],
      },
      { type: "divider" },
      { type: "heading", text: "Beyond Collection: Predictive Analytics" },
      {
        type: "paragraph",
        text: "Once you have 6–12 months of fill-level data, patterns emerge. Bins near weekly markets fill faster on specific days. Festival periods spike waste volumes in predictable ways. Seasonal rains affect certain collection routes. These patterns enable predictive scheduling — deploying more trucks before they're needed, not after bins have overflowed.",
      },
      {
        type: "quote",
        text: "The technology is the easy part. Getting ward-level buy-in and training field staff on the dashboard is where most smart city pilots succeed or fail.",
        author: "DatagenixAi Smart Cities Practice",
      },
    ],
  },
  {
    id: 3,
    slug: "ai-talent-gap-india",
    category: "Education",
    tag: "Education",
    title: "India's AI Talent Gap: Why Technical Degrees Alone Are Not Enough",
    excerpt:
      "Thousands of engineers graduate each year, yet companies struggle to find AI-ready professionals. The gap isn't just about skills — it's about practical exposure and mindset.",
    date: "February 20, 2025",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "India produces roughly 1.5 million engineering graduates per year. Demand for AI and data professionals is growing at 30%+ annually. On paper, supply should comfortably exceed demand. In practice, hiring managers across the industry report the same frustration: candidates who can recite theory but can't ship.",
      },
      { type: "heading", text: "The Theory-Practice Chasm" },
      {
        type: "paragraph",
        text: "Most engineering curricula treat ML as a sequence of algorithms to understand — gradient descent, backpropagation, k-means. What they don't teach is the rest of the job: cleaning messy real-world data, debugging model performance on imbalanced datasets, writing production-grade inference code, instrumenting models in deployment. These skills are only built by doing.",
      },
      {
        type: "callout",
        label: "The Real Gap",
        text: "A 2024 industry survey found that 73% of hiring managers said the biggest deficit in AI candidates was practical project experience, not theoretical knowledge.",
      },
      { type: "heading", text: "What AI-Ready Actually Looks Like" },
      {
        type: "list",
        items: [
          "Has deployed at least one model to a real or simulated production environment",
          "Can articulate trade-offs between model accuracy and inference latency",
          "Has dealt with data drift and knows at least one monitoring strategy",
          "Understands the full pipeline: ingestion → feature engineering → training → serving",
          "Can communicate results to a non-technical stakeholder",
        ],
      },
      { type: "heading", text: "What Institutions Can Do" },
      {
        type: "paragraph",
        text: "The fix isn't adding more ML courses. It's restructuring how courses are assessed. Replace final exams with capstone projects on real datasets. Partner with local industry for problem statements. Require students to present their work to non-technical panels. These changes cost no additional infrastructure — they require only a shift in how learning is valued.",
      },
      {
        type: "quote",
        text: "We don't need students who've read every paper. We need students who've broken a model and fixed it.",
        author: "DatagenixAi Training Division",
      },
    ],
  },
  {
    id: 4,
    slug: "embedded-ai-edge-computing",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "Embedded AI & Edge Computing: The Next Frontier for Industrial IoT",
    excerpt:
      "Why running AI on the device itself — rather than in the cloud — is becoming the gold standard for real-time industrial applications.",
    date: "February 10, 2025",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "For the first generation of industrial IoT deployments, the architecture was simple: sensors collect data, data goes to the cloud, cloud runs the analysis, cloud sends back instructions. This works reasonably well for applications where latency of a few seconds is acceptable. For a growing class of industrial problems, it doesn't.",
      },
      { type: "heading", text: "When Milliseconds Matter" },
      {
        type: "paragraph",
        text: "Consider a robotic arm on a production line. If the vision system detects a misalignment, the arm needs to correct in under 50 milliseconds to avoid a defect or collision. A round-trip to the cloud — even on a low-latency connection — adds 80–150ms of network overhead alone. The physics of the problem demand local inference.",
      },
      {
        type: "callout",
        label: "Key Insight",
        text: "Edge AI eliminates the cloud round-trip entirely. The model runs on a microcontroller, FPGA, or edge GPU co-located with the sensor, delivering inference in single-digit milliseconds.",
      },
      { type: "heading", text: "Hardware Landscape in 2025" },
      {
        type: "list",
        items: [
          "NVIDIA Jetson Orin: high-performance edge inference for computer vision workloads",
          "Raspberry Pi 5 + Coral TPU: cost-effective for moderate inference tasks",
          "STM32 microcontrollers with TensorFlow Lite Micro: ultra-low-power sensor-side inference",
          "Qualcomm AI Hub: mobile-class NPUs increasingly deployed in industrial edge devices",
        ],
      },
      { type: "heading", text: "Model Compression is the Key Enabler" },
      {
        type: "paragraph",
        text: "Running a full-scale transformer model on a microcontroller is not feasible. What makes edge AI work is model compression: quantisation (reducing weights from 32-bit floats to 8-bit integers), pruning (removing redundant neurons), and knowledge distillation (training a small student model to mimic a large teacher model). A well-compressed model can be 10–50× smaller with less than 5% accuracy loss.",
      },
      { type: "divider" },
      { type: "heading", text: "Connectivity Independence" },
      {
        type: "paragraph",
        text: "A secondary benefit of edge inference is resilience. Factories in semi-urban or rural areas often have unreliable internet connectivity. An edge-deployed model continues to function during outages, syncing logs and model updates when connectivity is restored. For safety-critical applications, this is not a nice-to-have — it's a requirement.",
      },
    ],
  },
  {
    id: 5,
    slug: "responsible-ai-sdgs",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "Responsible AI and the SDGs: Building Technology That Serves Society",
    excerpt:
      "How aligning AI development with the United Nations Sustainable Development Goals isn't just ethical — it's smart business strategy for the decade ahead.",
    date: "January 28, 2025",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "The United Nations Sustainable Development Goals aren't a compliance checklist. They're a map of the world's most important unsolved problems — and a surprisingly precise guide to where AI can create durable, large-scale value. Companies that align their AI development with the SDGs aren't just being responsible; they're positioning for the contracts, partnerships, and talent that the next decade will reward.",
      },
      { type: "heading", text: "SDG 4: Quality Education" },
      {
        type: "paragraph",
        text: "AI-powered personalised learning, automated assessment, and intelligent tutoring systems can reach students in geographies and economic brackets that traditional education infrastructure cannot. The opportunity isn't just edtech — it's workforce development, upskilling, and lifelong learning at scale.",
      },
      { type: "heading", text: "SDG 9: Industry, Innovation and Infrastructure" },
      {
        type: "paragraph",
        text: "Industrial AI — predictive maintenance, process optimisation, quality control — directly maps to SDG 9's mandate for resilient infrastructure and inclusive industrialisation. Every percentage point of efficiency gained by an Indian manufacturer is a step toward sustainable industrial growth.",
      },
      { type: "heading", text: "SDG 11: Sustainable Cities and Communities" },
      {
        type: "paragraph",
        text: "Smart waste management, traffic flow optimisation, energy grid intelligence, and environmental monitoring are all AI applications that directly serve SDG 11. Municipal corporations and urban local bodies are increasingly willing to fund pilots that demonstrate measurable impact on liveability metrics.",
      },
      {
        type: "callout",
        label: "The Business Case",
        text: "Government procurement, multilateral development bank funding, and ESG-conscious enterprise clients all increasingly require SDG alignment. Building it into your product roadmap from day one is cheaper than retrofitting it later.",
      },
      { type: "heading", text: "What Responsible AI Actually Requires" },
      {
        type: "list",
        items: [
          "Bias auditing before deployment, not after a public incident",
          "Explainability for decisions that affect people's access to services",
          "Data minimisation: collect what you need, not everything you can",
          "Community consultation when deploying AI in public-interest contexts",
          "Clear escalation paths when the model is wrong",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "airiaa-launch",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "AIRIAA: How We Built an AI-Powered Admission Assistant for College Campuses",
    excerpt:
      "Behind the scenes of building and deploying AIRIAA — the AI admission and information assistant that transformed student engagement at PVPIT.",
    date: "January 14, 2025",
    readTime: "9 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Every admission season, the same questions flood a college's phones and email queues: What are the cutoffs? What documents do I need? How do I apply for a scholarship? Staff spend hours answering questions that could be answered in seconds. AIRIAA was built to change that.",
      },
      { type: "heading", text: "The Problem We Were Solving" },
      {
        type: "paragraph",
        text: "PVPIT's admission team was handling 500–800 enquiries per day during peak season, with a team of eight staff. Response times were lagging, accuracy was inconsistent, and staff were burned out before the academic year even started. The goal was clear: handle 80% of common enquiries autonomously, with seamless handoff to humans for complex cases.",
      },
      { type: "heading", text: "Architecture Overview" },
      {
        type: "list",
        items: [
          "Retrieval-Augmented Generation (RAG) over the college's admission documents, brochures, and FAQ database",
          "Fine-tuned intent classifier to route queries: FAQ vs. document request vs. human escalation",
          "WhatsApp Business API integration for student-facing access",
          "Admin dashboard for staff to monitor conversations and override responses",
          "Feedback loop: staff corrections fed back into the knowledge base weekly",
        ],
      },
      { type: "heading", text: "What We Got Right" },
      {
        type: "paragraph",
        text: "The RAG approach was the right call. Rather than trying to train the model on admission data, we kept the LLM as a reasoning and language layer and grounded every response in retrieved documents. This meant when admission policies changed, we updated the document store — not the model. Update time: minutes, not weeks.",
      },
      {
        type: "callout",
        label: "Results",
        text: "In the first admission cycle, AIRIAA handled 74% of all enquiries autonomously with a 91% satisfaction score from students who rated their interaction.",
      },
      { type: "heading", text: "What We'd Do Differently" },
      {
        type: "paragraph",
        text: "The hardest part wasn't the AI — it was change management. Getting admission staff to trust the system, use the dashboard, and provide corrections took more time and effort than the technical build. In future deployments, we'd allocate at least 30% of the project timeline to training, onboarding, and building staff confidence.",
      },
      {
        type: "quote",
        text: "AIRIAA didn't replace our admission team. It gave them back their time for the conversations that actually need a human.",
        author: "PVPIT Administration",
      },
    ],
  },
  {
    id: 7,
    slug: "data-to-intelligence",
    category: "Industry",
    tag: "Industry",
    title: "From Data to Intelligence: Why Most Businesses Are Still Missing the Bridge",
    excerpt:
      "Collecting data is easy. Converting it into decisions that drive results is where most organisations still struggle. Here's the framework that changes that.",
    date: "December 30, 2024",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Most organisations today are not data-poor. They have CRMs, ERPs, IoT sensors, web analytics platforms, and spreadsheets containing years of operational history. What they lack is intelligence — the ability to convert that data into decisions that improve outcomes. The bridge between data and intelligence is where most digital transformation projects stall.",
      },
      { type: "heading", text: "The Data Maturity Ladder" },
      {
        type: "list",
        items: [
          "Level 1 – Descriptive: What happened? (Reports, dashboards, historical analysis)",
          "Level 2 – Diagnostic: Why did it happen? (Drill-down analysis, root cause investigation)",
          "Level 3 – Predictive: What will happen? (ML models, forecasting, anomaly detection)",
          "Level 4 – Prescriptive: What should we do? (Optimisation, decision automation, recommendations)",
        ],
      },
      {
        type: "paragraph",
        text: "Most businesses operate at Level 1. They have dashboards that show what happened last month. A smaller number reach Level 2 — they can diagnose why a metric moved. Fewer still reach Level 3 or 4. The gap between Level 2 and Level 3 is where the AI investment typically sits, and where the ROI is highest.",
      },
      { type: "heading", text: "Why the Bridge Breaks" },
      {
        type: "paragraph",
        text: "The most common failure mode is building a beautiful Level 1 or Level 2 solution and calling it an AI project. A dashboard with 30 charts and a few trend lines is not intelligence — it's organised data. Intelligence requires a feedback loop: model output → human or automated decision → outcome → model improvement.",
      },
      {
        type: "callout",
        label: "The Framework",
        text: "Define the decision before you define the data. Every analytics project should start with: 'What decision will change, and how will it change, as a result of this analysis?' If you can't answer that, the project is a reporting project, not an intelligence project.",
      },
      { type: "heading", text: "Building the Bridge" },
      {
        type: "paragraph",
        text: "Start with the highest-value decision in your organisation that is currently made on intuition or incomplete information. Map the data that exists to support that decision. Build the smallest model that improves that decision measurably. Instrument the outcome. Iterate. This is slower than deploying a data platform, but it creates compounding value — each decision improved generates data that improves the next model.",
      },
    ],
  },
  {
    id: 8,
    slug: "ai-skill-india",
    category: "Education",
    tag: "Education",
    title: "AI Education and Skill India: Bridging the Gap Between Policy and Practice",
    excerpt:
      "Government initiatives are ambitious, but ground-level implementation is where the real challenge lies. How DatagenixAi is contributing to the Skill India mission.",
    date: "December 12, 2024",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "The Indian government's ambition to train 5 million AI professionals by 2027 under the National AI Mission is, in scale, one of the most ambitious workforce development programmes ever attempted. The policy architecture is sound. The funding is being allocated. The gap, as always, is in last-mile implementation.",
      },
      { type: "heading", text: "What the Policy Gets Right" },
      {
        type: "paragraph",
        text: "The focus on Tier 2 and Tier 3 cities is exactly right. The talent pool in metros is competitive to the point of being a zero-sum game between employers. The untapped reservoir is in mid-sized cities where engineering colleges produce thousands of graduates annually but lack the industry connections and practical infrastructure to make those graduates deployment-ready.",
      },
      { type: "heading", text: "What's Missing on the Ground" },
      {
        type: "list",
        items: [
          "Instructors with recent industry experience — most college faculty haven't worked in an AI team",
          "Compute infrastructure: GPU access for hands-on training is still a barrier",
          "Real problem statements: students learn on toy datasets, not real business problems",
          "Industry mentorship pipelines that survive beyond one-off workshops",
          "Assessment frameworks that measure practical capability, not exam performance",
        ],
      },
      { type: "heading", text: "DatagenixAi's Approach" },
      {
        type: "paragraph",
        text: "Our industry-linked training programmes are built on a simple principle: every cohort works on a real problem from a real organisation. We source problem statements from our industry partners, provide cloud compute access for training, and assess students on deployed outcomes rather than written tests. The result is graduates who have shipped something — which changes how they present themselves, and how employers evaluate them.",
      },
      {
        type: "callout",
        label: "Our Contribution",
        text: "Since 2023, DatagenixAi has trained over 1,200 students across 8 engineering colleges in Maharashtra, with 68% placed in AI or data roles within 90 days of programme completion.",
      },
    ],
  },
  {
    id: 9,
    slug: "pollution-monitoring-ai",
    category: "Smart Cities",
    tag: "Smart Cities",
    title: "AI-Driven Environmental Monitoring: Tackling Pollution with Intelligent Sensors",
    excerpt:
      "Real-time air quality analysis, predictive pollution models, and automated alerts — how AI and IoT are being combined to fight environmental degradation in urban India.",
    date: "November 25, 2024",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Fourteen of the world's twenty most polluted cities are in India. The health cost of this pollution — in respiratory disease, lost productivity, and reduced life expectancy — is estimated at $95 billion annually. The challenge is not only reducing emissions; it's measuring them accurately enough to make enforcement and policy actionable.",
      },
      { type: "heading", text: "The Monitoring Infrastructure Problem" },
      {
        type: "paragraph",
        text: "India's Central Pollution Control Board operates roughly 800 continuous ambient air quality monitoring stations across the country. For a country of 1.4 billion people spread across 3.3 million square kilometres, this is woefully insufficient. Many cities have a single monitoring station — a station whose readings can be wildly unrepresentative of air quality three kilometres away.",
      },
      {
        type: "callout",
        label: "The Solution",
        text: "Low-cost IoT sensor networks — deployed at 10–50× the density of reference stations — combined with ML calibration against reference data, can produce credible city-wide pollution maps at a fraction of the cost.",
      },
      { type: "heading", text: "How AI Calibrates Low-Cost Sensors" },
      {
        type: "paragraph",
        text: "The challenge with low-cost electrochemical sensors is accuracy: they drift over time and are affected by temperature, humidity, and cross-sensitivity to other gases. AI calibration addresses this by co-locating low-cost sensors with reference instruments for a calibration period, then training a model to correct for systematic errors. The corrected readings are far more accurate than raw sensor output.",
      },
      { type: "heading", text: "Predictive Pollution Modelling" },
      {
        type: "list",
        items: [
          "Weather forecast integration: wind direction, temperature inversion predictions",
          "Traffic density data from mobility platforms as an emission proxy",
          "Industrial activity schedules from compliance reporting",
          "Seasonal crop burning calendars for affected regions",
          "Historical patterns for specific high-risk dates (festivals, harvest seasons)",
        ],
      },
      { type: "heading", text: "From Data to Action" },
      {
        type: "paragraph",
        text: "The value of environmental monitoring is not in the data — it's in the response it enables. Automated alerts to industrial units when their sector exceeds thresholds. Public health advisories pushed through civic apps. Dynamic traffic routing away from high-pollution corridors. School activity advisories for parents. The sensor network is the nervous system; the AI is the brain; the response protocols are the action.",
      },
    ],
  },
  {
    id: 10,
    slug: "future-of-ai-professionals",
    category: "Education",
    tag: "Education",
    title: "The Future Belongs to AI-Skilled Professionals: A Roadmap for 2025 and Beyond",
    excerpt:
      "What skills, mindset, and experience do professionals need to thrive in an AI-driven world? A practical roadmap from our team's industry experience.",
    date: "November 8, 2024",
    readTime: "8 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "The most dangerous professional in 2025 is not someone who doesn't know AI. It's someone who thinks they know AI because they've used ChatGPT. The gap between AI user and AI practitioner — someone who can build, deploy, evaluate, and improve AI systems — is where careers will be made and lost over the next decade.",
      },
      { type: "heading", text: "The Three Layers of AI Skill" },
      {
        type: "list",
        items: [
          "Layer 1 – Literacy: Understand what AI can and cannot do; use AI tools effectively in your domain",
          "Layer 2 – Application: Build and deploy AI solutions using existing frameworks and platforms",
          "Layer 3 – Engineering: Design and train models; contribute to AI infrastructure and research",
        ],
      },
      {
        type: "paragraph",
        text: "Most professionals need Layer 1. A significant minority need Layer 2. Very few need Layer 3. The mistake many make is assuming they need Layer 3 expertise to be relevant — and either burning out trying to get there, or dismissing AI entirely because they don't want to become a researcher. Layer 1 and Layer 2 skills are where the majority of economic value will be created.",
      },
      { type: "heading", text: "Domain + AI > AI Alone" },
      {
        type: "paragraph",
        text: "A logistics professional who understands route optimisation algorithms and can evaluate an AI vendor's claims is more valuable than a data scientist with no logistics context. A healthcare administrator who can design an AI-assisted triage protocol is more valuable than an ML engineer who doesn't understand clinical workflows. Domain knowledge amplifies AI skill; AI skill amplifies domain knowledge.",
      },
      {
        type: "callout",
        label: "The Roadmap",
        text: "Pick your domain. Get to Layer 1 literacy in 3 months. Build one real Layer 2 project in your domain in the next 6 months. That combination will put you ahead of 90% of your professional peers.",
      },
      { type: "heading", text: "Mindset Over Toolkit" },
      {
        type: "paragraph",
        text: "The specific tools and frameworks will change. The mindset that makes an AI-skilled professional valuable will not: comfort with uncertainty, willingness to experiment and fail fast, ability to evaluate claims critically, and a habit of asking 'what decision does this change?' rather than 'what's the accuracy?' These are not technical skills. They're professional habits — and they can be built deliberately.",
      },
      {
        type: "quote",
        text: "We're not looking for people who know every algorithm. We're looking for people who know how to think about problems that algorithms can solve.",
        author: "DatagenixAi Hiring Team",
      },
    ],
  },
];

// Helper to get a blog by slug
export function getBlogBySlug(slug) {
  return BLOGS.find((b) => b.slug === slug);
}

// Helper for generateStaticParams
export function getAllSlugs() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}