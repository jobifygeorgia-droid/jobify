import { formatDate } from "@/lib/utils";

type HeaderExpiryDateT = {
  expiryDate: string;
};

const HeaderExpiryDate: React.FC<HeaderExpiryDateT> = ({ expiryDate }) => {
  return (
    <div className="row-start-1 tablet:row-start-2 self-start col-span-3 tablet:col-span-1 flex items-center justify-end gap-2 text-sm laptop:text-base-sm">
      <span className="text-light-grey-dark-active">ვაკანსია აქტიურია:</span>
      <span className="text-red">{formatDate(expiryDate)}</span>
    </div>
  );
};

export default HeaderExpiryDate;
