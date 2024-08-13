import { displayHeader, displayFooter, moveHome, moveAbout, moveCars, moveContact, logOut } from "./general.js";
//----------- Header Creation On WebPage ---------------

document.querySelector('.HEADER').innerHTML = displayHeader();

//---------- Main Section Creation On Webpage -----------

document.querySelector('.mymail').value = 'alihaider16703@gmail.com';
document.querySelector('.mymail').disabled = true;

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

//--------- Function to send Email ---------------

function sendMail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "alihaider16703@gmail.com",
    Password : "716731A466291A198332B3E88157826493C4",
    To : 'alihaider16703@gmail.com',
    From : "alihaider16703@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  ).catch(
    error => console.error("Failed to send email:", error)
  );
}

document.querySelector('.send').addEventListener('click', ()=>{
  sendMail();
});
