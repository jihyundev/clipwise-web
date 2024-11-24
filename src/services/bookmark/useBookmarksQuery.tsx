import { useSuspenseQuery } from "@tanstack/react-query";
import { BookmarkApi } from "./bookmarkApi";
import { FilterOrder } from "@/model/bookmark.ts";

export const useBookmarksQuery = ({
  query,
  orderBy,
}: {
  query: string;
  orderBy: FilterOrder;
}) => {
  return useSuspenseQuery({
    queryKey: ["bookmarks", query, orderBy],
    queryFn: () =>
      BookmarkApi.getBookmarks({
        keyword: query,
        orderBy,
      }),
  });
};
