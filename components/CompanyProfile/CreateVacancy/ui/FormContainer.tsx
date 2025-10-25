import { ScrollableContainer } from "@/components/ui";

type FormContainerT = {
  disableScroll: boolean;
  children: React.ReactNode;
};

const FormContainer: React.FC<FormContainerT> = ({
  children,
  disableScroll,
}) => {
  return (
    <div className="flex-1 tablet:pt-2 desktop-lg:pt-6 pb-2">
      <ScrollableContainer
        rounded={0}
        height={"100%"}
        disableScroll={disableScroll}
        transparentScroll={disableScroll}
        wrapperClassName="tablet:w-[600px] mx-auto! relative"
      >
        {children}
      </ScrollableContainer>
    </div>
  );
};

export default FormContainer;
