export interface CompanyConfiguration {
  registeredName: string | null;
  tradingName: string;
  tagline: string;
  primaryStatement: string;
  supportingStatement: string;
  mainTelephone: string | null;
  salesTelephone: string | null;
  supportTelephone: string | null;
  generalEmail: string | null;
  supportEmail: string | null;
  physicalAddress: string | null;
  postalAddress: string | null;
  operatingHours: string | null;
  registrationInformation: string | null;
  motorolaRelationshipWording: string | null;
  avigilonRelationshipWording: string | null;
  starlinkRelationshipWording: string | null;
  ispLicenceStatus: string | null;
  yearsExperience: number | null;
  projectCount: number | null;
  coverageClaim: string | null;
  supportAvailabilityClaim: string | null;
}

/**
 * Values below are sourced from company documentation:
 * - IPA Certificate of Incorporation and Certificate of Good Standing
 * - QRF Communications company profile
 * - QRF Communications letterhead (March 2026)
 * - AceComms authorised-distributor letter (7 August 2025)
 *
 * Fields left null are those with no confirmed source. Every consuming
 * component hides the corresponding element while a value is null, so
 * nothing unverified is ever rendered.
 */
export const company: CompanyConfiguration = {
  registeredName: "QRF Limited",
  tradingName: "QRF Communications",
  tagline: "CONNECTING PEOPLE, EMPOWERING BUSINESS",
  primaryStatement: "Mission-Critical Communications. Connected PNG.",
  supportingStatement:
    "QRF delivers secure, resilient and high-performance communications, internet, Starlink, radio, CCTV and network infrastructure solutions for businesses, government agencies and operational sites throughout Papua New Guinea.",
  mainTelephone: "+675 8244 5259",
  salesTelephone: null,
  supportTelephone: null,
  generalEmail: "info@qrfpng.com",
  supportEmail: null,
  // Confirmed operating location supplied by QRF.
  physicalAddress:
    "Kungu Haus, Section 29, Lot 08, Spondias Street, Poreporena Freeway, Hohola, Port Moresby, NCD 111, Papua New Guinea",
  postalAddress:
    "PO Box 619, Waterfront, Port Moresby, National Capital District 125, Papua New Guinea",
  operatingHours: null,
  registrationInformation:
    "QRF Limited is incorporated in Papua New Guinea under the Companies Act 1997. IPA registration number 1-130228305.",
  motorolaRelationshipWording:
    "Authorised Motorola Solutions Partner under the Motorola Solutions PartnerEmpower Program.",
  avigilonRelationshipWording: null,
  starlinkRelationshipWording: null,
  ispLicenceStatus: null,
  yearsExperience: null,
  projectCount: null,
  coverageClaim: null,
  supportAvailabilityClaim: null,
};

export const safeCompanyWording = {
  starlink: "Starlink installation and connectivity solutions",
  motorola: "Motorola radio communication solutions",
  avigilon: "Avigilon video-security systems",
  internet: "Business internet and managed connectivity",
  support: "Local technical support",
  operatingEnvironment:
    "Solutions for metropolitan, regional and remote operations",
} as const;
