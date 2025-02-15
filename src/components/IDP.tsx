'use client';

import { useStytchMember, B2BIdentityProvider } from '@stytch/nextjs/b2b';
import { useRouter } from 'next/navigation';
import { discoveryStyles } from '@/utils/stytchConfig';

export const IDP = () => {
  const { member } = useStytchMember();
  const router = useRouter();

  if (!member) {
    // Preserve current path and query parameters for post-login redirection
    // This way we can return to an OAuth flow after login is complete
    const currentPath = encodeURIComponent(
        window.location.pathname + window.location.search
    );
    router.push(`/?next_route=${currentPath}`);
    return null; // Don't render anything during navigation
  }

  return (
      <div className="centered-login">
        <B2BIdentityProvider styles={discoveryStyles} />
      </div>
  );
};

export default IDP;