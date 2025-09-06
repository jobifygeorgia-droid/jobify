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
import Label from "./ui/Label";
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
      console.log(editor.getHTML());
      onChange?.(editor.getHTML());
    });

    return () => {
      editor.off("update");
    };
  }, [editor, onChange]);

  return (
    <div
      className={classnames("flex flex-col gap-[6px]", props.className || "")}
      style={{ width, minHeight: height }}
    >
      {props.label && (
        <Label label={props.label} labelPosition="out" keepOrder={true} />
      )}

      <div className="border border-bc rounded-xl p-3 h-full w-full">
        <div className="flex items-center gap-4 pb-3 mb-3 border-b border-b-bc">
          <Bold />
          <Italic />
          <Underline />
          <AddBulletList />
          <AddOrderedList />
        </div>

        <EditorContent
          editor={editor}
          className="w-full h-full overflow-y-auto"
        />
      </div>

      {props.message && <FormErrorMessage message={props.message} />}
    </div>
  );
};

export default TextEditor;
