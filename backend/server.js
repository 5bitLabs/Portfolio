    const express = require('express');
    const cors = require('cors');
    const nodemailer = require('nodemailer');
    require('dotenv').config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // Middleware
    // app.use(cors());
    app.use(cors({
    origin: 'https://www.5bitlabs.com/', // Allow requests from any frontend (for dev testing)
    }));
    app.use(express.json());

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,       // your Gmail address
        pass: process.env.EMAIL_PASS        // your Gmail app password
    }
    });

    // Endpoint to handle contact form submission
    app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: 'New Contact Message from 5Bit Labs Website',
        html: `
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br />${message}</p>
        `
        });

        res.status(200).json({ success: true, message: 'Email sent successfully.' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
    });

    // app.listen(PORT, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
    // });
module.exports = app;
