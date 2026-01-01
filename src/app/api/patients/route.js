import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      { message: 'Patient created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create patient' },
      { status: 500 }
    );
  }
}
