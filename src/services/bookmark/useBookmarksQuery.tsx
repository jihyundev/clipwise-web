import { useSuspenseQuery } from "@tanstack/react-query";
import { BookmarkApi } from "./bookmarkApi";

export const useBookmarksQuery = ({ query }: { query: string }) => {
  return useSuspenseQuery({
    queryKey: ["bookmarks", query],
    queryFn: () =>
      BookmarkApi.getBookmarks({
        keyword: query,
      }),
  });
};
