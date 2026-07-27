export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutApproachStep {
  number: string;
  title: string;
  description: string;
}

export const about = {
  eyebrow: "About QRF",
  title: "Connecting organisations across Papua New Guinea",
  heroDescription:
    "QRF designs, deploys and supports the communications, connectivity and security infrastructure that organisations depend on to operate — in the cities, in the regions, and at sites where reliable technology is hardest to deliver.",

  /** Mission, vision and core values as stated in the QRF Communications company profile. */
  mission:
    "To empower our clients with communication tools and tailored business automation solutions that ensure seamless connectivity, streamlined operations and reliable performance, even in the most challenging environments. We strive to deliver products and services that exceed customer expectations and foster long-term relationships.",
  vision:
    "To be a leader in two-way radio communication and business automation solutions in Papua New Guinea — driving technological advancement, improving operational efficiency, and connecting the remote regions of the country.",

  coreValues: [
    {
      title: "Innovation",
      description:
        "We continually invest in building radio communications infrastructure using the latest range of radio technology products.",
    },
    {
      title: "Quality",
      description:
        "We are committed to delivering high-quality, durable and reliable communication solutions.",
    },
    {
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do, and we tailor our solutions to meet their unique needs.",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards, ensuring transparency and trust in all our dealings.",
    },
    {
      title: "Teamwork",
      description:
        "We foster a collaborative environment where every team member is valued and encouraged to contribute their best.",
    },
  ] satisfies AboutValue[],

  missionTitle: "What we do",
  missionBody: [
    "QRF brings together internet and satellite connectivity, radio communications, video security and enterprise network infrastructure under a single technical team. Organisations come to us because these systems are interdependent — cameras run over the network, the network depends on connectivity, and field teams need to communicate whether or not either is available.",
    "Treating them as one environment rather than separate purchases produces better outcomes: fewer integration gaps, one team accountable for the result, and a single point of contact when something needs attention.",
  ],

  contextTitle: "Built around the PNG operating context",
  contextBody: [
    "Papua New Guinea presents conditions that generic solutions do not account for. Terrain limits terrestrial connectivity. Power availability varies. Humidity, rainfall and environmental exposure shorten equipment life. Sites can be a long way from the nearest technician, which makes a routine fault an expensive problem.",
    "These are design inputs, not excuses. We plan around them from the assessment stage — specifying equipment for the environment it will sit in, designing redundancy where downtime is costly, and weighting support arrangements towards prevention at sites that are difficult to reach.",
  ],

  values: [
    {
      title: "Assess before recommending",
      description:
        "We look at the site, the operating conditions and the actual requirement before proposing a solution. A proposal written without an assessment is a guess.",
    },
    {
      title: "Design for the conditions",
      description:
        "Equipment and architecture are selected for the environment they will operate in — power, weather, distance, access and load.",
    },
    {
      title: "Accountable delivery",
      description:
        "Installation, configuration, testing and commissioning are handled by our team, with documentation supplied at handover.",
    },
    {
      title: "Support that continues",
      description:
        "The relationship does not end at sign-off. Maintenance, troubleshooting and optimisation are part of how we deliver.",
    },
    {
      title: "Straightforward advice",
      description:
        "If a requirement can be met more simply or affordably, we will say so. If something will not work in a given environment, we will say that too.",
    },
    {
      title: "Local capability",
      description:
        "Technical capability based in-country, so support does not depend on scheduling someone from offshore.",
    },
  ] satisfies AboutValue[],

  approachTitle: "How we work",
  approachDescription:
    "A consistent delivery process, applied whether the project is a single office or a multi-site deployment.",
  approach: [
    {
      number: "01",
      title: "Assess",
      description:
        "We evaluate your environment, operating conditions, existing systems and objectives — on site where the project warrants it.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We develop a solution matched to the requirement and set out what it includes, what it will do, and what it will not.",
    },
    {
      number: "03",
      title: "Deploy",
      description:
        "Our team installs, configures, tests and commissions the system, with disruption planned rather than discovered.",
    },
    {
      number: "04",
      title: "Support",
      description:
        "We provide maintenance, monitoring, troubleshooting and optimisation across the working life of the system.",
    },
  ] satisfies AboutApproachStep[],

  capabilityTitle: "Capability across four connected disciplines",
  capabilityDescription:
    "One team, one point of accountability, across the systems your operation runs on.",

  ctaTitle: "Let's talk about your operation",
  ctaDescription:
    "Speak with QRF about your connectivity, communications, security or network infrastructure requirements.",
} as const;
