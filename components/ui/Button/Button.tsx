import { ButtonT } from "./button.types";
import useButton from "./useButton";

const Button: React.FC<ButtonT> = (props) => {
  const { componentProps, styles } = useButton(props);

  return (
    <button {...(componentProps as ButtonT)} className={styles}>
      {props.children}
    </button>
  );
};

export default Button;
