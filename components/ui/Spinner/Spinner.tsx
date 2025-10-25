"use client";

import classnames from "classnames";

import "./loaders.css";

type SpinnerT = {
  type?: "relative" | "inline" | "fixed";
  size?: "sm" | "base" | "lg";
};

const RelativeSpinner: React.FC<SpinnerT> = (props) => {
  const { type = "relative", size = "lg" } = props;

  return (
    <div
      className={classnames("flex items-center justify-center", {
        "absolute z-[99] inset-0": type === "relative",
        "fixed z-[999] inset-0 bg-white/10": type === "fixed",
        "w-full h-full flex items-center justify-center": type === "inline",
      })}
    >
      <span
        className={classnames("loader", {
          "size-8": size === "sm",
          "size-10": size === "base",
          "size-12": size === "lg",
        })}
      />
    </div>
  );
};

export default RelativeSpinner;
