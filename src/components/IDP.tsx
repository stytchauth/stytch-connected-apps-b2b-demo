import { useStytchMember, StytchB2BIDP } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import { discoveryStyles } from "../utils/stytchConfig";

export const IDP = (): JSX.Element => {
  const { member } = useStytchMember();

  if (!member) {
    // Redirect to login, preserving the current URL to return after auth
    const currentUrl = encodeURIComponent(window.location.href);
    return <Navigate to={`/?return_to=${currentUrl}`} />;
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