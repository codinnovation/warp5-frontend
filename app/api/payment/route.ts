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
                amount: 1,
            })
        });

        const apiData = await apiRes.json();

        console.log('res', apiRes)
        console.log('data', apiData)


        if (!apiRes.ok) {
            return NextResponse.json({ message: apiData.message || 'Failed to initiate payment.' }, { status: apiRes.status });
        };

        return NextResponse.json({ data: apiData }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error' + error }, { status: 500 });
    }
}