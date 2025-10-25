"use client";

import { useParams, useRouter } from "next/navigation";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { usePopupsContext } from "@/providers/PopupsProvider";

import {
  DeleteVacancyDialogError,
  DeleteVacancyDialogContent,
} from "@/components/CompanyProfile/Profile/ui";
import { useDeleteVacancyQuery } from "@/hooks/api/vacancies";

export default function useVacancyOptions(
  vacancyId: string,
  vacancyTitle: string
) {
  const router = useRouter();
  const params = useParams();

  const { showDialog, setDialogError, closeDialog, addAlert } =
    usePopupsContext();

  const { deleteVacancyQuery } = useDeleteVacancyQuery();

  const entityId = (params?.entityId as string) || "";

  const onViewDetails = () => {
    if (!entityId) return;
    router.push(DYNAMIC_ROUTES.company_vacancy_details(entityId, vacancyId));
  };

  const onEdit = () => {};

  const onDeleteSuccess = () => {
    closeDialog();
    addAlert({
      type: "success",
      title: `ვაკანსიის წაშლა`,
      text: `ვაკანსია - ${vacancyTitle} წაიშალა წარმატებით.`,
    });
  };

  const onDeleteError = (message: string) => {
    setDialogError(<DeleteVacancyDialogError message={message} />);
  };

  const deleteVacancy = async () =>
    await deleteVacancyQuery(vacancyId, onDeleteSuccess, onDeleteError);

  const onDelete = () =>
    showDialog({
      type: "danger",
      title: "ვაკანსიის წაშლა",
      loadingOnConfirm: true,
      onConfirmCallback: deleteVacancy,
      content: <DeleteVacancyDialogContent vacancyTitle={vacancyTitle} />,
    });

  return { onEdit, onDelete, onViewDetails };
}
