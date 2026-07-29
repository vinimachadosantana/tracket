import { ApplicationStatus } from "@/generated/prisma/client";

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  WISHLIST: "Wishlist",
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  OFFER: "Offer",
  REJECTED: "Rejected",
};

export const STATUS_ORDER: ApplicationStatus[] = [
  "WISHLIST",
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
];

export function statusLabel(status: ApplicationStatus): string {
  return STATUS_LABELS[status];
}