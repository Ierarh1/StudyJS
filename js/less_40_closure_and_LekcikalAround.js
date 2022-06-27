"use strict";

let num = 55;

function showValue()
{
    console.log(num);
}

num = 21678;

//в  теории должно вывывести 55, но выведется 21678.
//как? почему? какого хрена?. А всё дело в том что вот тут console.log(num);
//происходит обращение не к копии объекта, а к ссылке а в ней ВСЕГДА будет лежать актуальное значение переменной
showValue();




                                                     //немного модифицируем функцию
let num2 = 55;

const showValue = function()
{
    num2 = 44;
    console.log(num2);
}

num2 = 21678;

//опираясь на прошлый опыт должно вывести 21678 но выведется 44.
//как? почему? какого хрена?. А всё дело в том что вот тут console.log(num2);
//обращение к глобольному объекту  num2 = 21678; не произойдёт. Тк как функция нашла локальное значение num2 = 44;
//локальные превалируют над глобальными значениями
showValue();





                                                    //ещё один вариант замыкания
function createCounter()
{
    let counter = 0;

    const myFunction = function()
    {
        counter = counter+1;
        return counter;
    }

    //конкретно в этом месте само тело функции  myFunction() уже ничтожено, ОДНАКО на ружу мы вернём результат её работы, И
    //её замыкания, грубо говоря все элементы на что она ссылается вданном случае ссылку на counter
    return myFunction;
}
//тк как внтри createCounter() хранится функция myFunction() то мы можем инициализировать
//её как экземпляр класса. Но на самом деле в этом экземпляре хранится не только функция myFunction(),
//но так же и ссылка на counter
const increment = createCounter();

//каждая работа с функции increment() будет обращаться к одному и тому же свойству counter()
const c1 = increment();
const c2 = increment();
const c3 = increment();

//поэтому на выходе будет 1,2,3
console.log(c1,c2,c3);

//короче самое главное чё надо запомнить это то что функция даже та которая как бы уничтожается myFunction() всё равно
//хранит в себе ссылки на те вещи которые были доступны ей во время создания

//лексическое окружение есть не только у функций, но и вообще у любых объектов у которых есть {}.
//Просто именно с функциями больше всего проблем

