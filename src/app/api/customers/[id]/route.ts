import { NextRequest, NextResponse } from 'next/server';
import usersdata from '../MOCK_DATA.json';

export async function GET(request: NextRequest, context: any) {
  try {
    const { params } = context;
    const user = usersdata.filter((data) => params.id === data.id.toString());
    if (user.length === 0) {
      return NextResponse.json(
        { status: 'No record is found' + params.id },
        { status: 400 }
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
