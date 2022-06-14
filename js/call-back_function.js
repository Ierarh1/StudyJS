"use strict";

function first()
{
    //do something
    setTimeout(function()
    {
        console.log(1);
    },1000);
};


function second()
{
    console.log(2);
}
//если функции запускаются одна за другой это не значит что они будут выполняться последовательно,
//Да зпускаются они одна за другой но вот заканчивают работать они могут в разное время 
//как например тут second() выполнится быстрее чем first();
first();
second();


//что бы фукции вызывались и выполнялись последовательно и существую callback_function
function learnJS(lang, callback)
{
    console.log(`я учу ${lang}`);
    callback();
}

function done()
{
    console.log(`я прошёл этот урок`);
}

learnJS(`JavaScript`,done);

