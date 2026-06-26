import { getPublicWorkspaces } from "@/lib/queries";

export default async function page() {
  const workspacesData = await getPublicWorkspaces();
  return (
    <div>
      <h1>{workspacesData.length}</h1>
    </div>
  );
}
