import { VACANCY_TYPES } from "@/interface/global.types";
import { PaginationT } from "./common.types";

export type VacancyT = {
  id: number;
  title: string;
  description: string;
  requirements: string;
  advantages: string;
  min_salary: string;
  max_salary: string;
  location: string;
  location_name: string;
  latitude: number;
  longitude: number;
  vacancy_type: VACANCY_TYPES;
  is_premium: boolean;
  is_published: boolean;
  is_approved: boolean;
  published_date: string;
  expiry_date: string;
  categories: number[];
  employer: {
    company_name: string;
    contact_person: string;
    phone_number: string;
    company_id_number: string;
    profile_image: string | null;
  };
};

export type GetVacanciesResponseT = PaginationT & {
  results: Array<VacancyT>;
};
