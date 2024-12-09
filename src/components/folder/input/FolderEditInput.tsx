import { Folder } from "@/model/folder.ts";
import { useFolderEditMutation } from "@/services/folder/useFolderEditMutation.tsx";
import { useToast } from "@/hooks/useToast.tsx";
import { FolderInputBase } from "@/components/folder/input/FolderInputBase.tsx";

export const FolderEditInput = ({
  folderData,
  onComplete,
}: {
  folderData: Folder;
  onComplete: () => void;
}) => {
  const { mutate, isPending } = useFolderEditMutation();
  const { toast } = useToast();

  return (
    <FolderInputBase
      folderData={folderData}
      onBlur={() => {
        if (!isPending) {
          onComplete();
        }
      }}
      onKeyDown={(event) => {
        const target = event.target as HTMLInputElement;
        if (event.key === "Enter" && !isPending) {
          mutate(
            {
              id: folderData.id,
              parentFolderId: folderData.parentFolderId,
              name: target.value,
            },
            {
              onSuccess: () => {
                onComplete();
              },
              onError: (error) => {
                console.error(error);
                toast({
                  variant: "destructive",
                  title: "수정 도중 문제가 발생했어요.",
                });
              },
            },
          );
        }
      }}
    />
  );
};
