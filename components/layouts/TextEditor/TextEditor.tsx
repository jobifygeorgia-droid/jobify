import classnames from "classnames";

import TextEditorContent from "./TextEditorContent";
import Menu from "@/components/layouts/TipTap/TipTapMenu";

type TextEditorT = {
  Slot?: React.ReactNode;
  panelPosition?: "aside" | "top";
};

const TextEditor: React.FC<TextEditorT> = (props) => {
  const { panelPosition = "top", Slot } = props;

  return (
    <div
      className={classnames("flex-1 w-full flex", {
        "flex-col border border-bc rounded-xl p-3": panelPosition === "top",
        "flex-row h-screen": panelPosition === "aside",
      })}
    >
      <Menu>
        <div
          className={classnames("flex flex-col gap-6", {
            "max-w-[460px] w-full h-full py-8 px-12 border-r border-r-bc":
              panelPosition === "aside",
            "py-3 mb-3 border-b border-b-bc": panelPosition === "top",
          })}
        >
          <div
            className={classnames("flex items-center", {
              "flex-col gap-6": panelPosition === "aside",
              "flex-row gap-12 justify-center": panelPosition === "top",
            })}
          >
            <Menu.Groups.Headings />

            <Menu.Groups.Alignment />

            <Menu.Groups.Listing />

            <Menu.Groups.Others />
          </div>

          <div
            className={classnames("flex items-center", {
              "flex-col gap-6": panelPosition === "aside",
              "flex-row gap-12 justify-center": panelPosition === "top",
            })}
          >
            <Menu.Groups.TextStyling />

            <Menu.Groups.Utils />
          </div>

          <div
            className={classnames("max-w-full flex items-center", {
              "flex-col gap-6": panelPosition === "aside",
              "flex-row gap-12 justify-center": panelPosition === "top",
            })}
          >
            <Menu.Groups.Tables />

            <Menu.Groups.Controls />
          </div>

          {Slot}
        </div>
      </Menu>

      <TextEditorContent panelPosition={panelPosition} />
    </div>
  );
};

export default TextEditor;
