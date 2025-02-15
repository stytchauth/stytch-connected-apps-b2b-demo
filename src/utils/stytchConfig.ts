import { AdminPortalB2BProducts } from '@stytch/nextjs/b2b/adminPortal'
import { AuthFlowType, B2BProducts, B2BOAuthProviders } from "@stytch/vanilla-js";

type Role = {
  role_id: string;
  description: string;
}

export const adminPortalConfig = {
  allowedAuthMethods: [
    AdminPortalB2BProducts.emailMagicLinks,
    AdminPortalB2BProducts.oauthGoogle
  ],
  getRoleDescription: (role: Role) => {
    if (role.role_id == 'stytch_admin') {
      return 'Able to manage settings and members'
    } else if (role.role_id == 'stytch_member') {
      return 'Able to view settings and members, but cannot edit'
    } else {
      return role.description;
    }
  },
  getRoleDisplayName: (role: Role) => {
    if (role.role_id == 'stytch_admin') {
      return 'Admin'
    } else if (role.role_id == 'stytch_member') {
      return 'Member'
    } else {
      return role.role_id
    }
  }
}

export const discoveryConfig = {
  products: [B2BProducts.oauth, B2BProducts.emailMagicLinks],
  sessionOptions: { sessionDurationMinutes: 60 },
  oauthOptions: {
    providers: [{type: B2BOAuthProviders.Google}]
  },
  authFlowType: AuthFlowType.Discovery,
};

export const adminPortalStyles = {
  fontFamily: `'IBM Plex Sans', monospace;`
}

export const discoveryStyles = {
  fontFamily: `'IBM Plex Sans', monospace;`,
  container: {
    width: '500px',
  },
}