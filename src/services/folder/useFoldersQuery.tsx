import { useSuspenseQuery } from "@tanstack/react-query";
import { FolderApi } from "./folderApi.ts";
import { Folder, FolderRaw } from "@/model/folder.ts";
import { Bookmark } from "@/model/bookmark.ts";

const switchToTree = (serverData: FolderRaw[]) => {
  const processFolder = (folder: FolderRaw): Folder => {
    // 북마크 데이터가 있는 경우
    if (folder.bookmarks.length > 0) {
      const linkChildren: Folder[] = folder.bookmarks.map(
        (bookmark: Bookmark): Folder => ({
          id: bookmark.id,
          name: bookmark.title,
          type: "link",
          url: bookmark.url,
        }),
      );

      const childFolders = folder.children.map(processFolder);

      return {
        id: folder.id,
        name: folder.name,
        type: "folder",
        children: [...childFolders, ...linkChildren],
      };
    }

    // 폴더로만 구성된 경우
    return {
      id: folder.id,
      name: folder.name,
      type: "folder",
      children: folder.children.map(processFolder),
    };
  };

  return serverData.flatMap(processFolder);
};

export const useFoldersQuery = () => {
  return useSuspenseQuery({
    queryKey: ["folders"],
    queryFn: () => FolderApi.getFolders({ offset: 0, limit: 20 }),
    select: (data) => {
      return switchToTree(data.data.data);
    },
  });
};
