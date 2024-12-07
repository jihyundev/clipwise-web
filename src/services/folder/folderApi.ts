import { Folder, FolderRaw } from "@/model/folder";
import { HTTP } from "@/services/http.ts";
import { GetArrayResponse } from "@/model/api";
import { AxiosResponse } from "axios";

const FolderApi = {
  getFolders({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<AxiosResponse<GetArrayResponse<FolderRaw>>> {
    const params = { offset, limit };
    return HTTP.get("/v1/folders", {
      params,
    });
  },

  /** 폴더 수정 요청 */
  postFolder({
    id,
    parentFolderId,
    name,
  }: Pick<Folder, "id" | "parentFolderId" | "name">) {
    const requestBody = {
      parentFolderId: parentFolderId,
      name: name,
    };
    return HTTP.post(`/v1/folders/${id}`, requestBody);
  },

  /** 폴더 삭제 요청 */
  deleteFolder({ id }: Pick<Folder, "id">) {
    return HTTP.delete(`/v1/folders`, {
      params: {
        folder_id: id,
      },
    });
  },
};

export { FolderApi };
