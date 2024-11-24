import { HTTP } from "@/services/http.ts";
import { Bookmark, FilterOrder } from "@/model/bookmark";
import { GetArrayResponse } from "@/model/api";
import { AxiosResponse } from "axios";

const BookmarkApi = {
  /**
   * 북마크 목록 조회 요청
   */
  getBookmarks({
    keyword = "",
    offset = 0,
    limit = 20,
    orderBy = "desc",
  }: {
    keyword?: string;
    offset?: number;
    limit?: number;
    orderBy?: FilterOrder;
  }): Promise<AxiosResponse<GetArrayResponse<Bookmark>>> {
    const params = {
      keyword,
      offset,
      limit,
      order_by: orderBy,
    };
    return HTTP.get("/v1/bookmarks", {
      params,
    });
  },
};

export { BookmarkApi };
