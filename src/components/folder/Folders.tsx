import { FolderTree } from "@/components/folder/FolderTree.tsx";
import { useFoldersState } from "@/hooks/useFoldersState.tsx";

export const Folders = () => {
  const { folders, addNewTempFolder, onCancelToAddFolder } = useFoldersState();

  if (!folders) return null;
  if (folders.length === 0) {
    return (
      <div className="text-sm text-gray-400 font-medium">
        아직 만들어진 폴더가 없어요.
      </div>
    );
  }
  return (
    <FolderTree
      data={folders}
      onAddNewFolder={addNewTempFolder}
      onCancelToAddFolder={onCancelToAddFolder}
    />
  );
};
