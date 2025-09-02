export enum UserTypes {
  ADMIN = "admin",
  JOB_SEEKER = "job_seeker",
  EMPLOYER = "employer",
}

export type APIErrorMessages = Record<string, Array<string>>;
