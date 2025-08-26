import { RangeField } from "@/components/layouts/Form";
import ExpandedFilterFieldLabel from "./ExpandedFilterFieldLabel";

type SalaryExpectationT = {};

const SalaryExpectation: React.FC<SalaryExpectationT> = () => {
  return (
    <div className="flex flex-col justify-center gap-8 px-5">
      <ExpandedFilterFieldLabel label="სახელფასო მოლოდინი" />

      <RangeField />
    </div>
  );
};

export default SalaryExpectation;
