import { SecondarySpinner } from "@/components/ui";

type MapFallbackT = {};

const MapFallback: React.FC<MapFallbackT> = () => {
  return (
    <div className="bg-light-grey-active h-full w-full flex flex-col gap-4 items-center justify-center text-white">
      <span className="text-base-sm font-medium tracking-wider">
        Loading Map
      </span>
      <SecondarySpinner />
    </div>
  );
};

export default MapFallback;
