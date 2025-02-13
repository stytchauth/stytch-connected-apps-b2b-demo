import { StytchB2BIDP } from "@stytch/react/b2b";
import { discoveryStyles } from "../utils/stytchConfig";

export const IDP = (): JSX.Element => {
  return (
    <div className="centered-login">
      <StytchB2BIDP 
        styles={discoveryStyles}
      />
    </div>
  );
};

export default IDP; 