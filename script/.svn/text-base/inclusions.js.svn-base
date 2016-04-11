// Script that includes the header and footer in the html page in which it is called

$(document).ready(function(){

	var headerHtml = "";
	var footerHtml = "";

	headerHtml += '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">';
	headerHtml += '<div class="container site-header">';
	headerHtml += '<div class="navbar-header">';
	headerHtml += '<a class="navbar-brand" id="navbar-title" href="index.html">CineFinder</a>';
	headerHtml += '</div>';
	headerHtml += '<div class="navbar-collapse collapse">';
	headerHtml += '<ul class="nav navbar-nav">';
	headerHtml += '<li id="home" class="section"><a href="index.html">Home</a></li>';
	headerHtml += '<li id="allCinemas" class="section"><a href="all_cinemas.html">Cinemas</a></li>';
	headerHtml += '<li id="allMovies" class="section"><a href="all_movies.html">All movies on show</a></li>';
	headerHtml += '<li id="searchBy" class="section dropdown">';
	headerHtml += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Search movie by <b class="caret"></b></a>';
	headerHtml += '<ul class="dropdown-menu">';
	headerHtml += '<li><a href="search.html?init_param=name">Name of the movie</a></li>';
	headerHtml += '<li><a href="search.html?init_param=director">Director</a></li>';
	headerHtml += '<li><a href="search.html?init_param=genre">Genre</a></li>';
	headerHtml += '</ul>';
	headerHtml += '</li>';
	headerHtml += '</ul>';
	headerHtml += '<ul class="nav navbar-nav navbar-right">';
	headerHtml += '<form class="navbar-form navbar-right">';
	headerHtml += '<div class="form-group">';
	headerHtml += '<input type="text" size="23" id="rapidSearch" name="rapidSearch" placeholder="movie, cinema, director, genre" class="form-control" />';
	headerHtml += '</div>';
	headerHtml += '<input type="button" onclick="javascript:quickSearch();displayQuickSearch();" id="buttonRapidSearch" name="buttonRapidSearch" class="btn btn-default" value="Quick search"/>';
	headerHtml += '</form>';
	headerHtml += '</ul>';
	headerHtml += '</div>';
	headerHtml += '</div>';
	headerHtml += '</div>';

	footerHtml += '<div class="container">';
	footerHtml += '<p class="text-muted credit">';
	footerHtml += '<a class="notFunctional" href="#">Help</a> | ';
	footerHtml += '<a class="notFunctional" href="#">Conditions of use</a> | ';
	footerHtml += '<a class="notFunctional" href="#">Copyright &copy;</a>';
	footerHtml += '<br/>';
	footerHtml += '<span>François-Xavier Hereng</span> | ';
	footerHtml += '<span>Malek Benazzouz</span> | ';
	footerHtml += '<span>Spyro Nita</span>';
	footerHtml += '</p>';
	footerHtml += '</div>';

	$("#header").html(headerHtml);
	$("#footer").html(footerHtml);

	// Make the current section active on the header
	// section is a parameter defined in the html page that calls this script
	if (section != null){
		$(".nav .section").removeClass("active");
		$(".nav #"+section).addClass("active");
	}

	// The links in the footer are not functional
	$(".notFunctional").click(function(){
		alert("Sorry, this link is not functional.\nIt has been added only for simulation purposes.");
	});

});