'use server';

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const {
        equipmentId,
        equipmentName,
        renterId,
        renterName,
        ownerId,
        rentalAmount,
        rentalEmail,
        rentalPhoneNumber,
        startDate,
        endDate
    } = await req.json();

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/rentals`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                equipmentId,
                equipmentName,
                renterId,
                renterName,
                ownerId,
                rentalAmount,
                rentalEmail,
                rentalPhoneNumber,
                startDate,
                endDate
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
        console.error('Failed to add rental', error);
        return NextResponse.json(
            { message: "Failed to add rental. Please try again later." + error },
            { status: 500 }
        );
    }
}


export async function PATCH(req: Request) {
    const { decision, id } = await req.json();

    const baseUrl = process.env.BASE_URL;

    try {
        const apiRes = await fetch(`${baseUrl}/api/rentals/${id}/decision`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                decision
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
            { message: "Rental decision updated successfully.", data: apiData },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to update rental decision', error);
        return NextResponse.json(
            { message: "Failed to update rental decision. Please try again later." + error },
            { status: 500 }
        );
    }


}