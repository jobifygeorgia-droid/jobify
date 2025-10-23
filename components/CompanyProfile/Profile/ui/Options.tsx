"use client";

import { useParams, useRouter } from "next/navigation";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { usePopupsContext } from "@/providers/PopupsProvider";

import {
  OptionItem,
  DeleteVacancyDialogError,
  DeleteVacancyDialogContent,
} from "./";
import { Menu } from "@/components/ui";
import { OptionsDots, Eye, Delete, Edit } from "@/components/ui/icons";

type OptionsT = {
  vacancyId: string;
  vacancyTitle: string;
};

const Options: React.FC<OptionsT> = ({ vacancyId, vacancyTitle }) => {
  const router = useRouter();
  const params = useParams();

  const { showDialog, setDialogError, closeDialog, addAlert } =
    usePopupsContext();

  const entityId = (params?.entityId as string) || "";

  const onViewDetails = () => {
    if (!entityId) return;

    router.push(DYNAMIC_ROUTES.company_vacancy_details(entityId, vacancyId));
  };

  const onEdit = () => {};

  const deleteVacancy = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error("Failed to delete vacancy");
      closeDialog();
      addAlert({
        type: "success",
        title: `ვაკანსიის წაშლა`,
        text: `ვაკანსია - ${vacancyTitle} წაიშალა წარმატებით.`,
      });
    } catch (error: any) {
      setDialogError(<DeleteVacancyDialogError message={error.message} />);
    }
  };

  const onDelete = () => {
    showDialog({
      type: "danger",
      title: "ვაკანსიის წაშლა",
      loadingOnConfirm: true,
      content: <DeleteVacancyDialogContent vacancyTitle={vacancyTitle} />,
      onConfirmCallback: deleteVacancy,
    });
  };

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
