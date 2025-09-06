import { AnchorButton, Pagination } from "@/components/ui";
import Statistic from "./ui/Statistic";
import { Heart, CV, Eye } from "@/components/ui/icons";
import { vipVacancies } from "@/data/data";
import { VacancyCard } from "@/components/layouts";

type ProfileT = {};

const Profile: React.FC<ProfileT> = () => {
  return (
    <div className="py-7">
      <div className="py-4 px-7 rounded-3xl bg-blue-light shadow-[0px_4px_4px,rgba(0,0,0,0.25)] flex items-center gap-14">
        <figure className="size-[87px] aspect-square relative bg-light-grey rounded-full overflow-hidden"></figure>

        <div className="flex flex-col gap-5">
          <span className="font-bold text-md">ანანო თარხნიშვილი</span>

          <div className="flex items-center gap-11">
            <span>ფოტოს შეცვლა</span>
            <span>რეზიუმეს ნახვა</span>
          </div>
        </div>

        <div className="ml-auto">
          <AnchorButton
            href="/user/profile/123/cv"
            className="bg-orange-light-hover text-orange font-semibold hover:text-orange hover:bg-orange-light-hover"
          >
            შექმენი CV
          </AnchorButton>
        </div>
      </div>

      <div className="my-5 py-6 px-9 flex items-center justify-between gap-5 border border-bc rounded-2xl">
        <p className="text-md">
          მოითხოვე &nbsp;
          <span className="font-semibold text-blue">პროფესიონალის რჩევა</span>
          &nbsp; შენი CV-ის გასაუმჯობესებლად და კარიერული შანსების გასაზრდელად
        </p>

        <AnchorButton href="" className="font-semibold" buttonType="primary">
          მოითხოვე რეკომენდაცია
        </AnchorButton>
      </div>

      <div className="flex items-center justify-between">
        <Statistic
          title="ფავორიტი ვაკანსიები"
          value="8976"
          highlighted
          Icon={Heart}
        />

        <Statistic title="გაგზავნილი რეზიუმე" value="89" Icon={CV} />

        <Statistic title="პროფილის ნახვები" value="70" Icon={Eye} />
      </div>

      <div className="my-12">kind of filter here</div>

      <div className="flex flex-col gap-4">
        {vipVacancies.slice(0, 5).map((vacancy) => (
          <VacancyCard key={vacancy.id} {...vacancy} />
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Profile;
