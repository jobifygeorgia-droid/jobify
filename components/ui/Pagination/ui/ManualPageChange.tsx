import { useEffect, useState } from "react";

type ManualPageChangeT = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const ManualPageChange: React.FC<ManualPageChangeT> = (props) => {
  const { currentPage, pagesCount, onPageChange } = props;

  const [inputValue, setInputValue] = useState(currentPage);

  function onManualPageChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formValues = new FormData(e.currentTarget);
    const target = formValues.get("manual-page-change");
    const newPage = Math.abs(Number(target));

    if (newPage > pagesCount) onPageChange(pagesCount);
    else if (!isNaN(newPage)) onPageChange(newPage);
    else return;
  }

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  return (
    <form onSubmit={onManualPageChange} className="m-0 p-0">
      <div className="hidden laptop:flex items-center gap-3 text-base-sm">
        <label htmlFor="manual-page-pagination">გვერდი</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          name="manual-page-change"
          className="border border-bc w-14 h-10 rounded-lg text-center outline-none"
        />
        <span>{pagesCount}&nbsp;-დან</span>
      </div>
    </form>
  );
};

export default ManualPageChange;
