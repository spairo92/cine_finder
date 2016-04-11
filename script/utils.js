//Functions that can be used on different html files
//These are common functions (search, getters and display)


//Function to get all the films which are displayed in a certain cinema
function getFilmsByCinema(allSessions,cinemaId) {
	var filmsArrayResult = new Array();

	for (i in allSessions) {
		var currentSession = allSessions[i];

		if (cinemaId == currentSession.getCinemaId()) {
			var filmTemp = getFilmById(currentSession.getFilmId());
			filmsArrayResult.push(filmTemp);
		}
	}

	return filmsArrayResult;
}


//Function to get all the cinemas which display in a certain film
function getCinemasByFilm(allSessions,filmId) {
	var cinemasArrayResult = new Array();

	for (i in allSessions) {
		var currentSession = allSessions[i];

		if (filmId == currentSession.getFilmId()) {
			var cinemaTemp = getCinemaById(currentSession.getCinemaId());
			cinemasArrayResult.push(cinemaTemp);
		}
	}

	return cinemasArrayResult;
}


//Function to get the sessions of a movie in a cinema (ex: "15h:00, 20:30")
function getSessionsByCinemaFilm(allSessions, cinemaId, filmId) {
	for (i in allSessions) {
		currentSession = allSessions[i];
		if (currentSession.getCinemaId() == cinemaId && currentSession.getFilmId() == filmId) {
			return currentSession;
		}
	}
	return null;
}


//Get a film thanks to his id (used to pass argument in the link)
function getFilmById(id) {
	for (i in allFilms) {
		if(id == allFilms[i].getFilmId()) return allFilms[i];
	}
	alert("Film id : "+id+", not found.");
}


//Get a cinema thanks to his id (used to pass argument in the link)
function getCinemaById(id) {
	for (i in allCinemas) {
		if(id == allCinemas[i].getCinemaId()) return allCinemas[i];
	}
	alert("Cinema id : "+id+", not found.");
}


//Get the search param with the url
function getSearchParam() {
	var url = window.location.href;
	var splitted = url.split("search_param=");
	if (splitted[1] != null) {
		var searchParam = splitted[1].split("&")[0];
		return searchParam;
	}
	return null;
}


//Display films main info in the div "target" given to the function
//"arrayFilms" is an array of Films that we want to display
//"displayCinemas" should be equal to true if we want to display the cinemas where the film is on show
function displayFilms(arrayFilms, target, displayCinemas) {
	var currentFilm;
	var image = "";
	var filmDisplay = "";
	var noResult = "<p><b>No result found.</b></p>";

	$(target).html('<ul class="filmsDisplay list-unstyled"></ul>');
	var listTarget = $(target+" ul");

	for (i in arrayFilms) {
		currentFilm = arrayFilms[i];

		image = "";
		if (i != 0)
			image += "<hr/>";

		image += "<a href='viewFilm.html?filmId="+currentFilm.getFilmId()
		+"' ><img src='"+currentFilm.getPrincipalPhoto()
		+"' class='img-thumbnail' title='Click for more details about this movie'/></a> ";

		filmDisplay = "<li>"+image+"<span class='infoFilm'> <a class='filmName' title='Click for more details about this movie' href='viewFilm.html?filmId="
		+currentFilm.getFilmId()+"'>"
		+currentFilm.getFilmName()
		+"<a/><br/> Director: "+currentFilm.getDirector()
		+". <br/> Genre: "+currentFilm.getGenre()
		+". <br/> Cast: "+currentFilm.getCast()+".<br/>";
		
		if (displayCinemas == true){
			filmDisplay += "<br/>On show in: <br/>";
			for (j in currentFilm.getCinemas()){
				cine = currentFilm.getCinemas()[j];
				sessions = getSessionsByCinemaFilm(allSessions, cine.getCinemaId(), currentFilm.getFilmId()).getScheduleDisplay();
				filmDisplay += "<a class=\"session_popover\" data-toggle=\"popover\" data-html=\"true\" data-original-title=\"Sessions for this film:\""
				+"data-content=\"<p>"+sessions+"</p>\" "
				+"href=viewCinema.html?cinemaId="+cine.getCinemaId()+">"
				+cine.getCinemaName()+"</a><br>";
			}
		} else {
			var cinemaId = getCinemaId();
			sessions = getSessionsByCinemaFilm(allSessions, cinemaId, currentFilm.getFilmId()).getScheduleDisplay();
			filmDisplay += "<hr/><p>Sessions: "+sessions+"</p>";
		}

		filmDisplay += "</span></li>";

		if (displayCinemas == true) {
			filmDisplay += "<a href='orderTicket.html?filmId="+currentFilm.getFilmId()+"&cinemaId=-1' "
			+"class='buyTicketsButton btn btn-success' role='button' title='Buy tickets for "+currentFilm.getFilmName()+"' role='button'>Buy tickets</a>";				
		} else {
			var cinemaId = getCinemaId();
			filmDisplay += "<a href='orderTicket.html?filmId="+currentFilm.getFilmId()+"&cinemaId="+cinemaId+"' "
			+"class='buyTicketsCinemaButton btn btn-success' title='Buy tickets to watch "+currentFilm.getFilmName()+" in "+getCinemaById(cinemaId).getCinemaName()+"' role='button'>Buy tickets in this cinema</a>";				
		}

		listTarget.append(filmDisplay);
	}

	if (arrayFilms.length == 0){
		$(target).html(noResult);
	}

	//Adds a popover (info box) showing the available sessions when a user put the mouse on the cinema link
	$(".session_popover").popover();
	$(".session_popover").mouseenter(function(){
		$(this).popover('show');
	}).mouseleave(function(){
		$(this).popover('hide');
	});
}

