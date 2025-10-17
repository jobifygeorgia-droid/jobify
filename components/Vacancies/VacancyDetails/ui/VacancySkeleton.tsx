import { HeaderSkeleton, BodySkeleton, AsideSkeleton } from "./";

const VacancySkeleton: React.FC = () => {
  return (
    <>
      <HeaderSkeleton />

      <div className="flex flex-col-reverse laptop:flex-row gap-5 laptop:gap-20 py-5">
        <BodySkeleton />

        <AsideSkeleton />
      </div>
    </>
  );
};

export default VacancySkeleton;
