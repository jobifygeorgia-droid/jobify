import z from "zod";

export const VacancySchema = z.object({
  title: z.string(),
  description: z.string(),
  requirements: z.string(),
  min_salary: z.string(),
  max_salary: z.string(),
  location: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  vacancy_type: z.string(),
  categories: z.array(z.string()),
  is_premium: z.boolean(),
});

export const vacancyInitialState: VacancySchemaT = {
  title: "",
  description: "",
  requirements: "",
  min_salary: "",
  max_salary: "",
  location: "",
  latitude: "",
  longitude: "",
  vacancy_type: "",
  categories: [],
  is_premium: false,
};

export type VacancySchemaT = z.infer<typeof VacancySchema>;
