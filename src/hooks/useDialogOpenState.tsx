import { useState } from "react";

export const useDialogOpenState = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen,
  };
};
