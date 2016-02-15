/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
	$("[data-toggle='tooltip']").tooltip();

	//make all images responsive
	$("article img").addClass("img-responsive");
	$(".w-entity-images img").removeClass("img-responsive");
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
	var MQL = 1170;

	//primary navigation slide-in effect
	if ($(window).width() > MQL) {
		var headerHeight = $('.navbar-custom').height();
		$(window).on('scroll', {
				previousTop: 0
			},
			function() {
				var currentTop = $(window).scrollTop();
				//check if user is scrolling up
				if (currentTop < this.previousTop) {
					//if scrolling up...
					if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
						$('.navbar-custom').addClass('is-visible');
					} else {
						$('.navbar-custom').removeClass('is-visible is-fixed');
					}
				} else {
					//if scrolling down...
					$('.navbar-custom').removeClass('is-visible');
					if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
				}
				this.previousTop = currentTop;
			});
	}
});

(function($) {
	$.fn.goTo = function() {
		$('html, body').animate({
			scrollTop: $(this).offset().top + 'px'
		}, 'slow');
		return this; // for chaining...
	}
})(jQuery);

function showAlert(message, type, closeDelay) {

	if ($("#alerts-container").length == 0) {
		// alerts-container does not exist, create it
		$("body").append( $('<div id="alerts-container" style="position: fixed; width: 50%; left: 25%; top: 20%;">') );
	}

	// default to alert-info; other options include success, warning, danger
	type = type || "info";    

	// create the alert div
	var alert = $('<div class="alert alert-' + type + ' fade in">')
		.append(
			$('<button type="button" class="close" data-dismiss="alert">')
			.append("&times;")
		)
		.append(message);

	// add the alert div to top of alerts-container, use append() to add to bottom
	$("#alerts-container").prepend(alert);

	// if closeDelay was passed - set a timeout to close the alert
	if (closeDelay)
		window.setTimeout(function() { alert.alert("close") }, closeDelay);     
}

//scroll to first post
$(document).ready(function(){

	/*setTimeout(function(){
		var $firstPost = $($(".post-preview").get(0));
		if($firstPost.length && window.scrollY == 0)
			$("header").next().goTo()
	}, 1000);*/

	//resizable iframes
	$(".w-content iframe").wrap("<div class='aspect-video'></div>")

	//alt as title of the image if it doesn't exist
	$("article img").each(function(){
		if(!$(this).attr("title"))
		{
			$(this).attr("title", $(this).attr("alt"));
		}
   });

	if($(".fancybox").length > 0)
	{
		$(".fancybox").fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				title: {
					type: 'inside'
				}
			},
			beforeShow : function() {
				var alt = this.element.find('img').attr('alt');
				this.inner.find('img').attr('alt', alt);
				this.title = alt;
			}
		});
		$(".open_fancybox").click(function() {
			var imageListObjectStr = $(this).data("fancybox");
			$.fancybox.open(whood[imageListObjectStr] , {
				padding : 15,
				index: 3,
				helpers : {
					title: {
						type: 'inside'
					}
				},
				openEffect  : 'elastic',
				closeEffect : 'elastic',
			});
		});
	}

	$("#w-subscribe").submit(function(e){
		e.preventDefault();
		var url = "https://www.wilderhood.com/public/api/recitals/subscribe/" + $("#w-subscribe input").val();
		$.ajax({
				url: url,
				type: "POST",
				success: function(){
					showAlert("Successfully subscribed to the mailing list", "success", 3000);
					$('#w-subscribe').hide();
				},
				error: function(){
					showAlert("Looks like you are already subscribed.", "warning", 3000);
				}
		});
	});
});

function loadjsfile(filename) {
	var fileref = document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", filename);
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

function searchInit(localRawData) {
	//format local data such that it is in same format as remote, so that its easy to handle later on
	var recitalsData = [];
	if(localRawData)
	{
		function populateLocalDataType(sourceArr, category, urlPrefix)
		{
			for(var ii=0; ii<sourceArr.length; ii++)
			{
				var tag = sourceArr[ii];
				var data = {};
				data['id'] = data['name'] = tag;
				data['category'] = category;
				data['url'] = urlPrefix + tag;
				recitalsData.push(data);
			}			
		}
		populateLocalDataType(localRawData.galleries, 'Gallery', '/');
		populateLocalDataType(localRawData.tags, 'Tag', '/tags/');
		populateLocalDataType(localRawData.authors, 'Author', '/authors/');
	}

	//init typeahead
	var remoteData = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: 'https://www.wilderhood.com/public/api/search/%QUERY'
	});
	var localData = new Bloodhound({
		datumTokenizer: function (data) {
			return Bloodhound.tokenizers.whitespace(data.name);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: recitalsData
	});

	remoteData.initialize();
	localData.initialize();

	var suggestionTemplate = '<div class="row w-search-row-top">'+
		'<a class="w-search-row-link" href="{{url}}">'+
		'<div class="col-xs-8 w-search-row-name">{{name}}</div>'+
		'<div class="col-xs-3 w-search-row-category"><span class="pull-right">{{category}}</span></div>'+
		'</a>'+
	'</div>';
	function suggestionHTML(data) {
		return suggestionTemplate.replace("{{url}}", data['url']).replace("{{name}}", data['name']).replace("{{category}}", data['category']);
	}

	//https://stackoverflow.com/questions/31007825/bootstrap-typeahead-not-showing-hints-as-expected - hints from mixed results not working
	$('.typeahead').typeahead({
		minLength: 1,
		},
		{
			source: localData.ttAdapter(),
			templates: {
				suggestion: function(data) {
					return suggestionHTML(data);
				}
			}
		}
		,{
			source: remoteData.ttAdapter(),
			templates: {
				suggestion: function(data) {
					return suggestionHTML(data);
				}
			}
		}
	);
	$('.w-search-top').show();
	$('.typeahead').on('typeahead:selected',function(evt,data){
		if(data.url)
			window.location = data.url;
	});
}