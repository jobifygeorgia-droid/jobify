"use client";

import classnames from "classnames";

import { Tooltip } from "./styles";

type LineClampT = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  clamp?: number;
};

const LineClamp: React.FC<LineClampT> = (props) => {
  const { children, title, clamp = 1, className = "" } = props;

  return title ? (
    <Tooltip
      arrow
      title={title}
      placement="top-start"
      slotProps={{
        popper: {
          modifiers: [{ name: "offset", options: { offset: [0, -5] } }],
        },
      }}
    >
      <span
        style={{ WebkitLineClamp: clamp }}
        className={classnames(`line-clamp-1`, className)}
      >
        {children}
      </span>
    </Tooltip>
  ) : (
    <span
      style={{ WebkitLineClamp: clamp }}
      className={classnames(`line-clamp-1`, className)}
    >
      {children}
    </span>
  );
};

export default LineClamp;
