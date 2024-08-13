import { displayHeader, displayFooter, moveHome, moveAbout, moveCars, moveContact, logOut } from "./general.js";
import { carArray } from "./Cars.js";
import { reserverCars, getReserverdCar } from "./reservedCars.js";

localStorage.removeItem('reservedCars');
getReserverdCar();
//----------- Header Creation On WebPage ---------------

document.querySelector('.HEADER').innerHTML = displayHeader();

//---------- Main Section Creation On Webpage -----------

let html = '';

carArray.forEach(car =>{

  html += `
   <div class="car1">
      <div class="carImage">
        <img class="Thumbnail" src="${car.image}" alt="">
      </div>
      <div class="Details">
        <p class="nameOfCar">${car.name} </p>
        <p class="speed"><span class="limit">Avg Speed Limit: </span>${car.speedLimit}</p>
        <p class="Rent">$${(car.rent/100).toFixed(2)} <span class="days">Per-day</span></p>
      </div>
      <p class = "message">Message Here</p>
      <button class="ReserveButton" data-car-id = "${car.carId}">Reserve Car</button>
    </div>
  `;

});

document.querySelector('.carsGrid').innerHTML = html;

//----------- Footer Creation On WebPage ---------------

document.querySelector('.footer').innerHTML = displayFooter();

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


//--------- Function To Reserve The Car ----------

document.querySelectorAll('.ReserveButton').forEach(button => {
  button.addEventListener('click', () => {
    const carId = button.dataset.carId;

    // Find the corresponding message element
    const element = button.previousElementSibling;

    // Check if the car is already reserved
    let carFound = false;

    // Loop through the reserved cars to check if the car is already reserved
    reserverCars.forEach(car => {
      if (car.carId === carId) {
        carFound = true;
        element.style.color = 'red';
        element.style.opacity = '1';
        element.innerText = 'Already Reserved';

        setTimeout(() => {
          element.style.opacity = '0';
        }, 2000);
      }
    });

    // If the car is not already reserved, reserve it
    if (!carFound) {
      const carToReserve = carArray.find(car => car.carId === carId);
      if (carToReserve) {
        carToReserve.status = 'reserved';
        reserverCars.push(carToReserve);
        localStorage.setItem('reservedCars', JSON.stringify(reserverCars));

        element.style.color = 'green';
        element.style.opacity = '1';
        element.innerText = 'Reserved';

        setTimeout(() => {
          element.style.opacity = '0';
          window.location.href = '../Rservation.html';
        }, 1000);
      }
    }
  });
});


