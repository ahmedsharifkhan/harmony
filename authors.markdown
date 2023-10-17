---
layout: page
permalink: /authors/
---
<!-- Google Fonts -->



<h1>All Authors</h1>

<ul>
  {% for author in site.authors %}
    <li><a href="/authors/{{ author.username }}/">{{ author.name }}</a></li>
  {% endfor %}
</ul>

[Visit {{ site.data.authors[page.author].name }}'s profile](/authors/{{ page.author }}/)

