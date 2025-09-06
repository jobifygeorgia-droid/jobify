import z from "zod";

export const CVSchema = z.object({
  fullname: z.string(),
  profession: z.string(),
  email: z.string(),
  phone_number: z.string(),
  address: z.string(),
  about_me: z.string(),
  working_experience: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      isOngoingWork: z.boolean(),
    })
  ),
  education: z.array(
    z.object({
      degree: z.string(),
      university: z.string(),
      faculty: z.string(),
      start_date: z.string(),
      end_date: z.string(),
    })
  ),
  skills: z.array(z.string()),
  foreign_languages: z.array(
    z.object({
      language: z.string(),
      level: z.string(),
    })
  ),
  certificates: z.array(
    z.object({
      name: z.string(),
      organization: z.string(),
      end_date: z.string(),
    })
  ),
});

export const cvInitialState: CVSchemaT = {
  fullname: "",
  profession: "",
  email: "",
  phone_number: "",
  address: "",
  about_me: "",
  working_experience: [
    {
      position: "",
      company: "",
      start_date: "",
      end_date: "",
      isOngoingWork: false,
    },
  ],
  education: [
    {
      degree: "",
      university: "",
      faculty: "",
      start_date: "",
      end_date: "",
    },
  ],
  skills: [],
  foreign_languages: [],
  certificates: [{ name: "", organization: "", end_date: "" }],
};

export type CVSchemaT = z.infer<typeof CVSchema>;
