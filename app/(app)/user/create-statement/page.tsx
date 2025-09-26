import { Container } from "@/components/ui";
import CreateStatement from "@/components/UserProfile/CreateStatement/CreateStatement";
import { PageParamsT } from "@/interface/global.types";

const Page: React.FC<PageParamsT> = async () => {
  return (
    <div className="bg-background tablet:bg-background-secondary pt-2 pb-6 tablet:py-6">
      <Container>
        <CreateStatement />
      </Container>
    </div>
  );
};

export default Page;
