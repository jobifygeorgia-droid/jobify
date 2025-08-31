import { Button } from "@/components/ui";

type VacanciesForDifferentGroupsCardT = {
  title: string;
};

const VacanciesForDifferentGroupsCard: React.FC<
  VacanciesForDifferentGroupsCardT
> = (props) => {
  const { title } = props;

  return (
    <div className="segment-card flex-1 flex flex-col h-[290px] rounded-4xl p-4 text-white relative">
      <div className="segment-card--content absolute top-[80px]">
        <div className="text-white h-full w-full flex flex-col justify-between">
          <span className="font-semibold text-md">დასაქმების შესაძლებლობა</span>
          <span className="text-3xl">{title}</span>
        </div>
      </div>

      <div className="absolute top-[80%] left-4 right-4">
        <Button
          fullWidth
          buttonType="text"
          className="justify-between! px-0! text-white"
        >
          <span>სრულად ნახვა</span>
          <span>&rarr;</span>
        </Button>
      </div>
    </div>
  );
};

export default VacanciesForDifferentGroupsCard;
