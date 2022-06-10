
 let numberOfFilms;

 function start()
 {   //проверяем на пустую строку, на null(пользователь отменяет действие)и проверяем на то что 
     //пользователь ввёл число для этого есть команда isNaN- если внутри НЕчисло то он вернёт правду
     while(numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms))
     {
         numberOfFilms = +prompt(`Сколько фильмов вы просмотрели?`,``);
     }; 
 
 };
 

 start();


const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false

};


function rememberMyFilms()
{
    for(let i=0; i<2;i++){
        const a = prompt(`Один из последних просмотренных фильмов?`,``),
              b = prompt(`На сколько оцените его?`, ``);
        
        if(a!= null && b!=null && a!=`` && b!=`` && a.length <50)
        {
            personalMovieDB.movies[a] = b;
            console.log(`done`);
        } else{
            console.log(`error`);
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel()
{
    if(personalMovieDB.count<10){
        console.log(`Просмотрено довольно мало фильмов`);
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30)
    {
        console.log(`вы классический зритель`);
    }else if(personalMovieDB.count >= 30)
    {
        console.log(`Вы киноман`);
    }else 
    {
        console.log(`error`);
    }
}

detectPersonalLevel();



function showMyDB(ifTrueDontShow)
{
    if(!ifTrueDontShow)
    {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYourGeneres()
{
    for(let i = 0; i<4;i++)
    {
        const gener = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] =gener;
    }
}

writeYourGeneres();