const
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''),
  lastFilm = prompt(`Один из послeдних просмотренных фильмов?`, ''),
  score = prompt('На сколько оцените его?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



console.log(personalMovieDB);