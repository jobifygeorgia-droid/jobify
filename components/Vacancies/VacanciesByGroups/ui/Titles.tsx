type TitlesT = {
  title: string;
  subTitle: string;
};

const Titles: React.FC<TitlesT> = ({ title, subTitle }) => {
  return (
    <div className="mt-4 w-full max-w-[800px] mx-auto flex flex-col gap-3 justify-center items-center text-center">
      <span className="font-semibold text-base-sm tablet:text-lg">{title}</span>
      <span className="text-sm tablet:text-base desktop-sm:text-md">
        {subTitle}
      </span>
    </div>
  );
};

export default Titles;
