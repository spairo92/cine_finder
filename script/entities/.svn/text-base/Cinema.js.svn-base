Cinema = function(cinemaId,cinemaName,address,latitude,longitude,rooms,films,tel,website) {
    this.construct(cinemaId,cinemaName,address,latitude,longitude,rooms,films,tel,website);
};

Cinema.prototype = {
    cinemaId: -1,
    cinemaName: new String(),
    address: new String(),
    latitude: new Number(),
    longitude: new Number(),
    rooms: new Array(),
    films: new Array(),
    tel: new String(),
    website: new String(),
    entrancePrice: new Number(),

    construct: function(cinemaId,cinemaName,address,latitude,longitude,rooms,films,tel,website) {
        this.cinemaId = cinemaId;
        this.cinemaName = cinemaName;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.rooms = rooms;
        this.films = films;
        this.tel = tel;
        this.website = website;
	this.setARandomPrice(new Number(4),new Number(11)); //between 4 and 11€
    },

    //GETTERS
    getCinemaId: function() {
        return this.cinemaId;
    },

    getCinemaName: function() {
        return this.cinemaName;
    },   

    getAddress: function() {
        return this.address;
    },

    getLatitude: function() {
        return this.latitude;
    },

    getLongitude: function() {
        return this.longitude;
    },

    getRooms: function() {
        return this.rooms;
    },

    getFilms: function() {
        return this.films;
    },

    getTel: function() {
        return this.tel;
    },

    getWebsite: function() {
        return this.website;
    },

    getEntrancePrice: function() {
        return this.entrancePrice;
    },

    //SETTERS
    setCinemaId: function(cinemaId) {
        this.cinemaId = cinemaId;
    },

    setCinemaName: function(cinemaName) {
        this.cinemaName = cinemaName;
    },

    setAddress: function(address) {
        this.address = address;
    },

    setLatitude: function(latitude) {
        this.latitude = latitude;
    },

    setLongitude: function(longitude) {
        this.longitude = longitude;
    },

    setRooms: function(rooms) {
        this.rooms = rooms;
    },

    setFilms: function(films) {
        this.films = films;
    },

    setTel: function(tel) {
        this.tel = tel;
    },

    setEntrancePrice: function(entrancePrice) {
        this.entrancePrice = entrancePrice;
    },

    setWebsite: function(website) {
        this.website = website;
    },

    //OTHER FUNCTIONS
    //To do : get a google map marker
    //set the entrance price to a random value between min and max values
    setARandomPrice: function(min,max) {
	var numberAlea = Math.floor((Math.random()*(max-min))+1); //get a number between 1 and (max-min)
	numberAlea = numberAlea+min; //get a number between min and max

	this.setEntrancePrice(numberAlea);
    },

    toString: function() {
        return "address of cinema : "+this.address+", cinemaName : "+this.cinemaName;
    }

};