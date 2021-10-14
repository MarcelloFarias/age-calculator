let today = new Date();
let day = today.getDate();
let month = 1 + today.getMonth();
let year = today.getUTCFullYear();
let inputDay = document.querySelector('#day');
let inputMonth = document.querySelector('#month');
let inputYear = document.querySelector('#year');
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const btnCalculate = document.querySelector('.btn');
const result = document.querySelector('#result');

function calculateAge() {
    if (inputDay.value > day){  
        day = day + months[month - 1];  
        month = month - 1;  
       }

       if (inputMonth.value > month){  
        month = month + 12;  
        year = year - 1;  
       }

       let difDay = day - inputDay.value;  
       let difMonth = month - inputMonth.value;  
       let difYear = year - inputYear.value;

       result.innerText = `You age is ${difYear} years, ${difMonth} months and ${difDay} days.`;
}

btnCalculate.addEventListener('click', calculateAge);