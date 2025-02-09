import { StytchB2B } from "@stytch/react/b2b";
import { discoveryConfig, discoveryStyles } from '../utils/stytchConfig';

export const LoginOrSignup = () => {

  return (
    <div className="centered-login">
      <StytchB2B config={discoveryConfig} styles={discoveryStyles} />
    </div>
  );
};
