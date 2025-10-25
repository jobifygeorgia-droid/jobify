export type APIErrorMessages = Record<string, Array<string> | string>;

export type PageParamsT = {
  searchParams: Promise<Record<string, string | undefined>>;
  params: Promise<Record<string, string | undefined>>;
};

export enum VACANCY_GROUPS {
  TUTORS = "tutors",
  UKRAINIAN = "ukrainian",
  STUDENTS = "students",
  IMMIGRANTS = "immigrants",
}

export enum USER_TYPES {
  ADMIN = "admin",
  EMPLOYER = "employer",
  JOB_SEEKER = "job_seeker",
}

export enum VACANCY_TYPES {
  REMOTE = "remote",
  FULL_TIME = "full-time",
  PART_TIME = "part-time",
  INTERNSHIP = "internship",
}

export enum VACANCY_STATUS_TYPES {
  DRAFT = "draft",
  ACTIVE = "active",
  ARCHIVE = "archive",
}

export enum AuthModes {
  BASE = "base",
  VERIFY_USER = "verify-user",
  UPDATE_SUCCESS = "update-success",
  UPDATE_PASSWORD = "update-password",
  PASSWORD_UPDATE_METHOD = "password-update-method",
}

export type LocationT = {
  lat: number;
  lon: number;
  location: string;
  location_name: string;
};

type SessionUserBaseT = {
  id: number;
  email: string;
  phone_number: string | null;
  profile_image: string | null;
};

export type SessionUserT =
  | undefined
  | (SessionUserBaseT & {
      user_type: USER_TYPES.EMPLOYER;
      company_name: string | null;
      contact_person: string | null;
      company_id_number: string | null;
      is_approved_by_admin: boolean;
    })
  | (SessionUserBaseT & {
      user_type: USER_TYPES.JOB_SEEKER;
      full_name: string;
    });
