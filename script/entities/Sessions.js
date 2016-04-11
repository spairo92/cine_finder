Sessions = function(sessionsId, cinemaId, filmId, schedule) {
    this.construct(sessionsId, cinemaId, filmId, schedule);
}

Sessions.prototype = {
    cinemaId: -1,
    filmId: -1,
    schedule: new Array(),

    construct: function(sessionsId, cinemaId, filmId, schedule) {
        this.setSessionsId(sessionsId);
        this.setCinemaId(cinemaId);
        this.setFilmId(filmId);
        this.setSchedule(schedule);
    },

    // GETTERS
    getSessionsId: function () {
        return this.sessionsId;
    },

    getCinemaId: function() {
        return this.cinemaId;
    },

    getFilmId: function() {
        return this.filmId;
    },

    getSchedule: function() {
        return this.schedule;
    },

    // SETTERS
    setSessionsId: function(sessionsId) {
        this.sessionsId = sessionsId;
    },

    setCinemaId: function(cinemaId) {
        this.cinemaId = cinemaId;
    },

    setFilmId: function(filmId) {
        this.filmId = filmId;
    },

    setSchedule: function(schedule) {
        this.schedule = schedule;
    },

    // Functions
    getScheduleDisplay: function() {
        var result = new String();
        for (i in this.schedule) {
            if (i != this.schedule.length-1)
                result += this.schedule[i]+" | ";
            else result += this.schedule[i];
        }
        return result;
    }

}

