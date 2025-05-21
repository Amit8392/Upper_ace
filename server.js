// This is conceptual and requires Node.js, Express, and a mailer library like 'nodemailer' installed.
// npm init -y
// npm install express nodemailer body-parser

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded request bodies
app.use(express.static('path/to/your/upper-ace-logistics')); // Serve your static frontend files

// Configure Nodemailer transporter (replace with your actual email service details)
let transporter = nodemailer.createTransport({
    service: 'gmail', // or 'Outlook', 'SMTP', etc.
    auth: {
        user: 'your_company_email@example.com', // Your company's email address
        pass: 'your_email_password' // Your email password or app-specific password
    }
});

// Enquiry Form Submission Endpoint
app.post('/submit-enquiry', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
    }

    const mailOptions = {
        from: 'your_company_email@example.com', // Sender address
        to: 'info@upperacelogistics.com',       // Your company's inquiry email
        subject: `New Website Enquiry: ${subject}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send message.' });
        }
        console.log('Message sent: %s', info.messageId);
        res.json({ success: true, message: 'Message sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});