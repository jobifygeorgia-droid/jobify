const Divider: React.FC = () => {
  return (
    <div className="relative">
      <hr className="text-light-grey-active" />
      <span className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white text-base-sm font-bold px-9 leading-1">
        ან
      </span>
    </div>
  );
};

export default Divider;
