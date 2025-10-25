import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { usePersonalDetails } from "@/components/UserProfile/CreateCV/hooks";

import {
  FormGroupGrid,
  FormGroupContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { TextField } from "@/components/layouts/Form";

const PersonalDetails: React.FC = () => {
  const { control } = useCV();
  const pd = usePersonalDetails();

  return (
    <FormGroupContainer
      title="პერსონალური დეტალები"
      name="personal_details"
      isSucceed={pd.isSucceed}
      hasError={pd.hasError}
      onExpand={pd.onTogglePersonalDetails}
    >
      <FormGroupGrid>
        <Controller
          control={control}
          name="personal_details.fullname"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="სახელი და გვარი *"
              message={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="personal_details.profession"
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} label="პროფესია *" message={error?.message} />
          )}
        />

        <Controller
          control={control}
          name="personal_details.email"
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} label="ელ.ფოსტა *" message={error?.message} />
          )}
        />

        <Controller
          control={control}
          name="personal_details.phone_number"
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} label="ტელეფონი *" message={error?.message} />
          )}
        />

        <Controller
          control={control}
          name="personal_details.address"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="მისამართი *"
              message={error?.message}
              containerClassName="col-span-2"
            />
          )}
        />
      </FormGroupGrid>
    </FormGroupContainer>
  );
};

export default PersonalDetails;
