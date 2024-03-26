import { NextRequest, NextResponse } from 'next/server';
import mockdata from './MOCK_DATA.json';

type Customer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};
export async function GET() {
  return NextResponse.json(mockdata, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const newUser = await request.json();
    newUser.id = mockdata.length + 1;
    mockdata.push(newUser);
    return NextResponse.json(
      { ...newUser, status: 'Account Created' },
      {
        status: 201,
        statusText: 'Account created',
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
