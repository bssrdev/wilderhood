var numAdsToDisplay = 3;

var adList = [];
var urlPrefix = "http://www.wilderhood.com/trip/";
var imgURLPrefix = "http://az741737.vo.msecnd.net/wilderhood-public/medium/";
adList.push({link: "Jewels of the Rainforest - Amboli", image: "BirdWing/Trip/Amboli/Banner.jpg", text: "Jewels of Rainforest", keywords: ["Amboli"]});
adList.push({link: "Rainforest Rendezvous - Photography Tour of Goa", image: "Darter/Trip/Goa/Goa.jpg", text: "RAINFOREST RENDEZVOUS", keywords: ["Goa"]});
adList.push({link: "Herping and Macro Photography Workshop - AMBOLI", image: "BikeNHike/Trip/Amboli/BikeNHike_Amboli_1.jpg", text: "HERPING AND MACRO PHOTOGRAPHY", keywords: ["Amboli"]});
adList.push({link: "Explore Wayanad", image: "MysticWild/Trip/Wayanad/1.jpg", text: "EXPLORE WAYANAD", keywords: ["Wayanad"]});
adList.push({link: "MICROLAND EXPEDITION - MACRO PHOTOGRAPHY TOUR", image: "Toehold/Trip/Coorg/Coorg.jpg", text: "MICROLAND EXPEDITION", keywords: ["Coorg"]});
adList.push({link: "Gir - The Lions Last Lair", image: "BirdWing/Trip/Gir/Gir.jpg", text: "THE LIONS LAST LAIR", keywords: ["Gir"]});

var sponsoredList = [];
/*sponsoredList.push({link: "http://wilderhood.com", image: "Banner.jpg", text: "Ad Text"});
sponsoredList.push({link: "http://wilderhood.com", image: "bml.jpg", text: "Ad Text1"});
sponsoredList.push({link: "http://wilderhood.com", image: "jlr.jpg", text: "Ad Text1"});*/

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function preprocess(dataList)
{
	for(var ii=0; ii<dataList.length; ++ii)
	{
		var data = dataList[ii];
		data.text = toTitleCase(data.text);
	}
}

function getBaseURL() {
   return location.protocol + "//" + location.hostname + 
      (location.port && ":" + location.port) + "/";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createElementWithString(htmlStr)
{
	var divNode = document.createElement("div");
	divNode.innerHTML = htmlStr;
	return divNode;
}

function createElementWithDataObj(data, compiledTemplate, localImage)
{
	if(localImage)
		data.image = getBaseURL() + "img/seo/" + data.image;
	else
		data.image = imgURLPrefix + data.image;
	
	var renderedTemplate = compiledTemplate.render(data);
	return createElementWithString(renderedTemplate);
}

function filterListByKeywords(dataList, keywordsList)
{
	for(var jj=0; jj < keywordsList.length; ++jj)
	{
		keywordsList[jj] = keywordsList[jj].toLowerCase();
	}

	var filteredDataList = [];
	var excludedDataList = [];

	for(var ii=0; ii<dataList.length; ++ii)
	{
		var data = dataList[ii];
		var found = false;
		for(var kk=0; (kk < data.keywords.length) && !found; ++kk)
		{
			var keyword = data.keywords[kk].toLowerCase();
			for(var jj=0; jj < keywordsList.length; ++jj)
			{
				if(keyword == keywordsList[jj])
				{
					found = true;
					break;
				}
			}
		}
		if(found)
			filteredDataList.push(data);
		else
			excludedDataList.push(data);
	}
	
	var newList = shuffleArray(filteredDataList).slice(0, numAdsToDisplay);
	if(newList.length < numAdsToDisplay)
	{
		newList = newList.concat(shuffleArray(excludedDataList).slice(0, numAdsToDisplay - newList.length));
	}

	return newList;
}

function displayAds()
{
	return;
	preprocess(sponsoredList);
	preprocess(adList);

	var seoKeywords = window.seoKeywords || [];

	var $adHolderDiv = $("#seoHolder");
	if(!$adHolderDiv.length)
		return;
	
	var template = $('#seoTemplate').html();
	var compiledTemplate = Hogan.compile(template);
	
	//randomize and pick first six
	var randomizedSponsoredList = shuffleArray(sponsoredList).slice(0, numAdsToDisplay);
	var randomizedAdList = filterListByKeywords(adList, seoKeywords);

	var fragment = document.createDocumentFragment();
	if(randomizedSponsoredList.length > 0)
	{
		$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>SPONSORED</div><hr/>"));
		for(var ii=0; ii<randomizedSponsoredList.length; ++ii)
		{
			var data = randomizedSponsoredList[ii];
			fragment.appendChild(createElementWithDataObj(data, compiledTemplate, true));
		}
		$(fragment).append(createElementWithString("<hr style='padding-top:25px'/>"));
	}
	else
	{
		$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>RECOMMENDED</div><hr/>"));
	}
	for(var ii=0; ii<randomizedAdList.length; ++ii)
	{
		var data = randomizedAdList[ii];
		data.link = urlPrefix + data.link;
		fragment.appendChild(createElementWithDataObj(data, compiledTemplate, false));
	}
	$adHolderDiv.append(fragment);
}

displayAds();