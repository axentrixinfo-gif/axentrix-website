import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create Zoho SMTP transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || "info@axentrixinc.com",
        pass: process.env.SMTP_PASS || "", // Your Zoho app password
    },
    tls: {
        rejectUnauthorized: false
    }
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, mobile, address, company, service, message } = body;

        // Validate required fields
        if (!name || !email || !mobile || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Generate unique booking ID
        const bookingId = `AX-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

        // 1. Send internal email to info@axentrixinc.com
        const internalEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #0A2463, #E91E63); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">New Consultation Request</h1>
                </div>
                
                <div style="background: #F9FAFB; padding: 30px; border-radius: 0 0 16px 16px; border: 1px solid #E5E7EB;">
                    <p style="color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 20px 0;">Booking ID: ${bookingId}</p>
                    
                    <h2 style="color: #0A2463; font-size: 20px; margin: 0 0 24px 0;">Client Information</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; width: 140px;">Name:</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: bold;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">Email:</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: bold;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">Mobile:</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: bold;">${mobile}</td>
                        </tr>
                        ${company ? `
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">Company:</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: bold;">${company}</td>
                        </tr>
                        ` : ''}
                        ${address ? `
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">Address:</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: bold;">${address}</td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td style="padding: 12px 0; color: #6B7280; font-size: 14px;">Service:</td>
                            <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: bold;">${service || 'Not specified'}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 12px; border-left: 4px solid #E91E63;">
                        <p style="color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0;">Message:</p>
                        <p style="color: #111827; font-size: 14px; line-height: 1.6; margin: 0;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: #FEF2F2; border-radius: 12px;">
                        <p style="color: #0A2463; font-size: 14px; font-weight: bold; margin: 0 0 8px 0;">Action Required:</p>
                        <ul style="color: #374151; font-size: 14px; margin: 0; padding-left: 20px;">
                            <li>Respond within 24 hours</li>
                            <li>Send calendar invite for consultation</li>
                            <li>Review requirements carefully</li>
                        </ul>
                    </div>
                    
                    <p style="color: #9CA3AF; font-size: 12px; text-align: center; margin: 30px 0 0 0;">
                        Submitted: ${new Date().toLocaleString()}<br/>
                        Axentrix Website System
                    </p>
                </div>
            </div>
        `;

        try {
            await transporter.sendMail({
                from: '"Axentrix Inc." <info@axentrixinc.com>',
                to: process.env.ADMIN_EMAIL || "info@axentrixinc.com",
                subject: `New Consultation Request: ${name} - ${bookingId}`,
                html: internalEmailHtml,
            });
            console.log("Internal email sent successfully to info@axentrixinc.com");
        } catch (emailError) {
            console.error("Internal email error:", emailError);
            // Continue even if internal email fails
        }

        // 2. Generate AI acknowledgment using Gemini
        let acknowledgment = "";
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            
            const prompt = `You are Axie, the humble and professional AI assistant for Axentrix Inc.

Customer Details:
- Name: ${name}
- Company: ${company || 'Not specified'}
- Service: ${service || 'Not specified'}
- Message: ${message}

Generate a humble, professional acknowledgment email (150-200 words):

1. Thank them sincerely for contacting Axentrix Inc.
2. Mention your team's 15+ years of industry expertise
3. Set expectation of 24-hour response time
4. Mention you'll carefully review their requirements
5. Sign off as "Axie, AI Assistant, Axentrix Inc."
6. Keep tone: Warm, humble, corporate yet approachable

Use proper email formatting with greeting and sign-off. Do NOT include any HTML tags - return plain text only.`;

            const result = await model.generateContent(prompt);
            acknowledgment = result.response.text();
        } catch (geminiError: any) {
            console.error("Gemini API error:", geminiError);
            acknowledgment = `Dear ${name},

Thank you for contacting Axentrix Inc. We have received your consultation request and our team will review your requirements within 24 hours.

Best regards,
Axie
AI Assistant, Axentrix Inc.`;
        }

        // 3. Send acknowledgment email to CUSTOMER (the email they typed in the form)
        const customerEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #0A2463, #E91E63); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
                </div>
                
                <div style="background: #F9FAFB; padding: 30px; border-radius: 0 0 16px 16px; border: 1px solid #E5E7EB;">
                    <div style="white-space: pre-wrap; color: #374151; font-size: 14px; line-height: 1.8;">
                        ${acknowledgment.replace(/\n/g, '<br/>')}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 12px; border-left: 4px solid #0A2463;">
                        <p style="color: #0A2463; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0;">What Happens Next:</p>
                        <ul style="color: #374151; font-size: 14px; margin: 0; padding-left: 20px;">
                            <li>Our experts will review your requirements within 4 business hours</li>
                            <li>You will receive a personalized consultation call invitation within 24 hours</li>
                            <li>We may reach out for additional context to better serve your needs</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 24px; text-align: center;">
                        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://axentrixinc.com'}/services" 
                           style="display: inline-block; padding: 12px 24px; background: #0A2463; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
                            Explore Our Services
                        </a>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center;">
                        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                            Warm regards,<br/>
                            <strong style="color: #0A2463;">Axie</strong><br/>
                            AI Assistant, Axentrix Inc.<br/>
                            📧 info@axentrixinc.com<br/>
                            📍 Tinkune, Kathmandu, Nepal
                        </p>
                        <p style="color: #D1D5DB; font-size: 10px; margin: 20px 0 0 0;">
                            This email was sent with care by Axentrix AI Systems.<br/>
                            Please do not reply directly to this automated message.
                        </p>
                    </div>
                </div>
            </div>
        `;

        try {
            await transporter.sendMail({
                from: '"Axie - Axentrix Inc." <info@axentrixinc.com>',
                to: email, // Send to CUSTOMER'S email (what they typed in the form)
                subject: "Thank You for Contacting Axentrix Inc. - We're Here to Help",
                html: customerEmailHtml,
            });
            console.log("Customer acknowledgment sent to:", email);
        } catch (emailError) {
            console.error("Customer email error:", emailError);
            // Don't fail the request if customer email fails
        }

        return NextResponse.json(
            { success: true, id: bookingId },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
