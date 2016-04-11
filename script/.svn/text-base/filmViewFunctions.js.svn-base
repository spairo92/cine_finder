//Function that retrieves the filmId from the url.
function getInitParam() {
    var url = window.location.href;
    var splitted = url.split("filmId=");
    return splitted[1];
}


//Global function to display a film
function displayFilm(film) {
    displayInfoFilm(film);
    displayPlotFilm(film);
    displayOnShowCinemas(film);
    displayPhotos(film);
    displayTrailer(film);
    displayAllComments(film);
}


//Display of the information of the film
function displayInfoFilm(film) {
    var image, infosFilm;

    infosFilm = "<li><b>Director : </b>"+film.getDirector()+". </li> <li> <b>Genre : </b> "+film.getGenre()+". </li> <li> <b>Cast : </b>"+film.getCast()+".</li> <li><b> Year : </b>"+film.getYear()+".  </li> <li><b> Nationality : </b>"+film.getNationality()+".  </li>  ";

    image = "<img src='"+film.getPrincipalPhoto()+"' class='img-thumbnail' />";

    $("#filmInfos").append("<ul class='list-unstyled' id='ulInfosFilm'>"+infosFilm+"</ul>"+image);
}


//Display the plot of the film
function displayPlotFilm(film) {
    $("#filmPlot").append("<ul class='list-unstyled'> <li><b>Plot : </b><em>"+film.getPlot()+".</em></li> </ul>");
}


//Display in which cinemas the user can watch the film
function displayOnShowCinemas(film) {
    var cinemasOnShow = film.getCinemas();
    var filmId = getInitParam();
    var currentFilm = getFilmById(filmId);

    for (i in cinemasOnShow) {
	var currentCinema = cinemasOnShow[i];

	$("#onShowCinemas").append('<ul class="list-unstyled"><li><a class="custom_popover" id="popover_cinema_'+currentCinema.getCinemaId()
				   +'" href="viewCinema.html?cinemaId='+currentCinema.getCinemaId()
				   +'" data-html="true" data-content="<b>Adress: </b>'+currentCinema.getAddress()
				   +'<br/><b>Phone number: </b>'+currentCinema.getTel()
				   +'<br/><b>Website: </b>'+currentCinema.getWebsite()+'" data-toggle="popover" data-original-title="Principal information (click for more details)">'
				   +currentCinema.getCinemaName()+'</a></li></ul>');

	sessions = getSessionsByCinemaFilm(allSessions, currentCinema.getCinemaId(), film.getFilmId()).getScheduleDisplay();
	$("#onShowCinemas").append('<p class="align-left">Sessions: '+sessions+'</p>');

	var buttonDisplay = "<a href='orderTicket.html?filmId="+currentFilm.getFilmId()+"&cinemaId="+currentCinema.getCinemaId()+"' "
	    +"class='buyTicketsButtonCinema btn btn-success' role='button' title='Buy tickets to watch "+currentFilm.getFilmName()+" in "+currentCinema.getCinemaName()+"' role='button'>Buy tickets in this cinema</a>";				

	$("#onShowCinemas").append(buttonDisplay);
    }

}


//Display the photos (carousel)
function displayPhotos(film) {
    var filmPhotos = film.getPhotos();
    var filmName = film.getFilmName();
    var image;

    for (i in filmPhotos) {
	var currentPhotoLink = filmPhotos[i];

	//Indicators (we have already put the first one in viewFilm.html)
	if (i > 0) {
	    $(".carousel-indicators").append("<li data-target='#carousel-example-generic' data-slide-to='"+i+"'></li>");
	}
	
	//Wrapper for slides
	if(i == 0) {
	    image = "<div class='item active'> <img src='"+currentPhotoLink+"' alt='"+filmName+" - Photo "+i+"'> </div>";	   
	} else {
	    image = "<div class='item'> <img src='"+currentPhotoLink+"' alt='"+filmName+" - Photo "+i+"'> </div>";
	}
	$(".carousel-inner").append(image);
    }

}


