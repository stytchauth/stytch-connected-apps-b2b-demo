import {NextResponse} from "next/server";
import {verifyAuthToken} from "@/utils/apiAuth";
import {stytchClient} from "@/utils/stytchClient"; // Replace with proper client based on your setup

export async function POST(req: Request) {
    try {
        const {organization, memberId} = await verifyAuthToken(req)

        const body = await req.json();
        const emailToInvite = body.email;
        if (!emailToInvite || typeof emailToInvite !== "string") {
            return NextResponse.json({error: "Invalid or missing email field in the request body"}, {status: 400});
        }

        const stytchResponse = await stytchClient.magicLinks.email.invite({
            organization_id: organization.organization_id,
            email_address: emailToInvite,
            invited_by_member_id: memberId,
            name: body.name || "",
        });
        return NextResponse.json({success: true, data: stytchResponse}, {status: 200});
    } catch (err) {
        console.error("Unhandled error:", err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}