"use strict";
//такой тип называется function declaration  её смысл в том что она существует до её 
//объявления, пожтому мы можем сместить все функции в самый низ и логика программы не нарушится
function showFirstMessage()
{
    console.log(`hi_____geleon`);
}
showFirstMessage();

function showSecondMessage(text)
{
    console.log(text);
}
showSecondMessage(`this second message`);


function calc (a,b)
{
    return a+b;
}

console.log(calc(20,5));
console.log(calc(`piso`,`ololo ololo`));



function rezult (a)
{
    let numb = (a +256)*44;
    return numb;
}

let rez = rezult(22);
console.log(rez);



//function expression -существует только в том месте где её создают, мы неможем спихнуть такую функцию в 
//самый низ и потом использовать где захотим p.s  такчку с запятой надо вконце ставить
//по сути она напоминает чем то переменную

const testFunctionDeclaration = function()
{
    console.log(`functiondeclaration`);
};

testFunctionDeclaration();


//в ES6 была добавлена стрелочная функция ОНа НЕИМЕЕЕТ контекста вызова(this), и чаще всего её делают в обработчиках
//событий
//сокращённый вариант
const calc1 = (a,b) => a+b;

//расширенный вариант
const calc2 = (a,b) => {return a+b};

console.log(calc1(22,15))
console.log(calc2(22,15))
