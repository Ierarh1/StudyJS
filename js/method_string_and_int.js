"use strict"

const str = `test`;
console.log(str.length);//количество элементов выдаст 4

//так же можно и масссив посчитать
let testMass = [1,2,5,7,8,6];
console.log(testMass.length);

//кстати по поводу подсча строк пожно жостучаться до определённой буквы по индексу
const str1 = `test`;
console.log(str1[2]);//мы получим S.

//однако изменить СТРОКУ по ИНДЕКСУ нельзя
//вот такой код работать не будет `s` на `d` мы поменять несможем, хотя код выполнится
str1[2] = `d`;
console.log(str1[2]);

//один из методов, ОН НЕ модифицирует старую строку а возвращает новую
let str2 = `test_UPPER_and_LOVER_case`;
console.log(str2.toUpperCase());
console.log(str2);

//если есть uppercase то есть и lowercase
console.log(str2.toLowerCase());

//поиск подстроки, нам выдаст индекс с которого начинается данное слово
const fruit = `Some Fruit`;
console.log(fruit.lastIndexOf(`Fruit`));
//попробуем найти несуществующий элемент, например `Q`;
console.log(fruit.lastIndexOf(`Q`));//тк как элемента в этой строке нету  то выдастся -1


//вырезание строки
let logg_test = `Helloy nigga`;
//указываешь с какого элемента  начинать вырезать до какого"+1".
// мы вырезаем строку доконца, всего символов  в строке 11 но мы указываем 12
//немного дебильное поведение, ну какое есть 
console.log(logg_test.slice(`7`,`12`));
//либо есть вот такой вариант. Когда мы просто указывает один индекс, и строчка будет вырезана доконца
console.log(logg_test.slice(7));
//p.s  маньяки могут испольщовать отрицательные числа там вырезать logg_test.slice(`-7`,`-1`)


//есть альтернативный вариант, по сути тоже самое что и slice но тут нельзя
//быть маньяком и пользоваться отрицательными числами
// НЕРАБОТАЕТ БЛЯТЬ НАДО ОТТЕСТИТЬ
let substingtest = logg_test.substring(2,10);
сonsole.log(substingtest);

//есть ещё один, он всё же сильнее отличается от первых двух
let logg_test2 = `Helloy nigga`;
//указываем с 1)КАКОГО СИМВОЛА ВЫРЕЗАТЬ а  уже вторым аргументом 2)СКОЛЬКО надо вырезать
console.log(logg_test2.substr(5,4));
