//---------------- Function To Create Header ---------------------

export function displayHeader()
{
  const html = `
    <div class="leftSide">
      <img class="hamburger-menu" src="Photos/hamburger-menu.png" alt="">    
      <img class="company-logo" src="Photos/Icons/logo.png" alt="">  
    </div>

    <div class="rightSide">
      <div class="navItem js-home">Home</div>
      <div class="navItem js-About">About</div>
      <div class="navItem js-Cars">Cars</div>
      <div class="navItem js-Contact">Contact</div>
      <div class="LogoPic">
        <img class="logo" src="Photos/Black Logo.png" alt="">
        <p class="logOut">Log Out</p>
      </div>
    </div>
  `;

  return html;
}

//---------------- Function To Create Footer ---------------------

export function displayFooter()
{
  const html = 
    `
      <div>
        <p class="heading">About Us</p>
        <p class="service">Our Mission</p>
        <p class="service">Company History</p>
        <p class="service">Core Values</p>
        <p class="service">Global Reach</p>
        <p class="service">Community Support</p>

      </div>
      <div>
        <p class="heading">Services</p>
        <p class="service">Vehicle Selection</p>
        <p class="service">Flexible Rentals</p>
        <p class="service">One-Way Rentals</p>
        <p class="service">24/7 Assistance</p>
        <p class="service">Airport Transfers</p>
        <p class="service">Chauffeur Services</p>
        <p class="service">Long-Term Leases</p>
        <p class="service">Additional Extras</p>
      </div>
      <div>
        <p class="heading">Security</p>
        <p class="service">Data Protection</p>
        <p class="service">Secure Payments</p>
        <p class="service">Privacy Policy</p>
        <p class="service">Vehicle Maintenance</p>
        <p class="service">Insurance Coverage</p>
        <p class="service">Emergency Support</p>

      </div>
      <div>
        <p class="heading">Contact</p>

        <div class="Contact">
          <img class="icon" src="Photos/Icons/pngwing.com (2).png" alt="">
          <p class="number">+92 325 9691820</p>
        </div>
        <div class="Contact">
          <img style="width: 20px; height: 20px; margin-top: 5px; margin-left: 5px; margin-right: 5px;" class="icon" src="Photos/Icons/pngwing.com (4).png" alt="">
          <p class="number">alihaider16703@gmail.com</p>
        </div>

        <p style="margin-top: 20px;" class="heading">Quick links</p>
        <div class="Contact">
          <img class="link" src="Photos/Icons/pngwing.com (1).png" alt="">
          <img class="link" src="Photos/Icons/pngwing.com.png" alt="">
        </div>
      </div>
    `;

  return html;
}

//------------ General Function to move on Home page ---------------

export function moveHome()
{
  document.querySelector('.js-home').addEventListener('click', ()=>{
    window.location.href = '../Home.html';
  });
}

//------------ General Function to move on About page ---------------

export function moveAbout()
{
  document.querySelector('.js-About').addEventListener('click', ()=>{
    window.location.href = '../About.html';
  });
}

//------------ General Function to move on Cars page ---------------

export function moveCars()
{
  document.querySelector('.js-Cars').addEventListener('click', ()=>{
    window.location.href = '../Cars.html';
  });
}

//------------ General Function to move on Contact page ---------------

export function moveContact()
{
  document.querySelector('.js-Contact').addEventListener('click', ()=>{
    window.location.href = '../Contact.html';
  });
}

//------------ General Function to move on LogIn page ---------------

export function logOut()
{
  document.querySelector('.logo').addEventListener('click', ()=>{
    window.location.href = '../SignIn.html'
  });
}