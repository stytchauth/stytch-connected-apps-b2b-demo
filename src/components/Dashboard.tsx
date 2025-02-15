'use client';

import {useStytchMemberSession, useStytchOrganization} from "@/components/Provider";


export const Dashboard: React.FC = () => {
  const { session } = useStytchMemberSession();
  const { organization } = useStytchOrganization();

  const role = session?.roles.includes("stytch_admin") ? "admin" : "member";

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
      Hello! You&apos;re logged into{' '}
        <strong>{organization?.organization_name}</strong> with{' '}
        <strong>{role}</strong> permissions.
        <br></br>
        <br></br>
        Test out the <strong>Admin Portal UI</strong> for managing members and settings.
      </div>
    </div>
  );
};
