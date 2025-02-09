import { AdminPortalSSO } from '@stytch/react/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '../utils/stytchConfig';

const SSO = () => {
    return <AdminPortalSSO config={adminPortalConfig} styles={adminPortalStyles} />;
};

export default SSO;