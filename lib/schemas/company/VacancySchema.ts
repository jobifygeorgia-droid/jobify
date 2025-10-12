import z from "zod";
import * as customValidators from "@/lib/schemas/customValidators";

export const VacancySchema = z
  .object({
    title: z.string().min(2, "გთხოვთ შეიყვანოთ ვაკანსიის დასახელება"),
    categories: z
      .array(z.number())
      .min(1, "გთხოვთ აირჩიოთ მინიმუმ ერთი კატეგორია"),
    description: z
      .string()
      .refine(customValidators.textEditorValueIsNotEmpty.validator, {
        message: customValidators.textEditorValueIsNotEmpty.message(
          "გთხოვთ შეიყვანოთ სამუშაოს აღწერა"
        ),
      }),
    requirements: z
      .string()
      .refine(customValidators.textEditorValueIsNotEmpty.validator, {
        message: customValidators.textEditorValueIsNotEmpty.message(
          "გთხოვთ შეიყვანოთ საკვალიფიკაციო მოთხოვნები"
        ),
      }),
    advantages: z
      .string()
      .refine(customValidators.textEditorValueIsNotEmpty.validator, {
        message: customValidators.textEditorValueIsNotEmpty.message(
          "გთხოვთ შეიყვანოთ კომპანიის უპირატესობები"
        ),
      }),
    min_salary: z
      .number("გთხოვთ შეიყვანოთ მინ. ანაზღაურება")
      .min(1, "გთხოვთ შეიყვანოთ მინ. ანაზღაურება"),
    max_salary: z
      .number("გთხოვთ შეიყვანოთ მაქს. ანაზღაურება")
      .min(1, "გთხოვთ შეიყვანოთ მაქს. ანაზღაურება"),
    location: z.string(),
    location_name: z.string(),
    latitude: z.number("გთხოვთ შეიყვანოთ ლოკაცია"),
    longitude: z.number("გთხოვთ შეიყვანოთ ლოკაცია"),
    vacancy_type: z.string().min(1, "გთხოვთ აირჩიოთ ვაკანსიის ტიპი"),
    is_premium: z.boolean(),
  })
  .refine((data) => data.min_salary < data.max_salary, {
    path: ["min_salary"],
    message: "მინ. ანაზღაურება არ უნდა აღემატებოდეს მაქს. ანაზღაურებას",
  })
  .refine((data) => data.min_salary < data.max_salary, {
    path: ["max_salary"],
    message: "მაქს. ანაზღაურება არ უნდა იყოს ნაკლები მინ. ანაზღაურებაზე",
  })
  .refine(
    (data) => Boolean(data.location !== "" || data.location_name !== ""),
    {
      path: ["location"],
      message: "გთხოვთ, შეიყვანოთ ლოკაცია",
    }
  );

export const vacancyInitialState: VacancySchemaT = {
  title: "",
  categories: [],
  description: "",
  requirements: "",
  advantages: "",
  min_salary: 0,
  max_salary: 0,
  location: "",
  location_name: "",
  latitude: 0,
  longitude: 0,
  vacancy_type: "",
  is_premium: false,
};

export type VacancySchemaT = z.infer<typeof VacancySchema>;
