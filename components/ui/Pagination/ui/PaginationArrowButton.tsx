import Link from "next/link";
import classnames from "classnames";

import { DoubleArrowRight, KeyboardArrowRight } from "@/components/ui/icons";

type PaginationArrowButtonT = {
  pagesCount: number;
  isMultiple: boolean;
  isPrevious: boolean;
  multipleStep: number;
  currentPage?: number;
};

const PaginationArrowButton: React.FC<PaginationArrowButtonT> = (props) => {
  const { isMultiple, isPrevious, pagesCount, multipleStep, currentPage } =
    props;

  let targetPage = currentPage || 1;
  if (isMultiple) {
    if (isPrevious) targetPage = Math.max(1, targetPage - multipleStep);
    else targetPage = Math.min(pagesCount, targetPage + multipleStep);
  } else {
    if (isPrevious) targetPage = Math.max(1, targetPage - 1);
    else targetPage = Math.min(pagesCount, targetPage + 1);
  }

  const href = `?page=${targetPage}`;

  return (
    <Link
      href={href}
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
    </Link>
  );
};

export default PaginationArrowButton;
