import { PageParamsT } from "@/interface/global.types";

import { Container } from "@/components/ui";
import UserProfile from "@/components/UserProfile/Profile/Profile";

const Page: React.FC<PageParamsT> = () => {
  return (
    <Container>
      <UserProfile />
    </Container>
  );
};

export default Page;
