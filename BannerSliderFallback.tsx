import Skeleton from "@mui/material/Skeleton";

type BannerSliderFallbackT = {};

const BannerSliderFallback: React.FC<BannerSliderFallbackT> = () => {
  return (
    <div className="w-full flex flex-col gap-4 laptop:gap-6">
      <Skeleton
        variant="rectangular"
        className="rounded-xl"
        sx={{ width: "100%", height: { xs: 85, sm: 95, md: 135 } }}
      />
      <div className="flex flex-col gap-3 laptop:gap-5">
        <Skeleton variant="text" width={"80%"} height={40} />
        <p>
          <Skeleton variant="text" width={"100%"} height={20} />
          <Skeleton variant="text" width={"80%"} height={20} />
        </p>
      </div>
    </div>
  );
};

export default BannerSliderFallback;
