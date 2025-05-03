import dotenv from "dotenv";

const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({ origin: true });

dotenv.config();

// Set the API key from Firebase environment config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// HTTPS function to handle contact form submission
exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send({ error: "Only POST requests are allowed" });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    const msg = {
      to: "weareasitetesting@gmail.com", // Change to your desired recipient
      from: "solutions@weareasite.com", // Must be a verified sender with SendGrid
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
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("SendGrid error:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });
});
