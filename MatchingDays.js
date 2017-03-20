const form = document.getElementById('fillForm');
var ul = document.getElementById('weekdays');
var day = document.querySelectorAll('day');
var inputOne = document.getElementById('dateOne');
var inputTwo = document.getElementById('dateTwo');
var sumbitButt = document.getElementsByClassName('button');
var inputDateOneString = inputOne.value
var inputDateTwoString = inputTwo.value
var inputDateOne = new Date(inputDateOneString);
var inputDateTwo = new Date(inputDateTwoString);
var inputDayOne = inputDateOne.getDay();
var inputDayTwo = inputDateOne.getDay();

form.addEventListener('submit', function() {
  event.preventDefault();
  checkDate();
  });

  function checkDate() {
    var inputDateOneString = inputOne.value;
    var inputDateTwoString = inputTwo.value;
    var inputDateOne = new Date(inputDateOneString);
    var inputDateTwo = new Date(inputDateTwoString);
    var inputDayOne = inputDateOne.getDay();
    var inputDayTwo = inputDateTwo.getDay();
    var ul = document.getElementById('weekdays');
    var li = ul.getElementsByTagName('li');
      for (var i=0; i < li.length; i++){
        var currentDay = i;
        var currentDayColor = li[currentDay].getAttribute('class');
        if (inputDayOne === currentDay){
            // currentDayColor.className = "dateBlue";
            li[currentDay].setAttribute('class', 'dateBlue');
            // console.log(li.class);
          }
          if (inputDayTwo === currentDay){
            // currentDayColor.className = "dateRed";
            li[currentDay].setAttribute('class', 'dateRed');

          }
          if (inputDayOne === currentDay && inputDayTwo === currentDay){
            // currentDayColor.className = "dateGreen";
            li[currentDay].setAttribute('class', 'dateGreen');
          }
          else if (inputDayOne !== currentDay && inputDayTwo !== currentDay) {
            // currentDayColor.className = "dateNormal";
            li[currentDay].setAttribute('class', 'dateNormal');

          }
      }
  }
