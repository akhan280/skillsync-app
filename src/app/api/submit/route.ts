import { NextResponse } from 'next/server';
import { createClient } from '../../../utils/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;


export async function POST(req: Request) {
    const supabase = createClient();

  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('emails')
      .insert([{ email }]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: 'Email saved successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
