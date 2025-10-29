import { Fragment } from "react";
import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useCertificates } from "@/components/UserProfile/CreateCV/hooks";

import {
  FormGroupGrid,
  FormGroupContainer,
  ArrayFieldsControl,
  CertificatesReview,
} from "@/components/UserProfile/CreateCV/ui";
import { DatePicker, TextField } from "@/components/layouts/Form";

const Certificates: React.FC = () => {
  const { watch, control } = useCV();
  const c = useCertificates();

  return (
    <FormGroupContainer
      title="სერთიფიკატები"
      name="certificates"
      hasError={c.hasError}
      isSucceed={c.isSucceed}
      onExpand={c.onToggleCertificates}
    >
      {c.certificates.map((certificate, index) => (
        <CertificatesReview
          key={`review-certificates-${certificate.id}`}
          index={index}
          watch={watch}
          onDelete={() => c.onRemoveCertificate(index)}
          onEdit={() => c.onSelectCertificateField(index)}
        />
      ))}

      <FormGroupGrid>
        {c.certificates.map((certificate, index) =>
          index !== c.selectedCertificatesFieldIndex ? null : (
            <Fragment key={`form-certificates-${certificate.id}`}>
              <Controller
                control={control}
                name={`certificates.${index}.name`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="დასახელება"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`certificates.${index}.organization`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="ორგანიზაცია"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`certificates.${index}.end_date`}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    disableFuture
                    message={error?.message}
                    label="დასრულების თარიღი"
                  />
                )}
              />
            </Fragment>
          )
        )}
      </FormGroupGrid>

      <ArrayFieldsControl
        onAdd={c.onAppendCertificate}
        onRemove={() => c.onRemoveCertificate(c.selectedCertificatesFieldIndex)}
      />
    </FormGroupContainer>
  );
};

export default Certificates;
