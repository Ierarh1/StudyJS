
const personalMovieDB={
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function()
    {   //проверяем на пустую строку, на null(пользователь отменяет действие)и проверяем на то что 
        //пользователь ввёл число для этого есть команда isNaN- если внутри НЕчисло то он вернёт правду
        while(personalMovieDB.count == `` || personalMovieDB.count == null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = +prompt(`Сколько фильмов вы просмотрели?`,``);
        }; 
    
    },
    
    rememberMyFilms: function()
    {   //метод trim убирает пробелы вконце и в начале строки, таким образом мы  отфилтруем данные 
    //предоставил нам пользователь. Елси юхверь кинет нам просто кучу пробелом, то он обрежется
    //до пустой строки =``. А мы уже такое исключение отработали
        for(let i=0; i<2;i++)
        {
        const a = prompt(`Один из последних просмотренных фильмов?`,``).trim(),
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
    },

    detectPersonalLevel: function()
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
    },

    showMyDB: function(ifTrueDontShow)
    {
        if(!ifTrueDontShow)
        {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function()
    {
        if(personalMovieDB.privat)
        {
            personalMovieDB.privat = false;
        }
        else
        {
            personalMovieDB.privat = true;
        }

    },

    writeYourGenres: function()
    {
        for(let i = 0; i<4;i++)
        {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            
            if(genre==``||genre==null)
            {
                console.log(`Вы ввели некорректные данные или не ввели их вовсе`);
                i--;
            }else
            {
                personalMovieDB.genres[i] =gener;
            }

        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`любимый жанр ${i + 1} это ${item}`);  
        });
    }

};