//Display the trailer (youtube video)
function displayTrailer(film) {
    $("#filmTrailer").append("<iframe width='630' height='340' src='"+film.getTrailer()+"' frameborder='0' allowfullscreen style='margin-bottom: 40px'></iframe>");
}

//Last part, display all the comments
function displayAllComments(film) {
    var comments = film.getComments();
    var inputAuthor, inputContent, inputButton, resetButton;

    for (i in comments) {
	var currentComment = comments[i];
	displayOneComment(currentComment);	
    }

    //Adding the form in order to post comments 
    inputAuthor = "<div id='authorGroup' class='form-group'><label class='control-label' for='author'>Name</label><label class='control-label' for='author' id='errorMessageAuthor'> : can't be empty !</label><input type='text' id='author' class='form-control' placeholder='Please type your name here.' /></div>";
    inputContent = "<div id='contentGroup' class='form-group'><label class='control-label' for='article'>Your comment</label><label class='control-label' for='article' id='errorMessageContent'> : can't be empty !</label><textarea class='form-control' name='article' id='article' placeholder='Write a comment...'></textarea></div>";
    inputButton = "<input type='button' id='buttonSubmit' class='btn btn-primary buttonLeft' value='Post comment' />"
    resetButton = "<input type='reset' id='buttonReset' class='btn btn-default buttonRight' value='Reset' />"

    $("#filmComments").append("<div id='postComment' class='ui-widget'><form role='form' action=''><fieldset><legend>Write yourself a comment</legend>"+inputAuthor+inputContent+inputButton+resetButton+"</fieldset></form></div>");
    
    //Hiding the error message labels
    $("#errorMessageAuthor,#errorMessageContent").hide();
    
    //Add the button functions to display the comment
    $("#buttonSubmit").click(function(){
    	var fieldsNotEmpty = new Boolean(true);

	//We remove error class and error labels in case of consecutive errors
	$("#authorGroup").removeClass("has-error");
	$("#contentGroup").removeClass("has-error");
	$("#errorMessageAuthor,#errorMessageContent").hide();
	
	//We check the fields
	if ($("#author").val().length == 0) {
	    //We show the error message label
	    $("#errorMessageAuthor").show();
	    //And we had the error class
	    $("#authorGroup").addClass("has-error");
	    fieldsNotEmpty = false;
	} 
	if ($("#article").val().length == 0) {
	    // We show the error message label
	    $("#errorMessageContent").show();
	    //And we had the error class
	    $("#contentGroup").addClass("has-error");
	    fieldsNotEmpty = false;
	} 
	
	if (fieldsNotEmpty) {	
	    //We create a new comment object
	    var comment = new Comment($("#author").val(),$("#article").val(),new Date());
	    
	    //We display it
	    displayOneComment(comment);
	    
	    //Clear the input fields
	    $("#article,#author").val("");
	}
    });

}


//Display one comment
function displayOneComment(comment) {
    var header,content,date;

    var dateElmts = comment.getDate().toString().split(" ", 4);
    var date = dateElmts[0]+", "+dateElmts[1]+", "+dateElmts[2]+" of "+dateElmts[3];

    header = "<span class='commentHeader'><b>"+comment.getAuthor()+"</b> wrote a comment on "+date+" : </span><br/>";
    content = comment.getText();

    $("#filmComments").prepend("<div class='comment'>"+header+content+" </div>");
}


//Display the buy ticket buttons
function displayBuyTicketsButton() {
    var filmId = getInitParam();
    var currentFilm = getFilmById(filmId);
    var buttonDisplay = "<a href='orderTicket.html?filmId="+currentFilm.getFilmId()+"&cinemaId=-1' "
	+"class='buyTicketsButtonFilmView btn btn-success' role='button' title='Buy tickets for "+currentFilm.getFilmName()+"' >Buy tickets for <i>"+currentFilm.getFilmName()+"</i></a>";				

    $("#viewFilm #buyTicketsButton").append(buttonDisplay);
}