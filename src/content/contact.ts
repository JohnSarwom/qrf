export const contactForm = {
  solutionOptions: [
    "ISP & Business Internet",
    "Starlink Connectivity",
    "Motorola Radio Communications",
    "CCTV & Video Security",
    "Enterprise Network Infrastructure",
    "Integrated Security Systems",
    "Technical Support",
    "Other",
  ],
  preferredContactMethods: ["Email", "Telephone"] as const,
  consentLabel:
    "I consent to QRF using the information provided to respond to this enquiry.",
  privacyNotice:
    "Your information will be used only to assess and respond to your requirement. Do not include passwords, access codes or other sensitive credentials.",
  successMessage:
    "Thank you. Your requirement has been received and the QRF team will respond using your preferred contact method.",
  genericErrorMessage:
    "Your enquiry could not be sent. Please check your details and try again.",
} as const;

