---
layout: default
title: Contact Us
title: Contact Page
---

Welcome to our website! We are a passionate team dedicated to providing valuable information to our readers.

<p>Feel free to get in touch with us using the contact form below:</p>

<body>
    <form id="contact-form" action="https://smartforms.dev/submit/652b47e60dd8ac0a53217348" method="POST">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea class="form-control" id="message" type="text" name="tel" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn border-info mt-1">Submit</button>
</form>
<div id="message-container"></div>


<div class="container">
# Contact Form Submissions

{% for submission in site.contact-submissions %}
<div class="submission">
  <h2>{{ submission.name }}</h2>
  <p>Email: {{ submission.email }}</p>
  <p>Message: {{ submission.message | newline_to_br }}</p>
</div>
{% endfor %}
    </div>

<!-- <script>

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  // Send a POST request to the server
  try {
    const response = await fetch('/submit-contact-form', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const messageContainer = document.getElementById('message-container');
      messageContainer.textContent = data.message;
    } else {
      console.error('Form submission failed.');
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
});


    </script> -->
</body>
