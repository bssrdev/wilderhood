(function()
{
	var numAdsToDisplay = 10;
	
	var adList = [];
	var urlPrefix = "http://www.wilderhood.com/trip/";
	var imgURLPrefix = "https://az741737.vo.msecnd.net/wilderhood-public/medium/";
	//Add another key for restricting the ad to be displayed only in those months --> months:["Jan", "Feb"]
	
	
	adList.push({link: urlPrefix + "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", image: "Darter/Trip/Andaman/Andaman.jpg", text: "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", keywords: ["Andaman", "Birding Destinations", "Port Blair", "Travel", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "WALK ON THE HILLY SIDE IN BHUTAN", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "WALK ON THE HILLY SIDE IN BHUTAN", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", image: "Darter/Trip/Myanmar/Myanmar.jpg", text: "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", keywords: ["Myanmar", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", image: "Darter/Trip/Hornbill/Hornbill.jpg", text: "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", keywords: ["HORNBILL FESTIVAL", "Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", image: "Darter/Trip/Rajasthan/Rajasthan.jpg", text: "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "MASAI MARA MIGRATION - SEPT 2015", image: "Sudhir/Trip/Maara/Maara.jpg", text: "MASAI MARA MIGRATION - SEPT 2015", keywords: ["Africa", "Maara", "Great Migration", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Pantanal/Pantanal.jpg", text: "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Exotic", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "GIR - THE LIONS LAST LAIR", image: "BirdWing/Trip/Gir/Gir.jpg", text: "GIR - THE LIONS LAST LAIR", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", image: "Darter/Trip/Kutch/Kutch.jpg", text: "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "OOTY", image: "BeyondRoads/Trip/Ooty/Ooty.jpg", text: "OOTY - Birding trip", keywords: ["OOTY", "Birding Destinations", "Nilgiri"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]});
	adList.push({link: urlPrefix + "RANGANTHITTU-BANDIPUR", image: "BeyondRoads/Trip/Ranganathittu/Ranganathittu.jpg", text: "RANGANTHITTU-BANDIPUR", keywords: ["Tiger", "Bandipur", "Kabini", "Ranganathittu", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Tadoba/Tadoba.jpg", text: "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Tadoba", "Pench", "Kanha", "Bandhavgarh", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "KAZIRANGA ROAM WITH THE RHINOS", image: "BeyondRoads/Trip/Kaziranga/Kaziranga.jpg", text: "KAZIRANGA ROAM WITH THE RHINOS", keywords: ["Tiger", "Ranthambore", "Khaziranga", "BigCats", "RHINOS"],  months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "Bandhavgarh", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "BHANDHAVGARH PHOTO TOUR", image: "MysticWild/Trip/Bandhavgarh/1.jpg", text: "BHANDHAVGARH PHOTO TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Kamchatka/Kamchatka.jpg", text: "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Kamchatka", "Exotic"], months: ["Jul", "Aug"]});
	adList.push({link: urlPrefix + "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", image: "MysticWild/Trip/Someshwar/collage.jpg", text: "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", keywords: ["Agumbe", "Monsoon"], months: ["Aug", "Sep"]});
	adList.push({link: urlPrefix + "TADOBA WILDLIFE SAFARI TOUR", image: "MysticWild/Trip/Tadoba/banner.jpg", text: "TADOBA WILDLIFE SAFARI TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "Photo-tour to Kabini", image: "consciouspace/Trip/Kabini/kabini3.jpg", text: "Photo-tour to Kabini", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats", "Bandipur"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR", image: "BikeNHike/Trip/Gir/1.jpg", text: "BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR", image: "BikeNHike/Trip/Tal/1.jpg", text: "RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR", keywords: ["TalChappar", "Birding Destinations", "Raptors", "Black bucks"], months: ["Oct", "Nov"]});
	adList.push({link: urlPrefix + "Alibag - Coastal Capers", image: "BirdWing/Trip/Alibag/alibag_terek_sandpiper.jpg", text: "Alibag - Coastal Capers", keywords: ["Alibag", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Mangrove Magic - Sundarban wildlife photography tour", image: "Birdwing/Trip/Sundarbans/Sundarbans.jpg", text: "Mangrove Magic - Sundarban wildlife photography tour", keywords: ["Sundarban", "Birding Destinations","Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Keoladeo National Park - Bharatpur", image: "Birdwing/Trip/Bharatpur/Bharatpur.jpg", text: "Keoladeo National Park - Bharatpur", keywords: ["Bharatpur", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb"]});		
	adList.push({link: urlPrefix + "Travel Photography Tour to Bhutan", image: "Darter/Trip/Bhutan/Bhutan.jpg", text: "Travel Photography Tour to Bhutan", keywords: ["Bhutan", "Landscape Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May"]});		
	adList.push({link: urlPrefix + "Heart of the Himalayas - Photography Tour in Lahaul & Spiti", image: "Darter/Trip/Lahaul/Spiti.jpg", text: "Heart of the Himalayas - Photography Tour in Lahaul & Spiti", keywords: ["Lahaul", "Spiti", "Travel Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "A Snow filled winter in Ladakh - Photography Tour", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A Snow filled winter in Ladakh - Photography Tour", keywords: ["Ladakh", "Travel Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "A Week With The Big Cats - Masai Mara", image: "BeyondRoads/Trip/Maara/Maara.jpg", text: "A Week With The Big Cats - Masai Mara", keywords: ["Masai Mara", "African Destinations", "Landscape Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Serengeti Calving Season -Tanzania", image: "BeyondRoads/Trip/Serengeti/Serengeti.jpg", text: "Serengeti Calving Season -Tanzania", keywords: ["Serengeti", "African Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Land Of The Lion - Tailed Macaque - Valpari", image: "BeyondRoads/Trip/Valparai/valparai.jpg", text: "Land Of The Lion - Tailed Macaque - Valpari", keywords: ["Valparai", "Birding Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Land Of The Leopards - Kabini", image: "BeyondRoads/Trip/Kabini/Kabini.jpg", text: "Land Of The Leopards - Kabini", keywords: ["Kabini", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Yala Wilpattu", image: "BeyondRoads/Trip/Yala_wilpattu/yala_wilpattu.jpg", text: "Yala Wilpattu", keywords: ["Yala Wilpattu", "Travel Destinations", "Mammal Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb"]});		
	adList.push({link: urlPrefix + "The Tigers Fortress - Ranthambore", image: "BeyondRoads/Trip/Ranthambore/Ranthambore.jpg", text: "The Tigers Fortress - Ranthambore", keywords: ["Ranthambore", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "The Real Land Of Tigers -Tadoba", image: "BeyondRoads/Trip/Tadoba/Tadoba.jpg", text: "The Real Land Of Tigers -Tadoba", keywords: ["Tadoba", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Spy In The Jungle - Pench", image: "BeyondRoads/Trip/Pench/Pench.jpg", text: "Spy In The Jungle - Pench", keywords: ["Pench", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Kanha National Park", image: "BeyondRoads/Trip/Kanha/Kanha.jpg", text: "Kanha National Park", keywords: ["Kanha", "Tiger Destinations", "Mammal Destinations", "Landscape Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Travel To The Country Tiger - Bandhavgarh", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Travel To The Country Tiger - Bandhavgarh", keywords: ["Bandhavgarh", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Dawn To Dusk At Bandhavgarh ", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Dawn To Dusk At Bandhavgarh ", keywords: ["Bandhavgarh", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Home Of One Horned Rhino - Kaziranga ", image: "BeyondRoads/Trip/Kaziranga/Kaziranga.jpg", text: "Home Of One Horned Rhino - Kaziranga", keywords: ["Kaziranga", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Bandipur Tiger Reserve", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Bandipur Tiger Reserve", keywords: ["Bandipur", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Leopard Lounge", image: "Toehold/Trip/Kabini/Kabini.jpg", text: "Leopard Lounge", keywords: ["Kabini", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Thar Attraction", image: "Toehold/Trip/Thar/Thar.jpg", text: "Thar Attraction", keywords: ["Thar Desert", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Jungle Enclave", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Jungle Enclave", keywords: ["Bandipur", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Jungle Jaunt", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Jungle Jaunt", keywords: ["Bandipur", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Spot Luck", image: "Toehold/Trip/Bera/Bera.jpg", text: "Spot Luck", keywords: ["Bera", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Little Rann of Kutch", image: "Toehold/Trip/Kutch/Kutch.jpg", text: "Little Rann of Kutch", keywords: ["LRK", "Kutch", "Birding Destinations", "Mammal Destinations", "Landscape Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Nature Photography Masterclass- Ranganathittu", image: "Toehold/Trip/Ranganathittu/Ranganathittu.jpg", text: "Nature Photography Masterclass- Ranganathittu", keywords: ["Ranganathittu", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "A Big Cat Week - Masai Mara", image: "Toehold/Trip/Masai-mara/masai_mara.jpg", text: "A Big Cat Week - Masai Mara", keywords: ["Masai Mara", "African Destinations", "Travel Destinations"], months: ["Oct", "Nov","Dec"]});		
	adList.push({link: urlPrefix + "Giant Of The FloodPlains", image: "Toehold/Trip/Kaziranga/Kaziranga.jpg", text: "Giant Of The FloodPlains", keywords: ["Kaziranga", "African Destinations", "Travel Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Wetland Wonders - Bharatpur", image: "Toehold/Trip/Bharatpur/Bharatpur1.jpg", text: "Wetland Wonders - Bharatpur", keywords: ["Bharatpur", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Corbett National Park", image: "Toehold/Trip/Corbett/Corbett.jpg", text: "Corbett National Park ", keywords: ["Corbett", "Mammal Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Tiger Fortress-Ranthambore", image: "Toehold/Trip/Ranthambore/Ranthambore.jpg", text: "Tiger Fortress-Ranthambore", keywords: ["Ranthambore", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Wonders Of Endless Plains-Serengeti", image: "Toehold/Trip/Serengeti/Serengeti.jpg", text: "Wonders Of Endless Plains-Serengeti", keywords: ["Serengeti", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Grassland Glory - Tal Chappar", image: "Toehold/Trip/Talchapar/Talchapar.jpg", text: "Grassland Glory - Tal Chappar", keywords: ["Talchapar", "Birding Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Eaglenest Wildlife Sanctuary - Arunachal Pradesh", image: "Toehold/Trip/Arunachal_Pradesh/Arunachal_pradesh.jpg", text: "Eaglenest Wildlife Sanctuary - Arunachal Pradesh", keywords: ["Arunachal Pradesh", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Spring Type Collection - Bandhavgarh", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Spring Type Collection - Bandhavgarh", keywords: ["Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Whispering Woods - Kanha", image: "Toehold/Trip/Kanha/Kanha.jpg", text: "Whispering Woods - Kanha", keywords: ["Kanha", "Mammal Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr"]});		
	adList.push({link: urlPrefix + "Teen Sensation - Kenya", image: "Toehold/Trip/Kenya/Kenya.jpg", text: "Teen Sensation - Kenya", keywords: ["Kenya", "Mammal Destinations", "Tiger Destinations", "African Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Harvest In The Savannah - Kenya", image: "Toehold/Trip/Kenya/Kenya.jpg", text: "Harvest In The Savannah - Kenya", keywords: ["Lake Nakura", "Masai Mara", "Mammal Destinations", "Tiger Destinations", "African Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Bond With The Birds - Pangot & Sattal", image: "Toehold/Trip/Pangot_Sattal/Pangot_Sattal.jpg", text: "Bond With The Birds - Pangot & Sattal", keywords: ["Pangot", "Sattal","Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun"]});
	adList.push({link: urlPrefix + "Pole Trance - Norway", image: "Toehold/Trip/Svalbard/Svalbard.jpg", text: "Pole Trance - Norway", keywords: ["Svalbard", "Exotic Destinations","Mammal Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]});		
	adList.push({link: urlPrefix + "Bear Feast In The Far East - Kamchatka", image: "Toehold/Trip/Kamchatka/Kamchatka.jpg", text: "Bear Feast In The Far East - Kamchatka", keywords: ["Kamchatka", "Exotic Destinations","Mammal Destinations", "Sea Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "The Phantom And The Wetlands - Brazil", image: "Toehold/Trip/Pantanal/Pantanal.jpg", text: "The Phantom And The Wetlands - Brazil", keywords: ["Pantanal", "Exotic Destinations", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Humming On Cloud Nine - Costa Rica", image: "Toehold/Trip/Costa_Rica/Costa_Rica.jpg", text: "Humming On Cloud Nine - Costa Rica", keywords: ["Costa Rica", "Exotic Destinations", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Jim Corbett & Pangot and Sattal", image: "MysticWild/Trip/Pangot_sattal.jpg", text: "Jim Corbett & Pangot and Sattal", keywords: ["Pangot", "Sattal", " Corbett", "Exotic Destinations", "Birding Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Bandhavgarh Tiger Reserve", image: "Sudhir/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Bandhavgarh Tiger Reserve", keywords: ["Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Masai Mara Migration", image: "Sudhir/Trip/Maara/Maara.jpg", text: "Masai Mara Migration", keywords: ["Masai Mara", "African Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Kaziranga Tiger Reserve", image: "Sudhir/Trip/Kaziranga/Kaziranga_photography1.jpg", text: "Kaziranga Tiger Reserve", keywords: ["Kaziranga", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "LITTLE RANN OF KUTCH - BIKENHIKE", image: "BikeNHike/Trip/Little_Rann_of_Kutch/Little_Rann_of_Kutch_photography1.jpg", text: "LITTLE RANN OF KUTCH - BIKENHIKE", keywords: ["LRK", "Kutch", "Birding Destinations"], months: ["Oct", "Nov"]});		
	
	
	//Accommodation properties
	urlPrefix = "http://www.wilderhood.com/accommodation/";

	adList.push({link: urlPrefix + "The Camp", image: "Accommodation/TheCamp/Banner.jpg", text: "Thecamp: Cozy farmhouse setup in Palasambe", keywords: ["Westernghats", "Monsoon", "MacroLife"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Kabini River Lodge", image: "Accommodation/JLR/Kabini/Kabini.jpg", text: "JLR - Kabini River Lodge", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Bandipur Safari Lodge", image: "Accommodation/JLR/Bandipur/Bandipur.jpg", text: "JLR - Bandipur Safari Lodge", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats", "Bandipur"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	

	var sponsoredList = [];
	sponsoredList.push({link: "http://bit.ly/wolfpackstore", image: "wolfpack.jpeg", text: "Wolfpack T-shirt: Feel Leopard on you", keywords: ["Kabini", "BigCats"]});
	sponsoredList.push({link: "http://bit.ly/wolfpackstore", image: "croc.jpeg", text: "Wolfpack T-shirt: Welcome to Croc Country", keywords: ["Monsoon Destinations", "Reptiles"]});
	

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
			data.link = data.link;
			fragment.appendChild(createElementWithDataObj(data, compiledTemplate, false));
		}
		$adHolderDiv.append(fragment);
	}


	if($(window).width() >= 768)
	{
		setTimeout(displayAds, 1000);
	}
})();