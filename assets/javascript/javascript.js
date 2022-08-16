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
  var timePeriod = $("<div>");
  timePeriod.addClass("row ny-4 hour w-100 justify-content-center");
  timePeriod.text(workHours[i]);
  //console.log(timePeriod);

  var textArea = $("<textarea>");
  textArea.addClass("col-9 time-block description");
  textArea.attr("name", workHours[i]);
  // console.log(textArea);
  var button = $("<button>");
  button.addClass(
    "saveBtn btn col-2 d-flex align-items-center justify-content-center "
  );

  var icon = $("<li>");
  icon.addClass("bi bi-save-fill");
}
timeBlockEl.append(timePeriod);
timePeriod.append(textArea);
timePeriod.append(button);
button.append(icon);

// if (parseInt(workHours[i]) < today.getHours()) {
//   textArea.addClass("past");
// } else if (parseInt(workHours[i]) > today.getHours()) {
//   textArea.addClass("future");
// } else {
//   textArea.addClass("present");
//}
