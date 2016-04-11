//Initialization of samples
var sampleRooms = new Array(new Room(0,4,11),new Room(1,12,18), new Room(2,8,12));
var sampleComments1 = new Array(new Comment("Marcus","Amazing movie!",new Date(2013,11,22)),new Comment("Mike","Good movie, i loved it!",new Date(2013,12,3)));
var sampleComments2 = new Array(new Comment("Malek B","I did not like it at all ! This is s***..",new Date(2013,11,18)),new Comment("Spiro Spairus","Regular movie, don't advise you to see it guys..",new Date(2013,12,12)));
var sampleComments3 = new Array(new Comment("Fx h.","Good job director! It was wonderful !",new Date(2013,10,9)),new Comment("Sergio Sayago","Nice movie ! And nice website by the way! I love it!",new Date(2013,12,9)));


//Photos of films
var photosPulp = new Array("680_backdrop.jpg","pulp-fiction-1994-20-g.jpg","pulp-fiction-1994-24-g.jpg","pulp_fiction_stencil_by_shmilblix-d3bgl7s.png");
var photosReservoir = new Array("94628.jpg","film-noir-reservoir-dogs-cover.jpg","mr-blonde.jpg","reservoir_dogs_art_01.jpg","reservoir-dogs-sorti-en-1992-realise-par.jpg");
var photosDiner = new Array("diner-de-cons.jpg","diner-de-cons-1998-02-g.jpg","diner-de-cons-1998-08-g.jpg","diner-de-cons-1998-tou-02-g.jpg","le-vieux-bonus-cine--le-diner-de-cons-4769-1.jpg");
var photosEmmanuelle = new Array("censored-stamp.jpg");
var photosFight = new Array("Edward-in-Fight-Club-edward-norton-562360_1600_900.jpg","ee83ac11.jpg","Fight-Club-Brad-Pitt.jpg","Fight-Club-fight-club-4646800-1706-960.jpg");
var photosRounders = new Array("2970308598.jpg","BDDefinition2011Rounders-3.WM_.jpg","rounders.jpg");
var photosSaw6 = new Array("4aca2f02cb9bf.jpg","index.jpeg","saw6_1.jpg","saw-6-tanedra-howard.jpg");
var photosTitanic = new Array("Great-TITANIC-stills-titanic-32598047-1400-938.jpg","titanic3d.png","titanic-anniversary-3-that-which-remains1.jpg","TITANIC-sad-songs-30492571-1440-900.jpg");


//Cinemas (latitude and longitude have to be checked)
var cinema1 = new Cinema(0,"Cine Callao, Madrid","Plaza del Callao, 3, 28013 Madrid","40.4201298","-3.7058339",sampleRooms,null,"(+34) 917 46 26 64","www.cinecallaomadrid.es");
var cinema2 = new Cinema(1,"Cinesa Capitol, Madrid","Calle Gran Vía, 41, 28013 Madrid","40.4204955","-3.7066250",sampleRooms,null,"(+34) 917 21 46 89","www.cinesacapitolmadird.es");
var cinema3 = new Cinema(2,"Imax Madrid","Calle Meneses, s/n, 28045 Madrid","40.3925457","-3.6818097",sampleRooms,null,"(+34) 917 21 24 29","www.imaxmadrid.es");
var cinema4 = new Cinema(3,"Cinesa Diagonal, Barcelona", "Carrer de Santa Fe de Nou Mexic, 08021 Barcelona","41.3943044","2.1370947",sampleRooms,null,"(+34) 928 79 45 64","www.cinesadiagonalbarcelona.es");
var cinema5 = new Cinema(4,"Grand Rex, Paris","1 Boulevard Poissonnière, 75002 Paris","48.8679070","2.3374021",sampleRooms,null,"(+33) 125 25 25 89","www.grandrexparis.fr");
var allCinemas = new Array(cinema1,cinema2,cinema3,cinema4,cinema5);


//Films
var film1 = new Film("Pulp fiction","Action","Quentin Tarantino",1994,"American",plotPulp,"John Travolta, Samuel L. Jackson, Harvey Keitel, Uma Thurman","https://www.youtube.com/embed/s7EdQ4FqbhY?rel=0","pulp-fiction",photosPulp,sampleComments3,null);
var film2 = new Film("Titanic","Drama","James Cameron",1997,"American",plotTitanic,"Leonardo Dicaprio, Kate Winslet, Billy Zane, Kathy Bates","https://www.youtube.com/embed/zCy5WQ9S4c0?rel=0","titanic",photosTitanic,sampleComments1,null);
var film3 = new Film("Fight club","Thriller","David Fincher",1999,"American",plotFight,"Edward Norton, Brad Pitt","https://www.youtube.com/embed/SUXWAEX2jlg?rel=0","fight-club",photosFight,sampleComments2,null);
var film4 = new Film("Rounders","Action","John Dalh",1998,"American",plotRounders,"Edward Norton, Matt damon, John Malkovich","https://www.youtube.com/embed/-Qv4K-4-FZM?rel=0","rounders",photosRounders,sampleComments3,null);
var film5 = new Film("Le dîner de cons","Comedy","Francis Veber",1999,"French",plotDiner,"Jacques Villeret, Thierry Lhermite, Danier Prévost","https://www.youtube.com/embed/4KazXRcB3uU?rel=0","diner-de-con",photosDiner,sampleComments3,null);
var film6 = new Film("Emmanuelle","Erotic","Just Jaeckin",1974,"French",plotEmmanuelle,"Alain Cuny","https://www.youtube.com/embed/Q0j78J5SeHY?rel=0","emmanuelle",photosEmmanuelle,sampleComments1,null);
var film7 = new Film("Saw 6","Horror","James Wan",2009,"American",plotSaw6,"Tobin Bell, Costas Mandylor, Betsy Russell, Mark Rolston","https://www.youtube.com/embed/JMUv3wsbET8?rel=0","saw-6",photosSaw6,sampleComments1,null);
var film8 = new Film("Reservoir dogs","Thriller","Quentin Tarantino",1992,"American",plotReservoir,"Harvey Keitel, Tim Roth","https://www.youtube.com/embed/-C5MEv7eXRw?rel=0","reservoir-dogs",photosReservoir,sampleComments2,null);
var allFilms = new Array(film1,film2,film3,film4,film5,film6,film7,film8);


//Genres
var allGenres = new Array("Comedy","Action","Drama","Thriller","Erotic","Horror");


//Construct variables for auto-completion
var allDirectors = new Array();
var allFilmNames = new Array();
var allCinemaNames = new Array();

for (i in allFilms) {
    var currentFilm = allFilms[i];
    var currentDirector = currentFilm.getDirector();

    //If the current director isn't already in the allDirectors array, add it.
    if (allDirectors.indexOf(currentDirector) == -1) {
	allDirectors.push(currentDirector);
    }
    
    //Array with all the film's names
    allFilmNames.push(currentFilm.getFilmName());

    //Put an id for each film
    currentFilm.setFilmId(i);
}

for (i in allCinemas) {
    var currentCinema = allCinemas[i];
    allCinemaNames.push(currentCinema.getCinemaName());
}

var allFilmsCinemasDirectorsGenres = allFilmNames.concat(allCinemaNames).concat(allDirectors).concat(allGenres);
