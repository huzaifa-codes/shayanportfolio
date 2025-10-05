    import nodemailer from "nodemailer";

    export async function POST(req : Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
        return Response.json({ message: "Email is required" }, { status: 400 });
        }
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        // ✉️ Email details
        const mailOptions = {
        from:email,
        to:  process.env.EMAIL_USER, 
        subject: "New Case Study Access Request",
        text: `A user requested access to a locked case study.\nEmail: ${email}`,
        };

    
        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ message: "Error sending email" }, { status: 500 });
    }
    }
