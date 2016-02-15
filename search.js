---
---
{% assign tags = '' %}
{% assign authors = '' %}
{% assign galleries = '' %}
{% for collection in site.collections %}
	{% for post in site[collection.label] %}
		{% for post_tag in post.tags %}
			{% assign tag = post_tag | append: '"' | prepend: '"' %}
			{% assign tags = tags | append: tag | append: '|' %}
		{% endfor %}
		{% if post.author != null %}
			{% assign author = post.author | append: '"' | prepend: '"' %}
			{% assign authors = authors | append: author | append: '|' %}
		{% endif %}
	{% endfor %}
{% endfor %}

{% for collection in site.collections %}
	{% if collection.label != 'posts' %}
		{% assign gallery = collection.label | append: '"' | prepend: '"' %}
		{% assign galleries = galleries | append: gallery | append: '|' %}
	{% endif %}
{% endfor %}

var localSearchData = {
  galleries : [{{  galleries | split: '|' | uniq | join: ',' }}],
  tags : [{{  tags | split: '|' | uniq | join: ',' }}],
  authors: [{{  authors | split: '|' | uniq | join: ',' }}]
}
searchInit(localSearchData);