//Function that is called when a user enter a text in the quick search bar (in the header) and click on the button "quick search"
//If the text is a film name, a cinema name, a genre or a director name, this function redirects the user in the right page (movie results or cinema page)
function quickSearch() {
	var inputSearch = $("#rapidSearch").val();
	var filmsResult = new Array();
	var indexes = new Array();
	var found = new Boolean(false);

	var indexGlobal = allFilmsCinemasDirectorsGenres.indexOf(inputSearch);
	indexes[0] = allFilmNames.indexOf(inputSearch);
	indexes[1] = allCinemaNames.indexOf(inputSearch);
	indexes[2] = allDirectors.indexOf(inputSearch);
	indexes[3] = allGenres.indexOf(inputSearch);

	for (i in indexes){
		if (indexes[i] != -1){
			found = true;
			if (i == 0){	// we search by film name
				var url = "search.html?search_param="+i+"#"+indexGlobal+"&init_param=name";
				document.location.href = url;
			} else if (i == 1) {	// we search by cinema
				var url = "viewCinema.html?cinemaId="+indexes[i];
				document.location.href = url;
			} else if (i == 2) {	// we search by director
				var url = "search.html?search_param="+i+"#"+indexGlobal+"&init_param=director";
				document.location.href = url;
			} else if (i == 3) {	// we search by genre
				var url = "search.html?search_param="+i+"#"+indexGlobal+"&init_param=genre";
				document.location.href = url;
			}
		}
	}

	if (found == false){
		var url = "search.html?search_param=notFound&init_param=name";
		document.location.href = url;
	}
}


//After the redirection, if the results are movies, this function displays the movie results
function displayResultQuickSearch(){
	if (getSearchParam() != null && getSearchParam() != ""){
		var search = getSearchParam();
		if (search == "notFound") {
			displayFilms(new Array(), "#searchResultList", true);
		} else {
			var category = search.split("#")[0];
			var index = search.split("#")[1];
			if (category == 0){				// we search by film name
				var filmName = allFilmsCinemasDirectorsGenres[index];
				$("#searchBarName").val(filmName);
				searchFilmByName(filmName);
			} else if (category == 2){		// we search by director	
				var director = allFilmsCinemasDirectorsGenres[index];
				$("#searchBarDirector").val(director);
				searchFilmByDirector(director);
			} else if (category == 3){ 		// we search by genre
				var genre = allFilmsCinemasDirectorsGenres[index];
				$("#selectGenre option").removeAttr("selected");
				$("#selectGenre option#"+genre).attr("selected","selected");
				searchFilmByGenre(genre);
			}
		}
	}
}


//Search film by name using the id of the input field used to search the film
function searchFilmByNameTarget(target) {
	var research = new String();
	research = $(target).val();
	searchFilmByName(research);
}

//Search film by director using the id of the input field used to search the film
function searchFilmByDirectorTarget(target) {
	var research = new String();
	research = $(target).val();
	searchFilmByDirector(research);
}

//Search film by genre using the id of the input field used to search the film
function searchFilmByGenreTarget(target) {
	var research = new String();
	research = $(target).val();
	searchFilmByGenre(research);
}

//Search film by name using the name of the movie (string)
//Then the function calls displayFilms() to diplay the result(s)
function searchFilmByName(name) {
	var index = -1, filmArrayResult = new Array();

	if (name.length != 0) {
		index = allFilmNames.indexOf(name);
		if (index != -1) {
			filmArrayResult.push(allFilms[index]);
		}
	}
	displayFilms(filmArrayResult, "#searchResultList", true);
}

//Search film by director name (string)
//Then the function calls displayFilms() to diplay the result(s) 
function searchFilmByDirector(director) {
	var index = -1, filmArrayResult = new Array();

	if (director.length != 0) {
		index = allDirectors.indexOf(director);
		if (index != -1) {
			for (i in allFilms) {
				var currentDirector = allFilms[i].getDirector();
				if (currentDirector == director) {
					filmArrayResult.push(allFilms[i]);
				}
			}
		}
	}
	displayFilms(filmArrayResult, "#searchResultList", true);
}

//Search film by genre using a string
//Then the function calls displayFilms() to diplay the result(s)
function searchFilmByGenre(genre) {
	var index = -1, filmArrayResult = new Array();

	if (genre.length != 0) {
		index = allGenres.indexOf(genre);
		if (index != -1) {
			for (i in allFilms) {
				var currentGenre = allFilms[i].getGenre();
				if (currentGenre == genre) {
					filmArrayResult.push(allFilms[i]);
				}
			}
		}
	}
	displayFilms(filmArrayResult, "#searchResultList", true);
}