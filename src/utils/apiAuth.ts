import { jwtVerify, createRemoteJWKSet } from "jose";
import { stytchClient } from "@/utils/stytchClient";

// URL for your project's JSON Web Key Set (JWKS), used to verify JWT tokens
const JWKS_URL = "https://login.stytchb2bdemo.com/.well-known/jwks.json";

// Create a remote JWK set to fetch and cache public keys for token verification
const jwks = createRemoteJWKSet(new URL(JWKS_URL));

// Stytch project ID, find yours at https://stytch.com/dashboard
const PROJECT_ID = process.env.STYTCH_PROJECT_ID ?? "missing-project-id";

/**
 * Verifies the Authorization token and retrieves member and organization details.
 *
 * This function performs the following:
 * 1. Validates the `Authorization` header for presence and correct format.
 * 2. Extracts and verifies the JWT token using Your Project's JSON Web Key Set (JWKS).
 * 3. Ensures the JWT payload contains a valid `sub` field (member ID).
 * 4. Retrieves the associated organization for the member using Stytch's API.
 *
 * @param req - The incoming HTTP request object containing headers.
 * @returns An object containing the member's ID and organization details if successful.
 * @throws An error if the Authorization header is missing, invalid, or token verification fails.
 */
export async function verifyAuthToken(req: Request) {
    // Step 1: Extract the Authorization header from the request
    const authHeader = req.headers.get("Authorization");
    // Ensure the header exists and follows the "Bearer <token>" format
    if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
        throw new Error("Missing or invalid Authorization header");
    }

    // Extract the token from the Authorization header (i.e., the part after "Bearer ")
    const token = authHeader.split(" ")[1];

    // Step 2: Verify the JWT token using the JWK Set
    const { payload } = await jwtVerify(token, jwks, {
        algorithms: ["RS256"],                      // Ensure the RS256 algorithm is used for verification
        audience: PROJECT_ID,                       // The expected audience (Stytch project ID)
        issuer: `stytch.com/${PROJECT_ID}`,         // The expected issuer for the token - also the project
    });

    // Ensure the JWT payload contains a valid `sub` field (which represents the member ID)
    if (!payload || !payload.sub) {
        throw new Error("Invalid token: missing member_id in sub");
    }

    // Step 3: Use the member ID to retrieve the associated organization from Stytch
    const { organization } = await stytchClient.organizations.members.dangerouslyGet({
        member_id: payload.sub, // The member ID extracted from the token payload
    });

    // Step 4: Return the member ID and associated organization details
    return {
        memberId: payload.sub,   // The unique ID of the authenticated member
        organization,            // Organization details associated with the member
    };
}