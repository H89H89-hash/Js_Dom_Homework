"use strict";
/*Coment1
Здесь вы видите - переменные в 
которые я 
записываю кнопки:
*/
const image = document.getElementById("imag");
const task1 = document.getElementById("1");
const task2 = document.getElementById("2");
const task3 = document.getElementById("3");
const task4 = document.getElementById("4");
/*Coment2
Здесь вы видите - Функции которые 
я вызываю при нажатии 
на опредиленную кнопку:
*/
task1.onclick = function () {
  task1.style.position = "relative";
  task1.style.top = "50px";
  task1.style.left = "40px";
};
task4.onclick = function () {
  image.src =
    "https://nebula.org/blog/wp-content/uploads/2021/02/iaso-tea-11.jpg";
};
task3.onclick = function () {
  alert("Кнопка 3 нажата");
};
task2.onclick = function () {
  task2.style.backgroundColor = "gold";
};
