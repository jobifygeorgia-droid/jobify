import { PaginationRenderItemParams } from "@mui/material/Pagination";

import PaginationArrowButton from "./PaginationArrowButton";

type PaginationArrowButtonsGroupT = {
  pagesCount: number;
  currentPage?: number;
  multipleStep: number;
  paginationProps: PaginationRenderItemParams;
};

const PaginationArrowButtonsGroup: React.FC<PaginationArrowButtonsGroupT> = (
  props
) => {
  const { paginationProps, ...rest } = props;

  const isNext = paginationProps.type === "next";

  return (
    <div className="flex items-center">
      <PaginationArrowButton
        isPrevious={!isNext}
        pagesCount={rest.pagesCount}
        currentPage={rest.currentPage}
        multipleStep={rest.multipleStep}
        isMultiple={isNext ? false : true}
      />

      <PaginationArrowButton
        isPrevious={!isNext}
        pagesCount={rest.pagesCount}
        currentPage={rest.currentPage}
        multipleStep={rest.multipleStep}
        isMultiple={isNext ? true : false}
      />
    </div>
  );
};

export default PaginationArrowButtonsGroup;
