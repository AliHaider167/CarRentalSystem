//------------------- Web Page Creation -------------------

const html = 
  `
  <div class="logoSection">

        <img class="logo" src="Photos/ColorFullLogo.png" >

      </div>

      <input class="signUpInfo name" type="text" placeholder="Full Name">
      <input class="signUpInfo email" type="email" placeholder="Username@gmail.com">
      <input class="signUpInfo password" type="password" placeholder="Password">
      <input class="signUpInfo confirmPassword" type="password" placeholder="Confirm Password">

      <button class="SignUPButton">Sign Up</button>
      <p class="Account error"></p> 
      <p class="Account">Already have an account? 
        <a class="login" href="SignIn.html">
          Login
        </a>
      </p>
  `;

  document.querySelector('.Sign-Up').innerHTML = html;
  
//---------------- Other Functionalites ------------------

//USER CLASS

let count = 0;  //Stting the person ID

class User{

  //Attributes
  
    name;
    email;
    password;
    confirmPassword;
    personId;
  //Constructor
  
    constructor(name, email, password, confirmPassword){
      this.name = name;
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;
      count++;
      this.personId = count;
    }
  
  //------------Getter Function----------------
  
    getName() {
      return this.name;
    }
  
    getEmail()
    {
      return this.email;
    }
  
    getPassword()
    {
      return this.password;
    }
  }

//------------- User's Array --------------

export let userData = [];
//---------------- Get Data From Local Storage --------------

const storedData = localStorage.getItem('UserData');
if (storedData) {
  userData = JSON.parse(storedData);
  count = userData.length;
} else {
  userData = [];
  count = 0;
}

//------------ Function To Sign Up --------------

function signUp() {
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  const confirmPassword = document.querySelector('.confirmPassword').value;
  let flag = true;
  
  if(name !== '', email !== '', password !== '', confirmPassword !== '') {

    userData.forEach(user => {
      if(email === user.email)   //Does Email already Exists
      {
        flag=false;
      }
    });
    
    if(flag === false) {
      document.querySelector('.error').style.color = 'red';
      document.querySelector('.error').innerHTML = 'Provided Email already Exists!!!';
  
//-------------- To Remove Error Message ------------------ 

      setTimeout(() => {
        document.querySelector('.error').innerHTML = '';
      }, 2000);
    }
    else {

      if(password === confirmPassword)
        {
          const person = new User(name, email, password, confirmPassword);
    
          //-------------- Adding A User To Array -------------------
    
          userData.push(person);
    
          //Display Success Message
          document.querySelector('.error').style.color = 'green';
          document.querySelector('.error').innerHTML = 'Sign Up Successfully Done!!!';
      
    //-------------- To Remove Message ------------------ 
    
        setTimeout(() => {
            document.querySelector('.error').innerHTML = '';
          }, 2000);
          
        }
        else {
          document.querySelector('.error').style.color = 'red';
          document.querySelector('.error').innerHTML = 'Provided Password Should be Same!!!';
      
    //-------------- To Remove Error Message ------------------ 
    
        setTimeout(() => {
            document.querySelector('.error').innerHTML = '';
          }, 2000);
        }

    }
  
  }
  else {
    document.querySelector('.error').style.color = 'red';
    document.querySelector('.error').innerHTML = 'Provided Information Is Imcomplete!!!';

//-------------- To Remove Error Message ------------------

    setTimeout(()=>{
      document.querySelector('.error').innerHTML = '';
    }, 2000);
  }
  
}

//-------------- Adding A User To Array -------------------

const SignUpButton = document.querySelector('.SignUPButton');

SignUpButton.addEventListener('click', () => {
  signUp();
  localStorage.setItem('UserData', JSON.stringify(userData));
});