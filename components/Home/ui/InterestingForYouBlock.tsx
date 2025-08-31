import { Button } from "@/components/ui";

type InterestingForYouBlockT = {
  bgURL: string;
  title: string;
};

const InterestingForYouBlock: React.FC<InterestingForYouBlockT> = (props) => {
  const { bgURL, title } = props;

  return (
    <div
      className="col-span-3 row-span-1 last:col-span-1 last:col-start-7 last:row-start-1 last:row-span-2 last:justify-center last:[&>button]:w-full! px-6 py-4 rounded-3xl bg-no-repeat w-full bg-cover flex items-end justify-end"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <Button
        buttonType="primary"
        paddingSize="base-wide"
        className="bg-white! px-0! text-dark-grey-dark! font-semibold! text-base-sm! w-[170px]"
      >
        {title} &nbsp;&nbsp;&rarr;
      </Button>
    </div>
  );
};

export default InterestingForYouBlock;
