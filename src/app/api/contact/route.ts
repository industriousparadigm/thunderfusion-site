import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, organization, message } = body

        // Create a test account for development
        // In production, use real SMTP credentials
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER || 'your-email@gmail.com',
                pass: process.env.EMAIL_PASS || 'your-app-password'
            }
        })

        const mailOptions = {
            from: `"Thunder Fusion Contact Form" <${process.env.EMAIL_USER || 'noreply@thunderfusion.com'}>`,
            to: 'miragaia.mariana@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #feaeb5;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
            text: `
                New Contact Form Submission
                
                Name: ${name}
                Email: ${email}
                ${organization ? `Organization: ${organization}` : ''}
                
                Message:
                ${message}
            `
        }

        // For development, just log the email
        if (process.env.NODE_ENV === 'development') {
            console.log('Email would be sent:', mailOptions)
            return NextResponse.json({ success: true, message: 'Form submitted successfully (dev mode)' })
        }

        // In production, send the email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true, message: 'Form submitted successfully' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to send message' },
            { status: 500 }
        )
    }
}