// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



//display current date at the top of the page

var nowDate = moment().format('MMMM Do YYYY');
var nowTime = moment().format('h:mm:ss a');

var updateDate = document.querySelector("#live-date");
var updateTime = document.querySelector("#live-time");

console.log(nowDate);
console.log(nowTime);

updateDate.textContent = nowDate;
updateTime.textContent = nowTime;


