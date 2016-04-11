
//Display a carousel (collection of images) in the home page
//arrayFilms is the array of the films we want to recommend
//arrayPhotos is the array of the photos that we want to display for those films
function displayCarouselRecommendations(arrayFilms, arrayPhotos) {

	var filmsNames = new Array();
	var image;

	for (i in arrayFilms) {
		filmsNames.push(arrayFilms[i].getFilmName());
	}

	for (i in arrayPhotos) {
		var currentPhotoLink = arrayPhotos[i];
		var filmName = filmsNames[i];

		//Indicators (we have already put the first one in viewFilm.html)
		if (i > 0) {
			$("#carouselRecommendations .carousel-indicators").append("<li data-target='#carousel-example-generic' data-slide-to='"+i+"'></li>");
		}

		//Wrapper for slides
		if(i == 0) {
			image = "<div class='item active'> <img class='img-thumbnail' src='"+currentPhotoLink+"' alt='"+filmName+" - Photo "+i+"'> </div>";	   
		} else {
			image = "<div class='item'> <img class='img-thumbnail' src='"+currentPhotoLink+"' alt='"+filmName+" - Photo "+i+"'> </div>";
		}
		$("#carouselRecommendations .carousel-inner").append(image);
	}

}