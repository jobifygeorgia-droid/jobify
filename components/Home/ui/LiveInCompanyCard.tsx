import { Button } from "@/components/ui";

type LiveInCompanyCardT = {
  id: number;
  title: string;
};

const LiveInCompanyCard: React.FC<LiveInCompanyCardT> = (props) => {
  const { title } = props;

  return (
    <div className="border border-bc rounded-2xl px-8 py-6 flex items-center gap-5 bg-white">
      <figure className="size-14 aspect-square bg-light-grey rounded-[10px] overflow-hidden"></figure>
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base">{title}</span>
        <Button
          buttonType="text"
          className="w-max! p-0! rounded-none text-base-sm font-normal text-blue!"
        >
          <span>დათვალიერება</span>
          <span>&rarr;</span>
        </Button>
      </div>
    </div>
  );
};

export default LiveInCompanyCard;
