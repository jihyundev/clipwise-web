import { Folder } from "@/model/folder.ts";
import * as React from "react";

interface FolderInputBaseProps extends React.HTMLAttributes<HTMLInputElement> {
  folderData: Folder;
}

export const FolderInputBase = ({
  folderData,
  ...props
}: FolderInputBaseProps) => {
  return (
    <input
      className="text-xs font-medium text-gray-600 max-w-[120px] h-9 py-2.5 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      defaultValue={folderData.name}
      {...props}
    />
  );
};
