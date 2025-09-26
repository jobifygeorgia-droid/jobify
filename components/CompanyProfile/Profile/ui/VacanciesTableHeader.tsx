import { GridTableItem } from "@/components/layouts";

type VacanciesTableHeaderT = {};

const VacanciesTableHeader: React.FC<VacanciesTableHeaderT> = () => {
  return (
    <>
      <GridTableItem isHeader>ვაკანსია</GridTableItem>
      <GridTableItem isHeader>დამატების თარიღი</GridTableItem>
      <GridTableItem isHeader>დარჩენილი დღეები</GridTableItem>
      <GridTableItem isHeader>ნახვა</GridTableItem>
      <GridTableItem isHeader>რეზიუმე</GridTableItem>
      <GridTableItem isHeader>არჩეული კანდიდატი</GridTableItem>
      <GridTableItem isHeader>აყვანილი</GridTableItem>
      <GridTableItem isHeader>სტატუსი</GridTableItem>
      <GridTableItem isHeader> </GridTableItem>
    </>
  );
};

export default VacanciesTableHeader;
