//Checks two different dates to see if they fall under the same day
function checkDate() {
  var inputDateOneString = inputOne.value;
  var inputDateTwoString = inputTwo.value;
  var inputDateOne = new Date(inputDateOneString);
  var inputDateTwo = new Date(inputDateTwoString);
  var inputDayOne = inputDateOne.getDay();
  var inputDayTwo = inputDateTwo.getDay();
  var ul = document.getElementById('weekdays');
  var li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    var currentDay = i;
    var currentDayColor = li[currentDay].getAttribute('class');
    //Sets the first date background to Blue
    if (inputDayOne === currentDay) {
      // currentDayColor.className = "dateBlue";
      li[currentDay].setAttribute('class', 'dateBlue');
    }
    //Sets the second date background to Red
    if (inputDayTwo === currentDay) {
      // currentDayColor.className = "dateRed";
      li[currentDay].setAttribute('class', 'dateRed');
    }
    //If both dates fall under the same day, it sets the date's background to Green
    if (inputDayOne === currentDay && inputDayTwo === currentDay) {
      // currentDayColor.className = "dateGreen";
      li[currentDay].setAttribute('class', 'dateGreen');
    }
    //Resets the color of the background to 'Normal'
    else if (inputDayOne !== currentDay && inputDayTwo !== currentDay) {
      // currentDayColor.className = "dateNormal";
      li[currentDay].setAttribute('class', 'dateNormal');
    }
  }
}
