// function that retrieves the cinema Id from the url.
function getCinemaId() {
	var url = window.location.href;
	var splitted = url.split("cinemaId=");
	return splitted[1];
}

// display a list of the cinemas that are supported by the site 
function displayAllCinemas(){
	displayCinemas(allCinemas);
}

// take the string in the search bar and find the corresponding cinema(s) to display the list
function searchCinema() {
	var research = new String();
	var index = -1, cinemaArrayResult = new Array();

	research = $("#searchBarCinema").val();
	if (research.length != 0) {
		index = allCinemaNames.indexOf(research);
		if (index != -1) {
			cinemaArrayResult.push(allCinemas[index]);
		}
	}
	displayCinemas(cinemaArrayResult);
}

// display a list of cinemas (name and adress of the cinema) given an array of Cinemas (the object Cinema)
function displayCinemas(cinemas){
	$("#cinemasResultList").empty();
	if(cinemas.length == 0) {
    	$("#cinemasResultList").append("<p><b>No result found.</b></p>");
    } 
	for (i in cinemas) {
		currentCinema = cinemas[i];
		var display = "<hr/>"+"<p><a href='viewCinema.html?cinemaId="
		+currentCinema.getCinemaId()+"'>"
		+currentCinema.getCinemaName()+"</a></p>"
		+"<p>"+currentCinema.getAddress()+"</p>";
		$("#cinemasResultList").append(display);
	}
}

// display the view of one cinema given the Cinema (the object Cinema)
function displayViewCinema(cinema) {
	var name = cinema.getCinemaName();
	var address = cinema.getAddress();
	var latitude = cinema.getLatitude();
	var longitude = cinema.getLongitude();
	var films = cinema.getFilms();
	var tel = cinema.getTel();
	var website = cinema.getWebsite();

	displayFilms(films, "#cinemaInformation #films_on_show", false); // Variable false to not display the cinemas where the film is on show
	displayContact(tel, website);
	displayHowToGetThere(name, address, latitude, longitude);
}

// display the contact information of the cinema (phone number and url of the web page)
function displayContact(tel, website) {
	$("#cinemaInformation #contact").empty();
	$("#cinemaInformation #contact").append("<p><b>Phone number:</b></p><p>"+tel+"</p>");
	$("#cinemaInformation #contact").append('<p><b>Website:</b></p><p><a href="#">'+website+"</a></p>");
}

// display the adress and the map with the location of the cinema on it
function displayHowToGetThere(cinemaName, address, latitude, longitude) {
	google.maps.event.addDomListener(window, 'load', function(){
		var mapOptions = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			title: cinemaName
		});
		var infowindow = new google.maps.InfoWindow({
			content: cinemaName
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	});
	$("#cinemaInformation #address").empty();
	$("#cinemaInformation #address").append("<p><b>Address: </b>"+address+"</p>");
}
