import { useStytchMemberSession } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import { LoginOrSignup } from "./LoginOrSignup";

export const Authenticate = (): JSX.Element => {
  const { session } = useStytchMemberSession();

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return <LoginOrSignup />;
};
