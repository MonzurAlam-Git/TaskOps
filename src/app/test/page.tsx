import { getUserByEmail, getWorkspaces } from "@/lib/queries";

export default async function TestPage() {
  const filteredEmail = await getUserByEmail("test@gmail.com");
  const filteredWorkspaces = await getWorkspaces();

  return (
    <div>
      <h1>Email : {JSON.stringify(filteredEmail)}</h1>
      <h1>Workspaces : {JSON.stringify(filteredWorkspaces)}</h1>
    </div>
  );
}
