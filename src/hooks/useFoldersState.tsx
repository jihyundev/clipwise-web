import { useState, useEffect } from "react";
import { useFoldersQuery } from "@/services/folder/useFoldersQuery.tsx";
import { Folder } from "@/model/folder.ts";

export const useFoldersState = () => {
  const { data: serverData } = useFoldersQuery();
  const [folders, setFolders] = useState<Folder[]>(serverData);

  useEffect(() => {
    setFolders(serverData);
  }, [serverData]);

  const addNewTempFolder = (id: string) => {
    const tempFolderId = `${id}-${Date.now()}`;
    const newFolder = {
      id: tempFolderId,
      name: "새 폴더",
      type: "folder",
      mode: "temp",
      parentFolderId: id,
      children: [],
    } as Folder;

    const addFolderRecursively = (currentFolders: Folder[]): Folder[] => {
      return currentFolders.map((folder) => {
        const clonedFolder = structuredClone(folder);
        if (clonedFolder.id === id) {
          clonedFolder.children = clonedFolder.children
            ? [...clonedFolder.children, newFolder]
            : [newFolder];
        } else if (clonedFolder.children) {
          clonedFolder.children = addFolderRecursively(clonedFolder.children);
        }
        return clonedFolder;
      });
    };
    setFolders((prevFolders) => addFolderRecursively(prevFolders));
  };

  const onCancelToAddFolder = () => {
    setFolders(serverData);
  };

  return {
    folders,
    addNewTempFolder,
    onCancelToAddFolder,
  };
};
