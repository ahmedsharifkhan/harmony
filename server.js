const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/submit-contact-form', (req, res) => {
  const { name, email, message } = req.body;
  const markdownContent = `---
  title: Contact Form Submission
  name: ${name}
  email: ${email}
  ---

  **Name:** ${name}

  **Email:** ${email}

  **Message:**
  ${message}
  `;

  const filename = `${Date.now()}-contact.md`;
  const filePath = path.join(__dirname, 'contact-submissions', filename);

  fs.outputFile(filePath, markdownContent, (err) => {
    if (err) {
      console.error('Error saving contact form submission:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      console.log('Contact form submission saved:', filePath);
      res.json({ message: 'Form submitted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
