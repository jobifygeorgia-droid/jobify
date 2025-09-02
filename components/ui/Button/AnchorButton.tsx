import Link from "next/link";

import { AnchorButtonT } from "./button.types";
import useButton from "./useButton";

const AnchorButton: React.FC<AnchorButtonT> = (props) => {
  const { componentProps, styles } = useButton(props);

  return (
    <Link {...(componentProps as AnchorButtonT)} className={styles}>
      {props.children}
    </Link>
  );
};

export default AnchorButton;
