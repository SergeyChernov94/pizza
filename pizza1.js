// ЗАНЯТИЕ 1 AddEventListener и querySelector
// ЗАНЯТИЕ 1 AddEventListener и querySelector
// ЗАНЯТИЕ 1 AddEventListener и querySelector
// ЗАНЯТИЕ 1 AddEventListener и querySelector

// // сделали связку с элементом
// const unput1 = document.querySelector('.input1');
// const unput2 = document.querySelector('.input2');
// // unput.addEventListener('click', function() {
// //     console.log('click');
// // });

// // задали функцию вывода в консоль
// function handleClick() {
//     console.log('click');
// }

// // Поставили отслеживание клика
// unput1.addEventListener('click', handleClick);
// unput2.addEventListener('click', handleClick);

// // Удаление функции со второго элемента
// unput2.removeEventListener('click', handleClick);

// // Привязали сразу все селекторы инпут
// const inputCheckbox = document.querySelectorAll('.inputCheck');
// inputCheckbox.forEach(input => {
// input.addEventListener('click', function() {
//     console.log('click')
// })
// });


// inputCheckbox.addEventListener('click', function() {
//     console.log('inputCheckbox');
// })

// ЗАНЯТИЕ 2 event target
// ЗАНЯТИЕ 2 event target
// ЗАНЯТИЕ 2 event target
// ЗАНЯТИЕ 2 event target


// const inputCheck = document.querySelectorAll('.inputCheck');

// const handleClick = (event) => {
//     console.log(event.target.dataset);
//     console.log(parseInt(event.target.dataset));
//     console.log("target > event", event.target);
//     console.log("curtarget", event.currentTarget);
//     event.stopPropagation()
// }

// // window.addEventListener('click', function() {
// //     console.log('window click');
// //     console.log('window click', event.target);
// //     event.stopPropagation();
// // }, {capture: true}) 

// inputCheck.forEach(input => {
//     input.addEventListener('click', handleClick)
// })


// const img = document.querySelector('img');
// img.addEventListener('mouseover', function(event) {
// console.log(event.currentTarget);
// console.log(this);
// })

// ЗАНЯТИЕ 3 поднятие (Hoisting) переменных о обьявление функций
// ЗАНЯТИЕ 3 поднятие переменных о обьявление функций
// ЗАНЯТИЕ 3 поднятие переменных о обьявление функций
// ЗАНЯТИЕ 3 поднятие переменных о обьявление функций

// Меняет валюту
// exchangeUsd()

// letsGo();

// function letsGo() {
//     console.log('Go!!')
//     console.log(add(5, 3))
// }

// function add(a, b) {
//     return a + b
// }

// не выведется, потму что вызываем переменную которая ниже, чем консоль.лог
// console.log(years)
// let years = 100;

// let years = 150;
// let band = 100;
// let zigi = years + band;
// console.log(zigi);

// УРОК 4 замыкание (closure) в JS
// УРОК 4 замыкание в JS
// УРОК 4 замыкание в JS
// УРОК 4 замыкание в JS

// function external() {
//     const externalLet = 'Я - внешняя функция';

//     function internal () {
//         const internalLet = 'Я - внутренняя функция';
//         console.log(internalLet);
//         console.log(externalLet);
//     }
//     return internal;
// }
// const internalFn = external();
// internalFn();

// function createAddress(type) {
//     const address = type.toUpperCase();
//     return function(name) {
//         return `${address} ${name}`
//     }
// }

// const addressGrazhdanin = createAddress('Гражданин');
// const addressGrazhdanka = createAddress('Гражданка');

// console.log(addressGrazhdanin('Vasiliy'));
// console.log(addressGrazhdanka('Aleksandra'));

// function createPlayer(name) {
//     let score = 0;
//     return function scoreCount() {
//         score++;
//         return `${name} - ${score} баллов!`
//     }
// }

// const playerOne = createPlayer('Vasiliy')
// const playerTwo = createPlayer('Zhanna')



// function createPlayer(name) {
//     let score = 0;
//     return function scoreCount() {
//         score += 10;
//         return `${name} - ${score}`
//     }
// }

// const playerOnee = createPlayer('Nikolya')
// const playerTwoo = createPlayer('Barbaris')
// const playerFee = createPlayer('Bogomol')

// УРОК 5 РАБОТА С ДОМ В JAVASCRIPT + 26 упражнений

// var element = document.getElementById("colorBlya");

// // Add class
// element.classList.add("active");

// // Remove class
// element.classList.remove("active");

const inputCheckbox = document.querySelectorAll('.checkbox__input');
inputCheckbox.forEach(input => {
    input.addEventListener('click', function(event) {
        console.log(event.target);
    })
})

function myFunction() {
    let element = document.querySelectorAll('.checkbox__input');
    element.classList.add("active");
    element.classList.remove("active");
}


const btnClass = document.querySelector('.btn-knopka');
btnClass.addEventListener('click', function() {
})

function myFunctionClick() => {
    
}
// // Add class


// // Remove class
// element.classList.remove("active");

// const inputCheckbox = (event) => {
//     console.log(event.target.dataset);
// }

// // Привязали сразу все селекторы инпут
// const inputCheckbox = document.querySelectorAll('.inputCheck');
// inputCheckbox.forEach(input => {
// input.addEventListener('click', function() {
//     console.log('click')
// })
// });