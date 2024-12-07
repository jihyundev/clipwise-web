import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FolderApi } from "./folderApi.ts";

export const useFolderDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FolderApi.deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });
};
