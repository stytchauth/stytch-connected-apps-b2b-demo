import * as stytch from "stytch";

const PROJECT_ID = process.env.STYTCH_PROJECT_ID ?? 'missing-project-id';

export const stytchClient = new stytch.B2BClient({
    project_id: PROJECT_ID,
    secret: process.env.STYTCH_SECRET ?? 'missing-project-id',
})
