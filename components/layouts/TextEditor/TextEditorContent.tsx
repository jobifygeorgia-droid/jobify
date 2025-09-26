"use client";

import classnames from "classnames";
import { EditorContent } from "@tiptap/react";

import { useTipTap } from "@/providers/TipTapProvider";

type TextEditorContentT = {
  panelPosition?: "aside" | "top";
};

const TextEditorContent: React.FC<TextEditorContentT> = (props) => {
  const { panelPosition } = props;
  const { editor } = useTipTap();

  return (
    <EditorContent
      editor={editor}
      className={classnames({
        "h-[20vh] w-full": panelPosition === "top",
        "flex-1 w-full mx-12 my-6 shadow-sm border border-bc rounded-lg":
          panelPosition === "aside",
      })}
    />
  );
};

export default TextEditorContent;
