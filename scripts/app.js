'use strict';


function popupTimer() {
  var dateFromStorage = localStorage.getItem('time');
  var currentTime = new Date();

  if(dateFromStorage != null) {
    var previousTime = new Date(dateFromStorage);
    var secondsBetween = (currentTime.getTime() - previousTime.getTime()) / 1000;

    console.log("It has been " + secondsBetween + " seconds since your last refresh.");
  } else {
    var userName = prompt('Please enter your first name.');
    displayGreeting(userName, currentTime);
  }
  localStorage.setItem('time', currentTime);
}

function displayGreeting(userName, currentTime) {
  var hourNow = currentTime.getHours();
  var greeting;
  if(hourNow >= 0 &&hourNow < 7){
      greeting = 'Good Morning, ' + userName;
  } else if (hourNow >= 7 && hourNow <= 12){
      greeting = 'Good mid day. ' + userName;
  } else if (hourNow > 12 && hourNow < 18){
      greeting = 'Good afternoon ' + userName;
  } else if (hourNow >= 18 && hourNow <= 24){
      greeting = 'Good Evening ' + userName;
  } else {
      'Something went wrong!';
  }

  document.getElementById('greeting-placeholder').innerHTML = '<h2 style="color:#b5bcff">' + greeting + '</h2>';
}

popupTimer();










//* I was trying to get it so the popup prompt and alerts wouldn't pop up every time you refresh the page and instead only show it every 5 hours.
//* I also wanted a particle effect to be the cursor trail and have the particles fall. 




