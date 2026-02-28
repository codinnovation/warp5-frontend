"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { emailOrPhone } = await request.json();

    if (!emailOrPhone) {
        return NextResponse.json(
            { message: "Email or phone number is required." },
            { status: 400 }
        );
    }

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ emailOrPhone })
        });

        let apiData;
        const contentType = apiRes.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            apiData = await apiRes.json();
        } else {
            const text = await apiRes.text();
            try {
                apiData = JSON.parse(text);
            } catch {
                apiData = { message: text || "An error occurred" };
            }
        }

        console.log('forgot password response', apiData);

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        const response = NextResponse.json(
            { message: "Password reset email sent successfully.", data: apiData },
            { status: 200 }
        );

        return response;
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json(
            { message: "Failed to send password reset email. Please try again later." },
            { status: 500 }
        );
    }
}