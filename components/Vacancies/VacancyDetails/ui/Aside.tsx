import VacancyDetailChip from "./VacancyDetailChip";
import { Calendar, Wallet, Bag, Location } from "@/components/ui/icons";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <aside className="flex-1">
      <div className="rounded-lg border border-blue-light-hover p-8 flex flex-col gap-6">
        <span className="font-semibold">ვაკანსიის დეტალები</span>

        <div className="grid grid-cols-2 gap-6">
          <VacancyDetailChip
            Icon={Calendar}
            title="გამოქვეყნების თარიღი"
            value="14 ივნისი, 2021"
          />

          <VacancyDetailChip
            Icon={Calendar}
            title="დასრულების თარიღი"
            value="14 ივლისი, 2021"
          />

          <VacancyDetailChip
            Icon={Wallet}
            title="ხელფასი"
            value="3000 - 3500 GEL"
          />

          <VacancyDetailChip Icon={Bag} title="გამოცდილება" value="0-2 წელი" />

          <VacancyDetailChip Icon={Bag} title="განათლება" value="მაგისტრი" />

          <VacancyDetailChip
            Icon={Location}
            title="ლოკაცია"
            value="ა. ბელიაშვილის 52"
          />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
