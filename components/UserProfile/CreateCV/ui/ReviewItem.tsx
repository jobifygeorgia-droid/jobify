import { IconPropsT } from "@/components/ui/icons";

type ReviewItemT = {
  value: string;
  Icon: React.ComponentType<IconPropsT>;
};

const ReviewItem: React.FC<ReviewItemT> = (props) => {
  const { Icon, value } = props;

  return (
    <div className="flex items-center gap-4">
      <span>
        <Icon className="fill-blue" />
      </span>

      <span className="text-sm">{value}</span>
    </div>
  );
};

export default ReviewItem;
