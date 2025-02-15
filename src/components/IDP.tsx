'use client'; // Mark this as a client-side component

import { useStytchMember, StytchB2BIDP } from '@stytch/nextjs/b2b';
import { useRouter } from 'next/navigation';
import { discoveryStyles } from '../utils/stytchConfig';

export const IDP = () => {
  const { member } = useStytchMember();
  const router = useRouter();

  if (!member) {
    // Preserve current path and query parameters for post-login redirection
    const currentPath = encodeURIComponent(
        window.location.pathname + window.location.search
    );
    router.push(`/?next_route=${currentPath}`);
    return null; // Don't render anything during navigation
  }

  return (
      <div className="centered-login">
        <StytchB2BIDP styles={discoveryStyles} />
      </div>
  );
};

export default IDP;