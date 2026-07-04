import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NEWSLETTER_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // If Resend is configured, use it
    if (RESEND_API_KEY && NEWSLETTER_AUDIENCE_ID) {
      const res = await fetch('https://api.resend.com/audiences/' + NEWSLETTER_AUDIENCE_ID + '/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        // If contact already exists, still return success
        if (res.status === 400 && errorData.message?.includes('already')) {
          return NextResponse.json({ success: true, message: 'Already subscribed!' });
        }
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
    }

    // Fallback: just acknowledge the signup (for demo/dev)
    console.log('[Newsletter] New signup:', email);
    return NextResponse.json({
      success: true,
      message: 'Thanks for subscribing! Newsletter feature is being configured.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
