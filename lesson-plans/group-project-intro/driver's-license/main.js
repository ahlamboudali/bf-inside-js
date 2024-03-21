/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable strict */
import {display } from '../../../lib/dom-io.js';
function submitForm() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let age = document.querySelector('input[name="age"]:checked');

  let license = document.querySelector('input[name="license"]:checked');
  let message = "";

  if (!firstName || !lastName) {
    message = "Please enter your first name and last name.";
  } else if (!gender) {
    message = "Please select your gender.";
  } else if (!age) {
    message = "Please select your age group.";
  } else if (!license) {
    message = "Please select the type of driver's license you want to pass.";
  } else {
    message = "Thank you for submitting!\n\n";
    if (age.value == "lessThan18") {
      message += "Unfortunately, you cannot proceed with the application at this time as you are still underage"
    }else{
    message += "Please prepare the following documents for the driver's license application : Proof of Identity , Proof of Residency , Any relevant medical documents   ";
   
    }
   
  }

    display('message', message);

}

document.getElementById('submit').addEventListener('click', submitForm);
