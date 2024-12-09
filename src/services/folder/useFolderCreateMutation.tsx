import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FolderApi } from "./folderApi.ts";

export const useFolderCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FolderApi.createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });
};
