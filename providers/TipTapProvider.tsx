"use client";

import { createContext, useContext, useEffect, useState } from "react";

import StarterKit from "@tiptap/starter-kit";
import { useEditor, Editor, Content } from "@tiptap/react";

import Typography from "@tiptap/extension-typography";
import ListKeymap from "@tiptap/extension-list-keymap";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Youtube from "@tiptap/extension-youtube";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";

import TipTapMenu from "@/components/layouts/TipTap/TipTapMenu";

export type ColorT = {
  title: string;
  color: string;
  textColor: string;
};

type TipTapProviderT = React.FC<{
  children: React.ReactNode;
  readonly?: boolean;
  content?: Content;
}> & {
  Menu: typeof TipTapMenu;
};

type TipTapContextT = {
  editor: Editor | null;
  addYouTubeVideo: () => void;
  addImage: (image: File) => void;
  onSelectColor: (color: ColorT, cb: () => void) => void;
  onSelectHighlight: (color: ColorT, cb: () => void) => void;
  setLink: (url: string) => void;
};

const TipTapContext = createContext<TipTapContextT>({
  editor: null,
  addYouTubeVideo: () => {},
  addImage: () => {},
  onSelectColor: () => {},
  onSelectHighlight: () => {},
  setLink: () => {},
});

const TipTapProvider: TipTapProviderT = ({ children, ...props }) => {
  const { readonly = true, content = "" } = props;

  const instance = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
        italic: { HTMLAttributes: { class: "italic" } },
      }),
      Color,
      TextStyle,
      ListKeymap,
      Placeholder.configure({ placeholder: "Type ..." }),
      Typography,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      Highlight.configure({ multicolor: true }),
      Image.configure({ HTMLAttributes: { multiple: true } }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) return false;

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) return false;

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) return false;

            // disallowed domains
            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) return false;

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
      Subscript,
      Superscript,
      Underline,
    ],
    immediatelyRender: false,
    content,
    editable: !readonly,
    editorProps: { attributes: { spellcheck: "true" } },
  });

  const [editor, setEditor] = useState<Editor | null>(null);
  const [updatedAt, setUpdatedAt] = useState<number>(0);

  const addYouTubeVideo = () => {
    if (!editor) return;
  };

  const addImage = (image: File) => {
    if (!editor) return;

    const url = URL.createObjectURL(image);

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const onSelectColor = (color: ColorT, callback: () => void) => {
    if (!editor) return;

    callback();
    editor.chain().focus().setColor(color.color).run();
  };

  const onSelectHighlight = (color: ColorT, callback: () => void) => {
    if (!editor) return;

    callback();
    editor.chain().focus().toggleHighlight({ color: color.color }).run();
  };

  const setLink = (url: string) => {
    if (!editor || url === null) return;

    if (url === "")
      return editor.chain().focus().extendMarkRange("link").unsetLink().run();

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  useEffect(() => {
    if (!instance) return;

    setEditor(instance);

    const update = () => setUpdatedAt(Date.now());

    instance.on("transaction", update);
    instance.on("selectionUpdate", update);

    return () => {
      instance.off("transaction", update);
      instance.off("selectionUpdate", update);
    };
  }, [instance]);

  return (
    <TipTapContext.Provider
      value={{
        editor,
        onSelectColor,
        onSelectHighlight,
        addImage,
        addYouTubeVideo,
        setLink,
      }}
    >
      {children}
    </TipTapContext.Provider>
  );
};

TipTapProvider.Menu = TipTapMenu;

export default TipTapProvider;

export const useTipTap = () => useContext(TipTapContext);
