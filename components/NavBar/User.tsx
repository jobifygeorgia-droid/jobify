import { AnchorButton } from "@/components/ui";

const User: React.FC = () => {
  return (
    <div>
      <AnchorButton href="?auth=base" paddingSize="base-wider">
        შესვლა
      </AnchorButton>
    </div>
  );
};

export default User;
