"use client";

import { EditorContent } from "@tiptap/react";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";

import {
  Bold,
  Italic,
  Underline,
  AddBulletList,
  AddOrderedList,
} from "@/components/layouts/TipTap/components/MenuButtons";

type TextEditorT = {
  width?: string;
  height?: string;
};

const TextEditor: React.FC<TextEditorT> = (props) => {
  const { width = "100%", height = "400px" } = props;

  const { editor } = useTipTap();

  return (
    <div
      style={{ width, minHeight: height }}
      className="border border-bc rounded-xl p-3"
    >
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
  );
};

export default TextEditor;
