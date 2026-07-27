export interface SolutionCapability {
  title: string;
  description: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionDetail {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  overviewTitle: string;
  overviewBody: string[];
  capabilities: SolutionCapability[];
  included: string[];
  suitedFor: string[];
  faqs: SolutionFaq[];
}

export const solutionDetails: SolutionDetail[] = [
  {
    id: "isp-business-internet",
    slug: "/solutions/isp-business-internet",
    eyebrow: "Connectivity",
    title: "ISP and Business Internet",
    heroDescription:
      "Business-grade internet for offices, branches and operational sites, designed around how your organisation actually works.",
    image: "/assets/qrf/solution-detail/isp-office-network.webp",
    imageAlt: "Network engineer maintaining business internet infrastructure in a Port Moresby office",
    overviewTitle: "Connectivity your operation can plan around",
    overviewBody: [
      "Consumer-grade internet is built for households. Business internet is built for organisations that lose money, visibility or safety margin when a connection drops. QRF designs, installs and supports business connectivity for organisations operating across Papua New Guinea — from single-office deployments to multi-site networks with branch offices and remote operational sites.",
      "We assess your site conditions, bandwidth requirements and tolerance for downtime before recommending a service. Where a single connection cannot deliver the availability an operation requires, we design redundancy into the solution so a fault on one path does not stop the business.",
    ],
    capabilities: [
      {
        title: "Site and bandwidth assessment",
        description:
          "We measure what your operation actually consumes and what it will need, rather than selling a package and hoping it fits.",
      },
      {
        title: "Primary and backup links",
        description:
          "Failover configurations that keep critical systems reachable when a primary service is interrupted.",
      },
      {
        title: "Multi-site connectivity",
        description:
          "Connecting head office, branches and operational sites into a single managed network.",
      },
      {
        title: "Managed routing and firewalling",
        description:
          "Edge configuration, traffic policy and segmentation so business systems stay protected and prioritised.",
      },
      {
        title: "Bandwidth prioritisation",
        description:
          "Quality-of-service rules that keep voice, video and business applications usable under load.",
      },
      {
        title: "Ongoing monitoring and support",
        description:
          "Fault diagnosis, escalation and coordination so connectivity problems get owned rather than passed around.",
      },
    ],
    included: [
      "Site survey and requirements assessment",
      "Solution design and written proposal",
      "Equipment supply and configuration",
      "Installation, cabling and commissioning",
      "Testing and performance verification",
      "Handover documentation",
      "Ongoing technical support",
    ],
    suitedFor: [
      "Corporate offices and head offices",
      "Multi-branch organisations",
      "Government agencies and public-service facilities",
      "Banking and financial services sites",
      "Retail and logistics operations",
    ],
    faqs: [
      {
        question: "Can you connect sites outside the main centres?",
        answer:
          "Yes. Where terrestrial services are unavailable or unreliable, we design connectivity around satellite or wireless links. Solutions are matched to the terrain, power availability and access conditions at each site.",
      },
      {
        question: "What happens if our connection goes down?",
        answer:
          "That depends on how the solution is designed. Where continuity matters, we build in a secondary path so traffic fails over automatically. We discuss this trade-off — cost against availability — during the assessment stage.",
      },
      {
        question: "Do you support networks you did not install?",
        answer:
          "In most cases, yes. We will assess the existing environment first so we understand what we are taking responsibility for before committing to a support arrangement.",
      },
    ],
  },
  {
    id: "starlink-connectivity",
    slug: "/solutions/starlink-connectivity",
    eyebrow: "Satellite Connectivity",
    title: "Starlink Connectivity Solutions",
    heroDescription:
      "Satellite internet deployment and integration for regional, remote and difficult-to-reach operating environments.",
    image: "/assets/qrf/solution-detail/starlink-community-site.webp",
    imageAlt: "Satellite connectivity serving a remote Papua New Guinea community facility",
    overviewTitle: "Connectivity where the infrastructure does not reach",
    overviewBody: [
      "Papua New Guinea's terrain makes terrestrial connectivity difficult and, in many locations, unavailable. Low-earth-orbit satellite service has changed what is possible at remote sites — but hardware alone is not a solution. Placement, mounting, power, weather exposure and integration with the site network all determine whether a link performs when it is needed.",
      "QRF handles satellite connectivity as an engineering exercise rather than a box delivery. We assess the site, plan the installation around obstructions and environmental exposure, integrate the service into your existing network, and support it afterwards.",
    ],
    capabilities: [
      {
        title: "Site suitability assessment",
        description:
          "Sky visibility, obstruction mapping, mounting options and power availability assessed before deployment.",
      },
      {
        title: "Professional installation and mounting",
        description:
          "Secure mounting designed for wind loading, rainfall and long-term environmental exposure.",
      },
      {
        title: "Power and continuity planning",
        description:
          "Integration with site power, backup supply and protection against interruption.",
      },
      {
        title: "Network integration",
        description:
          "Routing, segmentation and integration with existing LAN, Wi-Fi and business systems.",
      },
      {
        title: "Hybrid and failover configurations",
        description:
          "Satellite as a primary service or as backup to a terrestrial link, depending on the operational requirement.",
      },
      {
        title: "Remote-site support",
        description:
          "Monitoring, fault diagnosis and maintenance planning for sites that are expensive to visit.",
      },
    ],
    included: [
      "Remote-site assessment and obstruction check",
      "Hardware supply and staging",
      "Mounting design and installation",
      "Power integration and protection",
      "Network configuration and testing",
      "Site documentation",
      "Ongoing support arrangements",
    ],
    suitedFor: [
      "Mining and resources sites",
      "Oil and gas facilities",
      "Exploration and survey camps",
      "Agricultural and plantation operations",
      "Regional offices and field bases",
      "Temporary and project-duration sites",
    ],
    faqs: [
      {
        question: "How quickly can a remote site be connected?",
        answer:
          "Timeframes depend on hardware availability, site access and installation conditions. We provide an indicative schedule once we understand the site and can confirm access arrangements.",
      },
      {
        question: "Will it work through heavy rain?",
        answer:
          "Satellite services can experience degradation in severe weather. Where an operation cannot tolerate that, we design a hybrid solution so a second path carries critical traffic during interruption.",
      },
      {
        question: "Can multiple users share one connection?",
        answer:
          "Yes. We integrate the service with site networking and Wi-Fi, and apply prioritisation rules so critical applications remain usable when the site is busy.",
      },
    ],
  },
  {
    id: "radio-communications",
    slug: "/solutions/radio-communications",
    eyebrow: "Communications",
    title: "Motorola Radio Communications",
    heroDescription:
      "Professional two-way radio systems for clear, dependable team communications across sites and distributed operations.",
    image: "/assets/qrf/solution-detail/radio-logistics-operation.webp",
    imageAlt: "Radio communications coordinating a Port Moresby logistics operation",
    overviewTitle: "Communications that work when the network does not",
    overviewBody: [
      "Mobile coverage is not universal, and in an incident it is often the first thing to become congested. Two-way radio remains the standard for operational communications because it is immediate, independent of cellular networks, and built for one-to-many coordination — the way field teams, security personnel and site operations actually communicate.",
      "QRF supplies, configures and supports professional radio communication solutions. We plan coverage around your site and operating area, configure talkgroups around how your teams are structured, and support the fleet over its working life.",
    ],
    capabilities: [
      {
        title: "Coverage planning",
        description:
          "Assessment of terrain, buildings and operating area to determine what coverage is achievable and what infrastructure it requires.",
      },
      {
        title: "Fleet configuration",
        description:
          "Channel plans and talkgroups configured around your team structure, sites and escalation paths.",
      },
      {
        title: "Repeater and infrastructure deployment",
        description:
          "Installation of repeater infrastructure where coverage requirements exceed handset-to-handset range.",
      },
      {
        title: "Vehicle and base installations",
        description:
          "Mobile units fitted to vehicles and base stations installed at control points and operations rooms.",
      },
      {
        title: "Accessories and duress features",
        description:
          "Earpieces, chargers, remote speaker microphones and safety features selected for the working environment.",
      },
      {
        title: "Programming, training and support",
        description:
          "User training, fleet programming, maintenance and fault resolution across the equipment lifecycle.",
      },
    ],
    included: [
      "Coverage and requirements assessment",
      "System design and equipment recommendation",
      "Supply of radios, accessories and infrastructure",
      "Fleet programming and configuration",
      "Installation and commissioning",
      "User training",
      "Ongoing maintenance and support",
    ],
    suitedFor: [
      "Security and facilities teams",
      "Mining and resources operations",
      "Transport, logistics and fleet operations",
      "Ports, warehouses and industrial sites",
      "Event and crowd management",
      "Emergency and incident coordination",
    ],
    faqs: [
      {
        question: "How much coverage can we get?",
        answer:
          "That depends on terrain, distance, obstructions and the equipment used. We assess your operating area and tell you what is realistically achievable, including where repeater infrastructure would be required.",
      },
      {
        question: "Can radio integrate with our other systems?",
        answer:
          "Depending on the platform, radio can be integrated with dispatch, monitoring and connected systems. We scope this against your operational requirement during design.",
      },
      {
        question: "Do you support existing radio fleets?",
        answer:
          "Yes. We can assess an existing fleet, reprogram it, expand it, or plan a staged migration where equipment is reaching end of life.",
      },
    ],
  },
  {
    id: "cctv-video-security",
    slug: "/solutions/cctv-video-security",
    eyebrow: "Video Security",
    title: "CCTV and Video Security",
    heroDescription:
      "Video surveillance and monitoring systems designed for practical operational awareness, not just recorded footage.",
    image: "/assets/qrf/solution-detail/cctv-control-room.webp",
    imageAlt: "Security operator monitoring cameras across a commercial facility",
    overviewTitle: "Systems designed to be used, not just installed",
    overviewBody: [
      "A camera system earns its cost when someone can find the footage that matters, quickly, and act on it. Many installations fail that test — cameras aimed poorly, storage that overwrites before an incident is reported, or a system nobody has been trained to operate.",
      "QRF designs video security around what you need to see and who needs to see it. We plan camera placement against your risk points and site layout, size recording and retention against your actual requirements, and make sure your team can operate the system after handover.",
    ],
    capabilities: [
      {
        title: "Risk and coverage planning",
        description:
          "Camera placement planned against entry points, high-value areas, blind spots and the incidents you need to review.",
      },
      {
        title: "Camera selection",
        description:
          "Cameras matched to lighting conditions, distance, environmental exposure and identification requirements.",
      },
      {
        title: "Recording and retention design",
        description:
          "Storage sized against camera count, resolution and how far back you need to be able to look.",
      },
      {
        title: "Remote and mobile viewing",
        description:
          "Secure access for managers and control-room staff, on site or remotely.",
      },
      {
        title: "Network and power infrastructure",
        description:
          "Cabling, switching, power-over-Ethernet and protection designed for reliable continuous operation.",
      },
      {
        title: "Integration with wider security systems",
        description:
          "Video connected with access control, alarms and monitoring for a single operational picture.",
      },
    ],
    included: [
      "Site risk and coverage assessment",
      "System design and camera plan",
      "Equipment supply",
      "Cabling, installation and commissioning",
      "Recording, retention and access configuration",
      "Operator training",
      "Maintenance and technical support",
    ],
    suitedFor: [
      "Banking and financial services",
      "Retail and commercial premises",
      "Government and public-service facilities",
      "Industrial sites and warehouses",
      "Corporate offices and campuses",
      "Residential and mixed-use developments",
    ],
    faqs: [
      {
        question: "How long is footage kept?",
        answer:
          "Retention is a design decision driven by camera count, resolution and storage. We discuss how far back you need to be able to review and size the system accordingly.",
      },
      {
        question: "Can we view cameras remotely?",
        answer:
          "Yes, subject to connectivity and appropriate access controls. Remote viewing should be designed carefully so convenience does not create a security weakness.",
      },
      {
        question: "Can you upgrade an existing system?",
        answer:
          "Often, yes. We assess what is installed, identify what can be retained, and plan an upgrade path rather than replacing everything by default.",
      },
    ],
  },
  {
    id: "network-infrastructure",
    slug: "/solutions/network-infrastructure",
    eyebrow: "Enterprise Networks",
    title: "Enterprise Network Infrastructure",
    heroDescription:
      "Structured, scalable network infrastructure that supports dependable business operations and future growth.",
    image: "/assets/qrf/solution-detail/network-installation.webp",
    imageAlt: "Technicians installing structured enterprise network infrastructure",
    overviewTitle: "The layer everything else depends on",
    overviewBody: [
      "Internet, voice, video security, access control and business applications all run over the same underlying network. When that layer is improvised, every system above it inherits the problem — intermittent faults, poor performance and outages nobody can diagnose.",
      "QRF designs and installs structured network infrastructure built to standards: proper cabling, labelled terminations, appropriate switching, resilient power and documentation that means the next person can work on it. The result is a network that behaves predictably and can be extended without being rebuilt.",
    ],
    capabilities: [
      {
        title: "Structured cabling",
        description:
          "Cabling, patching and termination installed and labelled to a consistent standard.",
      },
      {
        title: "Switching and routing design",
        description:
          "Network architecture sized for current load with capacity to grow.",
      },
      {
        title: "Wireless network design",
        description:
          "Wi-Fi coverage planned around building layout, materials, density and roaming requirements.",
      },
      {
        title: "Segmentation and access control",
        description:
          "Separation of guest, corporate, security and operational traffic to limit risk and contention.",
      },
      {
        title: "Rack, power and environment",
        description:
          "Comms room layout, rack build, power protection and cooling considerations.",
      },
      {
        title: "Documentation and handover",
        description:
          "As-built records, labelling schedules and configuration documentation supplied at completion.",
      },
    ],
    included: [
      "Site survey and network design",
      "Structured cabling installation",
      "Switching, routing and wireless deployment",
      "Comms room and rack build",
      "Configuration, testing and certification",
      "As-built documentation",
      "Ongoing support and optimisation",
    ],
    suitedFor: [
      "New office fit-outs and relocations",
      "Corporate campuses",
      "Government facilities",
      "Banking and financial services",
      "Industrial and warehouse facilities",
      "Multi-site organisations standardising infrastructure",
    ],
    faqs: [
      {
        question: "Can you work around an operating business?",
        answer:
          "Yes. Cutover planning, staged installation and out-of-hours work are normal parts of infrastructure projects. We plan disruption explicitly rather than discovering it during the work.",
      },
      {
        question: "Do you provide documentation?",
        answer:
          "Yes. As-built documentation, labelling schedules and configuration records are part of handover. A network you cannot document is a network you cannot support.",
      },
      {
        question: "Can infrastructure be extended later?",
        answer:
          "That is the point of designing it properly. We size cabling, containment and switching capacity with growth in mind so expansion does not require rework.",
      },
    ],
  },
  {
    id: "integrated-security",
    slug: "/solutions/integrated-security",
    eyebrow: "Integrated Systems",
    title: "Integrated Security Systems",
    heroDescription:
      "Access control, intrusion detection and connected security technologies working as one system rather than several.",
    image: "/assets/qrf/solution-detail/integrated-access-control.webp",
    imageAlt: "Integrated access control and video security at a facility entrance",
    overviewTitle: "One operational picture instead of four separate ones",
    overviewBody: [
      "Security systems are often bought separately, at different times, from different suppliers. The result is an access control system that does not talk to the cameras, alarms that nobody correlates with footage, and staff switching between interfaces during the exact moment when clarity matters most.",
      "QRF designs security technology as an integrated environment. Access events, video, alarms and monitoring are brought together so your team can see what happened, where, and in what order — and respond on that basis.",
    ],
    capabilities: [
      {
        title: "Access control",
        description:
          "Door, gate and turnstile control with credential management and permission structures matched to your organisation.",
      },
      {
        title: "Intrusion detection",
        description:
          "Perimeter and internal detection configured to reduce false alarms while maintaining genuine coverage.",
      },
      {
        title: "Video integration",
        description:
          "Access and alarm events linked with camera footage so incidents can be reviewed in context.",
      },
      {
        title: "Visitor and contractor management",
        description:
          "Controlled site entry, temporary credentials and auditable records of who was on site.",
      },
      {
        title: "Centralised monitoring",
        description:
          "A consolidated view for control-room and facilities staff across sites and systems.",
      },
      {
        title: "Audit and reporting",
        description:
          "Event history and reporting to support investigations, compliance and operational review.",
      },
    ],
    included: [
      "Security requirements and risk assessment",
      "Integrated system design",
      "Equipment supply",
      "Installation and commissioning",
      "Integration and rule configuration",
      "Operator training and documentation",
      "Maintenance and support",
    ],
    suitedFor: [
      "Government and public-service facilities",
      "Banking and financial services",
      "Corporate offices and campuses",
      "Industrial and resources sites",
      "Ports, warehouses and logistics facilities",
      "Facilities and property management",
    ],
    faqs: [
      {
        question: "Can existing systems be integrated?",
        answer:
          "It depends on the platforms involved and whether they support integration. We assess what you have and tell you honestly what can be integrated, what should be replaced, and what the trade-offs are.",
      },
      {
        question: "Can we manage several sites together?",
        answer:
          "Yes, subject to connectivity between sites. Multi-site management is a common requirement and is factored into system design from the start.",
      },
      {
        question: "What happens if power or network fails?",
        answer:
          "Resilience is part of the design. Backup power, local operation during network interruption and fail-safe or fail-secure door behaviour are decided deliberately against your safety and security requirements.",
      },
    ],
  },
  {
    id: "technical-support",
    slug: "/solutions/technical-support",
    eyebrow: "Lifecycle Support",
    title: "Monitoring and Technical Support",
    heroDescription:
      "Maintenance, troubleshooting and local technical support that continues long after installation is signed off.",
    image: "/assets/qrf/solution-detail/support-remote-maintenance.webp",
    imageAlt: "Technicians performing preventive maintenance at a remote communications site",
    overviewTitle: "The part that determines whether the investment holds up",
    overviewBody: [
      "Most technology failures are not installation failures. They are the accumulation of small unaddressed problems — a failing drive nobody noticed, firmware never updated, a camera knocked out of alignment months ago, a configuration change made in a hurry and never documented.",
      "QRF provides ongoing support across the systems we deploy and, where appropriate, systems installed by others. The objective is straightforward: problems get found before they become outages, and when something does break, there is a local team that already understands your environment.",
    ],
    capabilities: [
      {
        title: "Preventive maintenance",
        description:
          "Scheduled inspection, cleaning, testing and firmware management to catch degradation early.",
      },
      {
        title: "Remote diagnosis and support",
        description:
          "Faults investigated remotely where possible, reducing downtime and site-visit cost.",
      },
      {
        title: "On-site troubleshooting",
        description:
          "Technicians dispatched when a fault requires physical attendance.",
      },
      {
        title: "System optimisation",
        description:
          "Performance review and tuning as your operation, headcount and usage change.",
      },
      {
        title: "Warranty and vendor coordination",
        description:
          "We handle manufacturer warranty processes and vendor escalation on your behalf.",
      },
      {
        title: "Training and documentation",
        description:
          "User training and maintained system documentation so capability stays with your organisation.",
      },
    ],
    included: [
      "Support arrangement scoped to your systems",
      "Scheduled preventive maintenance",
      "Fault logging and response",
      "Remote and on-site troubleshooting",
      "Firmware and configuration management",
      "Warranty coordination",
      "Documentation upkeep and user training",
    ],
    suitedFor: [
      "Organisations without in-house technical staff",
      "IT teams needing local field capability",
      "Multi-site operations",
      "Remote sites requiring planned maintenance",
      "Facilities with critical security or communications systems",
    ],
    faqs: [
      {
        question: "Do you support systems you did not install?",
        answer:
          "In most cases, yes. We assess the environment first so both sides understand its condition before a support arrangement begins.",
      },
      {
        question: "How are support arrangements structured?",
        answer:
          "Support is scoped around the systems covered, the maintenance schedule and the response expectations your operation requires. We agree these in writing before work begins.",
      },
      {
        question: "What about remote sites?",
        answer:
          "Remote sites are planned differently. We weight the arrangement towards remote diagnosis, preventive maintenance and on-site spares so that expensive site visits are needed less often.",
      },
    ],
  },
];

export const solutionDetailBySlug = new Map(
  solutionDetails.map((detail) => [detail.slug, detail]),
);
