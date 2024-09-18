 import { userData } from "./SignUp.js";

 //------------------- Web Page Creation -------------------
 
 const html = 
    `
      <div class="logoSection">
          <img class="logo" src="Photos/ColorFullLogo.png" >
      </div>
        <input class="signUpInfo email" type="email" placeholder="Username@gmail.com">
        <input class="signUpInfo password" type="password" placeholder="Password">
        <button class="SignUPButton">Sign In</button>
        <p class="Account error"></p> 
        <p class="Account">Don't have an account? 
          <a class="login" href="SignUp.html">
            Sign Up 
          </a>
        </p>
    `;

document.querySelector('.Sign-Up').innerHTML = html;

//---------------- Other Functionalites ------------------

//---------------- Sign In ---------------------

function signIn() {

  if(userData.length === 0){ 
 
    //Display Error Message
    document.querySelector('.error').style.color = 'red';
    document.querySelector('.error').innerHTML = 'No User Exists, Sign Up First!!!';

//-------------- To Remove Error Message ------------------ 

    setTimeout(() => {
      document.querySelector('.error').innerHTML = '';
    }, 2000);

    return;
  }

    const userName = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    
    userData.forEach(user => {
      if(userName === user.email && password === user.password) {
        //Display Success Message

        document.querySelector('.error').style.color = 'green';
        document.querySelector('.error').innerHTML = 'SignIn Successfully Done!!!';
    
  //-------------- To Remove Message ------------------ 
        window.location.href = '../Home.html';
      }
      
      else {
        //Display Error Message
        document.querySelector('.error').style.color = 'red';
        document.querySelector('.error').innerHTML = 'No Such User Exists, Sign Up First!!!';
    
  //-------------- To Remove Error Message ------------------ 

      setTimeout(() => {
          document.querySelector('.error').innerHTML = '';
        }, 2000);
      }

    });
 
  
}

//-----------------------------------------------------------

const SignInButton = document.querySelector('.SignUPButton');
SignInButton.addEventListener('click', () => {
  signIn();
});