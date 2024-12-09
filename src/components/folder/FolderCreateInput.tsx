import { Folder } from "@/model/folder.ts";
import { useToast } from "@/hooks/useToast.tsx";
import { useFolderCreateMutation } from "@/services/folder/useFolderCreateMutation.tsx";

export const FolderCreateInput = ({
  folderData,
  onCancel,
}: {
  folderData: Folder;
  onCancel: () => void;
}) => {
  const { mutate, isPending } = useFolderCreateMutation();
  const { toast } = useToast();

  return (
    <input
      className="text-xs font-medium text-gray-600 max-w-[120px] h-9 py-2.5 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      defaultValue={folderData.name}
      onBlur={() => {
        if (!isPending) {
          onCancel();
        }
      }}
      onKeyDown={(event) => {
        const target = event.target as HTMLInputElement;
        if (event.key === "Enter" && !isPending) {
          mutate(
            {
              parentFolderId: folderData.parentFolderId,
              name: target.value,
            },
            {
              onSuccess: () => {
                console.log("폴더 생성 완료");
              },
              onError: (error) => {
                console.error(error);
                onCancel();
                toast({
                  variant: "destructive",
                  title: "폴더 생성 도중 문제가 발생했어요.",
                });
              },
            },
          );
        }
      }}
    />
  );
};
