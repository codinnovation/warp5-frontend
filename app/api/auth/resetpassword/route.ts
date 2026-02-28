"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { resetToken, newPassword } = await request.json();

    if (!resetToken || !newPassword) {
        return NextResponse.json(
            { message: "Reset token and new password are required." },
            { status: 400 }
        );
    }

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ resetToken, newPassword })
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

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        const response = NextResponse.json(
            { message: "Password reset successfully.", data: apiData },
            { status: 200 }
        );

        return response;
    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json(
            { message: "Failed to reset password. Please try again later." + error },
            { status: 500 }
        );
    }
}