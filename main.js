const form = document.getElementById('fillForm');
var ul = document.getElementById('weekdays');
var day = document.querySelectorAll('day');
var inputOne = document.getElementById('dateOne');
var inputTwo = document.getElementById('dateTwo');
var sumbitButt = document.getElementsByClassName('button');

form.addEventListener('submit', function() {
  event.preventDefault();
  checkDate();
  });
