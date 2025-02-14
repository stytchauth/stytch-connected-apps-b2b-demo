import { useStytchMemberSession } from "@stytch/react/b2b";
import { Navigate, useLocation } from "react-router-dom";
import { StytchB2B } from "@stytch/react/b2b";
import { discoveryConfig, discoveryStyles } from "../utils/stytchConfig";

export const Authenticate = (): JSX.Element => {
  const { session } = useStytchMemberSession();
  const location = useLocation();
  
  // Get the next_route from URL parameters or default to dashboard
  const searchParams = new URLSearchParams(location.search);
  const hasNextRoute = searchParams.has('next_route');
  const nextRoute = hasNextRoute ? searchParams.get('next_route') : '/dashboard';
  if (session) {
    return <Navigate to={nextRoute || '/dashboard'} />;
  }

  console.log("next route" + nextRoute);

  // Update config with redirect URL including the current path
  const fullRedirectURL = `${window.location.origin}/authenticate${
    hasNextRoute ? location.search : ''
  }`;

  const configWithRedirect = {
    ...discoveryConfig,
    emailMagicLinksOptions: {
      discoveryRedirectURL: fullRedirectURL,
    },
    oauthOptions: {
      ...discoveryConfig.oauthOptions,
      discoveryRedirectURL: fullRedirectURL,
    },
  };

  console.log("configWithRedirect", configWithRedirect);

  return (
    <div className="centered-login">
      <StytchB2B config={configWithRedirect} styles={discoveryStyles} />
    </div>
  );
};
