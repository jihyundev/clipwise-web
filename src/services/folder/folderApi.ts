import { FolderRaw } from "@/model/folder";
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
};

export { FolderApi };
