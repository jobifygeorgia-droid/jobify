import { formatDate } from "@/lib/utils";
import DetailChip from "./DetailChip";
import { Calendar, Wallet, Bag, Location } from "@/components/ui/icons";

type VacancyAdditionalDetailsT = {
  publishDate: string;
  expiryDate: string;
  salaryRange: string;
  location: string;
};

const VacancyAdditionalDetails: React.FC<VacancyAdditionalDetailsT> = (
  props
) => {
  const { publishDate, expiryDate, salaryRange, location } = props;

  return (
    <div className="rounded-xl tablet:border border-blue-light-hover tablet:px-8 tablet:py-3 laptop:p-8 flex flex-col gap-6">
      <span className="hidden tablet:inline-block font-semibold">
        ვაკანსიის დეტალები
      </span>

      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-2 gap-6">
        <DetailChip
          Icon={Calendar}
          title="გამოქვეყნების თარიღი"
          value={formatDate(publishDate)}
        />

        <DetailChip
          Icon={Calendar}
          title="დასრულების თარიღი"
          value={formatDate(expiryDate)}
        />

        <DetailChip Icon={Wallet} title="ხელფასი" value={`${salaryRange} ₾`} />

        {/* ASK: ცალკე მივათითებინოთ  -> yes */}
        <DetailChip Icon={Bag} title="გამოცდილება" value="0-2 წელი" />

        {/* ASK: ცალკე მივათითებინოთ ?-> yes */}
        <DetailChip Icon={Bag} title="განათლება" value="მაგისტრი" />

        <DetailChip Icon={Location} title="ლოკაცია" value={location} />
      </div>
    </div>
  );
};

export default VacancyAdditionalDetails;
