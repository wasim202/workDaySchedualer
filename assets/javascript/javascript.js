//setting the current time in the header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var workHours = [
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
];
var timeBlockEl = $("#timeBlocks");
var hour = moment().format("h:00 A");

for (i = 0; i < workHours.length; i++) {
  var totalTimeBlock = $("<div>");
  totalTimeBlock.addClass("row border time-block border-primary");

  var timePeriod = $("<div>");
  timePeriod.addClass(" col-md-2  hour");
  //timePeriod.addClass(" time-div")
  timePeriod.text(workHours[i]);
  //console.log(timePeriod);

  var textArea = $("<textarea>");
  textArea.addClass("col-md-8  description");
  textArea.attr("name", workHours[i]);
  // console.log(textArea);

  var button = $("<button>");
  button.addClass(
    "saveBtn btn col-md-2 "
  );

  var icon = $("<i>");
  icon.addClass("fas fa-lock");

  // append eleents to the DOM
  button.append(icon);
  totalTimeBlock.append(timePeriod);
  totalTimeBlock.append(textArea);
  totalTimeBlock.append(button);
  timeBlockEl.append(totalTimeBlock);

  if (parseInt(workHours[i]) < today.hours()) {
    textArea.addClass("past");
  } else if (parseInt(workHours[i]) > today.hours()) {
    textArea.addClass("future");
  } else {
    textArea.addClass("present");
  }
}

// $(".btn").click(function (event) {
//   var workEvent = event.target.previousElemetSibling.value.trim();
//   localStorage.setItem(event.target.previousElemetSibling.name, workEvent);
// });

$(".btn").click(function (event) {
  event.preventDefault();
  //var element = event.target;
  //var saveIt = element.attr("name");
  localStorage.setItem("workEven", textArea.text.name);
});
