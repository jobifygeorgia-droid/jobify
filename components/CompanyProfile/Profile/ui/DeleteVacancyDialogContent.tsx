import { toGenitive } from "@/lib/utils";

type DeleteVacancyDialogContentT = {
  vacancyTitle: string;
};

const DeleteVacancyDialogContent: React.FC<DeleteVacancyDialogContentT> = (
  props
) => {
  const { vacancyTitle } = props;

  return (
    <p className="flex flex-col gap-1">
      <span>
        დარწმუნებული ხართ, რომ გსურთ ვაკანსია - &nbsp;
        <strong>{toGenitive(vacancyTitle)}</strong>&nbsp; წაშლა ?
      </span>
      <span>ეს მოქმედება შეუქცევადია.</span>
    </p>
  );
};

export default DeleteVacancyDialogContent;
