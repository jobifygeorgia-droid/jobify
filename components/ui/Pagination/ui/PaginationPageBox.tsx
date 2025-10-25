import classnames from "classnames";
import { PaginationRenderItemParams } from "@mui/material/Pagination";

const PaginationPageBox: React.FC<PaginationRenderItemParams> = (props) => {
  const page = props.page;
  const isSelected = props.selected;
  const isPage = props.type === "page";

  return (
    <button
      onClick={props.onClick}
      className={classnames(
        "flex items-center justify-center size-7 tablet:size-8 text-sm tablet:text-base-sm rounded-lg leading-2.5 mx-[5px]",
        {
          "text-white bg-orange": isSelected,
          "bg-none text-dark-grey-dark": !isSelected,
        },
        {
          "border border-bc cursor-pointer": isPage,
        }
      )}
    >
      {isPage ? page : "..."}
    </button>
  );
};

export default PaginationPageBox;
