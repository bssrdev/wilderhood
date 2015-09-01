(function()
{
	var numAdsToDisplay = 9;
	
	var adList = [];
	var urlPrefix = "http://www.wilderhood.com/trip/";
	var imgURLPrefix = "https://az741737.vo.msecnd.net/wilderhood-public/medium/";
	//Add another key for restricting the ad to be displayed only in those months --> months:["Jan", "Feb"]
	
	
	adList.push({link: "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", image: "Darter/Trip/Andaman/Andaman.jpg", text: "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", keywords: ["Andaman", "Birding Destinations", "Port Blair", "Travel", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH", image: "Darter/Trip/Ladakh/Ladakh.jpg", text: "MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH", keywords: ["Ladakh", "Travel Destinations", "Landscape Destinations", "Leh", "Ladakh", "Travel", "Exotic"], months: ["Jul", "Aug"]});
	adList.push({link: "CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND", image: "Darter/Trip/Cambodia/Cambodia.jpg", text: "CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND", keywords: ["Cambodia", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "WALK ON THE HILLY SIDE IN BHUTAN", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "WALK ON THE HILLY SIDE IN BHUTAN", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", image: "Darter/Trip/Myanmar/Myanmar.jpg", text: "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", keywords: ["Myanmar", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", image: "Darter/Trip/Hornbill/Hornbill.jpg", text: "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", keywords: ["HORNBILL FESTIVAL", "Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", image: "Darter/Trip/Rajasthan/Rajasthan.jpg", text: "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: "MASAI MARA MIGRATION - SEPT 2015", image: "Sudhir/Trip/Maara/Maara.jpg", text: "MASAI MARA MIGRATION - SEPT 2015", keywords: ["Africa", "Maara", "Great Migration", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: "MOTHER OF ALL PARKS-SERENGETI", image: "BeyondRoads/Trip/Serengeti/Serengeti.jpg", text: "MOTHER OF ALL PARKS-SERENGETI", keywords: ["Africa", "Serengeti", "Tanzania", "Great Migration", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Pantanal/Pantanal.jpg", text: "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Exotic", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: "GIR - THE LIONS LAST LAIR", image: "BirdWing/Trip/Gir/Gir.jpg", text: "GIR - THE LIONS LAST LAIR", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", image: "Darter/Trip/Kutch/Kutch.jpg", text: "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: "OOTY", image: "BeyondRoads/Trip/Ooty/Ooty.jpg", text: "OOTY - Birding trip", keywords: ["OOTY", "Birding Destinations", "Nilgiri"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]});
	adList.push({link: "RANGANTHITTU-BANDIPUR", image: "BeyondRoads/Trip/Ranganathittu/Ranganathittu.jpg", text: "RANGANTHITTU-BANDIPUR", keywords: ["Tiger", "Bandipur", "Kabini", "Ranganathittu", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]});
	adList.push({link: "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Tadoba/Tadoba.jpg", text: "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Tadoba", "Pench", "Kanha", "Bandhavgarh", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "KAZIRANGA ROAM WITH THE RHINOS", image: "BeyondRoads/Trip/Kaziranga/Kaziranga.jpg", text: "KAZIRANGA ROAM WITH THE RHINOS", keywords: ["Tiger", "Ranthambore", "Khaziranga", "BigCats", "RHINOS"],  months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "Bandhavgarh", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "BHANDHAVGARH PHOTO TOUR", image: "MysticWild/Trip/Bandhavgarh/1.jpg", text: "BHANDHAVGARH PHOTO TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: "BANDHAVGARH TIGER RESERVE - SUNRISE TO SUNSET DEC 2015", image: "Sudhir/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "BANDHAVGARH TIGER RESERVE - SUNRISE TO SUNSET DEC 2015", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Kamchatka/Kamchatka.jpg", text: "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Kamchatka", "Exotic"], months: ["Jul", "Aug"]});
	adList.push({link: "HERPING AND PHOTOGRAPHY TOUR AT THAR DESERT", image: "BikeNHike/Trip/Thar/4.jpg", text: "THAR DESERT - HERPING", keywords: ["Thar Desert", "HERPING"], months: ["Jul", "Aug", "Sep"]});	
	adList.push({link: "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", image: "MysticWild/Trip/Someshwar/collage.jpg", text: "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", keywords: ["Agumbe", "Monsoon"], months: ["Aug", "Sep"]});
	adList.push({link: "TADOBA WILDLIFE SAFARI TOUR", image: "MysticWild/Trip/Tadoba/banner.jpg", text: "TADOBA WILDLIFE SAFARI TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	
	
	var sponsoredList = [];
	//sponsoredList.push({link: "http://thewolfpackstore.com", image: "wolfpack.jpeg", text: "Feel Leopard on you", keywords: ["Kabini", "BigCats"]});
	//sponsoredList.push({link: "http://thewolfpackstore.com", image: "gaur.jpeg", text: "Kabini is home for Indian Gaurs", keywords: ["Kabini", "BigCats"]});
	//sponsoredList.push({link: "http://wilderhood.com", image: "jlr.jpg", text: "Ad Text1"});
	
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
			$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>RECOMMENDED TRIPS</div><hr/>"));
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
})();