import classnames from "classnames";

type StatusT = {
  status: string;
};

const Status: React.FC<StatusT> = ({ status }) => {
  const text =
    status === "active"
      ? "აქტიური"
      : status === "archive"
      ? "არქივი"
      : status === "draft"
      ? "დრაფტი"
      : "";

  return (
    <span
      className={classnames(
        "flex items-center gap-2 rounded-full w-max px-2 py-[2px] text-sm",
        {
          "bg-green-light text-green": status === "active",
          "bg-red-light text-red": status === "archive",
          "bg-light-grey text-dark-grey": status === "draft",
        }
      )}
    >
      <span>&#9679;</span>
      <span>{text}</span>
    </span>
  );
};

export default Status;
