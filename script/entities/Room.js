Room = function(idRoom,rowNumber,colNumber) {
    this.construct(idRoom,rowNumber,colNumber);
};

Room.prototype = {
    idRoom: new Number(),
    rowNumber: new Number(),
    colNumber: new Number(),
    seats: new Array(),

    construct: function(idRoom,rowNumber,colNumber) {
	this.idRoom = idRoom,
	this.rowNumber = rowNumber;
	this.colNumber = colNumber;
	this.generateSeats(this.rowNumber,this.colNumber);
    },

    //GETTERS
    getIdRoom: function() {
	return this.idRoom;
    },

    getRowNumber: function() {
	return this.rowNumber;
    },

    getColNumber: function() {
	return this.colNumber;
    },

    getSeats: function() {
	return this.seats;
    },

    //SETTERS
    setIdRoom: function(idRoom) {
	this.idRoom = idRoom;
    },

    setRowNumber: function(rowNumber) {
	this.rowNumber = rowNumber;
    },

    setColNumber: function(colNumber) {
	this.colNumber = colNumber;
    },

    setSeats: function(seats) {
	this.seats = seats;
    },

    //FUNCTIONS
    generateSeats: function(rowNumber,colNumber) {
	for (var i=0;i<rowNumber;i++) {
	    this.seats[i] = new Array();
	    for (var j=0;j<colNumber;j++) {
		this.seats[i].push(new Seat(new Number(i),new Number(j)));
	    }
	}
    },

    getBooleanTable: function() {
	result = new Array();

	//Initialization (all white (2))
	for (var i=0;i<(3*this.rowNumber-2);i++) {
	    result[i] = new Array();
	    for (var j=0;j<(3*this.colNumber-2);j++) {
		result[i][j] = 2;
	    }
	}

	//Green or red (1 or 0)
	for (var i=0;i<this.rowNumber;i++) {
	    for (var j=0;j<this.colNumber;j++) {
		if(this.seats[i][j].isFree()) {
		    result[3*i][3*j] = 1;
		} else {
		    result[3*i][3*j] = 0;
		}
	    }
	}

	return result;
    },

    getTotalNumberSeats: function() {
	return (this.rowNumber*this.colNumber);
    },

    getNumberOfAvailablePlaces: function() {
	var availableSeats = this.getTotalNumberSeats();

	for (var i=0;i<this.rowNumber;i++) {
	    for (var j=0;j<this.colNumber;j++) {
		if (!this.seats[i][j].isFree()) availableSeats--;
	    }
	}

	return availableSeats;	
    },

    getDisplayRoomObject: function(widthN,heightN) {
	var boolTable = this.getBooleanTable();
	
	var vis = new pv.Panel()
      .width(boolTable[0].length * widthN)
      .height(boolTable.length * heightN);

      vis.add(pv.Layout.Grid)
      .rows(boolTable)
      .cell.add(pv.Bar)
      .fillStyle(pv.Scale.linear()
      .domain(0,1,2,3)
      .range("#ff0000","#40FF00","#FFFFFF","#000000"));

	return vis;
    },


    //To string function
    toString: function() {
	return "Row: "+this.rowNumber+", col : "+this.colNumber+", idRoom : "+idRoom;
    }
    
};