"use client";

import { companyInbox } from "@/data/data";
import { DYNAMIC_ROUTES } from "@/lib/config";

import { ReceivedResumeCardCubic } from "@/components/layouts";
import { Chip, MultipleSlider, ViewAllButton } from "@/components/ui";

type InboxT = {};

const Inbox: React.FC<InboxT> = () => {
  const onFilter = () => {};

  return (
    <div className="rounded-xl border border-blue-light-hover p-8 flex flex-col gap-6">
      <span className="font-semibold">შემოსული რეზიუმეები</span>

      <div className="flex items-center gap-2">
        <Chip className="text-sm!" isActive={true} onClick={onFilter}>
          ახალი
        </Chip>

        <Chip className="text-sm!">განხილული</Chip>

        <Chip className="text-sm!">ინტერვიუს ეტაპზე</Chip>
      </div>

      <MultipleSlider
        breakpoints={{
          220: { slidesPerView: 1.5, slidesPerGroup: 1.5, spaceBetween: 0 },
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
