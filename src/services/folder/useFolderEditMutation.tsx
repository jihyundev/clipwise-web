import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FolderApi } from "./folderApi.ts";

export const useFolderEditMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FolderApi.editFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });
};
