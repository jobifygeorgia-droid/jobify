import { USER_TYPES } from "@/lib/config";

export type UserSessionT = {
  id: number;
  email: string;
  user_type: USER_TYPES;
  full_name: string;
  phone_number: string | null;
};
