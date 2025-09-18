import z from "zod";

export const CVSchema = z.object({
  personal_details: z.object({
    fullname: z.string().min(1, "გთხოვთ შეიყვანოთ სრული სახელი"),
    profession: z.string().min(1, "გთხოვთ შეიყვანოთ პროფესია"),
    email: z.email("გთხოვთ შეიყვანოთ ელ. ფოსტა"),
    phone_number: z.string().min(1, "გთხოვთ შეიყვანოთ ტელ. ნომერი"),
    address: z.string().min(1, "გთხოვთ შეიყვანოთ მისამართი"),
  }),
  about_me: z
    .string()
    .transform((val) => val.replace(/<[^>]+>/g, "").trim())
    .refine((val) => val.length >= 7, {
      message: "გთხოვთ შეიყვანოთ ინფორმაცია თქვენს შესახებ",
    }),
  working_experience: z.array(
    z.object({
      position: z.string().min(1, "გთხოვთ შეიყვანოთ პოზიცია"),
      company: z.string().min(1, "გთხოვთ შეიყვანოთ კომპანია"),
      start_date: z.string().min(1, "გთხოვთ შეიყვანოთ დაწყების თარიღი"),
      end_date: z.string().min(1, "გთხოვთ შეიყვანოთ დასრულების თარიღი"),
      isOngoingWork: z.boolean(),
    })
  ),
  education: z
    .array(
      z.object({
        degree: z.string().min(1, "გთხოვთ მიუთითოთ ხარისხი"),
        university: z.string().min(1, "გთხოვთ შეიყვანოთ უნივერსიტეტი"),
        faculty: z.string().min(1, "გთხოვთ შეიყვანოთ ფაკულტეტი"),
        start_date: z.string(),
        end_date: z.string(),
      })
    )
    .min(1),
  skills: z
    .array(z.string().min(1, "გთხოვთ მიუთითოთ თქვენი უნარები"))
    .min(1, "გთხოვთ მიუთითოთ თქვენი უნარები"),
  foreign_languages: z
    .array(
      z.object({
        language: z.string().min(1, "გთხოვთ შეიყვანოთ ენა"),
        level: z.string().min(1, "გთხოვთ შეიყვანოთ დონე"),
      })
    )
    .min(1, "გთხოვთ მიუთითოთ ენები"),
  certificates: z.array(
    z.object({
      name: z.string().min(1, "გთხოვთ შეიყვანოთ სერთიფიკატის დასახელება"),
      organization: z.string().min(1, "გთხოვთ შეიყვანოთ ორგანიზაციის სახელი"),
      end_date: z.string(),
    })
  ),
});

export const cvInitialState: CVSchemaT = {
  personal_details: {
    fullname: "",
    profession: "",
    email: "",
    phone_number: "",
    address: "",
  },
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
  skills: [""],
  foreign_languages: [{ language: "", level: "" }],
  certificates: [{ name: "", organization: "", end_date: "" }],
};

export type CVSchemaT = z.infer<typeof CVSchema>;
