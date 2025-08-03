import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    console.log("Received email:", email);
    return NextResponse.json({ success: true })
}