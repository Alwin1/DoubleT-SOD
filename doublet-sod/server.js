const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const admin = require("firebase-admin");
require("dotenv").config(); // Load environment variables

// Initialize Firebase Admin
const serviceAccount = require("./firebase-service-account.json"); // Make sure this file exists

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form endpoint
app.post("/send-contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const emailMsg = {
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
    // Send email via SendGrid
    await sgMail.send(emailMsg);

    // Save to Firebase Firestore
    await db.collection("contacts").add({
      name,
      email,
      phone: phone || "N/A",
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ message: "Email sent and contact saved successfully." });
  } catch (error) {
    console.error("Error in /send-contact:", error);
    res.status(500).json({ error: "Failed to send email or save contact." });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
