import classnames from "classnames";

import { companyInbox } from "@/data/data";

import {
  ReceivedResumeCardCubic,
  ReceivedResumeCardHorizontal,
} from "@/components/layouts";
import Filter from "./ui/Filter";
import { Search } from "@/components/ui/icons";
import SwitchViewMode from "./ui/SwitchViewMode";
import { Pagination, SectionTitle } from "@/components/ui";

type InboxT = {
  viewMode: string;
};

const Inbox: React.FC<InboxT> = ({ viewMode }) => {
  return (
    <div className="py-4 laptop:py-10 flex flex-col gap-4 laptop:gap-8">
      <SectionTitle title="შემოსული რეზიუმეები" size="base" />

      <div className="flex flex-col-reverse laptop:flex-row laptop:items-center justify-between gap-2 laptop:gap-4 bg-white py-2 sticky top-[60px] laptop:top-[80px] z-20">
        <Filter />

        <div className="hidden laptop:flex border border-bc rounded-md py-2 px-4 items-center gap-3 w-[300px] ml-auto">
          <Search className="text-dark-grey-hover" size={20} />
          <input placeholder="ძებნა" className="outline-none w-full" />
        </div>

        <SwitchViewMode viewMode={viewMode} />
      </div>

      <ul
        className={classnames("gap-2 tablet:px-2", {
          "grid tablet:grid-cols-2 laptop:grid-cols-3 desktop-sm:grid-cols-4 desktop-lg:grid-cols-5":
            viewMode === "grid",
          "flex flex-col": viewMode === "list",
        })}
      >
        {companyInbox.map((resume) =>
          viewMode === "grid" ? (
            <ReceivedResumeCardCubic key={resume.id} {...resume} />
          ) : (
            <ReceivedResumeCardHorizontal key={resume.id} {...resume} />
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
