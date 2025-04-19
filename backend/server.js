//     const express = require('express');
//     const cors = require('cors');
//     const nodemailer = require('nodemailer');
//     require('dotenv').config();

//     const app = express();
//     const PORT = process.env.PORT || 5000;

//     // Middleware
//     // app.use(cors());
//     // app.use(cors({
//     // origin: 'https://www.5bitlabs.com', // Allow requests from any frontend (for dev testing)
//     // credentials: true
//     // }));

//     const allowedOrigins = [
//       'https://5bitlabs.com',
//       'http://5bitlabs.com',
//       'https://www.5bitlabs.com',
//       'http://76.76.21.241',  // Vercel IP
//     ];

//     app.use(cors({
//       origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//           callback(null, true);
//         } else {
//           callback(new Error('Not allowed by CORS'));
//         }
//       },
//       credentials: true
//     }));

//     app.use(express.json());

//     // Nodemailer setup
//     const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,       // your Gmail address
//         pass: process.env.EMAIL_PASS        // your Gmail app password
//     }
//     });

//     // Endpoint to handle contact form submission
//     app.post('/api/contact', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         await transporter.sendMail({
//         from: `"${name}" <${email}>`,
//         to: process.env.EMAIL_USER,
//         subject: 'New Contact Message from 5Bit Labs Website',
//         html: `
//             <h2>Contact Details</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong><br />${message}</p>
//         `
//         });

//         res.status(200).json({ success: true, message: 'Email sent successfully.' });
//     } catch (err) {
//         console.error('Error sending email:', err);
//         res.status(500).json({ success: false, message: 'Failed to send email.' });
//     }
//     });

//     // app.listen(PORT, () => {
//     // console.log(`Server running on http://localhost:${PORT}`);
//     // });
// module.exports = app;

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Updated CORS Configuration
const allowedOrigins = [
  'https://www.5bitlabs.com',
  'http://76.76.21.241',
  'http://localhost:5000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Message from 5Bit Labs',
      html: `
        <h2>Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, error: 'Email failed to send' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('5Bit Labs backend is running.');
});

// Export app for testing or serverless setups
module.exports = app;

// Start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

