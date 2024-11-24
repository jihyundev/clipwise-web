export type FilterOrder = "desc" | "asc" | "exact";

export type Bookmark = {
  id: string;
  userId: string;
  folderId: string;
  title: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  faviconUrl: string;
  ogData: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};
