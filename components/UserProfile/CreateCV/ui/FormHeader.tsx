type FormHeaderT = {};

const FormHeader: React.FC<FormHeaderT> = () => {
  return (
    <div className="flex items-center gap-2 border border-bc rounded-2xl py-4 px-5">
      <figure className="size-16 aspect-square rounded-full overflow-hidden bg-light-grey"></figure>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg">ანანო თარხნიშვილი</span>
        <span className="text-base-sm">ფოტოს შეცვლა</span>
      </div>
    </div>
  );
};

export default FormHeader;
