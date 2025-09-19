import { Container } from "@/components/ui";
import CreateStatement from "@/components/UserProfile/CreateStatement/CreateStatement";
import { PageParamsT } from "@/interface/global.types";

const Page: React.FC<PageParamsT> = async () => {
  return (
    <Container>
      <CreateStatement />
    </Container>
  );
};

export default Page;
