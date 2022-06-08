"use strict";

//используется для того что бы предупредить юзверя
//если вы закроете эту вкладку то заполненные данные несохранятся
alert(`hello`);

//выбьет окоршко, с двумя кнопками "ок" "отмена"
//возвращает true или false соответственно
const result = confirm(`Are you here?`);
console.log(result);

//тоже самое что и confirm но даёт возможность пользователю самому написать ответ
const answer = prompt(`How old are you?`,``);
//с дефолтным ответом например 22
const answerDefault = prompt(`How old are you?`,`22`);

//в answer и answerDefault  ВСЕГДА будет СТРОКА мы можем в этом убедиться используя
//спец команду
console.log(answer + typeof(answer));
console.log(answerDefault + typeof(answerDefault));

//но можно сделать что бы было число надо просто поставить "+"перед prompt
const answerDefaultNumber = +prompt(`How old are you?`,`225`);
console.log(answerDefaultNumber + typeof(answerDefaultNumber));


const answ =[];

answ[0] = prompt(`Your Name ?`,``);
answ[1] = prompt(`Your Last Name?`,``);
answ[2] = prompt(`Your age?`,``);

console.log(answ);


//интерполяция. Для её использования необходимо пользоваться `` .
//По сути это удобное использование  переменных в других переменных
let category = `toys`;
console.log(`https://someurl./${category}/5`);//внесение переменных через $

//так же можно интерполировать и любые другие структуры
let user =`Anton`;
alert(`Hi everybody,${user}`);

