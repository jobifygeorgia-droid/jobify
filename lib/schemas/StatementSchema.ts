import z from "zod";

export const StatementSchema = z.object({
  job_type: z.string(),
  discipline: z.string(),
  salary: z.object({
    from: z.string(),
    to: z.string(),
  }),
  about_me: z.string(),
});

export const statementInitialState: StatementSchemaT = {
  job_type: "",
  discipline: "",
  salary: {
    from: "",
    to: "",
  },
  about_me: "",
};

export type StatementSchemaT = z.infer<typeof StatementSchema>;
