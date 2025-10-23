import classnames from "classnames";

import { GridTableItem } from "@/components/layouts";

type SendEmailTableHeaderT = {};

const SendEmailTableHeader: React.FC<SendEmailTableHeaderT> = () => {
  const headerColumnStyles = classnames("sticky z-90 top-[0px] self-start");

  return (
    <>
      <GridTableItem
        isHeader
        isSmallCol
        className={`${headerColumnStyles} rounded-tl-xl relative after:absolute after:size-3 after:bg-white after:-left-[10.6px] after:-top-[4px] after:rotate-[30deg]`}
      >
        მონიშნე
      </GridTableItem>
      <GridTableItem isHeader className={headerColumnStyles}>
        ვაკანსია
      </GridTableItem>
      <GridTableItem isHeader className={headerColumnStyles}>
        დამატების თარიღი
      </GridTableItem>
      <GridTableItem isHeader isSmallCol className={headerColumnStyles}>
        დარჩენილი დღეები
      </GridTableItem>
      <GridTableItem
        isHeader
        isSmallCol
        className={`${headerColumnStyles} rounded-tr-xl relative after:absolute after:size-3 after:bg-white after:opacity-100 after:-right-[10px] after:-top-[4px] after:rotate-[-33deg]`}
      >
        ნახვა
      </GridTableItem>
    </>
  );
};

export default SendEmailTableHeader;
