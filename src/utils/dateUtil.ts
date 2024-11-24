import dayjs from "dayjs";

export const formatCreatedAt = (lastEdited: string) => {
  if (!lastEdited) return "";

  const now = dayjs();
  const edited = dayjs(lastEdited);
  const diffDays = now.diff(edited, "day");
  const diffHours = now.diff(edited, "hour");
  const diffMinutes = now.diff(edited, "minute");

  if (diffDays > 0) {
    return `${diffDays}일 전 추가됨`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전 추가됨`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 전 추가됨`;
  } else {
    return "방금 전 추가됨";
  }
};
