import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, pan, phone, email } = await req.json();

    // 1. Setup your transporter (using Gmail/SMTP as an example)
    // IMPORTANT: In production, store these in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your business email (e.g., info@petkaraccounting.com)
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 2. Email to YOU (the Auditor/CA)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sahilpetkar@gmail.com', // Replace with your actual email
      subject: `🚨 NEW ITR REQUEST: ${name} (${pan})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">New ITR Filing Request</h2>
          <hr/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>PAN:</strong> <span style="text-transform: uppercase;">${pan}</span></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">This request was generated via petkaraccounting.com</p>
        </div>
      `,
    };

    // 3. Confirmation Email to the CUSTOMER
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Filing Success: Your ITR Request with Petkar Accounting`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">Hello ${name},</h2>
          <p>We have successfully received your request for ITR filing for PAN: <strong>${pan}</strong>.</p>
          <p>Our expert CA team will review your details and contact you within 4 business hours to collect documentation.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Team Petkar Accounting & Co.</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
