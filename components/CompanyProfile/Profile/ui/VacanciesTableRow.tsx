import { formatDate } from "@/lib/utils";

import { GridTableItem } from "@/components/layouts";
import Status from "./Status";
import Options from "./Options";

type VacanciesTableRowT = {
  vacancy: string;
  creationDate: string;
  remainingDays: number;
  views: number;
  resume: number;
  chosenCandidate: number;
  hired: number;
  status: string;
};

const VacanciesTableRow: React.FC<VacanciesTableRowT> = (props) => {
  return (
    <>
      <GridTableItem>{props.vacancy}</GridTableItem>
      <GridTableItem>{formatDate(props.creationDate)}</GridTableItem>
      <GridTableItem>{props.remainingDays}</GridTableItem>
      <GridTableItem>{props.views}</GridTableItem>
      <GridTableItem>{props.resume}</GridTableItem>
      <GridTableItem>{props.chosenCandidate}</GridTableItem>
      <GridTableItem>{props.hired}</GridTableItem>
      <GridTableItem>
        <Status status={props.status} />
      </GridTableItem>
      <GridTableItem alignCenter>
        <Options />
      </GridTableItem>
    </>
  );
};

export default VacanciesTableRow;
