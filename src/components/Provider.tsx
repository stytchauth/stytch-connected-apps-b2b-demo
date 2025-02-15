'use client';

import {StytchB2BProvider} from "@stytch/nextjs/b2b";
import {useEffect, useState} from "react";
import {createStytchB2BUIClient} from "@stytch/nextjs/b2b/ui";
import {useStytchMemberSession, useStytchOrganization} from "@stytch/nextjs/b2b";
import {StytchB2BUIClient} from "@stytch/vanilla-js/b2b";

// StytchB2BProvider doesn't fully support App Router client boundaries yet - reexporting everything from here works!
export function Provider({children}: { children: React.ReactNode }) {

    // I do not know why this works.
    const [stytch, setStytch] = useState<StytchB2BUIClient | null>(null);
    useEffect(() => {
        setStytch(createStytchB2BUIClient(process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN ?? ''));
    }, []);

    return stytch ? <StytchB2BProvider stytch={stytch}>{children}</StytchB2BProvider> : null;
}

export {useStytchMemberSession, useStytchOrganization}