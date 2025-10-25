"use client";

import Stack from "@mui/material/Stack";
import MuiPagination from "@mui/material/Pagination";

import { useSearchParamUtils } from "@/hooks/utils";

import PaginationItem from "./ui/PaginationItem";
import ManualPageChange from "./ui/ManualPageChange";

type PaginationT = {
  total: number;
  limit: number;
};

const Pagination: React.FC<PaginationT> = (props) => {
  const { total, limit } = props;
  const { searchParams, mergeAndNavigate } = useSearchParamUtils();

  const pagesCount = Math.ceil(total / limit) || 1;
  const currentPage = Number(searchParams.get("page")) || 1;

  const onPageChange = (newPage: number) => {
    searchParams.set("page", String(newPage));
    mergeAndNavigate(searchParams.toString());
  };

  return (
    <Stack spacing={2} direction="row" gap="100px" alignItems="center">
      <MuiPagination
        count={pagesCount}
        page={currentPage}
        onChange={(_, newPage) => onPageChange(newPage)}
        boundaryCount={1}
        siblingCount={1}
        renderItem={(item) => (
          <PaginationItem
            multipleStep={5}
            pagesCount={pagesCount}
            paginationProps={item}
            currentPage={currentPage}
          />
        )}
      />

      <ManualPageChange
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Stack>
  );
};

export default Pagination;
