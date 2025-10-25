type DeleteVacancyDialogErrorT = {
  message: string;
};

const DeleteVacancyDialogError: React.FC<DeleteVacancyDialogErrorT> = (
  props
) => {
  const { message } = props;

  return (
    <p className="text-red-600">
      {message || "ვაკანსიის წაშლა ვერ მოხერხდა. გთხოვთ სცადოთ თავიდან."}
    </p>
  );
};

export default DeleteVacancyDialogError;
