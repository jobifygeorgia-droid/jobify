import { Skeleton } from "@mui/material";

import { generateArray } from "@/lib/utils";

import { PaginationSkeleton } from "@/components/ui";
import { GridTable, GridTableItem } from "@/components/layouts";

type VacanciesFallbackT = {
  limit: number;
};

const VacanciesFallback: React.FC<VacanciesFallbackT> = ({ limit }) => {
  return (
    <div className="overflow-x-auto no-scrollbar touch-pan-x">
      <GridTable
        cols={9}
        className="mt-2 rounded-xl overflow-hidden border border-t-0 border-bc min-w-max desktop-sm:w-full"
      >
        <Row isHeader />

        {generateArray(limit).map((index) => (
          <Row key={`company-own-vacancy-skeleton-row-${index}`} />
        ))}
      </GridTable>

      <PaginationSkeleton />
    </div>
  );
};

export default VacanciesFallback;

function Row(props: { isHeader?: boolean }) {
  const width = 110;
  const height = props.isHeader ? 30 : 25;

  return (
    <>
      {generateArray(9).map((index) => (
        <GridTableItem
          isHeader={props.isHeader}
          key={`company-own-vacancy-skeleton-${index}`}
        >
          <Skeleton height={height} width={width} />
        </GridTableItem>
      ))}
    </>
  );
}
