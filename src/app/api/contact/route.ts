import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check if Resend is available
        if (!resend) {
            console.warn('RESEND_API_KEY not configured. Logging message instead.');
            console.log('Contact form submission:', {
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
                success: true,
                message: 'Message received! (Note: Email service not configured yet. Check server logs.)'
            });
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
            to: process.env.CONTACT_EMAIL || 'your-email@example.com', // Your email
            subject: `New Contact: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Form Message</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                New Contact Form Message
              </h2>

              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>

              <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #374151;">Message:</h3>
                <div style="white-space: pre-wrap; color: #4b5563;">${message}</div>
              </div>

              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

              <p style="color: #6b7280; font-size: 14px;">
                This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
              </p>
            </div>
          </body>
        </html>
      `,
            replyTo: email, // Allow replying directly to the sender
        });

        if (error) {
            console.error('Error sending email:', error);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again later.' },
                { status: 500 }
            );
        }

        console.log('Email sent successfully:', data);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
