//setting the current time in the header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var workHours = [
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
];
var timeBlockEl = $("#timeBlocks");
var hour = moment().format("h:00 A");

for (i = 0; i < workHours.length; i++) {
  var totalTimeBlock = $("<div>");
  totalTimeBlock.addClass("row border time-block border-primary");
  totalTimeBlock.attr("id", workHours[i])

  var timePeriod = $("<div>");
  timePeriod.addClass(" col-md-2  hour");
  //timePeriod.addClass(" time-div")
  timePeriod.text(workHours[i] + ":00");
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
  icon.addClass("far fa-save fa-lg");

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
  var element = $(this).parent().attr("id");
  //console.log(element);
  var saveIt = $(this).siblings("textarea").val();
  localStorage.setItem(element,saveIt);
});

$(`#09 textarea`).val(localStorage.getItem("09"));
$(`#10 textarea`).val(localStorage.getItem("10"));
$(`#11 textarea`).val(localStorage.getItem("11"));
$(`#12 textarea`).val(localStorage.getItem("12"));
$(`#13 textarea`).val(localStorage.getItem("13"));
$(`#14 textarea`).val(localStorage.getItem("14"));
$(`#15 textarea`).val(localStorage.getItem("15"));
$(`#16 textarea`).val(localStorage.getItem("16"));
$(`#17 textarea`).val(localStorage.getItem("17"));
