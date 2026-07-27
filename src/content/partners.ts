import type { Partner } from "./types";

export const partners: Partner[] = [
  {
    // Confirmed by AceComms (authorised Motorola Solutions distributor for the
    // Pacific Islands region) in writing, 7 August 2025.
    id: "motorola-solutions",
    name: "Motorola Solutions",
    relationshipWording:
      "Authorised Motorola Solutions Partner under the PartnerEmpower Program. Equipment is procured through AceComms, the authorised Motorola Solutions distributor for the Pacific Islands region, and is NICTA Type Approved for legal sale and use in Papua New Guinea.",
    logo: null,
    approvedForPublication: true,
  },
  {
    id: "avigilon",
    name: "Avigilon",
    relationshipWording: null,
    logo: null,
    approvedForPublication: false,
  },
  {
    id: "starlink",
    name: "Starlink",
    relationshipWording: null,
    logo: null,
    approvedForPublication: false,
  },
];

/** Partners cleared to appear as a logo mark. */
export const publishablePartners = partners.filter(
  (partner) => partner.approvedForPublication && partner.logo,
);

/**
 * Partners cleared to be described in words. Separate from the logo list
 * because using a manufacturer's mark carries brand-guideline obligations
 * that a written statement of the relationship does not.
 */
export const describablePartners = partners.filter(
  (partner) => partner.approvedForPublication && partner.relationshipWording,
);

