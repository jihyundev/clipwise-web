import { Logo } from "@/components/Logo";

export const BookMarkCardImage = ({
  imageUrl,
  title,
}: {
  imageUrl?: string;
  title: string;
}) => {
  if (!imageUrl) {
    return (
      <div className="flex items-center justify-center rounded-lg border w-[172px] h-[114px]">
        <Logo width={15} height={20} />
      </div>
    );
  }
  return (
    <div className="rounded-lg border w-[172px] h-[114px]">
      <img src={imageUrl} alt={`${title} image`} width={172} height={114} />
    </div>
  );
};
