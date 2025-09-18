import { companyProfileData } from "@/data/data";

import { AnchorButton, ScrollableContainer } from "@/components/ui";
import { Plus } from "@/components/ui/icons";
import SendEmailTableRow from "./SendEmailTableRow";
import SendEmailTableHeader from "./SendEmailTableHeader";
import SendEmailModal from "./SendEmailModal";
import SendEmailHeader from "./SendEmailHeader";
import { GridTable } from "@/components/layouts";

type SendEmailT = {};

const SendEmail: React.FC<SendEmailT> = () => {
  return (
    <>
      <AnchorButton
        href={"?send-mails=1"}
        textSize="sm"
        buttonType="primary"
        paddingSize="base"
        className="ml-auto"
      >
        <Plus size={26} className="translate-y-[2px]" />
        ელ. ფოსტის გაგზავნა
      </AnchorButton>

      <SendEmailModal>
        <SendEmailHeader />

        <ScrollableContainer
          height={440}
          transparentScroll
          border
          spaceBetweenScrollbar={10}
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
