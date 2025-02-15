'use client'; 

import { useStytchB2BClient } from '@stytch/nextjs/b2b';
import {useCallback, useEffect} from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {useStytchMemberSession} from "@/components/Provider";

export const SideNav: React.FC = () => {
  const stytch = useStytchB2BClient();
  const router = useRouter();
  const pathname = usePathname(); // Get the current path to handle active links
  const { session, isInitialized } = useStytchMemberSession();

  const handleLogout = useCallback(async () => {
    await stytch.session.revoke();
    router.push('/'); // Redirect to the homepage after logout
  }, [stytch, router]);

  // TODO: This should live somewhere else, but the SideNav is rendered on all
  // protected layouts so... toss it here for now?
  useEffect(() => {
    if (isInitialized && !session) {
      router.push('/'); // Redirect to the homepage if no active session
    }
  }, [router, session, isInitialized]);



  return (
      <nav className="sidebar">
        <div className="nav-links">
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