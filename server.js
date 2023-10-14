const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  // Collect the form data
  const name = req.body.name;
  const email = req.body.email;

  // Create a Markdown string with the collected data
  const markdownData = `---
  name: ${name}
  email: ${email}
  ---

  Your message or additional content goes here.`;

  // Save the data to a Markdown file
  fs.writeFileSync('contact-submissions.markdown', markdownData, { flag: 'a' });

  res.send('Form submission successful');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
