import { Skeleton } from "@mui/material";

const AsideSkeleton: React.FC = () => {
  return (
    <div className="flex-1 w-full">
      <Skeleton
        sx={{ height: { xs: 220, md: 400 } }}
        width={"100%"}
        className="mb-4"
        variant="rounded"
      />
    </div>
  );
};

export default AsideSkeleton;
