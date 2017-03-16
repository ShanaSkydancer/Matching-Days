const form = document.getElementById('fillForm');
var ul = document.getElementsByTagName('ul');
var li = document.querySelectorAll('li');
// var liList = document.getElementsByTagName('li');
var inputOne = document.getElementById('dateOne');
var inputTwo = document.getElementById('dateTwo');
var sumbitButt = document.getElementsByClassName('button');
var inputDateOneString = inputOne.value
var inputDateTwoString = inputTwo.value
var inputDateOne = new Date(inputDateOneString);
var inputDateTwo = new Date(inputDateTwoString);
var inputDayOne = inputDateOne.getDay();
var inputDayTwo = inputDateOne.getDay();
// var weekdays = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"];

form.addEventListener("submit", function() {
  event.preventDefault();
  checkDate();
});


function checkDate() {
  var inputDateOneString = inputOne.value;
  var inputDateTwoString = inputTwo.value;
  var inputDateOne = new Date(inputDateOneString);
  var inputDateTwo = new Date(inputDateTwoString);
  var inputDayOne = inputDateOne.getDay();
  var inputDayTwo = inputDateOne.getDay();
  // var li = document.querySelectorAll('li');
  var liList = ul.getElementsByTagName('li');
  for (var i=0; i < liList.length; i++){
    if (inputDateOne == liList){
      liList.dateBlue;
    }
    else if (inputDayTwo == liList){
      liList.dateRed;
    }
    else if (inputDateOne == liList && inputDayTwo == liList){
      liList.dateGreen;
    }
    else if (inputDateOne != liList || inputDayTwo != liList) {
      liList.dateNormal;
    }
  }
}
