'use server';

import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/equipment`, {
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


export async function POST(req: Request) {
    const {
        name,
        ownerId,
        ownerName,
        location,
        description,
        price,
        rating,
        availability,
        imageOne,
        imageTwo,
        imageThree
    } = await req.json();

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/equipment`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                ownerId,
                ownerName,
                location,
                description,
                price,
                rating,
                availability,
                imageOne,
                imageTwo,
                imageThree
            })
        });

        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        return NextResponse.json(
            { message: "Equipment added successfully.", data: apiData },
            { status: 200 }
        );

    } catch (error) {
        console.error('Failed to add equipment', error);
        return NextResponse.json(
            { message: "Failed to add equipment. Please try again later." + error },
            { status: 500 }
        );
    }
}