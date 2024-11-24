import { CardHeader, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { CardList } from "@/components/CardList.tsx";

const BookMarkCardSkeleton = () => {
  return (
    <div className="flex items-center px-6">
      {/* Skeleton for the image */}
      <div className="w-[172px] h-[114px]">
        <Skeleton className="w-full h-full rounded-md" />
      </div>

      <div className="w-full">
        {/* Skeleton for the title */}
        <CardHeader className="flex flex-col space-y-1.5 py-4">
          <Skeleton className="h-9 w-3/4 mb-2" />
        </CardHeader>

        {/* Skeleton for the description */}
        <CardContent className="py-1.5">
          <Skeleton className="h-5 w-full mb-1" />
          <Skeleton className="h-3 w-full" />
        </CardContent>
      </div>
    </div>
  );
};

export const BookMarkCardsSkeleton = () => {
  return (
    <CardList>
      <BookMarkCardSkeleton />
      <BookMarkCardSkeleton />
      <BookMarkCardSkeleton />
    </CardList>
  );
};
