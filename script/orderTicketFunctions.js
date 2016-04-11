//Global variables
var numberOfSteps = 5;
var user1 = new User("mail@uc3m.com","Veber","Francis","root","Madrid","Spain",645893254,"blablflelalalala");
var user2 = new User("root@root.com","Maurice","Jean-Luc","root","Madrid","Spain",648793254,"blablflelalalala");
var allUsers = new Array(user1,user2);


//Show a certain step (a form) and hide the others
function showStep(number) {
    
    if(number > numberOfSteps) {alert("Number of steps too big : "+number); return null;}

    $("#step"+number).show();

    for (var i=1; i<=numberOfSteps; i++) {
	if (i != number) {
	    $("#step"+i).hide();
	}
    }

}

//Get infos from the url (cinemaId and filmId)
function parseUrl() {
    var url, attributesPartUrl, attributes;
    var values = new Array();

    url = window.location.href; //We retrieve the link
    attributesPartUrl = (url.split("?"))[1]; //We get the right part of the '?' (param1=value1&param2=value2)
    attributes = attributesPartUrl.split("&"); //We split according to the '&'
    
    values.push((attributes[0].split("="))[1]); //We split on the = and we retrieve the value of the filmId
    values.push((attributes[1].split("="))[1]); //We split on the = and we retrieve the value of the cinemaId

    return values;
}

//Initialize the step 1 form
function initializeStep1(film,cinema) {
    var cinemasToShow = film.getCinemas();
    
    //Display the chosen movie
    $("#filmChosenStep1").html("You want to watch : <font color='#AE674B'>"+film.getFilmName()+"</font>");

    //If cinema chosen
    if (cinema != null) {
	$("#cinemaChosenStep1Div").show();
	$("#selectCinemaDiv").hide();
	$("#cinemaChosenStep1").html("in : <font color='#AE674B'>"+cinema.getCinemaName()+"</font>");
    }
    else {
	$("#cinemaChosenStep1Div").hide();
	$("#selectCinemaDiv").show();

	//Display the available cinema(s) for this movie if not already chosen
	$("#selectCinema").html("");
	for (i in cinemasToShow) {
	    var currentCinema = cinemasToShow[i];
	    
	    $("#selectCinema").append("<option value='"+currentCinema.getCinemaId()+"'>"+currentCinema.getCinemaName()+"</option>");
	}
	
    }
    
    //Function associated the next step button
    $("#step1Next").click(function(){
	var quantity = $("#selectQuantity").val();
	var cinemaChosen = cinema;
	var filmChosen = film;
	
	if (cinema == null) cinemaChosen = getCinemaById($("#selectCinema").val());

	showStep(2);
	initializeStep2(filmChosen,cinemaChosen,quantity)
    });
    
}


//Initialize the step 2 form
function initializeStep2(film,cinema,quantity) {
    var sessions = getSessionsByCinemaFilm(allSessions,cinema.getCinemaId(),film.getFilmId());
    var scheduleArray = sessions.getSchedule();
    var entrancePrice = cinema.getEntrancePrice();
    var globalPrice = entrancePrice*quantity;
    
    //Display the chosen movie
    $("#filmChosenStep2").html("You want to watch : <font color='#AE674B'>"+film.getFilmName()+"</font>");

    //In this cinema
    $("#cinemaChosenStep2").html("in : <font color='#AE674B'>"+cinema.getCinemaName()+"</font>");

    //Display the quantity chosen
    $("#quantityChosenStep2").html("Quantity of entrance : <font color='#AE674B'>"+quantity+"</font>");

    //Display the entrance price for this cinema
    $("#entrancePriceStep2").html("Entrance price for the chosen cinema : <font color='#AE674B'>"+entrancePrice+"</font> €");

    //Display the global price
    $("#globalPriceStep2").html("Global price : <font color='#AE674B'>"+globalPrice+"</font> €");

    //Display schedule time for this movie and this cinema
    $("#selectSession").html(""); //We clear the selectSession div 
    for (i in scheduleArray) {
	var currentSchedule = scheduleArray[i];

	$("#selectSession").append("<option value="+currentSchedule+">"+currentSchedule+"</option>");
    }

    //Buttons actions
    $("#step2Next").click(function(){
	var scheduleChosen = $("#selectSession").val();

	showStep(3);
	initializeStep3(film,cinema,quantity,globalPrice,scheduleChosen);
    });

    //Previous button
    $("#step2Previous").click(function(){
	showStep(1);
    });
}



