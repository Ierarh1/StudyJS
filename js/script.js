let number = 5;
console.log(number);

//непрямая константа
const LeftBorderRadius =1;

//ПРЯМЫХ КОНСТАНТ В js небывает  и мы можем изменять их но только при определённых условиях;
const obj = {
    a: 20
};
//казалось бы вроде как константа а на деле мы можем её менять
obj.a = 10000;
console.log(obj);


//старый вариант объявление переменной но её лучше не использовать
var Old= 22;


//тест объекта 
const TestObj ={
    name: "Pisos",
    age: 25,
    isMarried: false
};

console.log(TestObj.age);






//массив
let arr = [`plum.png`, `orange.jpg`,[],`pster.jpg`];
console.log(arr[3]);
//массив и объект это почти одно и тоже разве что в массиве ключ всегда фиксированный
//ещё один вариант использования объектов
const obj22 = {
    'Anna': 500,
    'Cintra': 400,
    //либо можно писать ещё так, компилятор сам поймёт что эт строка и запишет значения
    Maria: 900
};

//способ вывода через квадратные скобки надёжнее, ибо если в качестве ключа будет арабская хрень, или цифры, то наш 
//console.log нормально не отработает а даст ошибку
console.log(obj22['Maria']);

//мы так же можем добавить новое значение в массив
obj22.Verdana = 255;

console.log(obj22[`Verdana`]);


//ща будет немного запутанно но несложно
const r = `r`;
//сюда подставляется вместо r  будет строка `r` и уже это значение записывается в массив как ключ
obj22[r] = 378;//а тут даём значение

//и в итоге можем вызвать
console.log(obj22[`r`]);


