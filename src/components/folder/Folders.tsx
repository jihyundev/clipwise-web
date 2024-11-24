import { FolderTree } from "@/components/folder/FolderTree.tsx";
import { useFoldersQuery } from "@/services/folder/useFoldersQuery.tsx";

export const Folders = () => {
  const { data } = useFoldersQuery();

  if (!data) return null;
  return <FolderTree data={data} />;
};
