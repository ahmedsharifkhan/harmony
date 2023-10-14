---
layout: default
title: Contact Us
---

Welcome to our website! We are a passionate team dedicated to providing valuable information to our readers.

<p>Feel free to get in touch with us using the contact form below:</p>

---
layout: default
---

<div class="container">
  <h1>Contact Us</h1>
  <form id="contact-form">
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
      <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn border-info">Submit</button>
  </form>
</div>

<script>
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = { name, email, message };

  fetch('/submit-contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted:', data);
      // Handle success or display a thank you message
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
});
</script>
