import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu.tsx";
import { Folder } from "@/model/folder.ts";

type FolderContextMenuProps = Pick<Folder, "id" | "type"> & {
  children: React.ReactNode;
};

export const FolderContextMenu = ({
  id,
  type,
  children,
}: FolderContextMenuProps) => {
  const onEdit = () => {
    console.log(`folderId: ${id}, type: ${type}`);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onEdit}>수정</ContextMenuItem>
        <ContextMenuItem>삭제</ContextMenuItem>
        <ContextMenuItem>새 폴더</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
