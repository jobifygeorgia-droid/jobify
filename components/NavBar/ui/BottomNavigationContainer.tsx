"use client";

import { useSearchParamUtils } from "@/hooks/utils";

type BottomNavigationContainerT = {
  children: React.ReactNode;
};

const BottomNavigationContainer: React.FC<BottomNavigationContainerT> = ({
  children,
}) => {
  const { searchParams } = useSearchParamUtils();

  const menuIsOpen = searchParams.get("menu") === "open";

  if (menuIsOpen) return null;

  return (
    <div className="laptop:hidden fixed z-[99] bottom-0 left-0 right-0 flex justify-center items-center bg-white border-t border-t-bc">
      {children}
    </div>
  );
};

export default BottomNavigationContainer;
