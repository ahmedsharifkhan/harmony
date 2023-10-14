---
layout: default
title: Contact Submissions
---

<h1>Contact Submissions</h1>

<ul>
{% for submission in site.contact_submissions %}
  <li>
    <strong>Name:</strong> {{ submission.name }}<br>
    <strong>Email:</strong> {{ submission.email }}
  </li>
{% endfor %}
</ul>
