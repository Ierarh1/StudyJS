"use strict";

const option = {
    name: `test`,
    width: 2048,
    height: 1024,
    colors:{
        border: `black`,
        bg: `red`
    }
};


//для перебора элементов в объекте используется цикл for_in
console.log(`\n Тест метода перебора for_in`);
for(let key in option){
    console.log(`Свойство ${key}, имеет значение ${option[key]}`);
}

//данный цикл доходит до вложенного свойства colors и выводит его в консоль как [object Object]
//что бы нормально перебрать объект нам необходимо вложить ещё один цикл для перебора
console.log(`\n Тест метода перебора for_in со вложенным циклом`);
for(let key in option)
{
    if(typeof(option[key])=== `object`)
    {
        for(let i in option[key])
        {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);

        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${option[key]}`);

    }
    
};

//как узнать количество элементов в объекте
console.log(Object.keys(option));//нам вернётся массив  содержащий тупо ключи.
//но у массива есть свойство length 
console.log(Object.keys(option).length);


//			                            	Деструктуризация объекта
//Если по простому  деструктуризация это разбиени объекта на более мелкие. Если у объекта есть свои подобъекты тогда мы можем 
//выдернуть его и использовать, не городя огромные формулы перебора элементов через for_in
const {border,bg} =option.colors
//мы вытащили их как отдельные переменные и мы можем с ними работать
console.log(border);











console.log(option.name);

//удаление элементов
delete option.name;

console.log(option);