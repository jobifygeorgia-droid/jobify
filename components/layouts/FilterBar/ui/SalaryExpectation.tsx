import { RangeField } from "@/components/layouts/Form";
import ExpandedFilterFieldLabel from "./ExpandedFilterFieldLabel";

const SalaryExpectation: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 tablet:px-5">
      <ExpandedFilterFieldLabel label="სახელფასო მოლოდინი" />

      <RangeField />
    </div>
  );
};

export default SalaryExpectation;
