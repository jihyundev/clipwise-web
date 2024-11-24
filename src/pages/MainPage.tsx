import { Suspense } from "react";
import { SideBar } from "@/components/SideBar.tsx";
import { SearchBar } from "@/components/SearchBar.tsx";
import { UserMenu } from "@/components/UserMenu.tsx";
import { BookMarkCardsSkeleton } from "@/components/bookmark/BookMarkCardsSkeleton.tsx";
import { BookMarkCards } from "@/components/bookmark/BookMarkCards.tsx";
import { Folders } from "@/components/folder/Folders.tsx";
import { FolderTreeSkeleton } from "@/components/folder/FolderTreeSkeleton.tsx";
import { useSearchQuery } from "@/hooks/useSearchQuery.tsx";

export const MainPage = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();

  return (
    <div className="w-full flex px-6 py-2.5">
      <SideBar>
        <Suspense fallback={<FolderTreeSkeleton />}>
          <Folders />
        </Suspense>
      </SideBar>
      <div className="w-full">
        <div className="flex items-center justify-center">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[816px] mt-6">
            <Suspense fallback={<BookMarkCardsSkeleton />}>
              <BookMarkCards query={searchQuery} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="h-[60px] flex items-center">
        <UserMenu />
      </div>
    </div>
  );
};
