import { displayHeader, displayFooter, moveHome, moveAbout, moveCars, moveContact, logOut } from "./general.js";
//----------- Header Creation On WebPage ---------------

document.querySelector('.HEADER').innerHTML = displayHeader();

//---------- Main Section Creation On Webpage -----------

const html = `
 <div class="main">
    <h2 class="heading1">Company History</h2>
    <div class="history">
      <p class="Description">
        Founded in <span class="mainPoint">2021</span>, <span class="mainPoint">AutoVista Rentals</span> began with a vision to transform the car rental industry by combining technology with personalized service. Over the years, we have grown from a small local operation into a leading global provider of car rental solutions. Our journey has been marked by continuous innovation, a commitment to quality, and a passion for meeting the evolving needs of our customers.
      </p>
      <img class="historyImage" src="Photos/Cars/blue.png" alt="">
    </div>

    <h2 class="heading1">Our Mission</h2>
    <div class="history">
      <img class="historyImage" src="Photos/Cars/pngwing.com.png" alt="">
      <p class="Description">
        At, <span class="mainPoint">AutoVista Rentals</span> our mission is to provide a seamless and reliable car rental experience for customers around the globe. We are committed to delivering exceptional service through a user-friendly platform, an extensive fleet of well-maintained vehicles, and a customer-centric approach that prioritizes convenience, safety, and satisfaction.
      </p>
    </div>

    <h2 class="heading1">Community Support</h2>
    <div class="history">
      <p class="Description">
        At, <span class="mainPoint">AutoVista Rentals</span>, we believe in giving back to the communities we serve. We actively engage in local initiatives and support various charitable organizations to make a positive impact. Our community support programs include sponsorships, volunteering efforts, and partnerships with local businesses. We are dedicated to contributing to the well-being and development of the communities that help us thrive.
      </p>
      <img class="historyImage" src="Photos/Cars/service-4.png" alt="">
    </div>

    <h2 class="heading1">Services We Provide</h2>
    <div class="Service">
      <div class="SERVICE">
        <img class="serviceImage" src="Photos/Cars/Service-1.png" alt="">
        <p style="color: rgb(23,23,23);" class="heading">Flexible Rental Options</p>
        <p class="serviceDescription">
          AutoVista Rentals offers flexible rental plans for any duration, from daily to monthly. Choose from a diverse fleet of vehicles, all available through an easy online booking system for a hassle-free experience.
        </p>
      </div>
      <div class="SERVICE">
        <img class="serviceImage" src="Photos/Cars/Service-2.png" alt="">
        <p style="color: rgb(23,23,23);" class="heading">24/7 Customer Support</p>
        <p class="serviceDescription">
          We provide round-the-clock customer support for booking assistance, roadside help, and more. Our dedicated team ensures a smooth and stress-free rental experience, anytime you need us.          </p>
      </div>
      <div class="SERVICE">
        <img class="serviceImage" src="Photos/Cars/Service-3.png" alt="">
        <p style="color: rgb(23,23,23);" class="heading">Premium Fleet Selection</p>
        <p class="serviceDescription">
          Enjoy a premium selection of well-maintained vehicles, from economy to luxury. Our fleet ensures reliability, comfort, and style for every journey, tailored to your needs.          </p>
      </div>
    </div>
  </div>
`;

document.querySelector('.MAIN').innerHTML = html;

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