import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaClient, ApplicationStatus } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@tracket.local" },
    update: {},
    create: { email: "demo@tracket.local", name: "Demo User" },
  });

  const remote = await prisma.tag.upsert({
    where: { userId_name: { userId: user.id, name: "remote" } },
    update: {},
    create: { userId: user.id, name: "remote" },
  });

  await prisma.application.createMany({
    data: [
      { userId: user.id, company: "Vercel", role: "Frontend Engineer", status: ApplicationStatus.APPLIED, appliedAt: new Date("2026-07-10") },
      { userId: user.id, company: "Linear", role: "Fullstack Engineer", status: ApplicationStatus.INTERVIEW, appliedAt: new Date("2026-07-02") },
      { userId: user.id, company: "Stripe", role: "Software Engineer", status: ApplicationStatus.REJECTED, appliedAt: new Date("2026-06-18") },
      { userId: user.id, company: "Neon", role: "Platform Engineer", status: ApplicationStatus.WISHLIST },
    ],
    skipDuplicates: true,
  });

  const first = await prisma.application.findFirst({
    where: { userId: user.id, company: "Vercel" },
  });
  if (first) {
    await prisma.application.update({
      where: { id: first.id },
      data: { tags: { connect: { id: remote.id } } },
    });
  }

  console.log("Seeded demo user with sample applications.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());