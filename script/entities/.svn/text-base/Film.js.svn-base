Film = function(filmName,genre,director,year,nationality,plot,cast,trailer,srcFolderPhotos,photos,comments,cinemas) {
    this.construct(filmName,genre,director,year,nationality,plot,cast,trailer,srcFolderPhotos,photos,comments,cinemas);
};

Film.prototype = {
    filmId: -1,
    filmName: new String(),
    genre: new String(),
    director: new String(),
    year: new Number(),
    nationality: new String(),
    plot: new String(),
    cast: new String(),
    trailer: new String(),
    scrFolderPhotos: new String(),
    principalPhoto: new String(),
    photos: new Array(),
    comments: new Array(),
    cinemas: new Array(),

    construct: function(filmName,genre,director,year,nationality,plot,cast,trailer,srcFolderPhotos,photos,comments,cinemas) {
	this.filmName = filmName;
	this.genre = genre;
	this.director = director;
	this.year = year;
	this.nationality = nationality;
	this.plot = plot;
	this.cast = cast;
	this.trailer = trailer;
	this.srcFolderPhotos = srcFolderPhotos;
	this.principalPhoto = "images/"+this.srcFolderPhotos+"/principal-image.jpg";
	this.photos = photos;
	this.comments = comments;
	this.cinemas = cinemas;

	for (i in this.photos) {
	    var tmp = this.photos[i];
	    this.photos[i] = "images/"+this.srcFolderPhotos+"/"+tmp;
	}
    },

    //GETTERS
    getFilmId: function() {
	return this.filmId;
    },

    getFilmName: function() {
	return this.filmName;
    },

    getGenre: function() {
	return this.genre;
    },

    getDirector: function() {
	return this.director;
    },
    
    getYear: function() {
	return this.year;
    },

    getNationality: function() {
	return this.nationality;
    },

    getPlot: function() {
	return this.plot;
    },

    getCast: function() {
	return this.cast;
    },

    getTrailer: function() {
	return this.trailer;
    },

    getSrcFolderPhotos: function() {
	return this.srcFolderPhotos;
    },
    
    getPrincipalPhoto: function() {
	return this.principalPhoto;
    },

    getPhotos: function() {
	return this.photos;
    },

    getComments: function() {
	return this.comments;
    },

    getCinemas: function() {
	return this.cinemas;
    },

    // SETTERS
    setFilmId: function(filmId) {
	this.filmId = filmId;
    },

    setFilmName: function(filmName) {
	this.filmName = filmName;
    },

    setGenre: function(genre) {
	this.genre = genre;
    },

    setDirector: function(director) {
	this.director = director;
    },

    setNationality: function(nationality) {
	this.nationality = nationality;
    },

    setYear: function(year) {
	this.year = year;
    },

    setPlot: function(plot) {
	this.plot = plot;
    },

    setCast: function(cast) {
	this.cast = cast;
    },

    setTrailer: function(trailer) {
	this.trailer = trailer;
    },

    setSrcFolderPhotos: function(srcFolderPhotos) {
	this.srcFolderPhotos = srcFolderPhotos;
    },

    setPrincipalPhoto: function(principalPhoto) {
	this.principalPhoto = principalPhoto;
    },

    setPhotos: function(photos) {
	this.photos = photos;
    },

    setComments: function(comments) {
	this.comments = comments;
    },
    
    setCinemas: function(cinemas) {
	this.cinemas = cinemas;
    },
    
    //OTHER FUNCTIONS
    addComment: function(comment) {
	var error = new Boolean(true);
	if(comment.author != "undefined" || comment.text != "undefined") {
	    this.comments.push(comment);
	    error = false;
	}
	return error;
    },

    toString: function() {
	return "filmId : "+this.filmId+", filmName : "+this.filmName+", genre : "+this.genre+", director : "+this.director+", principal photo link : "+this.principalPhoto+", photos sample :"+this.photos.length;
    }

};