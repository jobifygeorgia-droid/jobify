"use client";

import { useState } from "react";

import MuiPagination, {
  PaginationRenderItemParams,
} from "@mui/material/Pagination";
import classnames from "classnames";
import Stack from "@mui/material/Stack";

import { DoubleArrowRight, KeyboardArrowRight } from "./icons";

type PaginationT = {
  x?: string;
};

const Pagination: React.FC<PaginationT> = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <Stack spacing={2} direction="row" gap="100px" alignItems="center">
      <MuiPagination
        count={20}
        page={currentPage}
        onChange={(_, newPage) => setCurrentPage(newPage)}
        boundaryCount={1}
        siblingCount={1}
        renderItem={(item) => (
          <PaginationItem
            multipleStep={5}
            pagesCount={20}
            paginationProps={item}
            setCurrentPage={setCurrentPage}
          />
        )}
      />

      <div className="hidden laptop:flex items-center gap-3 text-base-sm">
        <label htmlFor="manual-page-pagination">გვერდი</label>
        <input
          defaultValue={1}
          type="number"
          className="border border-bc w-14 h-10 rounded-lg text-center outline-none"
        />
        <span>20&nbsp;-დან</span>
      </div>
    </Stack>
  );
};

export default Pagination;

function PaginationItem(props: {
  multipleStep: number;
  pagesCount: number;
  paginationProps: PaginationRenderItemParams;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { paginationProps, setCurrentPage, multipleStep, pagesCount } = props;

  const paginationType = paginationProps.type;
  const isButtonItem =
    paginationType === "next" || paginationType === "previous";

  return isButtonItem ? (
    <PaginationArrowButtonsGroup
      pagesCount={pagesCount}
      multipleStep={multipleStep}
      setCurrentPage={setCurrentPage}
      paginationProps={paginationProps}
    />
  ) : (
    <PaginationPageBox {...paginationProps} />
  );
}

function PaginationPageBox(props: PaginationRenderItemParams) {
  const isPage = props.type === "page";
  const isSelected = props.selected;
  const page = props.page;

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
}

function PaginationArrowButtonsGroup(props: {
  multipleStep: number;
  pagesCount: number;
  paginationProps: PaginationRenderItemParams;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { paginationProps, setCurrentPage, multipleStep, pagesCount } = props;

  const isNext = paginationProps.type === "next";

  return (
    <div className="flex items-center">
      <PaginationArrowButton
        isPrevious={!isNext}
        pagesCount={pagesCount}
        multipleStep={multipleStep}
        setCurrentPage={setCurrentPage}
        isMultiple={isNext ? false : true}
      />
      <PaginationArrowButton
        isPrevious={!isNext}
        pagesCount={pagesCount}
        multipleStep={multipleStep}
        setCurrentPage={setCurrentPage}
        isMultiple={isNext ? true : false}
      />
    </div>
  );
}

function PaginationArrowButton(props: {
  pagesCount: number;
  multipleStep: number;
  isMultiple: boolean;
  isPrevious: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { isMultiple, isPrevious, setCurrentPage, pagesCount, multipleStep } =
    props;

  const onChangePage = () => {
    if (isMultiple)
      setCurrentPage((prev) => {
        let candidatePage = prev;

        if (isPrevious)
          candidatePage = prev - multipleStep >= 1 ? prev - multipleStep : 1;
        else
          candidatePage =
            prev + multipleStep <= pagesCount
              ? prev + multipleStep
              : pagesCount;

        return candidatePage;
      });
    else
      setCurrentPage((prev) => {
        let candidatePage = prev;

        if (isPrevious) candidatePage = prev - 1 > 0 ? prev - 1 : 1;
        else candidatePage = prev + 1 <= pagesCount ? prev + 1 : prev;

        return candidatePage;
      });
  };

  return (
    <button
      onClick={onChangePage}
      className={classnames(
        "border border-bc flex items-center justify-center size-7 tablet:size-8 text-sm tablet:text-base-sm rounded-lg leading-2.5 mx-[5px] cursor-pointer",
        { "rotate-180": isPrevious, "hidden tablet:flex": isMultiple }
      )}
    >
      {isMultiple ? (
        <DoubleArrowRight size={16} />
      ) : (
        <KeyboardArrowRight size={16} />
      )}
    </button>
  );
}
