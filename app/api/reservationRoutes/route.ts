'use server';

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const {
        equipmentId,
        equipmentName,
        ownerId,
        renterId,
        rentalAmount,
        startDate,
        endDate,
    } = await req.json();

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/reservations`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                equipmentId,
                equipmentName,
                ownerId,
                renterId,
                rentalAmount,
                startDate,
                endDate,
                status: "COMPLETED"
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
            { message: "Rental added successfully.", data: apiData },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to add rental. Please try again later." + error },
            { status: 500 }
        );
    }
}


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const renterId = searchParams.get('renterId');

    const baseUrl = process.env.BASE_URL;

    if (!renterId) {
        return NextResponse.json(
            { message: "Renter ID is required." },
            { status: 400 }
        );
    }

    try {
        const apiRes = await fetch(`${baseUrl}/dashboard/renter/${renterId}/reservations`);
        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        console.log('reservation', apiData)

        return NextResponse.json(
            { message: "Rentals retrieved successfully.", data: apiData },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to retrieve rentals', error);
        return NextResponse.json(
            { message: "Failed to retrieve rentals. Please try again later." + error },
            { status: 500 }
        );
    }
}