import DetailChip from "./DetailChip";
import { Calendar, Wallet, Bag, Location } from "@/components/ui/icons";

type VacancyAdditionalDetailsT = {};

const VacancyAdditionalDetails: React.FC<VacancyAdditionalDetailsT> = () => {
  return (
    <div className="rounded-xl tablet:border border-blue-light-hover tablet:px-8 tablet:py-3 laptop:p-8 flex flex-col gap-6">
      <span className="hidden tablet:inline-block font-semibold">
        ვაკანსიის დეტალები
      </span>

      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-2 gap-6">
        <DetailChip
          Icon={Calendar}
          title="გამოქვეყნების თარიღი"
          value="14 ივნისი, 2021"
        />

        <DetailChip
          Icon={Calendar}
          title="დასრულების თარიღი"
          value="14 ივლისი, 2021"
        />

        <DetailChip Icon={Wallet} title="ხელფასი" value="3000 - 3500 GEL" />

        <DetailChip Icon={Bag} title="გამოცდილება" value="0-2 წელი" />

        <DetailChip Icon={Bag} title="განათლება" value="მაგისტრი" />

        <DetailChip Icon={Location} title="ლოკაცია" value="ა. ბელიაშვილის 52" />
      </div>
    </div>
  );
};

export default VacancyAdditionalDetails;
