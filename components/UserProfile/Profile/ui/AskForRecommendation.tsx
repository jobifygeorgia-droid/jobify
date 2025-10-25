import { AnchorButton } from "@/components/ui";

type AskForRecommendationT = {};

const AskForRecommendation: React.FC<AskForRecommendationT> = () => {
  return (
    <div className="my-5 py-3 tablet:py-6 px-2 tablet:px-9 flex flex-col tablet:flex-row items-center justify-between gap-5 border border-bc rounded-2xl bg-white">
      <p className="text-base tablet:text-md">
        მოითხოვე &nbsp;
        <span className="font-semibold text-blue">პროფესიონალის რჩევა</span>
        &nbsp; შენი CV-ის გასაუმჯობესებლად და კარიერული შანსების გასაზრდელად
      </p>

      <AnchorButton
        href="/"
        className="font-semibold max-sm:text-base-sm"
        buttonType="primary"
      >
        მოითხოვე რეკომენდაცია
      </AnchorButton>
    </div>
  );
};

export default AskForRecommendation;
