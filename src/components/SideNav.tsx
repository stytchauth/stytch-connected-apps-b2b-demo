import { useStytchB2BClient } from '@stytch/react/b2b';
import { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const SideNav: React.FC = () => {
  const stytch = useStytchB2BClient();
  const navigate = useNavigate();
  const handleLogout = useCallback(async () => {
    await stytch.session.revoke();
    navigate('/');
  }, [stytch, navigate]);

  return (
    <nav className="sidebar">
      <div className="nav-links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Settings
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Members
        </NavLink>
        <NavLink
          to="/sso"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          SSO
        </NavLink>
        <NavLink
          to="/scim"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          SCIM
        </NavLink>
      </div>
      <div className="logout-link" onClick={handleLogout}>
        Log Out
      </div>
    </nav>
  );
};
