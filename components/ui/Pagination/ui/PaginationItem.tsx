import { PaginationRenderItemParams } from "@mui/material/Pagination";

import PaginationPageBox from "./PaginationPageBox";
import PaginationArrowButtonsGroup from "./PaginationArrowButtonsGroup";

type PaginationItemT = {
  pagesCount: number;
  multipleStep: number;
  currentPage?: number;
  paginationProps: PaginationRenderItemParams;
};

const PaginationItem: React.FC<PaginationItemT> = (props) => {
  const { paginationProps, multipleStep, pagesCount, currentPage } = props;

  const paginationType = paginationProps.type;

  const isButtonItem =
    paginationType === "next" || paginationType === "previous";

  return isButtonItem ? (
    <PaginationArrowButtonsGroup
      pagesCount={pagesCount}
      currentPage={currentPage}
      multipleStep={multipleStep}
      paginationProps={paginationProps}
    />
  ) : (
    <PaginationPageBox {...paginationProps} />
  );
};

export default PaginationItem;
