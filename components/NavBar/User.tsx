import { AnchorButton } from "@/components/ui";
import Link from "next/link";

const User: React.FC = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href="/user/profile/123">პროფილი</Link>
      <AnchorButton
        scroll={false}
        href="?auth=base"
        buttonType="primary"
        paddingSize="base-wider"
      >
        შესვლა
      </AnchorButton>
    </div>
  );
};

export default User;
