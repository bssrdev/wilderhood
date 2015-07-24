var numAdsToDisplay = 6;

var adList = [];
var urlPrefix = "http://www.wilderhood.com/trip/";
var imgURLPrefix = "http://az741737.vo.msecnd.net/wilderhood-public/medium/";
//Add another key for restricting the ad to be displayed only in those months --> months:["Jan", "Feb"]
adList.push({link: "HERPING AND MACRO PHOTOGRAPHY WORKSHOP - AGUMBE", image: "BikeNHike/Trip/Agumbe/BikeNHike_Agumbe_1.jpg", text: "HERPING AND MACRO PHOTOGRAPHY WORKSHOP", keywords: ["Agumbe", "Reptiles", "Monsoon Destinations"]});
adList.push({link: "GOA - IN RAINS", image: "BirdWing/Trip/Goa/Goa.jpg", text: "GOA - IN RAINS", keywords: ["Chorla Ghats", "Monsoon Destinations", "Reptiles"]});
adList.push({link: "Explore Wayanad", image: "MysticWild/Trip/Wayanad/1.jpg", text: "EXPLORE WAYANAD", keywords: ["Wayanad", "Monsoon Destinations", "Reptiles"]});
adList.push({link: "BHANDHAVGARH PHOTO TOUR", image: "MysticWild/Trip/Bandhavgarh/1.jpg", text: "BHANDHAVGARH PHOTO TOUR", keywords: ["Bandhavgarh", "Tiger Destinations", "Mammal Destinations", "Wildlife Destinations"]});
adList.push({link: "RAINFOREST RENDEZVOUS - PHOTOGRAPHY TOUR OF GOA", image: "Darter/Trip/Goa/Goa.jpg", text: "RAINFOREST RENDEZVOUS - PHOTOGRAPHY TOUR OF GOA", keywords: ["Chorla Ghats", "Monsoon Destinations", "Reptiles"]});
adList.push({link: "HERPING AND MACRO PHOTOGRAPHY WORKSHOP - COORG", image: "BikeNHike/Trip/Coorg/BikeNHike_Coorg_1.jpg", text: "HERPING AND MACRO PHOTOGRAPHY WORKSHOP - COORG", keywords: ["Coorg", "Monsoon Destinations", "Reptiles"]});
adList.push({link: "MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH", image: "Darter/Trip/Ladakh/Ladakh.jpg", text: "MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH", keywords: ["Ladakh", "Travel Destinations", "Landscape Destinations"]});
adList.push({link: "HEART OF THE HIMALAYAS - PHOTOGRAPHY TOUR IN LAHAUL & SPITI", image: "Darter/Trip/Lahaul/Spiti.jpg", text: "HEART OF THE HIMALAYAS - PHOTOGRAPHY TOUR IN LAHAUL & SPITI", keywords: ["Lahaul and Spiti", "Travel Destinations"]});
adList.push({link: "CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND", image: "Darter/Trip/Cambodia/Cambodia.jpg", text: "CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND", keywords: ["Cambodia", "Travel Destinations", "Landscape Destinations"]});

var sponsoredList = [];
/*sponsoredList.push({link: "http://wilderhood.com", image: "Banner.jpg", text: "Ad Text"});
sponsoredList.push({link: "http://wilderhood.com", image: "bml.jpg", text: "Ad Text1"});
sponsoredList.push({link: "http://wilderhood.com", image: "jlr.jpg", text: "Ad Text1"});*/

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function toLowerCaseList(list)
{
	if(!list)
		return;

	for(var ii=0; ii < list.length; ++ii)
	{
		list[ii] = list[ii].toLowerCase();
	}
}

