'use client';

import { AdminPortalOrgSettings } from '@stytch/nextjs/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '../utils/stytchConfig';

const Settings = () => {
    return <AdminPortalOrgSettings styles={adminPortalStyles} config={adminPortalConfig} />;
};

export default Settings;