//Initialize the step 3 form
function initializeStep3(film,cinema,quantity,globalPrice,scheduleChosen) {
    var aRoom = sampleRooms[0]; //We just take one room to simulate
    var numberTotalOfSeats = aRoom.getTotalNumberSeats();
    var seatsAvailable = aRoom.getNumberOfAvailablePlaces();
    var colsRoomLetters = new Array("A","B","C","D","E","F","G","H","I","J","K");
    var rowNumber = aRoom.getRowNumber();
    var colNumber = aRoom.getColNumber();
    var allSeats = aRoom.getSeats();

    //Display the total number of seats
    $("#totalSeatsStep3").html("Number total of seats : <font color='#AE674B'>"+numberTotalOfSeats+"</font>");

    //Display number of available seats
    $("#availableSeatsStep3").html("Number of available  seats : <font color='#AE674B'>"+seatsAvailable+"</font>");

    //We clear the form
    $("#selectionSeats").html(null);
    
    //Choosing the seats according to the quantity
    for (var i=1;i<=quantity;i++) {
	var label = "<div class='form-group'>";
	label += "<div class='row'><div class='col-xs-3'>"
	label += "<label for='selectionSeats' class='control-label'>Choose seat "+i+" : </label></div>";

	var selectRow = "<div class='col-xs-2'>";
	selectRow += "<label for='selectRowSeat"+i+"' class='control-label'>Row : </label>";
	selectRow += "<select class='form-control' id='selectRowSeat"+i+"'></select>";
	selectRow += "</div>";

	var selectCol = "";
	selectCol += "<div class='col-xs-2'>";
	selectCol += "<label for='selectColSeat"+i+"' class='control-label'>Col : </label>";
	selectCol += "<select class='form-control' id='selectColSeat"+i+"'></select>";
	selectCol +=  "</div></div></div>";
	
	$("#selectionSeats").append(label+selectRow+selectCol);

	//We fill the selects with values (letters for columns and figures for rows)
	for (var j=1;j<=rowNumber;j++) {
	    $("#selectRowSeat"+i).append("<option value='"+j+"'>"+j+"</option>");
	}
	for (var k=1;k<=colNumber;k++) {
	    $("#selectColSeat"+i).append("<option value='"+k+"'>"+colsRoomLetters[k-1]+"</option>");
	}
    }

    //SUMMARY
    //Display the chosen movie
    $("#filmChosenStep3").html("You want to watch : <font color='#AE674B'>"+film.getFilmName()+"</font>");

    //In this cinema
    $("#cinemaChosenStep3").html("in : <font color='#AE674B'>"+cinema.getCinemaName()+"</font>");

    //Display the quantity chosen
    $("#quantityChosenStep3").html("Quantity of entrance : <font color='#AE674B'>"+quantity+"</font>");

    //Display the global price
    $("#globalPriceStep3").html("Global price : <font color='#AE674B'>"+globalPrice+"</font> €");
    
    //Display the schedule chosen
    $("#scheduleStep3").html("Schedule chosen : <font color='#AE674B'>"+scheduleChosen+"</font>");

    //Buttons actions
    $("#step3Next").click(function() {
	var seatsChosen = new Array();
	var noProblem = new Boolean(true);

	//We construct an array with the chosenSeats, we check if they're available.
	for (var i=1;i<=quantity;i++) {
	    var currentSeat = allSeats[$("#selectRowSeat"+i).val()-1][$("#selectColSeat"+i).val()-1];

	    if (currentSeat.isFree()) {
		if (seatsChosen.length == 0) { 
		    seatsChosen.push(currentSeat);
		}
		else if ((seatAlreadyPresent(currentSeat,seatsChosen) == true) && (noProblem == true)) {
		    alert("You can't choose the same seat several times!");
		    noProblem = false;
		} else if (noProblem == true) {
		    seatsChosen.push(currentSeat);
		}
	    } else {
		alert("The seat "+i+" you've chosen is busy!");	
		noProblem = false;
	    }
	}

	//If there were no problems, we can go on with the next step
	if (noProblem) {
	    showStep(4);
	    initializeStep4(film,cinema,quantity,globalPrice,scheduleChosen,seatsChosen);
	}
    });

    //Previous step
    $("#step3Previous").click(function() {
	showStep(2);
    });
}


//Check if a seat is already in an array of seats
function seatAlreadyPresent(seat, arraySeats) {
    var isPresent = new Boolean(false);
    
    for (i in arraySeats) {
	if (arraySeats[i].equals(seat)) {
	    isPresent = true;
	}
    }

    return isPresent;   
}


