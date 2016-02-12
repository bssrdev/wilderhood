---
---
{% assign tags = '' %}
{% assign authors = '' %}
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
var localSearchData = {
  tags : [{{  tags | split: '|' | uniq | join: ',' }}],
  authors: [{{  authors | split: '|' | uniq | join: ',' }}]
}
searchInit(localSearchData);