import { AdminPortalOrgSettings } from '@stytch/react/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '../utils/stytchConfig';

const Settings = () => {
    return <AdminPortalOrgSettings styles={adminPortalStyles} config={adminPortalConfig} />;
};

export default Settings;
