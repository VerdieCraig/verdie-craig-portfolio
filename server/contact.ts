import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use 'smtp.mailgun.org', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Your receiving email
      subject: `[Portfolio] ${subject}`,
      text: `
You received a new message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

export default router;
