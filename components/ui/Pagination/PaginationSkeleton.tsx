import classnames from "classnames";
import { Skeleton } from "@mui/material";

type PaginationSkeletonT = {
  className?: string;
};

const PaginationSkeleton: React.FC<PaginationSkeletonT> = (props) => {
  const { className = "" } = props;

  return (
    <div className={classnames("flex justify-center", className)}>
      <Skeleton height={45} sx={{ width: { xs: "80%", sm: 400, md: 500 } }} />
    </div>
  );
};

export default PaginationSkeleton;
