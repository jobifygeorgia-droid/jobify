export enum UserTypes {
  ADMIN = "admin",
  JOB_SEEKER = "job_seeker",
  EMPLOYER = "employer",
}

export type APIErrorMessages = Record<string, Array<string>>;

export type PageParamsT = {
  searchParams: Promise<Record<string, string | undefined>>;
  params: Promise<Record<string, string | undefined>>;
};
