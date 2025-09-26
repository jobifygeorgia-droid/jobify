import { PATHS } from "@/lib/config";

import {
  Mail,
  Plus,
  Heart,
  Calendar,
  Notification,
} from "@/components/ui/icons";
import { AnchorButton } from "@/components/ui";

type CompanyActionsT = {
  children: React.ReactNode;
};

const CompanyActions: React.FC<CompanyActionsT> = ({ children }) => {
  return (
    <div className="flex items-center gap-6">
      <AnchorButton
        href={PATHS.company_create_vacancy}
        buttonType="primary"
        className="mr-4"
      >
        <Plus />
        ვაკანსია
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Calendar />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Heart />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Mail />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Notification />
      </AnchorButton>

      {children}
    </div>
  );
};

export default CompanyActions;
