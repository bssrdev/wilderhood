/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */
function loadjsfile(e){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(t)}function loadcssfile(e,t){if(t)var s=document.getElementById(t);else var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",e),t||document.getElementsByTagName("head")[0].appendChild(s)}$(function(){$("[data-toggle='tooltip']").tooltip(),$("img").addClass("img-responsive")}),jQuery(document).ready(function(e){var t=1170;if(e(window).width()>t){var s=e(".navbar-custom").height();e(window).on("scroll",{previousTop:0},function(){var t=e(window).scrollTop();t<this.previousTop?t>0&&e(".navbar-custom").hasClass("is-fixed")?e(".navbar-custom").addClass("is-visible"):e(".navbar-custom").removeClass("is-visible is-fixed"):(e(".navbar-custom").removeClass("is-visible"),t>s&&!e(".navbar-custom").hasClass("is-fixed")&&e(".navbar-custom").addClass("is-fixed")),this.previousTop=t})}}),function(e){e.fn.goTo=function(){return e("html, body").animate({scrollTop:e(this).offset().top+"px"},"slow"),this}}(jQuery),$(document).ready(function(){setTimeout(function(){var e=$($(".post-preview").get(0));e.length&&0==window.scrollY&&$("header").next().goTo()},1e3),$(".w-content iframe").wrap("<div class='aspect-video'></div>")});