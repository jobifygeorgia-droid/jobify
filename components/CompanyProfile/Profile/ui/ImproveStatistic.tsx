import { Button } from "@/components/ui";

type ImproveStatisticT = {};

const ImproveStatistic: React.FC<ImproveStatisticT> = () => {
  return (
    <div className="my-4 flex items-center gap-6 w-max mx-auto">
      <p className="text-sm font-semibold text-primary">
        გჭირდება დახმარება სტატისტიკის გაუმჯობესებაში ?
      </p>

      <Button buttonType="secondary">გაუმჯობესება</Button>
    </div>
  );
};

export default ImproveStatistic;
