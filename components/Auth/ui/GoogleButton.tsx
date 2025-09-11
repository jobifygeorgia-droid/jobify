import { Button } from "@/components/ui";
import { Google } from "@/components/ui/icons";

const GoogleButton: React.FC = () => {
  return (
    <Button buttonType="outlined" fullWidth>
      <Google width={20} height={20} />
      <span className="text-base-sm font-medium">Google</span>
    </Button>
  );
};

export default GoogleButton;
