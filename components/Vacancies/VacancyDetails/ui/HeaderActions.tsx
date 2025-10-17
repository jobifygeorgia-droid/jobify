import { AddToFavoriteButton, SendResumeButton } from "@/components/layouts";

type HeaderActionsT = {};

const HeaderActions: React.FC<HeaderActionsT> = () => {
  return (
    <div className="col-start-1 tablet:col-start-3 row-start-4 tablet:row-start-1 col-span-3 tablet:col-span-1 flex justify-end items-center gap-5">
      <AddToFavoriteButton className="min-w-9 size-9" />

      <SendResumeButton
        title="short"
        buttonProps={{
          className:
            "w-full tablet:w-max py-2! tablet:py-3! tablet:px-8 laptop:px-11 text-base-sm laptop:text-base!",
        }}
      />
    </div>
  );
};

export default HeaderActions;
