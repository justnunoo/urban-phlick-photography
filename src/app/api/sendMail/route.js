import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, phone, eventType, date } = await req.json();

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: 'justnunoo@gmail.com', // Recipient's email
      subject: 'New Appointment Booking',
      text: `You have a new appointment request:\n\n
      Email: ${email}\n
      Phone: ${phone}\n
      Event Type: ${eventType}\n
      Date: ${date}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return Response.json({ success: false, message: 'Error sending email', error }, { status: 500 });
  }
}
