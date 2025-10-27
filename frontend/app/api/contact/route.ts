import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY || ''
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, email, name } = body

    // Validate input
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Get the recipient email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com'

    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY in .env.local' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This will use your Resend domain after setup
      to: recipientEmail,
      subject: name 
        ? `New message from ${name} - Portfolio Contact`
        : 'New message from Portfolio Contact',
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Message from Portfolio Contact Form

${name ? `Name: ${name}` : ''}
${email ? `Email: ${email}` : ''}

Message:
${message}
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      messageId: data?.id 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

