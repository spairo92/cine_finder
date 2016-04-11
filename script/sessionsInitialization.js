//Sessions
var s1 = new String("15:00");
var s2 = new String("17:00");
var s3 = new String("20:30");
var s4 = new String("23:00");

//Different combinations of sessions
var arraySession1 = new Array(s1, s2, s3, s4);
var arraySession2 = new Array(s1, s2, s3);
var arraySession3 = new Array(s1, s3, s4);
var arraySession4 = new Array(s2, s3, s4);
var arraySession5 = new Array(s1, s2);
var arraySession6 = new Array(s1, s4);
var arraySession7 = new Array(s2, s3);
var arraySession8 = new Array(s2, s4);
var arraySession9 = new Array(s3, s4);
var arraySession10 = new Array(s1, s3);
var arraySession15 = new Array(s1, s2, s4);

//The sessions we need for our movies and cinemas
//(A session is composed by a movie id, a cinema id, and a string of possible sessions)
//(ex: cinema1, film3, {"17:00","20:30"})
var sessions1 = new Sessions(1, cinema1.getCinemaId(), film1.getFilmId(), arraySession1);
var sessions2 = new Sessions(2, cinema2.getCinemaId(), film1.getFilmId(), arraySession2);
var sessions3 = new Sessions(3, cinema3.getCinemaId(), film1.getFilmId(), arraySession3);
var sessions4 = new Sessions(4, cinema1.getCinemaId(), film2.getFilmId(), arraySession4);
var sessions5 = new Sessions(5, cinema2.getCinemaId(), film2.getFilmId(), arraySession1);
var sessions6 = new Sessions(6, cinema3.getCinemaId(), film2.getFilmId(), arraySession3);
var sessions7 = new Sessions(7, cinema4.getCinemaId(), film2.getFilmId(), arraySession4);
var sessions8 = new Sessions(8, cinema2.getCinemaId(), film3.getFilmId(), arraySession8);
var sessions9 = new Sessions(9, cinema3.getCinemaId(), film3.getFilmId(), arraySession9);
var sessions10 = new Sessions(10, cinema4.getCinemaId(), film3.getFilmId(), arraySession10);
var sessions11 = new Sessions(11, cinema5.getCinemaId(), film3.getFilmId(), arraySession3);
var sessions12 = new Sessions(12, cinema1.getCinemaId(), film4.getFilmId(), arraySession5);
var sessions13 = new Sessions(13, cinema3.getCinemaId(), film4.getFilmId(), arraySession1);
var sessions14 = new Sessions(14, cinema2.getCinemaId(), film5.getFilmId(), arraySession2);
var sessions15 = new Sessions(15, cinema5.getCinemaId(), film5.getFilmId(), arraySession3);
var sessions16 = new Sessions(16, cinema5.getCinemaId(), film6.getFilmId(), arraySession4);
var sessions17 = new Sessions(17, cinema2.getCinemaId(), film7.getFilmId(), arraySession15);
var sessions18 = new Sessions(18, cinema3.getCinemaId(), film7.getFilmId(), arraySession1);
var sessions19 = new Sessions(19, cinema5.getCinemaId(), film7.getFilmId(), arraySession9);
var sessions20 = new Sessions(20, cinema1.getCinemaId(), film8.getFilmId(), arraySession3);
var sessions21 = new Sessions(21, cinema4.getCinemaId(), film8.getFilmId(), arraySession4);

//All sessions
var allSessions = new Array(sessions1, sessions2, sessions3, sessions4, sessions5, sessions6, sessions7, sessions8, sessions9, sessions10, sessions11, sessions12, sessions13, sessions14, sessions15, sessions16, sessions17, sessions18, sessions19, sessions20, sessions21); 

//Link the movies to the cinemas where they are displayed according to the sessions. (Relation N-N)
for (i in allFilms) {
    var currentFilm = allFilms[i];

    currentFilm.setCinemas(getCinemasByFilm(allSessions,currentFilm.getFilmId()));
}

//Link the cinemas to the movies they display according to the sessions. (Relation N-N)
for (i in allCinemas) {
    var currentCinema = allCinemas[i];

    currentCinema.setFilms(getFilmsByCinema(allSessions,currentCinema.getCinemaId()));
}

