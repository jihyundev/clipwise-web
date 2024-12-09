import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu.tsx";
import { Folder } from "@/model/folder.ts";

type FolderContextMenuProps = Pick<Folder, "id" | "type"> & {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: (id: string) => void;
  children: React.ReactNode;
};

export const FolderContextMenu = ({
  id,
  type,
  onEdit,
  onDelete,
  onCreate,
  children,
}: FolderContextMenuProps) => {
  // NOTE: 폴더가 아닌 일반 링크라면 컨텍스트 메뉴를 만들지 않는다.
  if (type === "link") {
    return <>{children}</>;
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => onEdit(id)}>수정</ContextMenuItem>
        <ContextMenuItem onClick={() => onDelete(id)}>삭제</ContextMenuItem>
        <ContextMenuItem onClick={() => onCreate(id)}>새 폴더</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
