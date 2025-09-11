import { SendResumeProvider } from "@/providers";
import VacancyDetails from "@/components/Vacancies/VacancyDetails/VacancyDetails";

const Page: React.FC = () => {
  return (
    <SendResumeProvider>
      <VacancyDetails />
    </SendResumeProvider>
  );
};

export default Page;
