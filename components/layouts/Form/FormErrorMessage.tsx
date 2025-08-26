type FormErrorMessageT = {
  message: string;
};

const FormErrorMessage: React.FC<FormErrorMessageT> = ({ message }) => {
  return <p className="text-base-sm text-red">{message}</p>;
};

export default FormErrorMessage;
