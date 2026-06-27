import { PrismaClient } from "@/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = globalThis as unknown as { db: PrismaClient };

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });

const db = globalForPrisma.db || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}

export { db };
