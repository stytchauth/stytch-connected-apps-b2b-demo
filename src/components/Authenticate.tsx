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

  // Preserve existing query parameters and add next_route
  const existingParams = new URLSearchParams(location.search);
  const redirectParams = new URLSearchParams(existingParams);
  if (hasNextRoute) {
    redirectParams.set('next_route', searchParams.get('next_route') || '');
  }

  const fullRedirectURL = `${window.location.origin}/authenticate?${redirectParams.toString()}`;

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
