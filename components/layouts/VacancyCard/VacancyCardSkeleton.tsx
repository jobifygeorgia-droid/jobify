import { Skeleton } from "@mui/material";

type VacancyCardSkeletonT = {};

const VacancyCardSkeleton: React.FC<VacancyCardSkeletonT> = () => {
  return (
    <div className="max-w-full w-full px-3 laptop:px-4 py-2 laptop:py-3 rounded-2xl bg-white border border-bc flex items-center gap-2 tablet:gap-5">
      <div className="w-full flex items-center gap-2 tablet:gap-5">
        <Skeleton
          variant="rounded"
          className="size-11 min-h-11  laptop:size-16 laptop:min-h-16"
        />

        <div className="w-full flex flex-col gap-2 laptop:gap-3">
          <div className="flex items-center gap-3 laptop:gap-7">
            <Skeleton
              variant="rectangular"
              sx={{
                height: { xs: 12, md: 15 },
                width: { xs: "40%", md: "25%" },
              }}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-2xl!"
              sx={{
                width: { xs: "20%", md: "10%" },
                height: { xs: 15, md: 18 },
              }}
            />
          </div>

          <div className="flex items-center gap-2 tablet:gap-6">
            <Skeleton
              variant="rectangular"
              sx={{
                height: { xs: 9, md: 12 },
                width: { xs: "25%", md: "10%" },
              }}
            />
            <Skeleton
              variant="rectangular"
              sx={{
                height: { xs: 9, md: 12 },
                width: { xs: "25%", md: "15%" },
              }}
            />
            <Skeleton
              variant="rectangular"
              sx={{
                height: { xs: 9, md: 12 },
                width: { xs: "25%", md: "15%" },
              }}
            />
          </div>
        </div>
      </div>

      <Skeleton
        variant="circular"
        sx={{
          height: { xs: 35, md: 40 },
          width: { xs: 35, md: 40 },
        }}
      />
    </div>
  );
};

export default VacancyCardSkeleton;
