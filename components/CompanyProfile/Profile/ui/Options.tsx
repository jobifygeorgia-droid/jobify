"use client";

import { useParams, useRouter } from "next/navigation";

import { Menu } from "@/components/ui";
import OptionItem from "./OptionItem";
import { OptionsDots, Eye, Delete, Edit } from "@/components/ui/icons";
import { DYNAMIC_ROUTES } from "@/lib/config";

type OptionsT = {
  vacancyId: string;
};

const Options: React.FC<OptionsT> = ({ vacancyId }) => {
  const router = useRouter();
  const params = useParams();

  const entityId = (params?.entityId as string) || "";

  const onViewDetails = () => {
    if (!entityId) return;

    router.push(DYNAMIC_ROUTES.company_vacancy_details(entityId, vacancyId));
  };

  const onEdit = () => {};

  const onDelete = () => {};

  return (
    <div>
      <Menu>
        <Menu.MenuButton className="bg-blue-light size-7 flex items-center justify-center rounded-full">
          <OptionsDots className="text-dark-grey" />
        </Menu.MenuButton>

        <Menu.MenuList>
          <OptionItem
            Icon={Eye}
            text="დეტალურად ნახვა"
            onClick={onViewDetails}
          />
          <OptionItem onClick={onDelete} Icon={Delete} text="წაშლა" isDanger />
          <OptionItem onClick={onEdit} Icon={Edit} text="რედაქტირება" />
        </Menu.MenuList>
      </Menu>
    </div>
  );
};

export default Options;
