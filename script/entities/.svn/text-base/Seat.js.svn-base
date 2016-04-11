Seat = function(rowNumber,colNumber) {
    this.construct(rowNumber,colNumber);
};

Seat.prototype = {
    rowNumber: new Number(),
    colNumber: new Number(),
    free: new Boolean(),

    construct: function(rowNumber,colNumber) {
	//We generate randomly busy seats
	var numberAlea = Math.random();
	if (numberAlea >= 0.80) {
	    this.free = false;
	} else {
	    this.free = true;
	}
	this.rowNumber = rowNumber;
	this.colNumber = colNumber;
	
    },

    getRowNumber: function() {
	return this.rowNumber;
    },

    getColNumber: function() {
	return this.colNumber;
    },

    isFree: function() {
	return this.free;
    },

    setRowNumber: function(rowNumber) {
	this.rowNumber = rowNumber;
    },

    setColNumber: function(colNumber) {
	this.colNumber = colNumber;
    },

    setFree: function(free) {
	this.free = free;
    },

    equals: function(seat) {
	return ((this.rowNumber == seat.getRowNumber()) && (this.colNumber == seat.getColNumber()));
    },

    toString: function() {
	return "Row: "+this.rowNumber+", col : "+this.colNumber+", free? : "+this.free;
    }
    
};