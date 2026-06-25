import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as { db: PrismaClient };
