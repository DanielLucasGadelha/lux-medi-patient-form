import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  console.log('Patient received:', body);

  return NextResponse.json(
    { message: 'Patient registered successfully' },
    { status: 201 }
  );
}
