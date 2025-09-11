import { SendResumeProvider } from "@/providers";

import { Container } from "@/components/ui";
import VacancyDetails from "@/components/Vacancies/VacancyDetails/VacancyDetails";

const Page: React.FC = () => {
  return (
    <SendResumeProvider>
      <Container>
        <VacancyDetails />
      </Container>
    </SendResumeProvider>
  );
};

export default Page;
