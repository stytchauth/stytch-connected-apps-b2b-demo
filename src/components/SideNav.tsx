'use client'; // Mark the component as a client-side component

import { useStytchB2BClient } from '@stytch/nextjs/b2b';
import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export const SideNav: React.FC = () => {
  const stytch = useStytchB2BClient();
  const router = useRouter();
  const pathname = usePathname(); // Get the current path to handle active links

  const handleLogout = useCallback(async () => {
    await stytch.session.revoke();
    router.push('/'); // Redirect to the homepage after logout
  }, [stytch, router]);

  return (
      <nav className="sidebar">
        <div className="nav-links">
          {/* Replace NavLink with Link and handle active style manually */}
          <Link
              href="/dashboard"
              className={pathname === '/dashboard' ? 'active-link' : ''}
          >
            Home
          </Link>
          <Link
              href="/settings"
              className={pathname === '/settings' ? 'active-link' : ''}
          >
            Settings
          </Link>
          <Link
              href="/members"
              className={pathname === '/members' ? 'active-link' : ''}
          >
            Members
          </Link>
        </div>
        <div className="logout-link" onClick={handleLogout}>
          Log Out
        </div>
      </nav>
  );
};