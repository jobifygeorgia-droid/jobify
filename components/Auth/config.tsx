import { AuthModes } from "@/interface/global.types";

import {
  UpdatePassword,
  BaseAuthentication,
  VerifyUserIdentity,
  ForgotPasswordUpdateMethod,
} from ".";
import { Success } from "./ui";

export const AuthConfig: Record<AuthModes, React.ComponentType> = {
  base: BaseAuthentication,
  [AuthModes.PASSWORD_UPDATE_METHOD]: ForgotPasswordUpdateMethod,
  [AuthModes.VERIFY_USER]: VerifyUserIdentity,
  [AuthModes.UPDATE_PASSWORD]: UpdatePassword,
  [AuthModes.UPDATE_SUCCESS]: () => <Success />,
};