function preprocess(dataList)
{
	for(var ii=0; ii<dataList.length; ++ii)
	{
		var data = dataList[ii];
		data.text = toTitleCase(data.text);
		toLowerCaseList(data.keywords);
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

function filterListByMonths(dataList, currentDate)
{
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	currentMonth = monthNames[currentDate.getMonth()];

	var retList = [];
	for(var ii=0; ii<dataList.length; ++ii)
	{
		var data = dataList[ii];
		var monthsList = data["months"];
		//considered for all months if entry is not present
		//or considered for the months if an entry is present
		if(!monthsList || (monthsList.indexOf(currentMonth) > -1))
			retList.push(data);
	}
	return retList;
}

function isKeywordInDataEntry(data, keyword)
{
	if(!data.keywords)
		return false;
	return data.keywords.indexOf(keyword) > -1;
}

function filterListByKeywords(dataList, keywordsList)
{
	toLowerCaseList(keywordsList);
	
	//using reverse keyword position in keywordsList as priority
	//if there are two keywords at indices 0, 1 (in a list of length 3)
	//for same data entry, then priority will be (3-0)+(3-1)=5
	var priorityList = [];	//each element is an object with data and priority keys
	
	function pushPriorityDataIntoPriorityList(iData, priority, priorityList)
	{
		var iDataLink = iData.link;

		//check if data is already present
		for(var ii=0; ii<priorityList.length; ++ii)
		{
			var dataObj = priorityList[ii];
			if(dataObj.data.link == iDataLink)
			{
				dataObj.priority += priority;
				return;
			}
		}

		//not found
		priorityList.push({data: iData, priority: priority});
	}

	//sort the priority list based on the priority index in each list entry
	//with randoming entries in same priority zone
	function getPriorityListSorted(priorityList)
	{
		var samePriorityLists = [];		//its a list of list --> priority as the key to list of data entries for that priority
		var lowestPriorityIndex = Number.POSITIVE_INFINITY;
		var highestPriorityIndex = Number.NEGATIVE_INFINITY;

		//update lowestPriorityIndex, highestPriorityIndex and samePriorityLists
		for(var ii=0; ii<priorityList.length; ++ii)
		{
			var dataObj = priorityList[ii];
			var priority = dataObj.priority;
			if(lowestPriorityIndex > priority)	lowestPriorityIndex = priority;
			if(highestPriorityIndex < priority)	highestPriorityIndex = priority;
			
			if(!samePriorityLists[priority])	samePriorityLists[priority] = [];
			samePriorityLists[priority].push(dataObj.data);
		}

		var retList = [];
		//shuffle same priority lists and update final list
		for(var ii=highestPriorityIndex; ii >= lowestPriorityIndex; --ii)
		{
			var priorityList = samePriorityLists[ii];
			if(!priorityList)
				continue;	//Might not be present as priorities might not be sequential

			retList = retList.concat(shuffleArray(priorityList));
		}
		
		return retList;
	}

	function getExcludedListFromPriorityList(totalList, priorityList)
	{
		var excludedList = [];
		for(var jj=0; jj<totalList.length; ++jj)
		{
			var found = false;
			var totalListData = totalList[jj];
			var totalListDataLink = totalListData.link;

			for(var ii=0; ii<priorityList.length; ++ii)
			{
				if(priorityList[ii].data.link == totalListDataLink)
				{
					found = true;
					break;
				}
			}

			if(!found)
				excludedList.push(totalListData);
		}
		return excludedList;
	}



	//keyword order in the post has priority
	var keywordsLength = keywordsList.length;
	for(var jj=0; jj < keywordsLength; ++jj)
	{
		var keyword = keywordsList[jj];
		for(var ii=0; ii<dataList.length; ++ii)
		{
			var data = dataList[ii];
			if(isKeywordInDataEntry(data, keyword))
			{
				//using reverse keyword position as priority
				//if there are two keywords at indices 0, 1 (in a list of length 3),
				//for same data entry, then priority will be (3-0)+(3-1)=5
				pushPriorityDataIntoPriorityList(data, keywordsLength - jj, priorityList);
			}
		}
	}

	var filteredDataList = getPriorityListSorted(priorityList);	//we got priority based shuffled list
	var newList = filteredDataList.slice(0, numAdsToDisplay);
	if(newList.length < numAdsToDisplay)
	{
		var excludedDataList = getExcludedListFromPriorityList(dataList, priorityList);
		newList = newList.concat(shuffleArray(excludedDataList).slice(0, numAdsToDisplay - newList.length));
	}

	return newList;
}

function displayAds()
{
	preprocess(sponsoredList);
	preprocess(adList);

	var seoKeywords = window.seoKeywords || [];
	var currentDate = new Date();

	var $adHolderDiv = $("#seoHolder");
	if(!$adHolderDiv.length)
		return;
	
	var template = $('#seoTemplate').html();
	var compiledTemplate = Hogan.compile(template);
	
	//randomize and pick first six
	var randomizedSponsoredList = shuffleArray(sponsoredList).slice(0, numAdsToDisplay);
	var randomizedAdList = filterListByKeywords(filterListByMonths(adList, currentDate), seoKeywords);

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