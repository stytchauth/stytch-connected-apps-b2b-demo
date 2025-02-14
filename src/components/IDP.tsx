import { useStytchMember, StytchB2BIDP } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import { discoveryStyles } from "../utils/stytchConfig";

export const IDP = (): JSX.Element => {
  const { member } = useStytchMember();

  if (!member) {
    // Redirect to login, preserving pathname and search params to return after auth
    const currentPath = encodeURIComponent(
      window.location.pathname + window.location.search
    );
    return <Navigate to={`/?next_route=${currentPath}`} />;
  }

  return (
    <div className="centered-login">
      <StytchB2BIDP 
        styles={discoveryStyles}
      />
    </div>
  );
};

export default IDP; 