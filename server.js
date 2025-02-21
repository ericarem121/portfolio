// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle contact form submissions
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure the transporter (e.g., using Gmail)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_GMAIL_ADDRESS@gmail.com',
      pass: 'YOUR_GMAIL_PASSWORD', // Use app password if 2FA enabled
    },
  });

  const mailOptions = {
    from: email,
    to: 'YOUR_GMAIL_ADDRESS@gmail.com',
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
