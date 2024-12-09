import { useState } from "react";
import { FolderIcon, FolderOpenIcon, StarIcon } from "@/components/Icons";
import { Folder } from "@/model/folder.ts";
import { FolderContextMenu } from "@/components/folder/FolderContextMenu.tsx";
import { FolderEditInput } from "@/components/folder/input/FolderEditInput.tsx";
import { useFolderDeleteMutation } from "@/services/folder/useFolderDeleteMutation.tsx";
import { FolderCreateInput } from "@/components/folder/input/FolderCreateInput.tsx";

// 기본적으로 폴더가 열려있도록 세팅
const collectAllFolderIds = (folders: Folder[]): Set<string> => {
  const ids = new Set<string>();
  const collect = (folders: Folder[]) => {
    folders.forEach((folder) => {
      if (folder.type === "folder") {
        ids.add(folder.id);
        if (folder.children) collect(folder.children);
      }
    });
  };
  collect(folders);
  return ids;
};

export const FolderTree = ({
  data,
  onAddNewFolder,
  onCancelToAddFolder,
}: {
  data: Folder[];
  onAddNewFolder: (id: string) => void;
  onCancelToAddFolder: () => void;
}) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(() =>
    collectAllFolderIds(data),
  );
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const { mutate: deleteMutation, isPending: isDeletePending } =
    useFolderDeleteMutation();

  // 폴더 열기/닫기 토글 함수
  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId); // 닫기
      } else {
        newSet.add(folderId); // 열기
      }
      return newSet;
    });
  };

  const onToggleItem = (item: Folder) => {
    if (item.type === "folder") toggleFolder(item.id);
    if (item.type === "link") window.open(item.url, "_blank");
  };

  const tryFolderEdit = (id: string) => {
    setEditingFolderId(id);
  };

  const onDeleteFolder = (id: string) => {
    if (!isDeletePending) {
      deleteMutation(
        { id },
        {
          onSuccess: () => console.log(`폴더 삭제 성공`),
          onError: (error) => console.error(error),
        },
      );
    }
  };

  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li key={item.id}>
          <FolderContextMenu
            id={item.id}
            type={item.type}
            onEdit={tryFolderEdit}
            onDelete={onDeleteFolder}
            onCreate={onAddNewFolder}
          >
            {item.type === "folder" && (
              <div
                className="flex items-center cursor-pointer space-x-2 h-[30px] select-none rounded hover:bg-accent hover:text-accent-foreground"
                onClick={() => onToggleItem(item)}
              >
                {openFolders.has(item.id) ? (
                  <FolderOpenIcon className="text-gray-600" size={16} />
                ) : (
                  <FolderIcon className="text-gray-600" size={14} />
                )}
                {item.id === editingFolderId ? (
                  <FolderEditInput
                    folderData={item}
                    onComplete={() => setEditingFolderId(null)}
                  />
                ) : item.mode === "temp" ? (
                  <FolderCreateInput
                    folderData={item}
                    onCancel={onCancelToAddFolder}
                  />
                ) : (
                  <span className="text-xs font-medium text-gray-600">
                    {item.name}
                  </span>
                )}
              </div>
            )}
            {item.type === "link" && (
              <div
                className="flex items-center cursor-pointer space-x-2 h-[30px] select-none rounded hover:bg-accent hover:text-accent-foreground"
                onClick={() => onToggleItem(item)}
              >
                <StarIcon className="text-gray-600" size={16} />

                <span className="text-xs font-medium text-gray-600">
                  {item.name}
                </span>
              </div>
            )}
          </FolderContextMenu>

          {/* 자식 폴더 렌더링 */}
          {openFolders.has(item.id) && item.children && (
            <ul className="ml-2 pl-4 space-y-1">
              <FolderTree
                key={item.id}
                data={item.children}
                onAddNewFolder={onAddNewFolder}
                onCancelToAddFolder={onCancelToAddFolder}
              />
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
