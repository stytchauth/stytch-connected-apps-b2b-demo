import { useStytchMemberSession, useStytchOrganization } from "@stytch/react/b2b";

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
        Test out the <strong>Admin Portal UI</strong> for managing members, settings, SSO and SCIM.
      </div>
    </div>
  );
};
