// function that retrieves the init parameter from the url, i.e. name or director or genre.
// this parameter is placed in th url when we click on the associated link in the header.
function getInitParam() {
	var url = window.location.href;
	var splitted = url.split("init_param=");
	return splitted[1];
}

//Functions to display which or which form according to the type of research we want to carry out
//We also put active and the current type of research
//Research could be : -by director
//                    -by genre
//                    -by name
function displaySearchNameSection() {
	$("#searchDirectorSection").hide();
	$("#searchGenreSection").hide();
	$("#searchNameSection").show();
	$("#searchSection .btn").removeClass("active");
	$("#searchByName").addClass("active");
}

function displaySearchDirectorSection() {
	$("#searchNameSection").hide();
	$("#searchGenreSection").hide();
	$("#searchDirectorSection").show();
	$("#searchSection .btn").removeClass("active");
	$("#searchByDirector").addClass("active");   
}

function displaySearchGenreSection() {
	$("#searchNameSection").hide();
	$("#searchDirectorSection").hide();
	$("#searchGenreSection").show();
	$("#searchSection .btn").removeClass("active");
	$("#searchByGenre").addClass("active");
}


