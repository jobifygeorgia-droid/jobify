import { Skeleton } from "@mui/material";

const HeaderSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton
        sx={{ height: { xs: 140, md: 70 } }}
        width={"100%"}
        variant="rounded"
      />
    </div>
  );
};

export default HeaderSkeleton;
