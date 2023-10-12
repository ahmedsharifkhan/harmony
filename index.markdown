---
layout: default
title: Home
---

<h1>Welcome to My Blog</h1>

<p>Keep in mind that using a fixed height might not be the best approach for all types of content, especially if the content length varies significantly. Consider using a fixed height only when you are certain that the content inside the card will not exceed that height and that it won't lead to issues with content overflow.</p>
<!-- Card  -->
<div class="row">
{% for post in site.posts %}
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card border-info mb-3">
      <div class="card-body" style="height: 450px;"> 
      <!-- Adjust the height as needed -->
      <img src="{{ post.image | relative_url }}" class="card-img-top" style="width: 100 height: 100px;" alt="{{ post.title }}">
        <h5 class="card-title">{{ post.title | strip_html | truncate: 65 }}</h5>
        <p class="card-text"><span class="badge text-bg-info">{{ post.date | date: "%B %d, %Y" }}</span></p>
        <p class="card-text">{{ post.Description | strip_html | truncate: 100 }}</p>
        <a href="{{ post.url | relative_url }}" class="btn btn-info">See The Post</a>
      </div>
    </div>
  </div>
    {% endfor %}
</div>