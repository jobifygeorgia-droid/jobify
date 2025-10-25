import { Skeleton } from "@mui/material";

const BodySkeleton: React.FC = () => {
  return (
    <div className="flex-2 w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width={160} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="50%" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="70%" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width={180} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="50%" />
      </div>
    </div>
  );
};

export default BodySkeleton;
