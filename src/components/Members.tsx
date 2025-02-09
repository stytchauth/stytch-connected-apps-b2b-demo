import { AdminPortalMemberManagement } from '@stytch/react/b2b/adminPortal';
import { adminPortalConfig, adminPortalStyles } from '../utils/stytchConfig';

const Members = () => {
    return <AdminPortalMemberManagement styles={adminPortalStyles} config={adminPortalConfig} />;
};

export default Members;