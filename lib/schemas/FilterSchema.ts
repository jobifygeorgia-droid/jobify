import z from "zod";

export const FilterSchema = z.object({
  search: z.string(),
  vacancy_type: z.string(),
  location: z.string(),
  categories: z.array(z.string()),
  sector: z.string(),
  salary_min: z.string(),
  experience: z.string(),
});

export const filterInitialState: FilterSchemaT = {
  search: "",
  vacancy_type: "",
  location: "",
  categories: [],
  sector: "",
  salary_min: "",
  experience: "",
};

export type FilterSchemaT = z.infer<typeof FilterSchema>;
