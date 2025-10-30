"use client";

import { CV } from "@/components/ui/icons";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

type CVViewFloatingButtonT = {};

const CVViewFloatingButton: React.FC<CVViewFloatingButtonT> = () => {
  const { setIsOpenReview, isOpenReview } = useCV();

  if (isOpenReview) return null;

  return (
    <button
      onClick={() => setIsOpenReview(true)}
      className="laptop:hidden fixed items-center justify-center top-1/2 -translate-y-1/2 right-4 z-[999] bg-white shadow-md border border-bc size-11 rounded-full cursor-pointer"
    >
      <CV className="translate-y-1 text-orange" />
    </button>
  );
};

export default CVViewFloatingButton;
