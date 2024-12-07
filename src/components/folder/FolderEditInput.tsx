import { Folder } from "@/model/folder.ts";
import { useFolderEditMutation } from "@/services/folder/useFolderEditMutation.tsx";
import { useToast } from "@/hooks/useToast.tsx";

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
    <input
      className="text-xs font-medium text-gray-600 max-w-[120px] h-9 py-2.5 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      defaultValue={folderData.name}
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
