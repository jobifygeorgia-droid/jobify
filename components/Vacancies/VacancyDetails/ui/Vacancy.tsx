import { notFound } from "next/navigation";

import { getCompanyOwnVacancy } from "@/lib/actions/vacancy.actions";

import { Header, VacancyDetailsBody, Aside } from "./";
import { EmptyMessage, ErrorMessage } from "@/components/ui";
import { VacancyAdditionalDetails } from "@/components/layouts";

type VacancyT = {
  vacancyId: string;
};

const Vacancy: React.FC<VacancyT> = async ({ vacancyId }) => {
  const { data, error } = await getCompanyOwnVacancy(vacancyId);

  const salaryRange = `${data?.min_salary} - ${data?.max_salary}`;

  if (error && error.status === 404) notFound();

  return (
    <>
      {data && !error && (
        <>
          <Header
            title={data.title}
            expiryDate={data.expiry_date}
            vacancyType={data.vacancy_type}
            phone={data.employer.phone_number}
            email={data.employer.company_id_number}
          />

          <div className="flex flex-col-reverse laptop:flex-row items-start gap-5 tablet:gap-6 laptop:gap-20 py-5">
            <VacancyDetailsBody
              advantages={data.advantages}
              description={data.description}
              requirements={data.requirements}
            />

            <Aside>
              <VacancyAdditionalDetails
                location={data.location}
                salaryRange={salaryRange}
                expiryDate={data.expiry_date}
                publishDate={data.published_date}
              />
            </Aside>
          </div>
        </>
      )}

      {error && <ErrorMessage message={error.message} />}

      {!data && !error && <EmptyMessage message="ვაკანსია არ მოიძებნა" />}
    </>
  );
};

export default Vacancy;
