import {
  useForm,
  Control,
  UseFormWatch,
  UseFormGetFieldState,
  UseFormTrigger,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useEffect, useState } from "react";

import {
  CVSchema,
  CVSchemaT,
  cvInitialState,
} from "@/lib/schemas/user/CVSchema";

type CVProviderT = {
  children: React.ReactNode;
};

type CVContextT = {
  control: Control<CVSchemaT>;
  watch: UseFormWatch<CVSchemaT>;
  trigger: UseFormTrigger<CVSchemaT>;
  getValues: UseFormGetValues<CVSchemaT>;
  setValue: UseFormSetValue<CVSchemaT>;
  getFieldState: UseFormGetFieldState<CVSchemaT>;
  onReset: () => void;
  isExpanded: keyof CVSchemaT | undefined;
  onExpandTab: (title: keyof CVSchemaT) => void;
  isOpenReview: boolean;
  setIsOpenReview: React.Dispatch<React.SetStateAction<boolean>>;
};

const CVContext = createContext<CVContextT | undefined>(undefined);

const CVProvider: React.FC<CVProviderT> = ({ children }) => {
  const {
    control,
    reset,
    watch,
    setValue,
    trigger,
    getFieldState,
    getValues,
    handleSubmit,
  } = useForm<CVSchemaT>({
    resolver: zodResolver(CVSchema),
    defaultValues: cvInitialState,
    mode: "onChange",
  });

  // Control expanded tabs in the form
  const [isExpanded, setIsExpanded] = useState<keyof CVSchemaT | undefined>(
    "personal_details"
  );

  const onExpandTab = (title: keyof CVSchemaT) => {
    setIsExpanded((prev) => (prev === title ? undefined : title));
  };

  // Reset the form to initial state
  const onReset = () => reset(cvInitialState);

  // Handle form submission
  const onSave = handleSubmit(async (values) => {
    console.log(values);
  });

  // Control review modal on CV view on mobile
  const [isOpenReview, setIsOpenReview] = useState(false);

  // Reset form on unmount
  useEffect(() => {
    return () => {
      reset(cvInitialState);
    };
  }, [reset]);

  return (
    <CVContext.Provider
      value={{
        control,
        watch,
        setValue,
        getValues,
        trigger,
        getFieldState,
        onReset,
        isExpanded,
        onExpandTab,
        isOpenReview,
        setIsOpenReview,
      }}
    >
      <form onSubmit={onSave}>{children}</form>
    </CVContext.Provider>
  );
};

export default CVProvider;

export const useCV = () => {
  const context = useContext(CVContext);

  if (!context) throw new Error("useCV must be used inside CVProvider");

  return context;
};
