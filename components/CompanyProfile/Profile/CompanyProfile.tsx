import { Fragment } from "react";

import { PATHS } from "@/lib/config";
import { companyProfileData } from "@/data/data";
import { formatDate } from "@/lib/utils/formatDate";

import {
  Button,
  Pagination,
  SectionTitle,
  AnchorButton,
} from "@/components/ui";
import Filter from "./ui/Filter";
import Status from "./ui/Status";
import Options from "./ui/Options";
import TableItem from "./ui/TableItem";
import Statistic from "./ui/Statistic";
import { Notification, Plus } from "@/components/ui/icons";

type CompanyProfileT = {};

const CompanyProfile: React.FC<CompanyProfileT> = () => {
  return (
    <div className="my-6 rounded-3xl px-10 py-8 bg-white flex flex-col gap-4">
      <header className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-4">
          <Statistic
            Icon={Notification}
            title="  ვაკანსიის ნახვების რაოდენობა"
            value="897654678979999"
          />
          <Statistic
            Icon={Notification}
            title="გამოგზავნილი რეზიუმეების რაოდენობა"
            value="989879799"
          />
          <Statistic
            Icon={Notification}
            title="აქ კიდე რამე სტატისტიკა დვუდოთ"
            value="897869"
          />
        </div>
      </header>

      <div className="my-4 flex items-center gap-6 w-max mx-auto">
        <p className="text-sm font-semibold text-primary">
          გჭირდება დახმარება სტატისტიკის გაუმჯობესებაში ?
        </p>
        <Button buttonType="secondary">გაუმჯობესება</Button>
      </div>

      <SectionTitle title="ვაკანსიები" size="base" />

      <div className="flex items-center justify-between gap-4">
        <Filter />

        <AnchorButton
          href={PATHS.company_create_vacancy}
          className="gap-3 font-semibold w-max p-0!"
        >
          <Plus size={26} className="translate-y-[2px]" />
          ვაკანსიის დამატება
        </AnchorButton>
      </div>

      <ul className="mt-2 grid grid-cols-[repeat(9,minmax(max-content,1fr))] rounded-xl overflow-hidden border border-t-0 border-bc">
        <TableItem isHeader>ვაკანსია</TableItem>
        <TableItem isHeader>დამატების თარიღი</TableItem>
        <TableItem isHeader>დარჩენილი დღეები</TableItem>
        <TableItem isHeader>ნახვა</TableItem>
        <TableItem isHeader>რეზიუმე</TableItem>
        <TableItem isHeader>არჩეული კანდიდატი</TableItem>
        <TableItem isHeader>აყვანილი</TableItem>
        <TableItem isHeader>სტატუსი</TableItem>
        <TableItem isHeader> </TableItem>

        {companyProfileData.slice(0, 7).map((item) => (
          <Fragment key={item.id}>
            <TableItem>{item.vacancy}</TableItem>
            <TableItem>{formatDate(item.creationDate)}</TableItem>
            <TableItem>{item.remainingDays}</TableItem>
            <TableItem>{item.views}</TableItem>
            <TableItem>{item.resume}</TableItem>
            <TableItem>{item.chosenCandidate}</TableItem>
            <TableItem>{item.hired}</TableItem>
            <TableItem>
              <Status status={item.status} />
            </TableItem>
            <TableItem alignCenter>
              <Options />
            </TableItem>
          </Fragment>
        ))}
      </ul>

      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default CompanyProfile;
