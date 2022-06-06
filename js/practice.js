const numberOfFilms = +prompt(`Сколько фильмов вы просмотрели?`,``);

const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false

};

const a = prompt( `Один из последних просмотренных фильмов?`,``),
      b = prompt(`На сколько оцените его?`, ``),
      c = prompt( `Один из последних просмотренных фильмов?`,``),
      d = prompt(`На сколько оцените его?`, ``);

    //короче в `a` будет лежать название фильма в `b` оценка. мы создаём пару ключ/значение
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB);