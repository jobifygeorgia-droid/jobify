import VerifyEmailContainer from "../ui/VerifyEmailContainer";

const VerifyEmailFailure: React.FC = () => {
  return (
    <VerifyEmailContainer>
      <div className="flex flex-col justify-start items-center gap-4 h-[140px]">
        <div className="text-center flex flex-col gap-4">
          <span className="font-medium text-red text-md">
            თქვენი ელ. ფოსტის ვერიფიკაცია ვერ მოხერხდა
          </span>
        </div>
      </div>
    </VerifyEmailContainer>
  );
};

export default VerifyEmailFailure;
