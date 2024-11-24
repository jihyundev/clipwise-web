import { FolderTree } from "@/components/folder/FolderTree.tsx";
import { useFoldersQuery } from "@/services/folder/useFoldersQuery.tsx";

export const Folders = () => {
  const { data } = useFoldersQuery();

  if (!data) return null;
  if (data.length === 0) {
    return (
      <div className="text-sm text-gray-400 font-medium">
        아직 만들어진 폴더가 없어요.
      </div>
    );
  }
  return <FolderTree data={data} />;
};
