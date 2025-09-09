import { IconT } from "@/components/ui/icons";

type ReviewItemT = {
  value: string;
  Icon: React.ComponentType<IconT>;
};

const ReviewItem: React.FC<ReviewItemT> = (props) => {
  const { Icon, value } = props;

  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center">
        <Icon className="text-blue" size={22} />
      </span>

      <span className="text-sm">{value}</span>
    </div>
  );
};

export default ReviewItem;