//Initialization of the step 4
function initializeStep4(film,cinema,quantity,globalPrice,scheduleChosen,seatsChosen) {

    //Login button
    $("#step4Login").click(function() {
	var userFound = new Boolean(false);

	var email = $("#emailLogin").val();
	var password = $("#passwordLogin").val();
	
	//Check if the user/password is good
	for (i in allUsers) {
	    var currentUser = allUsers[i];
	    
	    if(email == currentUser.getEmail() && password == currentUser.getPassword()) {
		userFound = true;
	    }
	}

	//If user found in the "database", we can go on with the step 5
	if (userFound == true) 	{
	    showStep(5);
	    initializeStep5(film,cinema,quantity,globalPrice,scheduleChosen,seatsChosen);
	} else { 
	    alert("Wrong user or password.");
	}
    });
    
    //Previous button
    $("#step4Previous").click(function() {
	showStep(3);
    });

    //RegisterButton
    $("#step4Register").click(function(){
	var everythingGood = checkRegisterForm();

	if(everythingGood == true) {
	    showStep(5);
	    initializeStep5(film,cinema,quantity,globalPrice,scheduleChosen,seatsChosen);

	} else {
	    alert("Make sure to check the agreements of the website and that there are not empty fields.");
	}
    });
}


//Function to check the register form, i.e all the fields don't have to be empty and the agreement checkbox has to be checked
function checkRegisterForm() {
    var everythingGood = new Boolean(true);

    //We remove error class and error labels in case of consecutive errors
    $("#passwordGroup").removeClass("has-error");
    $("#emailGroup").removeClass("has-error");
    $("#firstNameGroup").removeClass("has-error");
    $("#lastNameGroup").removeClass("has-error");
    $("#mobileGroup").removeClass("has-error");
    $("#addressGroup").removeClass("has-error");
    $("#locationGroup").removeClass("has-error");
    
    
    //We check the fields
    if ($("#registerPassword").val().length == 0) {
	$("#passwordGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerEmail").val().length == 0) {
	$("#emailGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerName").val().length == 0) {
	$("#firstNameGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerLastName").val().length == 0) {
	$("#lastNameGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerMobile").val().length == 0) {
	$("#mobileGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerAddress").val().length == 0) {
	$("#addressGroup").addClass("has-error");
	everythingGood = false;
    }
    if ($("#registerLocation").val().length == 0) {
	$("#locationGroup").addClass("has-error");
	everythingGood = false;
    }

    //Check if checkbox is checked
    if(!$("#registerAgreement").is(":checked")) {
	everythingGood = false;
    }
    
    return everythingGood;
}


//Initialization of the step 5
function initializeStep5(film,cinema,quantity,globalPrice,scheduleChosen,seatsChosen) {
    var colsRoomLetters = new Array("A","B","C","D","E","F","G","H","I","J","K");

    //SUMMARY
    //Display the chosen movie
    $("#filmChosenStep5").html("You want to watch : <font color='#AE674B'>"+film.getFilmName()+"</font>");

    //In this cinema
    $("#cinemaChosenStep5").html("in : <font color='#AE674B'>"+cinema.getCinemaName()+"</font>");

    //Display the quantity chosen
    $("#quantityChosenStep5").html("Quantity of entrance : <font color='#AE674B'>"+quantity+"</font>");

    //Display the global price
    $("#globalPriceStep5").html("<font color='#FF0000'>Global price : "+globalPrice+" €</font>");
    
    //Display the schedule chosen
    $("#scheduleStep5").html("Schedule chosen : <font color='#AE674B'>"+scheduleChosen+"</font>");

    var numberSeat = 1;
    //Display the seats chosen
    for (i in seatsChosen) {
	var currentSeat = seatsChosen[i];
	var seatLabel = "<div class='form-group'>";
	seatLabel += "<label class='control-label' id='seatLabel"+numberSeat+"'>Seat chosen "+numberSeat+" : <font color='#AE674B'>"+(currentSeat.getRowNumber()+1)+colsRoomLetters[currentSeat.getColNumber()]+"</font></label> <br/>";
	seatLabel += "</div>";

	$("#seatLabels").append(seatLabel);

	numberSeat++;
    }

    //Button BUY
    $("#step5Buy").click(function(){
	var everythingGood = new Boolean(true);
	
	//We remove error class and error labels in case of consecutive errors
	$("#accountGroup,#securityCodeGroup,#expirationDateGroup").removeClass("has-error");

	//We check the fields
	if ($("#accountNumber").val().length == 0) {
	    $("#accountGroup").addClass("has-error");
	    everythingGood = false;
	}
	if ($("#securityCode").val().length == 0) {
	    $("#securityCodeGroup").addClass("has-error");
	    everythingGood = false;
	}
	if ($("#expirationDateMonth").val().length == 0) {
	    $("#expirationDateGroup").addClass("has-error");
	    everythingGood = false;
	}
	if ($("#expirationDateYear").val().length == 0) {
	    $("#expirationDateGroup").addClass("has-error");
	    everythingGood = false;
	}

	//If everything's good, let's go on
	if(everythingGood == true) {
	    alert("Payment successful.");
	    $("#step5Form").submit();
	} else {
	    alert("Empty fields are remaining.");
	}	
    });

}