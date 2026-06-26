import { db } from "@/lib/db";

//The return type of both functions is inferred automatically by TypeScript from Prisma's generated types. You don't write it yourself.

export async function getUserByEmail(email: string) {
  return await db.user.findUnique({
    where: { email },
  });
}
export async function getWorkspaces() {
  return await db.workspace.findMany();
}

export async function getPublicWorkspaces() {
  return await db.workspace.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: "desc" },
  });
}
