"use client";

import classnames from "classnames";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type FilterButtonT = {
  children: React.ReactNode;
  className?: string;
};

const FilterButton: React.FC<FilterButtonT> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onExpandFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      className={classnames(
        props.className || "",
        "cursor-pointer flex items-center justify-center leading-0"
      )}
      onClick={onExpandFilter}
    >
      {props.children}
    </button>
  );
};

export default FilterButton;
