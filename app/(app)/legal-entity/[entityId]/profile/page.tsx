import { Container } from "@/components/ui";
import CompanyProfile from "@/components/CompanyProfile/Profile/CompanyProfile";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <div className="bg-background-secondary">
      <Container>
        <CompanyProfile />
      </Container>
    </div>
  );
};

export default Page;
