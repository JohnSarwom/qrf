import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Build a tel: URI from a display number. Spaces and punctuation must be
 * stripped or some handsets fail to dial the link.
 */
export function telHref(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`
}
