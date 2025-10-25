import { GridTableItem } from "@/components/layouts";

type VacanciesTableHeaderT = {};

const VacanciesTableHeader: React.FC<VacanciesTableHeaderT> = () => {
  return (
    <>
      <GridTableItem isHeader>ვაკანსია</GridTableItem>
      <GridTableItem isHeader>დამატების თარიღი</GridTableItem>
      <GridTableItem isHeader isSmallCol>
        დარჩენილი დღეები
      </GridTableItem>
      <GridTableItem isHeader isSmallCol>
        ნახვა
      </GridTableItem>
      <GridTableItem isHeader isSmallCol>
        რეზიუმე
      </GridTableItem>
      <GridTableItem isHeader isSmallCol>
        არჩეული კანდიდატი
      </GridTableItem>
      <GridTableItem isHeader isSmallCol>
        აყვანილი
      </GridTableItem>
      <GridTableItem isHeader>სტატუსი</GridTableItem>
      <GridTableItem isHeader> </GridTableItem>
    </>
  );
};

export default VacanciesTableHeader;
