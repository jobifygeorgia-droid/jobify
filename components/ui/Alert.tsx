"use client";

import { useEffect } from "react";
import classnames from "classnames";

import { AnchorButton } from "@/components/ui";
import { ArrowRight, Close, Warning } from "./icons";

type AlertPropsT = AlertT & {
  onRemove: (id: string) => void;
};

const Alert: React.FC<AlertPropsT> = (props) => {
  const { id, title, text, type = "", onRemove, delay = 5000 } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemove(id || "");
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, onRemove, delay]);

  return (
    <div
      className={classnames("p-4 rounded-lg w-full max-w-[860px]", {
        "text-red bg-red-light shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(243,65,65,0.16),0px_0px_0px_1px_rgba(103,110,118,0.08),0px_2px_0px_4px_rgba(243,65,65,0.16)]":
          type === "danger",
        "text-orange bg-orange-light shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(233,162,59,0.12),0px_2px_5px_0px_rgba(103,110,118,0.08),0px_0px_0px_4px_rgba(233,162,59,0.16)]":
          type === "warning",
        "text-green-dark-hover bg-green-light shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(83,180,131,0.16),0px_2px_5px_0px_rgba(103,110,118,0.08),0px_0px_0px_4px_rgba(83,180,131,0.16)]":
          type === "success",
      })}
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center leading-1">
          <Warning size={28} className="text-current" />
        </span>

        {title && (
          <span className={classnames("font-semibold text-base")}>{title}</span>
        )}

        <button className="ml-auto" onClick={() => onRemove(id || "")}>
          <Close size={25} className="text-current" />
        </button>
      </div>

      {text && (
        <p
          className={classnames("text-base-sm mt-2 ml-8 font-normal", {
            "text-red": type === "danger",
            "text-orange-active": type === "warning",
            "text-green-active": type === "success",
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
        <ArrowRight className="text-current!" size={20} />
      </AnchorButton>
    </div>
  );
};

export default Alert;
