var fnameBox = document.getElementById("fname");
var regnoBox = document.getElementById("regno");
var emailBox = document.getElementById("email");
var passwordBox = document.getElementById("password");
var cpasswordBox = document.getElementById("cpassword");
let pincheck = document.getElementById("pincheck");
let k;

// Buttons input
var submitBtn = document.getElementById("submitData");

// Entries validation
var letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;  
var email_val = /^([a-zA-Z0-9_\.\-])+\@(([gitam\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

// Firebase connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvcixpDb4BOIevoD9c4h8mDdGenk_3coE",
  authDomain: "g-alumni-352f2.firebaseapp.com",
  databaseURL: "https://g-alumni-352f2-default-rtdb.firebaseio.com",
  projectId: "g-alumni-352f2",
  storageBucket: "g-alumni-352f2.appspot.com",
  messagingSenderId: "639725044627",
  appId: "1:639725044627:web:af0d3fc58897764a911e66",
  measurementId: "G-18B0GX5D5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set}
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();

// Functions:=

function checkPassword(){
  if(fnameBox.value==''||regnoBox.value==''||emailBox.value==''||passwordBox.value==''||cpasswordBox.value==''||pincheck.value==''){  
    document.getElementById('error').innerText = "All Fields are MANDATORY.";
    return;
  }
  else if(!(letters.test(fnameBox.value))){
    document.getElementById('error').innerText = 'Name is INCORRECT. Must contain Alphabets ONLY.';
    return;
  }  
  else if (!email_val.test(emailBox.value)){
    document.getElementById('error').innerText = 'Invalid Email Format. Enter valid GITAM Email ID.'; 
    return; 
  }  
  else if(passwordBox.value!=cpasswordBox.value){  
    document.getElementById('error').innerText = "Password is not matching.";
    return;  
  }  
  else if(regnoBox.value.length != 12){  
    document.getElementById('error').innerText = "RegNo must be 12.";
    return;  
  }  
  else if((passwordBox.value.length > 12)||(passwordBox.value.length<6)){  
    document.getElementById('error').innerText = "Password length must be between 6 to 12."; 
    return; 
  }  
  else if(!(pincheck.value === k)){
    document.getElementById('error').innerText ="Incorrect SECURITY PIN.";
    return;
  }
  else{  

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailBox.value, passwordBox.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    document.getElementById('error').innerText = "Registration Successful!!..."; 
    alert("Verification Link Sent");
    sendEmailVerification(auth.currentUser)
    .then(() => {
    // Email verification sent!
    // ...
    
    });
    insertData();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    document.getElementById('error').innerText = "User Exists...";
    return
  }); 
    
  } 
}

// Inserting data when validation is done.

function insertData() {
  set(ref(db, "SignUpTable/" + regnoBox.value),{
    RegistrationNo: regnoBox.value,
    Name: fnameBox.value,
    Email: emailBox.value
  })
    .then(() => {
      window.location.href = "https://connect2galumni.herokuapp.com/login";
    })
    .catch((error) => {
      alert("Error!!.. Try Again" + error);
    });
}

// function encPass(){
//   var pass1 = CryptJS.AES.encrypt(passwordBox.value,passwordBox.value);
//   return pass12.toString();
// }

// Event Listner
submitBtn.addEventListener("click", checkPassword);
cpasswordBox.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
      e.preventDefault();
      submitBtn.click();
    }
  });

document.getElementById("chk").addEventListener('change',function(){
  let sec = document.getElementById("security");
    if(document.getElementById("chk").checked){
      sec.style.display = 'block';
      let see = document.getElementById("pin");
      k = Math.random().toString(36).slice(7);
      see.innerText = k;
    }
    else{
      sec.style.display = "none";
    }
});


