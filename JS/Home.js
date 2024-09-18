import { displayHeader, displayFooter, moveHome, moveAbout, moveCars, moveContact, logOut } from "./general.js";
import {carArray} from "./Cars.js";


//----------- Header Creation On WebPage ---------------

document.querySelector('.HEADER').innerHTML = displayHeader();

//---------- Main Part Creation on WebPage -------------

const html = 
`
  <div class="Background">
        <div class="MainImageSection">
          <img class="rightButton" src="Photos/Cars/rightArrow.png" alt="">
          <img class="MainImage" src="Photos/Cars/Backgroung.png" alt="">
          <img class="leftButton" src="Photos/Cars/leftArrow.png" alt="">
        </div>
      </div>

      <div class="Gallery">
        <h2 class="Gallery-heading">Photo Gallery</h2>
        <div class="Gallery-Grid">
          ${displayGallery()}
        </div>
      </div>
`;

document.querySelector('.MAIN').innerHTML = html;

//------------- Function To Display Gallery ---------------

function displayGallery(){
  let html = '';

  carArray.forEach(car =>{
    html += `
      <div>
        <img class="GalleryImage" src="${car.image}" alt="">           
      </div>
    `;
  });
  return html;
}

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

//---------- Array of Backgroung Images ----------------

const backGround = [
  "Photos/Cars/Backgroung.png",
  "Photos/Cars/Car-1.png",
  "Photos/Cars/Car-2.png",
  "Photos/Cars/Car-3.png"
];

let index1 = 0;
let index2 = backGround.length-1;

//---------- Changing the Background picture ---------------

const rightButton = document.querySelector('.rightButton');
rightButton.addEventListener('click', ()=>{
  document.querySelector('.MainImage').src = `${backGround[index2]}`;
  index2 = index2-1;
  if(index2 === -1)
  {
    index2 = backGround.length-1;
  }
});

const leftButton = document.querySelector('.leftButton');
leftButton.addEventListener('click', ()=>{
  document.querySelector('.MainImage').src = `${backGround[index1]}`;
  index1 = index1+1;
  if(index1 === backGround.length)
  {
    index1 = 0;
  }
});

//------------------- Automatically Background Changing Effect -------------------

setInterval(()=>{
  document.querySelector('.MainImage').src = `${backGround[index1]}`;
  index1 = index1+1;
  if(index1 === backGround.length)
  {
    index1 = 0;
  }
}, 5000);
