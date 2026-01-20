"use server";

import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
    const {
        userId,
        firstName,
        lastName,
        email,
        phoneNumber,
        addressLine1,
        city
    } = await request.json();

    if (!userId || !firstName || !lastName || !email || !phoneNumber || !addressLine1 || !city) {
        return NextResponse.json(
            { message: "User ID, first name, last name, email, phone number, address line 1, and city are required." },
            { status: 400 }
        );
    }

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/auth/update-profile/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                addressLine1,
                city
            })
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

        console.log('update', apiData)

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        const response = NextResponse.json(
            { message: "Profile updated successfully.", data: apiData },
            { status: 200 }
        );

        response.cookies.set('user', JSON.stringify(apiData), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error("Update profile error:", error);
        return NextResponse.json(
            { message: "Failed to update profile. Please try again later." + error },
            { status: 500 }
        );
    }
}