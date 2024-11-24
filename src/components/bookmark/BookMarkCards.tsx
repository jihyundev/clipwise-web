import { useBookmarksQuery } from "@/services/bookmark/useBookmarksQuery.tsx";
import { CardList } from "@/components/CardList.tsx";
import { BookMarkCard } from "@/components/bookmark/BookMarkCard.tsx";

export const BookMarkCards = () => {
  const { data: bookmarksData } = useBookmarksQuery();

  return (
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
  );
};