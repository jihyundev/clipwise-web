import { Skeleton } from "@/components/ui/Skeleton";

export const FolderTreeSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-8 mb-2" />
      <Skeleton className="w-full h-8 mb-2" />
      <Skeleton className="w-full h-8 mb-2" />
    </div>
  );
};
