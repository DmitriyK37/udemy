"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', ''),
			c = prompt('Один из последних просмотренных фильмов?', ''),
			d = prompt('На сколько оцените его?', '');

const personalMovieDB  = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);