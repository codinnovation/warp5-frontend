'use server';

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const baseUrl = process.env.BASE_URL;

    const body = await req.json();

    const { rentalRequestId, equipmentId, renterId, ownerId, email, amount } = body;

    try {
        const apiRes = await fetch(`${baseUrl}/payments/initiate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rentalRequestId,
                equipmentId,
                renterId,
                ownerId,
                email,
                amount,
            })
        });

        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json({ message: apiData.message || 'Failed to initiate payment.' }, { status: apiRes.status });
        };

        return NextResponse.json({ data: apiData }, { status: 200 });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ message: 'Internal Server Error: ' + errorMessage }, { status: 500 });
    }
}