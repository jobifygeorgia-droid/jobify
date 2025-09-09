"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { IconButton } from "@/components/ui";
import { Filter } from "@/components/ui/icons";

const ExpandFilterButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onExpandFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <IconButton onClick={onExpandFilter}>
      <Filter className="text-orange" />
    </IconButton>
  );
};

export default ExpandFilterButton;
