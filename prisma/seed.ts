import { db } from "@/lib/db";

async function main() {
  await db.workspace.create({
    data: {
      slug: "Workspace-1",
      name: "Workspace-1",
      isPublic: true,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
