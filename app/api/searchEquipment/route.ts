'use server';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;
    const location = searchParams.get('location');

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/equipment/search?location=${location}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        return NextResponse.json(
            { message: "Equipments fetched successfully.", data: apiData },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to fetch equipments', error);
        return NextResponse.json(
            { message: "Failed to fetch equipments. Please try again later." + error },
            { status: 500 }
        );
    }
}
