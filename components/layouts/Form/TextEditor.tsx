"use client";

import { useEffect } from "react";
import classnames from "classnames";
import { EditorContent } from "@tiptap/react";

import { useTipTap } from "@/providers/TipTapProvider";

import {
  Bold,
  Italic,
  Underline,
  AddBulletList,
  AddOrderedList,
} from "@/components/layouts/TipTap/components/MenuButtons";
import Label from "./Label";
import FormErrorMessage from "./FormErrorMessage";

type TextEditorT = {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
  message?: string;
  onChange?: (v: string) => void;
};

const TextEditor: React.FC<TextEditorT> = (props) => {
  const { width = "100%", height = "400px", onChange } = props;

  const { editor } = useTipTap();

  useEffect(() => {
    if (!editor) return;

    editor.on("update", ({ editor }) => {
      onChange?.(editor.getHTML());
    });

    return () => {
      editor.off("update");
    };
  }, [editor, onChange]);

  return (
    <div
      className={classnames("flex flex-col gap-[6px]", props.className || "")}
      style={{ width, minHeight: height, maxHeight: height }}
    >
      {props.label && (
        <Label label={props.label} labelPosition="out" keepOrder={true} />
      )}

      <div className="border border-bc rounded-xl p-3 h-full w-full flex flex-col gap-3">
        <div className="flex items-center gap-4 pb-3 border-b border-b-bc">
          <Bold />
          <Italic />
          <Underline />
          <AddBulletList />
          <AddOrderedList />
        </div>

        <EditorContent
          editor={editor}
          className="w-full min-h-[calc(100%-50px)] pt-2 overflow-y-auto"
        />
      </div>

      {props.message && <FormErrorMessage message={props.message} />}
    </div>
  );
};

export default TextEditor;
