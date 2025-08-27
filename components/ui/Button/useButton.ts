import { AnchorButtonT, ButtonT } from "./button.types";
import { buttonStyles } from "./buttonStyles";

export default function useButton(props: ButtonT | AnchorButtonT) {
  const {
    fullWidth,
    buttonType,
    justify,
    rounded,
    textSize,
    paddingSize,
    className,
    ...componentProps
  } = props;

  const styles = buttonStyles({
    fullWidth,
    buttonType,
    justify,
    rounded,
    textSize,
    paddingSize,
    className,
  });

  return { styles, componentProps };
}
