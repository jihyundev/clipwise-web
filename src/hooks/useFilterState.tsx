import { useState } from "react";
import { FilterOrder } from "@/model/bookmark.ts";

export const useFilterState = () => {
  const [orderBy, setOrderBy] = useState<FilterOrder>("exact");

  return {
    orderBy,
    setOrderBy,
  };
};
