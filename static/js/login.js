//Getting user input
var RegNoBox = document.getElementById("regno");
var passBox = document.getElementById("password");

// Buttons input
var LoginBtn = document.getElementById("loginbtn");
// var GBtn = document.getElementById("glogin");
// Firebase connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
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

import {getDatabase, ref, set, child, get}
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();
// alert("Hii");

 function AuthenticateUser(){
  if (RegNoBox.value == "" || passBox.value == "") {
    document.getElementById('error').innerText = "Both Fields are Mandatory!!";
    return;
  }
  const dbref = ref(db)
  get(child(dbref,"SignUpTable/" + RegNoBox.value)).then((snapshot)=>{
    if(snapshot.exists()){
      var dbemail = snapshot.val().Email;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, dbemail, passBox.value)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          // test();
          func();
       })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById('error').innerText = "Wrong Password";
          alert(errorMessage);
      });
    }
    else{
      document.getElementById('error').innerText = "Invalid Registration Number or Password";
    }  
  });
}
// Event Listner
LoginBtn.addEventListener("click", AuthenticateUser);
passBox.addEventListener("keyup", (e) =>{
  if(e.keyCode === 13){
    e.preventDefault();
    LoginBtn.click();
  }
});
RegNoBox.addEventListener("keyup", (e) =>{
  if(e.keyCode === 13){
    e.preventDefault();
    LoginBtn.click();
  }
});



//=============================

// function test(){
//   document.getElementById("k").contentWindow.postMessage("kappa","*");
// }

///==========================GOOGLE SIGN IN ================================================

function signIn(){
  let oauth2Endpoint="https://accounts.google.com/o/oauth2/v2/auth"

  let form=document.createElement('form');
  form.setAttribute('method','GET');
  form.setAttribute('action',oauth2Endpoint);

  let params={
      "client_id":"389156931335-damruk631a6m7gvujhqtbs0se7mfc9tc.apps.googleusercontent.com",
      "redirect_uri":"https://connect2galumni.firebaseapp.com?parameter=kappa",
      "response_type":"token",
      "scope":"https://www.googleapis.com/auth/userinfo.profile",
      "include_granted_scopes":'true',
      'state':'pass-through-value',
      'hd': 'gitam.in'
  };

  for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // test();
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
    // func();
}

let a = document.getElementById('glogin');
a.addEventListener('click',signIn);

function func(){
  // let test_parameter = 'kappa';
  // window.postMessage(test_parameter, 'https://connect2galumni.web.app');
  // window.location.href="https://connect2galumni.web.app";
  let parameterValue = "kappa";
  window.location.href = "https://connect2galumni.firebaseapp.com?parameter="+parameterValue;
};
// .open('https://connect2galumni.web.app')