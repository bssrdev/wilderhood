$(function() {
function initPostsContainer()
{
	if(!postList)
		return;
	var postURLs = [];
	for(var ii=0; ii<postList.length; ++ii)
	{
		var postObj = postList[ii];
		if(postObj.url.indexOf("index.html") == -1)
			postURLs.push(postObj);
	}

	postURLs.sort(function(a, b) {
		if(a.url.substr(a.url.lastIndexOf("/")+1) > b.url.substr(b.url.lastIndexOf("/")+1))	//descending based on date
			return -1;
		else
			return 1;
	});

	addPosts(postURLs);

	postList = undefined;
}

function addPosts(postURLs)
{
	if(!postURLs)
		return;
	
	var template = $(galleryTemplate).html();
	var compiledTemplate = Hogan.compile(template);

	var fragment = document.createDocumentFragment();
	var	$fragment = $(fragment);
	for(var ii=0; ii<postURLs.length; ++ii)
	{
		var postObj = postURLs[ii];
		var renderedTemplate = compiledTemplate.render(postObj);
		$fragment.append(renderedTemplate);
	}
	$(".postsContainer").append($fragment);
}

$(function() {
	initPostsContainer();
	var $lzyImages = $("img.w-gallery-item-image");
	$lzyImages.lazyload({
		threshold : 200,
		//effect : "fadeIn"
	});	//lazy load images
});
});