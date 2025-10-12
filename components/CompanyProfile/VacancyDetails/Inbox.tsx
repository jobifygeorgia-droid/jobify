"use client";

import { companyInbox } from "@/data/data";
import { DYNAMIC_ROUTES } from "@/lib/config";

import { ReceivedResumeCardCubic } from "@/components/layouts";
import { Chip, MultipleSlider, ViewAllButton } from "@/components/ui";

type InboxT = {};

const Inbox: React.FC<InboxT> = () => {
  const onFilter = () => {};

  return (
    <div className="rounded-xl border border-blue-light-hover py-5 px-4 laptop:p-8 flex flex-col gap-4 laptop:gap-6">
      <span className="font-semibold">შემოსული რეზიუმეები</span>

      <div className="flex items-center gap-1 laptop:gap-2">
        <Chip className="text-sm!" isActive={true} onClick={onFilter}>
          ახალი
        </Chip>

        <Chip className="text-sm!">განხილული</Chip>

        <Chip className="text-sm!">ინტერვიუს ეტაპზე</Chip>
      </div>

      <MultipleSlider
        breakpoints={{
          220: { slidesPerView: 1.05, slidesPerGroup: 1, spaceBetween: 0 },
          640: { slidesPerView: 2.4, slidesPerGroup: 2, spaceBetween: 0 },
          1056: { slidesPerView: 1.45, slidesPerGroup: 1, spaceBetween: 0 },
        }}
        slides={companyInbox.slice(0, 8).map((resume) => (
          <div key={resume.id} className="w-[275px]">
            <ReceivedResumeCardCubic {...resume} />
          </div>
        ))}
      />

      <ViewAllButton
        className="ml-auto"
        href={DYNAMIC_ROUTES.company_inbox("123", "456")}
      />
    </div>
  );
};

export default Inbox;
