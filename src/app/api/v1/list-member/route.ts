import {NextResponse} from "next/server";
import {verifyAuthToken} from "@/utils/apiAuth";
import {stytchClient} from "@/utils/stytchClient";

export async function GET(req: Request) {
    try {
        const {organization} = await verifyAuthToken(req)

        const stytchResponse = await stytchClient.organizations.members.search({
            organization_ids: [organization.organization_id],
        });
        return NextResponse.json({success: true, data: stytchResponse.members}, {status: 200});
    } catch (err) {
        console.error("Unhandled error:", err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}