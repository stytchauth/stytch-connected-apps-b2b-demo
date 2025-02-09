import { AdminPortalSCIM } from '@stytch/react/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '../utils/stytchConfig';

const SCIM = () => {
  return <AdminPortalSCIM config={adminPortalConfig} styles={adminPortalStyles} />;
};

export default SCIM;