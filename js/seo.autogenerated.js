!function(){function a(a){return a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})}function e(a){if(a)for(var e=0;e<a.length;++e)a[e]=a[e].toLowerCase()}function n(n){for(var t=0;t<n.length;++t){var i=n[t];i.text=a(i.text),e(i.keywords)}}function t(){return location.protocol+"//"+location.hostname+(location.port&&":"+location.port)+"/"}function i(a){for(var e=a.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),t=a[e];a[e]=a[n],a[n]=t}return a}function o(a){var e=document.createElement("div");return e.innerHTML=a,e}function r(a,e,n){n?a.image=t()+"img/seo/"+a.image:a.image=T+a.image;var i=e.render(a);return o(i)}function s(a,e){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];currentMonth=n[e.getMonth()];for(var t=[],i=0;i<a.length;++i){var o=a[i],r=o.months;(!r||r.indexOf(currentMonth)>-1)&&t.push(o)}return t}function g(a,e){return a.keywords?a.keywords.indexOf(e)>-1:!1}function h(a,n){function t(a,e,n){for(var t=a.link,i=0;i<n.length;++i){var o=n[i];if(o.data.link==t)return void(o.priority+=e)}n.push({data:a,priority:e})}function o(a){for(var e=[],n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,o=0;o<a.length;++o){var r=a[o],s=r.priority;n>s&&(n=s),s>t&&(t=s),e[s]||(e[s]=[]),e[s].push(r.data)}for(var g=[],o=t;o>=n;--o){var a=e[o];a&&(g=g.concat(i(a)))}return g}function r(a,e){for(var n=[],t=0;t<a.length;++t){for(var i=!1,o=a[t],r=o.link,s=0;s<e.length;++s)if(e[s].data.link==r){i=!0;break}i||n.push(o)}return n}e(n);for(var s=[],h=n.length,p=0;h>p;++p)for(var u=n[p],l=0;l<a.length;++l){var T=a[l];g(T,u)&&t(T,h-p,s)}var m=o(s),c=m.slice(0,d);if(c.length<d){var A=r(a,s);c=c.concat(i(A).slice(0,d-c.length))}return c}function p(){n(c),n(u);var a=window.seoKeywords||[],e=new Date,t=$("#seoHolder");if(t.length){var g=$("#seoTemplate").html(),p=Hogan.compile(g),d=i(c).slice(0,m),l=h(s(u,e),a),T=document.createDocumentFragment();if(d.length>0){$(T).append(o("<div class='w-seo-sponsored'>SPONSORED</div><hr/>"));for(var A=0;A<d.length;++A){var D=d[A];T.appendChild(r(D,p,!0))}$(T).append(o("<hr style='padding-top:25px'/>"))}else $(T).append(o("<div class='w-seo-sponsored'>RECOMMENDED TRIPS</div><hr/>"));for(var A=0;A<l.length;++A){var D=l[A];D.link=D.link,T.appendChild(r(D,p,!1))}t.append(T)}}var d=10,u=[],l="http://www.wilderhood.com/trip/",T="https://az741737.vo.msecnd.net/wilderhood-public/medium/";u.push({link:l+"EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN",image:"Darter/Trip/Andaman/Andaman.jpg",text:"EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN",keywords:["Andaman","Birding Destinations","Port Blair","Travel","Exotic"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"WALK ON THE HILLY SIDE IN BHUTAN",image:"BeyondRoads/Trip/Bhutan/Bhutan.jpg",text:"WALK ON THE HILLY SIDE IN BHUTAN",keywords:["Bhutan","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep"]}),u.push({link:l+"BHUTAN TRAVEL ROUTERS TOURS AND TREKS",image:"BeyondRoads/Trip/Bhutan/Bhutan.jpg",text:"BHUTAN TRAVEL ROUTERS TOURS AND TREKS",keywords:["Bhutan","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep"]}),u.push({link:l+"CLASSIC MYANMAR - A PHOTOGRAPHY TOUR",image:"Darter/Trip/Myanmar/Myanmar.jpg",text:"CLASSIC MYANMAR - A PHOTOGRAPHY TOUR",keywords:["Myanmar","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL",image:"Darter/Trip/Hornbill/Hornbill.jpg",text:"PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL",keywords:["HORNBILL FESTIVAL","Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov"]}),u.push({link:l+"FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR",image:"Darter/Trip/Rajasthan/Rajasthan.jpg",text:"FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR",keywords:["Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),u.push({link:l+"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",image:"Darter/Trip/Ladakh/Ladakh-snow.jpg",text:"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",keywords:["Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),u.push({link:l+"MASAI MARA MIGRATION - SEPT 2015",image:"Sudhir/Trip/Maara/Maara.jpg",text:"MASAI MARA MIGRATION - SEPT 2015",keywords:["Africa","Maara","Great Migration","BigCats"],months:["Jul","Aug","Sep"]}),u.push({link:l+"THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Pantanal/Pantanal.jpg",text:"THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Exotic","Birding Destinations","BigCats"],months:["Jul","Aug","Sep"]}),u.push({link:l+"GIR - THE LIONS LAST LAIR",image:"BirdWing/Trip/Gir/Gir.jpg",text:"GIR - THE LIONS LAST LAIR",keywords:["Gir","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov"]}),u.push({link:l+"WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH",image:"Darter/Trip/Kutch/Kutch.jpg",text:"WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH",keywords:["Gir","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),u.push({link:l+"OOTY",image:"BeyondRoads/Trip/Ooty/Ooty.jpg",text:"OOTY - Birding trip",keywords:["OOTY","Birding Destinations","Nilgiri"],months:["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"RANGANTHITTU-BANDIPUR",image:"BeyondRoads/Trip/Ranganathittu/Ranganathittu.jpg",text:"RANGANTHITTU-BANDIPUR",keywords:["Tiger","Bandipur","Kabini","Ranganathittu","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr"]}),u.push({link:l+"FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR",image:"Toehold/Trip/Tadoba/Tadoba.jpg",text:"FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR",keywords:["Tiger","Tadoba","Pench","Kanha","Bandhavgarh","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"KAZIRANGA ROAM WITH THE RHINOS",image:"BeyondRoads/Trip/Kaziranga/Kaziranga.jpg",text:"KAZIRANGA ROAM WITH THE RHINOS",keywords:["Tiger","Ranthambore","Khaziranga","BigCats","RHINOS"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","Bandhavgarh","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"BHANDHAVGARH PHOTO TOUR",image:"MysticWild/Trip/Bandhavgarh/1.jpg",text:"BHANDHAVGARH PHOTO TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Kamchatka/Kamchatka.jpg",text:"BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Kamchatka","Exotic"],months:["Jul","Aug"]}),u.push({link:l+"BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR",image:"MysticWild/Trip/Someshwar/collage.jpg",text:"BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR",keywords:["Agumbe","Monsoon"],months:["Aug","Sep"]}),u.push({link:l+"TADOBA WILDLIFE SAFARI TOUR",image:"MysticWild/Trip/Tadoba/banner.jpg",text:"TADOBA WILDLIFE SAFARI TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct","Nov"]}),u.push({link:l+"Photo-tour to Kabini",image:"consciouspace/Trip/Kabini/kabini3.jpg",text:"Photo-tour to Kabini",keywords:["BigCats","Birding Destinations","Leopard","Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats","Bandipur"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR",image:"BikeNHike/Trip/Gir/1.jpg",text:"BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR",keywords:["Gir","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct"]}),u.push({link:l+"RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR",image:"BikeNHike/Trip/Tal/1.jpg",text:"RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR",keywords:["TalChappar","Birding Destinations","Raptors","Black bucks"],months:["Oct","Nov"]}),u.push({link:l+"Alibag - Coastal Capers",image:"BirdWing/Trip/Alibag/alibag_terek_sandpiper.jpg",text:"Alibag - Coastal Capers",keywords:["Alibag","Birding Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Mangrove Magic - Sundarban wildlife photography tour",image:"Birdwing/Trip/Sundarbans/Sundarbans.jpg",text:"Mangrove Magic - Sundarban wildlife photography tour",keywords:["Sundarban","Birding Destinations","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov","Dec"]}),u.push({link:l+"Keoladeo National Park - Bharatpur",image:"Birdwing/Trip/Bharatpur/Bharatpur.jpg",text:"Keoladeo National Park - Bharatpur",keywords:["Bharatpur","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Travel Photography Tour to Bhutan",image:"Darter/Trip/Bhutan/Bhutan.jpg",text:"Travel Photography Tour to Bhutan",keywords:["Bhutan","Landscape Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"Heart of the Himalayas - Photography Tour in Lahaul & Spiti",image:"Darter/Trip/Lahaul/Spiti.jpg",text:"Heart of the Himalayas - Photography Tour in Lahaul & Spiti",keywords:["Lahaul","Spiti","Travel Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul"]}),u.push({link:l+"A Snow filled winter in Ladakh - Photography Tour",image:"Darter/Trip/Ladakh/Ladakh-snow.jpg",text:"A Snow filled winter in Ladakh - Photography Tour",keywords:["Ladakh","Travel Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul"]}),u.push({link:l+"A Week With The Big Cats - Masai Mara",image:"BeyondRoads/Trip/Maara/Maara.jpg",text:"A Week With The Big Cats - Masai Mara",keywords:["Masai Mara","African Destinations","Landscape Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Serengeti Calving Season -Tanzania",image:"BeyondRoads/Trip/Serengeti/Serengeti.jpg",text:"Serengeti Calving Season -Tanzania",keywords:["Serengeti","African Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Land Of The Lion - Tailed Macaque - Valpari",image:"BeyondRoads/Trip/Valparai/valparai.jpg",text:"Land Of The Lion - Tailed Macaque - Valpari",keywords:["Valparai","Birding Destinations","Mammal Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Land Of The Leopards - Kabini",image:"BeyondRoads/Trip/Kabini/Kabini.jpg",text:"Land Of The Leopards - Kabini",keywords:["Kabini","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov","Dec"]}),u.push({link:l+"Yala Wilpattu",image:"BeyondRoads/Trip/Yala_wilpattu/yala_wilpattu.jpg",text:"Yala Wilpattu",keywords:["Yala Wilpattu","Travel Destinations","Mammal Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"The Tigers Fortress - Ranthambore",image:"BeyondRoads/Trip/Ranthambore/Ranthambore.jpg",text:"The Tigers Fortress - Ranthambore",keywords:["Ranthambore","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov"]}),u.push({link:l+"The Real Land Of Tigers -Tadoba",image:"BeyondRoads/Trip/Tadoba/Tadoba.jpg",text:"The Real Land Of Tigers -Tadoba",keywords:["Tadoba","Tiger Destinations","Mammal Destinations"],months:["Oct"]}),u.push({link:l+"Spy In The Jungle - Pench",image:"BeyondRoads/Trip/Pench/Pench.jpg",text:"Spy In The Jungle - Pench",keywords:["Pench","Tiger Destinations","Mammal Destinations"],months:["Oct"]}),u.push({link:l+"Kanha National Park",image:"BeyondRoads/Trip/Kanha/Kanha.jpg",text:"Kanha National Park",keywords:["Kanha","Tiger Destinations","Mammal Destinations","Landscape Destinations"],months:["Oct"]}),u.push({link:l+"Travel To The Country Tiger - Bandhavgarh",image:"BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"Travel To The Country Tiger - Bandhavgarh",keywords:["Bandhavgarh","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Dawn To Dusk At Bandhavgarh ",image:"BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"Dawn To Dusk At Bandhavgarh ",keywords:["Bandhavgarh","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Home Of One Horned Rhino - Kaziranga ",image:"BeyondRoads/Trip/Kaziranga/Kaziranga.jpg",text:"Home Of One Horned Rhino - Kaziranga",keywords:["Kaziranga","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Bandipur Tiger Reserve",image:"Toehold/Trip/Bandipur/Bandipur.jpg",text:"Bandipur Tiger Reserve",keywords:["Bandipur","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Leopard Lounge",image:"Toehold/Trip/Kabini/Kabini.jpg",text:"Leopard Lounge",keywords:["Kabini","Tiger Destinations","Mammal Destinations"],months:["Oct"]}),u.push({link:l+"Thar Attraction",image:"Toehold/Trip/Thar/Thar.jpg",text:"Thar Attraction",keywords:["Thar Desert","Birding Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Jungle Enclave",image:"Toehold/Trip/Bandipur/Bandipur.jpg",text:"Jungle Enclave",keywords:["Bandipur","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Jungle Jaunt",image:"Toehold/Trip/Bandipur/Bandipur.jpg",text:"Jungle Jaunt",keywords:["Bandipur","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Spot Luck",image:"Toehold/Trip/Bera/Bera.jpg",text:"Spot Luck",keywords:["Bera","Tiger Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Little Rann of Kutch",image:"Toehold/Trip/Kutch/Kutch.jpg",text:"Little Rann of Kutch",keywords:["LRK","Kutch","Birding Destinations","Mammal Destinations","Landscape Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Nature Photography Masterclass- Ranganathittu",image:"Toehold/Trip/Ranganathittu/Ranganathittu.jpg",text:"Nature Photography Masterclass- Ranganathittu",keywords:["Ranganathittu","Birding Destinations"],months:["Oct","Nov"]}),u.push({link:l+"A Big Cat Week - Masai Mara",image:"Toehold/Trip/Masai-mara/masai_mara.jpg",text:"A Big Cat Week - Masai Mara",keywords:["Masai Mara","African Destinations","Travel Destinations"],months:["Oct","Nov","Dec"]}),u.push({link:l+"Giant Of The FloodPlains",image:"Toehold/Trip/Kaziranga/Kaziranga.jpg",text:"Giant Of The FloodPlains",keywords:["Kaziranga","African Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Wetland Wonders - Bharatpur",image:"Toehold/Trip/Bharatpur/Bharatpur1.jpg",text:"Wetland Wonders - Bharatpur",keywords:["Bharatpur","Birding Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Corbett National Park",image:"Toehold/Trip/Corbett/Corbett.jpg",text:"Corbett National Park ",keywords:["Corbett","Mammal Destinations","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Tiger Fortress-Ranthambore",image:"Toehold/Trip/Ranthambore/Ranthambore.jpg",text:"Tiger Fortress-Ranthambore",keywords:["Ranthambore","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Wonders Of Endless Plains-Serengeti",image:"Toehold/Trip/Serengeti/Serengeti.jpg",text:"Wonders Of Endless Plains-Serengeti",keywords:["Serengeti","African Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Grassland Glory - Tal Chappar",image:"Toehold/Trip/Talchapar/Talchapar.jpg",text:"Grassland Glory - Tal Chappar",keywords:["Talchapar","Birding Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Eaglenest Wildlife Sanctuary - Arunachal Pradesh",image:"Toehold/Trip/Arunachal_Pradesh/Arunachal_pradesh.jpg",text:"Eaglenest Wildlife Sanctuary - Arunachal Pradesh",keywords:["Arunachal Pradesh","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"Spring Type Collection - Bandhavgarh",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"Spring Type Collection - Bandhavgarh",keywords:["Bandhavgarh","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"Whispering Woods - Kanha",image:"Toehold/Trip/Kanha/Kanha.jpg",text:"Whispering Woods - Kanha",keywords:["Kanha","Mammal Destinations","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr"]}),u.push({link:l+"Teen Sensation - Kenya",image:"Toehold/Trip/Kenya/Kenya.jpg",text:"Teen Sensation - Kenya",keywords:["Kenya","Mammal Destinations","Tiger Destinations","African Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"Harvest In The Savannah - Kenya",image:"Toehold/Trip/Kenya/Kenya.jpg",text:"Harvest In The Savannah - Kenya",keywords:["Lake Nakura","Masai Mara","Mammal Destinations","Tiger Destinations","African Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"Bond With The Birds - Pangot & Sattal",image:"Toehold/Trip/Pangot_Sattal/Pangot_Sattal.jpg",text:"Bond With The Birds - Pangot & Sattal",keywords:["Pangot","Sattal","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"]}),u.push({link:l+"Pole Trance - Norway",image:"Toehold/Trip/Svalbard/Svalbard.jpg",text:"Pole Trance - Norway",keywords:["Svalbard","Exotic Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]}),u.push({link:l+"Bear Feast In The Far East - Kamchatka",image:"Toehold/Trip/Kamchatka/Kamchatka.jpg",text:"Bear Feast In The Far East - Kamchatka",keywords:["Kamchatka","Exotic Destinations","Mammal Destinations","Sea Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul"]}),u.push({link:l+"The Phantom And The Wetlands - Brazil",image:"Toehold/Trip/Pantanal/Pantanal.jpg",text:"The Phantom And The Wetlands - Brazil",keywords:["Pantanal","Exotic Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Humming On Cloud Nine - Costa Rica",image:"Toehold/Trip/Costa_Rica/Costa_Rica.jpg",text:"Humming On Cloud Nine - Costa Rica",keywords:["Costa Rica","Exotic Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"Jim Corbett & Pangot and Sattal",image:"MysticWild/Trip/Pangot_sattal.jpg",text:"Jim Corbett & Pangot and Sattal",keywords:["Pangot","Sattal"," Corbett","Exotic Destinations","Birding Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Bandhavgarh Tiger Reserve",image:"Sudhir/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"Bandhavgarh Tiger Reserve",keywords:["Bandhavgarh","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"Masai Mara Migration",image:"Sudhir/Trip/Maara/Maara.jpg",text:"Masai Mara Migration",keywords:["Masai Mara","African Destinations","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Kaziranga Tiger Reserve",image:"Sudhir/Trip/Kaziranga/Kaziranga_photography1.jpg",text:"Kaziranga Tiger Reserve",keywords:["Kaziranga","Mammal Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"]}),u.push({link:l+"LITTLE RANN OF KUTCH - BIKENHIKE",image:"BikeNHike/Trip/Little_Rann_of_Kutch/Little_Rann_of_Kutch_photography1.jpg",text:"LITTLE RANN OF KUTCH - BIKENHIKE",keywords:["LRK","Kutch","Birding Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Ranthambhore Wild Wonders - April 2016",image:"Sudhir/Trip/Ranthambore/Ranthambore.jpg",text:"Ranthambhore Wild Wonders - April 2016",keywords:["Ranthambore","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"The land Of The Roar and Trumpet - Corbett",image:"BeyondRoads/Trip/Corbett/Corbett.jpg",text:"The land Of The Roar and Trumpet - Corbett",keywords:["Corbett","Tiger Destinations"],months:["Oct","Nov","Dec"]}),u.push({link:l+"Nagarahole Wildlife Tour and Chomkund Trek",image:"MysticWild/Trip/Nagarahole/Nagarahole_photography1.jpg",text:"Nagarahole Wildlife Tour and Chomkund Trek",keywords:["Nagarahole","Tiger Destinations"],months:["Oct","Nov"]}),u.push({link:l+"Ranganathittu Bird Sanctuary",image:"BirdWing/Trip/Ranganathittu/Ranganathittu_photography1.jpg",text:"Ranganathittu Bird Sanctuary",keywords:["Ranganathittu","Birding Destinations"],months:["Oct","Nov","Dec"]}),u.push({link:l+"Kaziranga - Land of the Giants",image:"BirdWing/Trip/Kaziranga/Kaziranga_photography1.jpg",text:"Kaziranga - Land of the Giants",keywords:["Kaziranga","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"Chikmagalur - Landscape Photography Tour",image:"BirdWing/Trip/Chikmagaluru/Chikmagaluru_photography1.jpg",text:"Chikmagalur - Landscape Photography Tour",keywords:["Chikmagalur","Landscape Destinations"],months:["Oct","Nov","Dec","Jan"]}),u.push({link:l+"Classic Myanmar - Photography Tour",image:"Darter/Trip/Myanmar/Myanmar_photography1.jpg",text:"Classic Myanmar - Photography Tour",keywords:["Myanmar","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Cambodia Photography Tour - Temples of Angkor Wat and Beyond",image:"Darter/Trip/Cambodia/Cambodia_photography1.jpg",text:"Cambodia Photography Tour - Temples of Angkor Wat and Beyond",keywords:["Cambodia","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Tanzania - March 2016",image:"Sudhir/Trip/Tanzania/Serengeti_photography1.jpg",text:"Tanzania - March 2016",keywords:["Tanzania","Landscape Destinations","Africa","African Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"Sattal and Corbett Tiger Reserve - Uttarakhand",image:"Sudhir/Trip/Sattal-Corbett/Sattal-Corbett_photography1.jpg",text:"Sattal and Corbett Tiger Reserve - Uttarakhand",keywords:["Sattal","Landscape Destinations","Corbett","Pangot"],months:["Oct","Nov","Dec","Jan","Feb","Mar"]}),u.push({link:l+"Birding Tour to Arunachal Pradesh",image:"consciouspace/Trip/Arunachal-Pradesh/Arunachal-Pradesh_photography1.jpg",text:"Birding Tour to Arunachal Pradesh",keywords:["Arunachal Pradesh","Landscape Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Cobett, Pangot and Sattal - Treasures of Kumaon",image:"BirdWing/Trip/Sattal-Corbett/Sattal-Corbett_photography.jpg",text:"Cobett, Pangot and Sattal - Treasures of Kumaon",keywords:["Cambodia","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb"]}),u.push({link:l+"Masai Mara - Migration",image:"BirdWing/Trip/Masai-Mara/Masai-Mara_photography.jpg",text:"Masai Mara - Migration",keywords:["Masai Mara","Landscape Destinations","Africa","African Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),l="http://www.wilderhood.com/accommodation/",u.push({link:l+"The Camp",image:"Accommodation/TheCamp/Banner.jpg",text:"Thecamp: Cozy farmhouse setup in Palasambe",keywords:["Westernghats","Monsoon","MacroLife"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Kabini River Lodge",image:"Accommodation/JLR/Kabini/Kabini.jpg",text:"JLR - Kabini River Lodge",keywords:["BigCats","Birding Destinations","Leopard","Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Bandipur Safari Lodge",image:"Accommodation/JLR/Bandipur/Bandipur.jpg",text:"JLR - Bandipur Safari Lodge",keywords:["BigCats","Birding Destinations","Leopard","Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats","Bandipur"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Kalinga Centre for Rainforest Ecology",image:"Accommodation/KCRE/1.png",text:"Kalinga Centre for Rainforest Ecology",keywords:["Monsoon Destinations","Agumbe"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Seethanadi Nature Camp",image:"Accommodation/Seethanadi/seethanadi.jpg",text:"Seethanadi Nature Camp",keywords:["Monsoon Destinations","Agumbe"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Gir Birding Lodge",image:"Accommodation/Gir_Birding_Lodge/Gir_Birding_Lodge.jpg",text:"Gir Birding Lodge",keywords:["BigCats","Gir","Mammal Destinations","Leopard Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Asiatic Lion Lodge",image:"Accommodation/Asiatic_Lion_Lodge/Asiatic_Lion_Lodge.jpg",text:"Asiatic Lion Lodge",keywords:["BigCats","Gir","Mammal Destinations","Leopard Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Rann Riders",image:"Accommodation/Rann_Riders/Rann_Riders.jpg",text:"Rann Riders",keywords:["Kutch","Landscape Destinations","Birding Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Serai Resorts - Chikmagalur",image:"Accommodation/The_Serai_Resorts/The_Serai_Resorts.jpg",text:"The Serai Resorts - Chikmagalur",keywords:["Kabini","BigCats","Tiger Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Orange County - Coorg",image:"Accommodation/Orange_County_Coorg/Orange_County_Coorg2.jpg",text:"Orange County - Coorg",keywords:["Coorg","Monsoon Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Red Earth",image:"Accommodation/Red_Earth/Red_Earth.jpg",text:"Red Earth",keywords:["Kabini","BigCats","Tiger Destinations","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Serai Resorts - Bandipur",image:"Accommodation/The_Serai_Resorts_Bandipur/The_Serai_Resorts_Bandipur2.jpg",text:"The Serai Resorts - Bandipur",keywords:["Bandipur","BigCats","Tiger Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Serai Resorts - Kabini",image:"Accommodation/The_Serai_Resorts_Kabini/The_Serai_Resorts_Kabini1.jpg",text:"The Serai Resorts - Kabini",keywords:["Kabini","Tiger Destinations","Birding Destinations","Serai"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Orange County - Kabini",image:"Accommodation/Orange_County_Kabini/Orange_County_Kabini2.jpg",text:"Orange County - Kabini",keywords:["Kabini","BigCats","Tiger Destinations","Birding Destinations","Orange County"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Misty Creek - Valparai",image:"Accommodation/Misty_Creek_Valparai/Misty_Creek_Valparai1.jpg",text:"Misty Creek - Valparai",keywords:["Valparai","Birding Destinations","LTM","Mammal Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Tiger Camp Resort",image:"Accommodation/Tiger_Camp_Resort/Tiger_Camp_Resort1.jpg",text:"Tiger Camp Resort",keywords:[],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Shaheen Bagh",image:"Accommodation/Shaheen_Bagh/Shaheen_Bagh1.jpg",text:"Shaheen Bagh",keywords:[],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Tal Birding Camp",image:"Accommodation/Tal_Birding_Camp/Tal_Birding_Camp1.jpg",text:"Tal Birding Camp",keywords:[],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Iora Guest House",image:"Accommodation/Iora_Guest_House/Iora_Guest_House1.jpg",text:"Iora Guest House",keywords:["Bharatpur","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Ocean Deck",image:"Accommodation/Ocean_Deck/Ocean_Deck2.jpg",text:"Ocean Deck",keywords:["Reptiles","Monsoon Destinations","Sea Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Wildernest Nature Resorts",image:"Accommodation/Wildernest_Nature_Resorts/Wildernest_Nature_Resorts1.jpg",text:"Wildernest Nature Resorts",keywords:["Chorla Ghats","Goa","Monsoon Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Nature Nest",image:"Accommodation/Nature_Nest/Nature_Nest1.jpg",text:"Nature Nest",keywords:["Chorla Ghats","Goa","Monsoon Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Swapnagandha",image:"Accommodation/Swapnagandha/Swapnagandha1.jpg",text:"Swapnagandha",keywords:["Chorla Ghats","Goa","Monsoon Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Honey Valley",image:"Accommodation/Honey_Valley/Honey_Valley.jpg",text:"Honey Valley",keywords:["Coorg"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Chingaara",image:"Accommodation/Chingaara/Chingaara.jpg",text:"Chingaara",keywords:["Coorg"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Nature Herritage",image:"Accommodation/Nature_Herritage/Nature_Herritage.jpg",text:"Nature Herritage",keywords:["Bandhavgarh","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Tiger Den Resort",image:"Accommodation/Tiger_Den_Resort/Tiger_Den_Resort.jpg",text:"Tiger Den Resort",keywords:["Bandhavgarh","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Svasvara",image:"Accommodation/Svasvara/Svasvara.jpg",text:"Svasvara",keywords:["Tadoba","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Camp Sparrow",image:"Accommodation/CampSparrow/Nainital.jpg",text:"Camp Sparrow",keywords:["Nainital","Birding Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Tiger Camp Resort - Asian Advenures",image:"Accommodation/Asian-Advenures/Tiger_Camp_Resort/Tiger_Camp_Resort1.jpg",text:"Tiger Camp Resort - Asian Advenures",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Jungle Lore Birding Lodge",image:"Accommodation/Asian-Advenures/Jungle_Lore_Birding_Lodge/Jungle_Lore_Birding_Lodge1.jpg",text:"Jungle Lore Birding Lodge",keywords:["Pangot","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Abbott Mount Cottage",image:"Accommodation/Asian-Advenures/Abbott_Mount_Cottage/Abbott_Mount_Cottage1.jpg",text:"Abbott Mount Cottage",keywords:["Lohaghat","Birding Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Van Serai",image:"Accommodation/Asian-Advenures/Van_Serai/Van_Serai1.jpg",text:"Van Serai",keywords:["Jageshwar","Birding Destinations","Landscape Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Walterre",image:"Accommodation/Asian-Advenures/Walterre/Walterre1.jpg",text:"Walterre",keywords:["Dehradun","Birding Destinations","Landscape Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Magpie Cottage",image:"Accommodation/Asian-Advenures/Magpie_Cottage/Magpie_Cottage1.jpg",
text:"Magpie Cottage",keywords:["Corbett","Tiger Destinations","Landscape Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Gir Birding Lodge - Asian Advenures",image:"Accommodation/Asian-Advenures/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg",text:"Gir Birding Lodge - Asian Advenures",keywords:["Gir","Mammal Destinations","Leopard Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Monsoon Forest",image:"Accommodation/Asian-Advenures/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg",text:"Gir Birding Lodge - Asian Advenures",keywords:["Gir","Mammal Destinations","Leopard Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Mangrove Whistler",image:"Accommodation/Asian-Advenures/Mangrove_Whistler/Mangrove_Whistler1.jpg",text:"Mangrove Whistler",keywords:["Sundarban","Mammal Destinations","Birding Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Kadumane Homestay",image:"Accommodation/Asian-Advenures/Mangrove_Whistler/Mangrove_Whistler1.jpg",text:"Kadumane Homestay",keywords:["Dandeli","Birding Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Whistling Woods",image:"Accommodation/Whistling_Woods/Whistling_Woods5.jpg",text:"Whistling Woods",keywords:["Amboli","Birding Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Monsoon Forest - Tiger Land",image:"Accommodation/Tiger_Land/Monsoon_Forest/Monsoon_Forest1.jpg",text:"Monsoon Forest - Tiger Land",keywords:["Bandhavgarh","Tiger Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Dhikala Forest Lodge - Tiger Land",image:"Accommodation/Tiger_Land/Dhikala_Forest_Lodge/Dhikala_Forest_Lodge1.jpg",text:"Dhikala Forest Lodge - Tiger Land",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Country Inn Resort - Tiger Land",image:"Accommodation/Tiger_Land/Country_Inn_Resort/Country_Inn_Resort1.jpg",text:"Country Inn Resort - Tiger Land",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Riverview Retreat - Tiger Land",image:"Accommodation/Tiger_Land/The_Riverview_Retreat/The_Riverview_Retreat1.jpg",text:"The Riverview Retreat - Tiger Land",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Tiger Camp - Tiger Land",image:"Accommodation/Tiger_Land/The_Tiger_Camp/The_Tiger_Camp1.jpg",text:"The Tiger Camp - Tiger Land",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"The Wild Crest - Tiger Land",image:"Accommodation/Tiger_Land/The_Wild_Crest/The_Wild_Crest1.jpg",text:"The Wild Crest - Tiger Land",keywords:["Corbett","Tiger Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Van Serai - Tiger Land",image:"Accommodation/Tiger_Land/Van_Serai/Van_Serai1.jpg",text:"Van Serai - Tiger Land",keywords:["Jageshwar","Birding Destinations","Landscape Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Grand Tiger Resort - Tiger Land",image:"Accommodation/Tiger_Land/Grand_Tiger_Resort/Grand_Tiger_Resort1.jpg",text:"Grand Tiger Resort - Tiger Land",keywords:["Kanha","Mammal Destinations","Landscape Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Jungle Lore Birding Lodge - Tiger Land",image:"Accommodation/Tiger_Land/Jungle_Lore_Birding_Lodge/Jungle_Lore_Birding_Lodge1.jpg",text:"Jungle Lore Birding Lodge - Tiger Land",keywords:["Pangot","Travel Destinations","Landscape Destinations","Tiger Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Gir Birding Lodge - Tiger Land",image:"Accommodation/Tiger_Land/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg",text:"Gir Birding Lodge - Tiger Land",keywords:["Gir","Travel Destinations","Leopard Destinations","Mammal Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}),u.push({link:l+"Horn Bill",image:"Accommodation/Horn_Bill/Horn_Bill1.jpg",text:"Horn Bill",keywords:["Tadoba","Tiger Destinations","Travel Destinations"],months:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]});var m=3,c=[];c.push({link:"http://bit.ly/wolfpackstore",image:"wolfpack.jpeg",text:"Wolfpack T-shirt: Feel Leopard on you",keywords:["Kabini","BigCats"]}),c.push({link:"http://bit.ly/wolfpackstore",image:"croc.jpeg",text:"Wolfpack T-shirt: Welcome to Croc Country",keywords:["Monsoon Destinations","Reptiles"]}),c.push({link:"http://bit.ly/bookmylens",image:"rentals.jpg",text:"Bookmylens: High quality equipment rentals",keywords:[""]}),$(window).width()>=768&&setTimeout(p,1e3)}();