import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { BookMarkCardImage } from "@/components/bookmark/BookMarkCardImage.tsx";
import { Bookmark } from "@/model/bookmark.ts";

type CardProps = Pick<
  Bookmark,
  "title" | "description" | "thumbnailUrl" | "url" | "updatedAt"
>;

export const BookMarkCard = ({
  title,
  description,
  thumbnailUrl,
  url,
  updatedAt,
}: CardProps) => {
  return (
    <Card className="flex items-center px-6">
      <BookMarkCardImage title={title} imageUrl={thumbnailUrl} />
      <div className="w-full">
        <CardHeader className="py-4">
          <h3 className="text-gray-600 text-lg font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="py-1.5">
          <p className="text-gray-500 text-xs font-medium">{description}</p>
        </CardContent>
        <CardFooter className="py-4">
          <div>
            <div className="text-gray-400 text-xs font-normal">{url}</div>
            <div className="text-gray-500 text-xs font-normal">{updatedAt}</div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};
