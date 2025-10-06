// app/api/contact/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, budget, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Create Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email address
      to: process.env.EMAIL_USER, // Recipient email (the sender)
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Budget: ${budget || 'Not specified'}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // More user-friendly error handling for production
    return new Response(
      JSON.stringify({ error: 'Error sending message. Please try again later.' }),
      { status: 500 }
    );
  }
}
