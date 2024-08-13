import { displayHeader, displayFooter, moveHome, moveAbout, moveCars, moveContact, logOut } from "./general.js";
import { reserverCars, getReserverdCar } from "./reservedCars.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

getReserverdCar();
console.log(reserverCars);
//----------- Header Creation On WebPage ---------------

document.querySelector('.HEADER').innerHTML = displayHeader();

//---------- Main Section Creation On Webpage -----------
let html = '';
reserverCars.forEach(car => {
  html = 
  `
   <h1 class="date">${dayjs().format('MMMM dddd, D')}</h1>
    <div class="details">
      <div class="imagediv">
        <img class="image" src="${car.image}" alt="">
      </div>
      <div class="description">
        <p class="name">${car.name}</p>
        <p class="speed"><span class="AVG">Avg. Speed: </span>${car.speedLimit}/h</p>
        <p class="rent">Rent: <span class="RENT">$${(car.rent/100).toFixed(2)}</span> Per day</p>
        <button class="confirm">Reserver</button>
      </div>
    </div>
  `;
});

document.querySelector('.mainSection').innerHTML = html;

//---------- Move towards Sign In Page ----------------

logOut();

//--------- Move towards Home Page -------------

moveHome();

//--------- Move towards About Page -------------

moveAbout();

//--------- Move towards Cars Page -------------

moveCars();

//--------- Move towards Contact Page -------------

moveContact();

//-------- Confirmation of Reservation -------------

document.querySelector('.confirm').addEventListener('click', ()=>{
  document.querySelector('.output').style.opacity = '1';
});

document.querySelector('.okay').addEventListener('click', ()=>{
  document.querySelector('.output').style.opacity = '0';
  window.location.href = '../Home.html';
});


