import Skeleton from "@mui/material/Skeleton";

const VipVacancyCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white max-w-[250px] laptop:max-w-[360px] w-full aspect-auto border border-bc px-4 laptop:px-7 py-3 laptop:py-6 rounded-2xl flex flex-col gap-3">
      <div className="flex flex-col gap-1 tablet:gap-3">
        {/* Header */}
        <div className="w-full flex items-start gap-3 tablet:gap-5">
          <Skeleton
            variant="rectangular"
            className="rounded-md"
            sx={{
              width: { xs: 36, sm: 56 },
              minWidth: { xs: 36, sm: 56 },
              height: { xs: 36, sm: 56 },
            }}
          />

          <div className="flex flex-col gap-1 tablet:gap-2 w-full">
            <Skeleton variant="text" width={"100%"} height={20} />
            <Skeleton variant="text" width={80} height={15} />
          </div>
        </div>

        <div className="flex items-center gap-1 laptop:gap-2">
          <Skeleton variant="text" width={50} height={26} />
          <Skeleton variant="text" width={26} height={26} />
        </div>

        {/* Body */}
        <div className="flex flex-col gap-1">
          <Skeleton variant="text" width={"80%"} height={20} />
          <Skeleton variant="text" width={"60%"} height={15} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-1">
        <Skeleton variant="text" width={"40%"} height={15} />
        <Skeleton variant="text" width={"30%"} height={15} />
      </div>
    </div>
  );
};

export default VipVacancyCardSkeleton;
