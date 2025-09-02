"use client";

import { useEffect } from "react";
import classnames from "classnames";

import { AnchorButton } from "@/components/ui";
import { Arrow, Close, Warning } from "./icons";

type AlertPropsT = AlertT & {
  onRemove: (id: string) => void;
};

const Alert: React.FC<AlertPropsT> = (props) => {
  const { id, title, text, type = "", onRemove } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemove(id || "");
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, onRemove]);

  return (
    <div
      className={classnames("p-4 rounded-lg w-full max-w-[860px]", {
        "text-dark-grey-hover bg-white shadow-[0px_2px_5px_rgba(103,110,118,0.3),0px_0px_0px_1px_rgba(103,110,118,0.16),0px_1px_1px_0px_rgba(103,110,118,0.12)]":
          type === "normal",
        "text-red bg-red-100 shadow-[0px_2px_5px_rgba(243,65,65,0.3),0px_0px_0px_1px_rgba(243,65,65,0.16),0px_1px_1px_0px_rgba(243,65,65,0.12)]":
          type === "danger",
        "text-orange-400 bg-orange-100 shadow-[0px_2px_5px_rgba(233,162,59,0.3),0px_0px_0px_1px_rgba(233,162,59,0.16),0px_1px_1px_0px_rgba(233,162,59,0.12)]":
          type === "warning",
        "text-green bg-green-100 shadow-[0px_2px_5px_rgba(83,180,131,0.3),0px_0px_0px_1px_rgba(83,180,131,0.16),0px_1px_1px_0px_rgba(83,180,131,0.12)]":
          type === "success",
      })}
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center leading-1">
          <Warning width={18} height={18} className="stroke-current" />
        </span>

        {title && (
          <span className={classnames("font-semibold text-base")}>{title}</span>
        )}

        <button className="ml-auto" onClick={() => onRemove(id || "")}>
          <Close width={15} height={15} className="stroke-current" />
        </button>
      </div>

      {text && (
        <p
          className={classnames("font-bold text-base-sm mt-2 ml-8", {
            "text-light-grey-dark-active": type === "normal",
            "text-red-400": type === "danger",
            "text-orange-300": type === "warning",
            "text-green-400": type === "success",
          })}
        >
          {text}
        </p>
      )}

      <AnchorButton
        href={""}
        buttonType="text"
        className="p-0! ml-8 mt-6 text-[inherit]! w-max"
      >
        <span className="font-semibold text-base-sm">გაიგე მეტი</span>
        <Arrow className="stroke-current!" width={14} />
      </AnchorButton>
    </div>
  );
};

export default Alert;
