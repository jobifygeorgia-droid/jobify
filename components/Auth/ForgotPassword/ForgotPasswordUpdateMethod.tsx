"use client";

import { Controller } from "react-hook-form";

import { useAuthContext } from "@/providers/AuthProvider";
import { useRequestPasswordUpdateForm } from "@/hooks/forms";
import { useRequestPasswordUpdateQuery } from "@/hooks/api/auth";

import {
  AuthPopupTitle,
  ForgotPasswordActionButtons,
} from "@/components/Auth/ui";
import { Spinner } from "@/components/ui";
import { TextField, ErrorMessage } from "@/components/layouts/Form";

// const options = [
//   { label: "ელ.ფოსტით აღდგენა", value: "email", id: "update-by-email" },
//   {
//     label: "ტელეფონის ნომრით აღდგენა",
//     value: "phone_number",
//     id: "update-by-phone-number",
//   },
// ];

const ForgotPasswordUpdateMethod: React.FC = () => {
  const { onCancel } = useAuthContext();

  const { requestPasswordUpdateQuery, status } =
    useRequestPasswordUpdateQuery();

  const { control, handleSubmit, resetForm } = useRequestPasswordUpdateForm(
    status.messages
  );

  // const [updateMethod, setUpdateMethod] = useState<string>("email");

  // const onChangeMethod = (value: string | number) => {
  //   onReset();
  //   setUpdateMethod(value as string);
  // };

  const onRequestPasswordUpdate = handleSubmit(async (values) => {
    await requestPasswordUpdateQuery(values, resetForm);
  });

  return (
    <div className="relative">
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex justify-center mt-5">
        {/* აირჩიე პაროლის აღდგენის მეთოდი */}
        შეიყვანეთ თქვენი ელ.ფოსტა
      </span>

      {status.loading && <Spinner type="relative" />}

      <form onSubmit={onRequestPasswordUpdate}>
        <div className="mt-11 flex flex-col gap-2">
          {/* <Radio
            value={updateMethod}
            data={options}
            name="update-password-method"
            direction="column"
            onChange={onChangeMethod}
          /> */}

          <div className="mt-6">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="ელ.ფოსტა"
                  labelPosition="out"
                  message={error?.message}
                />
              )}
            />

            {/* {updateMethod === "phone_number" && (
              <Controller
                control={control}
                name="phone_number"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    labelPosition="out"
                    label="ტელეფონის ნომერი"
                    inputType="number"
                    message={error?.message}
                  />
                )}
              />
            )} */}
          </div>

          {status.error && <ErrorMessage message={status.message} />}
        </div>

        <ForgotPasswordActionButtons
          onCancel={onCancel}
          disabled={status.loading}
          titles={["გაგრძელება", "გაუქმება"]}
        />
      </form>
    </div>
  );
};

export default ForgotPasswordUpdateMethod;
