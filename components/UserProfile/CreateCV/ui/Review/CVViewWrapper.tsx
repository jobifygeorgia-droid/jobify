"use client";

import classnames from "classnames";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

import { Close } from "@/components/ui/icons";
import CVViewFloatingButton from "./CVViewFloatingButton";

type CVViewWrapperT = {
  children: React.ReactNode;
};

const CVViewWrapper: React.FC<CVViewWrapperT> = ({ children }) => {
  const { setIsOpenReview, isOpenReview } = useCV();

  return (
    <>
      <CVViewFloatingButton />

      <div
        className={classnames("flex-1 h-[84vh] laptop:sticky top-24 pt-3", {
          "bg-white scroll-block block max-laptop:fixed max-laptop:w-screen max-laptop:h-screen max-laptop:top-16! max-laptop:left-0 max-laptop:pt-3":
            isOpenReview,
          "max-laptop:hidden": !isOpenReview,
        })}
      >
        <button
          type="button"
          onClick={() => setIsOpenReview(false)}
          className="laptop:hidden absolute top-1 right-6 cursor-pointer"
        >
          <Close size={28} />
        </button>

        {children}
      </div>
    </>
  );
};

export default CVViewWrapper;
