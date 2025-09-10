import classnames from "classnames";

import { Pagination, SectionTitle } from "@/components/ui";
import Filter from "./ui/Filter";
import { companyInbox } from "@/data/data";
import CubicCard from "./ui/CubicCard";
import SwitchViewMode from "./ui/SwitchViewMode";
import HorizontalCard from "./ui/HorizontalCard";
import { Search } from "@/components/ui/icons";

type InboxT = {
  viewMode: string;
};

const Inbox: React.FC<InboxT> = ({ viewMode }) => {
  return (
    <div className="py-10 flex flex-col gap-8">
      <SectionTitle title="შემოსული რეზიუმეები" size="base" />

      <div className="flex items-center gap-4">
        <Filter />

        <div className="border border-bc rounded-md py-2 px-4 flex items-center gap-3 w-[300px] ml-auto">
          <Search className="text-dark-grey-hover" size={20} />
          <input placeholder="ძებნა" className="outline-none w-full" />
        </div>

        <SwitchViewMode viewMode={viewMode} />
      </div>

      <ul
        className={classnames("gap-2", {
          "grid grid-cols-5": viewMode === "grid",
          "flex flex-col": viewMode === "list",
        })}
      >
        {companyInbox.map((resume) =>
          viewMode === "grid" ? (
            <CubicCard key={resume.id} {...resume} />
          ) : (
            <HorizontalCard key={resume.id} {...resume} />
          )
        )}
      </ul>

      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Inbox;
