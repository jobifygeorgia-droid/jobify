"use client";

import { useDevice } from "@/hooks/utils";
import { companyProfileData } from "@/data/data";

import {
  SendEmailModal,
  SendEmailHeader,
  SendEmailTableRow,
  SendEmailTableHeader,
} from "./";
import { Mail } from "@/components/ui/icons";
import { GridTable } from "@/components/layouts";
import { AnchorButton, ScrollableContainer } from "@/components/ui";

type SendEmailT = {};

const SendEmail: React.FC<SendEmailT> = () => {
  const device = useDevice();

  return (
    <>
      <AnchorButton
        textSize="sm"
        paddingSize="base"
        buttonType="primary"
        href={"?send-mails=1"}
        className="laptop:ml-auto text-sm! tablet:text-base-sm! max-tablet:px-2 max-tablet:py-2!"
      >
        <Mail className="translate-y-[2px] text-lg! tablet:text-2xl!" />
        ელ. ფოსტის გაგზავნა
      </AnchorButton>

      <SendEmailModal>
        <SendEmailHeader />

        <ScrollableContainer
          border
          transparentScroll
          spaceBetweenScrollbar={10}
          height={
            device === "mobile" ? "80vh" : device === "tablet" ? "82vh" : 440
          }
          wrapperClassName="w-max desktop-sm:w-[97%]"
          containerClassName=""
        >
          <GridTable cols={5} className="rounded-[inherit] h-full">
            <SendEmailTableHeader />
            {companyProfileData.map((item) => (
              <SendEmailTableRow
                key={item.id}
                views={item.views}
                position={item.vacancy}
                createdAt={item.creationDate}
              />
            ))}
          </GridTable>
        </ScrollableContainer>
      </SendEmailModal>
    </>
  );
};

export default SendEmail;
