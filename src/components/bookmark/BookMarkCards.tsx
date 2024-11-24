import { useBookmarksQuery } from "@/services/bookmark/useBookmarksQuery.tsx";
import { CardList } from "@/components/CardList.tsx";
import { BookMarkCard } from "@/components/bookmark/BookMarkCard.tsx";
import { BookMarkFilter } from "@/components/bookmark/BookMarkFilter.tsx";
import { useFilterState } from "@/hooks/useFilterState.tsx";

export const BookMarkCards = ({ query }: { query: string }) => {
  const { orderBy, setOrderBy } = useFilterState();
  const { data: bookmarksData } = useBookmarksQuery({ query, orderBy });

  if (bookmarksData?.data.data.length === 0) {
    return (
      <div className="text-sm text-gray-400 font-medium">
        현재 저장된 북마크가 없습니다.
      </div>
    );
  }

  return (
    <>
      <BookMarkFilter orderBy={orderBy} setOrderBy={setOrderBy} />
      <CardList>
        {bookmarksData?.data &&
          bookmarksData.data.data.map(
            ({ id, title, description, thumbnailUrl, url, updatedAt }) => (
              <BookMarkCard
                key={id}
                title={title}
                description={description}
                thumbnailUrl={thumbnailUrl}
                url={url}
                updatedAt={updatedAt}
              />
            ),
          )}
      </CardList>
    </>
  );
};
