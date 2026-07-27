export interface IndustryDetail {
  id: string;
  title: string;
  /** The operating problem this sector brings to us. */
  challenge: string;
  /** What QRF typically deploys, mapped to the solutions we actually offer. */
  provides: string[];
  /** Concrete deployment examples, described generically. */
  typical: string;
}

export const industryDetails: IndustryDetail[] = [
  {
    id: "government",
    title: "Government",
    challenge:
      "Public-service facilities carry obligations that commercial sites do not: continuity of service, auditable security, and accountability for public funds. Systems must work across departments and buildings that were rarely planned together, and procurement has to withstand scrutiny.",
    provides: [
      "Business internet with designed redundancy",
      "Structured network infrastructure and comms rooms",
      "CCTV with defined retention and controlled access",
      "Access control and visitor management",
      "Radio communications for facilities and response teams",
      "Documented handover and ongoing support arrangements",
    ],
    typical:
      "Office and facility networks, video security across public buildings, access control with auditable event history, and connectivity to regional offices.",
  },
  {
    id: "mining-resources",
    title: "Mining & Resources",
    challenge:
      "Operations are distributed across large sites, often far from terrestrial infrastructure and mains power. Teams work in areas with no mobile coverage, safety depends on being able to raise someone immediately, and a technician visit can cost a day of travel.",
    provides: [
      "Satellite connectivity for camps and remote sites",
      "Two-way radio with coverage planning and repeaters",
      "Vehicle-mounted mobile radio units",
      "Site networking, Wi-Fi and segmentation",
      "Perimeter and facility video security",
      "Preventive maintenance weighted for remote sites",
    ],
    typical:
      "Camp and site connectivity, radio coverage across pit and haul areas, vehicle fit-outs, and monitored infrastructure at gates and fuel points.",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    challenge:
      "Critical facilities where communications failure has safety consequences, not just commercial ones. Equipment must tolerate the environment, integrate with existing operational systems, and keep working when a primary service path is interrupted.",
    provides: [
      "Redundant connectivity with automatic failover",
      "Professional radio systems for field and control-room coordination",
      "Facility video monitoring",
      "Access control and intrusion detection",
      "Network infrastructure built to standards with documentation",
      "Scheduled maintenance and fault response",
    ],
    typical:
      "Facility communications, monitored perimeters, control-room base stations, and hybrid connectivity where a single link is not acceptable.",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    challenge:
      "Branch networks combine strict security requirements with the need for consistent customer service. Video evidence must be retrievable and reliable, network segmentation matters, and downtime at a branch is immediately visible to customers.",
    provides: [
      "Branch connectivity with backup links",
      "CCTV designed for identification-grade coverage and retention",
      "Access control for secure areas",
      "Segmented network infrastructure",
      "Centralised multi-site monitoring",
      "Maintenance schedules that keep systems evidence-ready",
    ],
    typical:
      "Branch camera systems with defined retention, controlled access to secure areas, and connectivity between branches and head office.",
  },
  {
    id: "transport-logistics",
    title: "Transport & Logistics",
    challenge:
      "Teams are mobile, assets move between sites, and coordination happens across yards, warehouses and vehicles simultaneously. Mobile coverage is inconsistent along many routes, and congestion makes it least reliable exactly when an incident occurs.",
    provides: [
      "Two-way radio for yard, warehouse and vehicle coordination",
      "Vehicle radio installations",
      "Facility and yard video monitoring",
      "Warehouse Wi-Fi and network infrastructure",
      "Connectivity across depots and facilities",
      "Fleet programming, training and support",
    ],
    typical:
      "Radio fleets covering yards and vehicles, camera coverage at gates and loading areas, and networking across depots.",
  },
  {
    id: "security-facilities",
    title: "Security & Facilities",
    challenge:
      "Security teams are judged on response, but often work with systems that do not talk to each other — cameras on one platform, access on another, alarms on a third. Staff end up switching between interfaces at the moment when clarity matters most.",
    provides: [
      "Integrated video, access control and intrusion detection",
      "Centralised monitoring across sites",
      "Radio communications for guards and patrols",
      "Visitor and contractor management",
      "Event history and reporting for investigations",
      "Operator training and system documentation",
    ],
    typical:
      "Consolidated control-room views, access events linked to camera footage, radio fleets for patrol teams, and auditable site-entry records.",
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    challenge:
      "Office technology is expected to be invisible until it fails. Connectivity, Wi-Fi, meeting rooms and building security all run over infrastructure that was often extended piecemeal as the business grew, until performance problems become impossible to trace.",
    provides: [
      "Business internet with backup connectivity",
      "Structured cabling and comms room builds",
      "Wireless network design for coverage and density",
      "Office CCTV and access control",
      "Network segmentation for guest and corporate traffic",
      "Ongoing support and optimisation",
    ],
    typical:
      "Office fit-outs and relocations, wireless coverage across floors, building access control, and connectivity for head office and branches.",
  },
  {
    id: "remote-operations",
    title: "Remote Operations",
    challenge:
      "Sites where terrestrial connectivity does not reach, power is limited or generated on site, and the nearest technician may be hours away. Standard solutions assume infrastructure that simply is not present.",
    provides: [
      "Satellite connectivity with site assessment and mounting design",
      "Power integration and continuity planning",
      "Radio communications independent of cellular coverage",
      "Site networking and Wi-Fi",
      "Remote diagnosis and monitoring",
      "Preventive maintenance and on-site spares planning",
    ],
    typical:
      "Satellite links at field bases and camps, radio coverage for teams working beyond mobile range, and support arrangements designed around infrequent site access.",
  },
];

export const industryDetailById = new Map(
  industryDetails.map((detail) => [detail.id, detail]),
);
