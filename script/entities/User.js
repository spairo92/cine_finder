User = function(email,name,surname,password,city,country,mobile,address) {
    this.construct(email,name,surname,password,city,country,mobile,address);
};

User.prototype = {
    email: new String(),
    name: new String(),
    surname: new String(),
    password: new String(),
    city: new String(),
    country: new String(),
    mobile: new Number(),
    address: new String(),

    construct: function(email,name,surname,password,city,country,mobile,address) {
	this.email = email;
	this.name = name;
	this.surname = surname;
	this.password = password;
	this.city = city;
	this.country = country;
	this.mobile = mobile;
	this.address = address;
    },

    //GETTERS
    getEmail: function() {
	return this.email;
    },

    getName: function() {
	return this.name;
    },

    getSurname: function() {
	return this.surname;
    },

    getPassword: function() {
	return this.password;
    },

    getCity: function() {
	return this.city;
    },

    getCountry: function() {
	return this.country;
    },

    getMobile: function() {
	return this.mobile;
    },

    getAddress: function() {
	return this.address;
    },

    //SETTERS
    setEmail: function(email) {
	this.email = email;
    },

    setName: function(name) {
	this.name = name;
    },

    setSurname: function(surname) {
	this.surname = surname;
    },
    
    setPassword: function(password) {
	this.password = password;
    },

    setCity: function(city) {
	this.city = city;
    },

    setCountry: function(country) {
	this.country = country;
    },
    
    setMobile: function(mobile) {
	this.mobile = mobile;
    },

    setAddress: function(address) {
	this.address = address;
    },

    toString: function() {
	return "Name of the user : "+this.name+", email : "+this.email+", password : "+password;
    }
    
};