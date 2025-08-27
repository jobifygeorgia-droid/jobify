"use client";

import { useState } from "react";

import { Radio, TextField } from "@/components/layouts/Form";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { AnchorButton, Button } from "@/components/ui";
import { useAuthContext } from "./AuthProvider";

const options = [
  { label: "ელ.ფოსტით აღდგენა", value: "email", id: "update-by-email" },
  {
    label: "ტელეფონის ნომრით აღდგენა",
    value: "phone_number",
    id: "update-by-phone-number",
  },
];

const ForgotPasswordUpdateMethod: React.FC = () => {
  const [updateMethod, setUpdateMethod] = useState<string>("email");

  const { onChoosePasswordUpdateMethod } = useAuthContext();

  const onChangeMethod = (value: string | number) =>
    setUpdateMethod(value as string);

  return (
    <div>
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex justify-center mt-5">
        აირჩიე პაროლის აღდგენის მეთოდი
      </span>

      <form>
        <div className="mt-11">
          <Radio
            value={updateMethod}
            data={options}
            name="update-password-method"
            direction="column"
            onChange={onChangeMethod}
          />

          <div className="mt-6">
            {updateMethod === "email" && (
              <TextField label="ელ.ფოსტა" labelPosition="out" />
            )}

            {updateMethod === "phone_number" && (
              <TextField
                label="ტელეფონის ნომერი"
                labelPosition="out"
                inputType="number"
              />
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <Button
            fullWidth
            rounded="base"
            onClick={onChoosePasswordUpdateMethod}
          >
            გაგრძელება
          </Button>

          <AnchorButton
            href="?auth=base"
            fullWidth
            buttonType="text"
            rounded="base"
          >
            გაუქმება
          </AnchorButton>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordUpdateMethod;
