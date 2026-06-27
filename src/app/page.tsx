import { getPublicWorkspaces } from "@/lib/queries";

export default async function HomePage() {
  const workspacesData = await getPublicWorkspaces();
  return (
    <div>
      <ul>
        {workspacesData.map((workspace) => (
          <li key={workspace.id}>
            <span>{workspace.name}</span>
            <span>{workspace.slug}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
