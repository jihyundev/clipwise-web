import { useState } from "react";
import { FolderIcon, FolderOpenIcon, StarIcon } from "lucide-react";
import { Folder } from "@/model/folder.ts";
import { FolderContextMenu } from "@/components/folder/FolderContextMenu.tsx";

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

export const FolderTree = ({ data }: { data: Folder[] }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(() =>
    collectAllFolderIds(data),
  );

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

  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li key={item.id}>
          <FolderContextMenu id={item.id} type={item.type}>
            <div
              className="flex items-center cursor-pointer space-x-2 h-[30px] select-none"
              onClick={() => onToggleItem(item)}
            >
              {item.type === "folder" ? (
                openFolders.has(item.id) ? (
                  <FolderOpenIcon className="text-gray-600" size={18} />
                ) : (
                  <FolderIcon className="text-gray-600" size={18} />
                )
              ) : (
                <StarIcon className="text-gray-600" size={18} />
              )}
              <span className="text-xs font-medium text-gray-600">
                {item.name}
              </span>
            </div>
          </FolderContextMenu>

          {/* 자식 폴더 렌더링 */}
          {openFolders.has(item.id) && (
            <ul className="ml-2 border-l pl-4 space-y-1">
              {item.children && <FolderTree data={item.children} />}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
