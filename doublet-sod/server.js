import express from "express";
import sgMail from "@sendgrid/mail";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

import admin from "firebase-admin";
import serviceAccount from "./firebase-service-account.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const msg = {
    to: "weareasitetesting@gmail.com",
    from: "solutions@weareasite.com",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
