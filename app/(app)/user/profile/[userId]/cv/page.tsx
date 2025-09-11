import { Container } from "@/components/ui";
import CreateCV from "@/components/UserProfile/CreateCV/CreateCV";

type PageT = {};

const Page: React.FC<PageT> = () => {
  return (
    <Container>
      <CreateCV />
    </Container>
  );
};

export default Page;
