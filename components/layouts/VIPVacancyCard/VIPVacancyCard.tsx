import classnames from "classnames";

import { VacancyT } from "@/interface/db/vacancies.types";
import { CardFooter, CardBody, CardHeader } from "./ui";
import { showSalaryRange } from "@/lib/utils";

type VIPVacancyCardT = {
  vacancy: VacancyT;
  className?: string;
  isAuthenticated: boolean;
};

const VIPVacancyCard: React.FC<VIPVacancyCardT> = (props) => {
  const { className, vacancy, isAuthenticated } = props;

  const salaryRange = showSalaryRange(vacancy.min_salary, vacancy.max_salary);

  return (
    <div
      className={classnames(
        className,
        "bg-white max-w-[250px] laptop:max-w-[360px] w-full aspect-auto border border-bc px-4 laptop:px-7 py-3 laptop:py-6 rounded-2xl flex flex-col gap-3"
      )}
    >
      <div className="flex flex-col gap-1 tablet:gap-3">
        <CardHeader
          publishedDate={vacancy.published_date}
          companyName={vacancy.employer.company_name}
          companyId={vacancy.employer.company_id_number}
          companyLogo={
            vacancy.employer?.profile_image ||
            "https://images.unsplash.com/photo-1706879349357-f17b91de99a5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <CardBody
          id={vacancy.id}
          title={vacancy.title}
          salaryRange={salaryRange}
          isAuthenticated={isAuthenticated}
        />
      </div>

      <CardFooter
        location={vacancy.location}
        vacancyType={vacancy.vacancy_type}
      />
    </div>
  );
};

export default VIPVacancyCard;
