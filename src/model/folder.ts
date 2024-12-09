import { Bookmark } from "./bookmark.ts";

export type Folder = {
  id: string;
  name: string;
  type: "folder" | "link";
  mode?: "temp" | "idle";
  children?: Folder[];
  url?: string;
  parentFolderId?: string | null;
};

export type FolderRaw = {
  id: string;
  userId: string;
  parentFolderId: string | null;
  name: string;
  createdAt: string; // ISO 8601 형식의 문자열
  updatedAt: string; // ISO 8601 형식의 문자열
  bookmarks: Bookmark[];
  children: FolderRaw[];
};
