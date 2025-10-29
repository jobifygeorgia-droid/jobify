import { Button } from "@/components/ui";

type CVViewT = {};

const CVView: React.FC<CVViewT> = () => {
  return (
    <div className="flex-1 h-[84vh] sticky top-24 flex flex-col gap-8 pt-5 pb-2">
      <div>
        <div className="mx-12">labels</div>

        <div className="bg-light-grey rounded-2xl max-h-full aspect-[9/12] w-[400px] mx-auto"></div>
      </div>

      <div className="flex items-center rounded-2xl justify-center gap-6 mt-auto py-5 shadow-[0px_4px_14px_rgba(0,0,0,0.05)]">
        <Button paddingSize="base-wider" buttonType="tertiary">
          გაუქმება
        </Button>

        <Button paddingSize="base-wider" buttonType="primary" type="submit">
          შენახვა
        </Button>
      </div>
    </div>
  );
};

export default CVView;
