import { useSuspenseQuery } from "@tanstack/react-query";
import { BookmarkApi } from "./bookmarkApi";

export const useBookmarksQuery = () => {
  return useSuspenseQuery({
    queryKey: ["bookmarks"],
    queryFn: () => BookmarkApi.getBookmarks({}),
  });
};
