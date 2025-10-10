import { Button } from "@/components/ui";

type ForgotPasswordActionButtonsT = {
  titles: [string, string];
  onCancel: () => void;
  disabled: boolean;
};

const ForgotPasswordActionButtons: React.FC<ForgotPasswordActionButtonsT> = (
  props
) => {
  const { titles, onCancel, disabled } = props;

  return (
    <div className="mt-16 flex flex-col gap-2">
      <Button fullWidth type="submit" buttonType="primary" disabled={disabled}>
        {titles[0]}
      </Button>

      <Button
        fullWidth
        type="button"
        onClick={onCancel}
        buttonType="text"
        disabled={disabled}
      >
        {titles[1]}
      </Button>
    </div>
  );
};

export default ForgotPasswordActionButtons;
