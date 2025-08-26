"use client";

import classnames from "classnames";
import { EditorContent } from "@tiptap/react";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";

type TextEditorContentT = {
  panelPosition?: "aside" | "top";
};

const TextEditorContent: React.FC<TextEditorContentT> = ({ panelPosition }) => {
  const { editor } = useTipTap();

  return (
    <EditorContent
      editor={editor}
      className={classnames("p-4", {
        "h-[20vh] w-full": panelPosition === "top",
        "flex-1 w-full mx-12 my-6 shadow-sm border border-bc rounded-lg":
          panelPosition === "aside",
      })}
    />
  );
};

export default TextEditorContent;
