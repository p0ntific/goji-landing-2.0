import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const NDA_COOKIE_NAME = "nda_verified";
const NDA_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        if (typeof password !== "string") {
            return NextResponse.json({ success: false }, { status: 400 });
        }

        const expectedPassword = process.env.CASE_NDA_PASSWORD;

        if (!expectedPassword) {
            return NextResponse.json({ success: false }, { status: 500 });
        }

        if (password !== expectedPassword) {
            return NextResponse.json({ success: false }, { status: 401 });
        }

        const cookieStore = await cookies();
        cookieStore.set(NDA_COOKIE_NAME, "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: NDA_COOKIE_MAX_AGE,
            path: "/",
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
