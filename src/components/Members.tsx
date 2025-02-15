'use client';

import { AdminPortalMemberManagement } from '@stytch/nextjs/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '@/utils/stytchConfig';

const Members = () => {
    return <AdminPortalMemberManagement styles={adminPortalStyles} config={adminPortalConfig} />;
};

export default Members;