import {
  formatDate,
  calcRemainingTime,
  detectVacancyStatus,
} from "@/lib/utils";
import { VacancyT } from "@/interface/db/vacancies.types";

import { Status, Options } from "./";
import { GridTableItem } from "@/components/layouts";

type VacanciesTableRowT = {
  vacancy: VacancyT;
};

const VacanciesTableRow: React.FC<VacanciesTableRowT> = (props) => {
  const {
    vacancy: { expiry_date, is_published, is_approved, ...vacancy },
  } = props;

  const remainingDays = calcRemainingTime(expiry_date);

  const status = detectVacancyStatus(is_published, is_approved, expiry_date);

  return (
    <>
      <GridTableItem>{vacancy.title}</GridTableItem>
      <GridTableItem>{formatDate(vacancy.published_date)}</GridTableItem>
      <GridTableItem>{remainingDays}</GridTableItem>
      <GridTableItem>{120}</GridTableItem>
      <GridTableItem>{100}</GridTableItem>
      {/* ASK: to STEIKHOLDERS about chosen candidates; employed candidates -> removed */}
      <GridTableItem>{10}</GridTableItem>
      <GridTableItem>{2}</GridTableItem>
      <GridTableItem>
        <Status status={status} />
      </GridTableItem>
      <GridTableItem alignCenter>
        <Options
          vacancyTitle={vacancy.title}
          vacancyId={vacancy.id.toString()}
        />
      </GridTableItem>
    </>
  );
};

export default VacanciesTableRow;
