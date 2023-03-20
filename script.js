"use strict";
let str;
let sum;
let email;
//task1

{
  str = 'aaa@bbb@ccc';
  document.write(str.replace(/@/g,'!'));
}

//task2

{
  let date = '2025-12-31';
  let arr = date.split('-');
  arr.reverse();
  let newDate = arr.toString();
  console.log(newDate.replace(/,/g,'/'))
}

//task3

{
  str = 'Я учу javascript!';
  console.log(str.substr(2,14),str.slice(2,16),str.substring(2,16));
}

//task4

{
  let arr = [4, 2, 5, 19, 13, 0, 10];
  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 3;
  }
  console.log(Math.pow(sum,2));
}

//task5

{
  let a = 3;
  let b = 5;
  let c = a - b;
  console.log(Math.abs(c));
}

//task6

{
  let dateNow = new Date ();
  const addNull = (date) => {
    if(date < 10){return '0'+ date}
    else return date;
  }
	let hour = addNull(dateNow.getHours());
	let minutes = addNull(dateNow.getMinutes());
	let seconds = addNull(dateNow.getSeconds());
  let day = addNull(dateNow.getDate());
  let month = addNull(dateNow.getMonth());
  let year = addNull(dateNow.getFullYear());
  console.log(addNull(`${hour}:${minutes}:${seconds} ${day}.${month}.${year}`));
}

//task7

{
  str = 'aa aba abba abbba abca abea';
  console.log(str.match(/ab+a/g,'!'));
}

//task8

{
  function getPhone(number) {
    let regex = /\+(375|7|380|80)\((29|44|33|25)\)\d{3}\-\d{2}\-\d{2}/;
    let result =  regex.test(number);
    return result === true ? alert('Ваш номер успешно сохранен') : alert('Номер введен некорректно');
  }
  getPhone(prompt('Введите номер телефона:'));
}

//task9

{
  function getEmail (n) {
    let regex = /^[^0-9]{1}[a-zA-Z0-9]{1,15}\@[a-z]{2,8}.[a-z0-9]{2,11}/;
    let result = regex.test(n);
    return result === true ? alert('Почта успешно сохранена!') : alert('Почта введена некорректно');
  }
  getEmail(prompt('Введите адрес электронной почты: '))
}

//task10

{
  function getLink(link) {
    let domen = /^https:\/\/[a-z.]*/;
    let withoutOptions = /\/\d{4}\/\d{2}\/\d{2}\/[\w\-\/]*/;
    let options = /u[\w=&]*/;
    let hash = /#\w*/;
    console.log("Доменная часть: " + link.match(domen));
    console.log("Часть без параметров: " + link.match(withoutOptions));
    console.log("Параметры: " + link.match(options));
    console.log("Хеш: "+ link.match(hash));
  }
  getLink('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3')
}