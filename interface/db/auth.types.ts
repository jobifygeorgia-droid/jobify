import { UserTypes } from "@/interface/global.types";

export type SignupUserResponseT = {
  id: number;
  username: string;
  email: string;
  user_type: UserTypes;
  phone_number: "+995555444333";
};
