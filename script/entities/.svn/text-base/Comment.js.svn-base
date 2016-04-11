Comment = function(author,text,date) {
    this.construct(author,text,date);
};

Comment.prototype = {
    author: new String(),
    text: new String(),
    date: new Date(), 

    construct: function(author,text,date) {
	this.author = author;
	this.text = text;
	this.date = date;
    },

    getAuthor: function() {
	return this.author;
    },

    getText: function() {
	return this.text;
    },

    getDate: function() {
	return this.date;
    },

    setAuthor: function(author) {
	this.author = author;
    },

    setText: function(text) {
	this.text = text;
    },
    
    setDate: function(date) {
	this.date = date;
    },

    toString: function() {
	return "Author of the comment : "+this.author+", content : "+this.text+", filmId : "+this.filmId;
    }
    
};