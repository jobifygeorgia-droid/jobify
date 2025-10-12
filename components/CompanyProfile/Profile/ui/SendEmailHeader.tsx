const SendEmailHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-center text-primary font-bold text-base-sm tablet:text-md">
        გაუგზავნე ელ.ფოსტა კანდიდატებს
      </span>
      <span className="text-center text-sm tablet:text-base-sm text-secondary">
        მონიშნე ვაკანსიები, რომლებსაც მათ გაუზიარებ
      </span>
    </div>
  );
};

export default SendEmailHeader;
