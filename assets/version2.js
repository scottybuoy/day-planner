var now = moment().format("H");
var dayMonthYear = moment().format("MMMM Do YYYY");
var hourMinute = moment().format("h:mm a");
var timeArrayAm = [];
var timeArrayPm = [];
var threePm = moment().set("hour", 15);


// fill arrays with times of day
for (i = 0; i < 12; i++) {
    timeArrayAm[i] = i + " a.m.";
}
timeArrayAm.splice(0, 1, 12 + " a.m.");
for (i = 0; i < 12; i++) {
    timeArrayPm[i] = i + " p.m.";
}
timeArrayPm.splice(0, 1, 12 + " p.m.");
var timeArrayFull = timeArrayAm.concat(timeArrayPm);

// fill header
var day = $("<h1>");
var time = $("<h2>");
day.attr("id", "date-day");
day.text(dayMonthYear);
$("#header").append(day);
time.attr("id", "hour-minute");
time.text(hourMinute);
$("#header").append(time);

// populate page with forms for each hour
for (i = 0; i < timeArrayFull.length; i++) {
    var form = $("<form>");
    var label = $("<label>");
    var input = $("<input>");
    var button = $("<input>");
    form.attr("class", "form")
    label.attr("class", "label");
    input.attr({class: "activity", type: "text", "id": i});
    button.attr({class: "button", type: "submit", value: "Pin"});
    label.text(timeArrayFull[i]);
    $("#planner-container").append(form);
    form.append(label);
    form.append(input);
    form.append(button);
    var getHour = input.attr("id");
    if (getHour < now) {
        input.attr("class", "past");
    } else if (getHour === now) {
        input.attr("class", "present");
    } else {

    }
}

// assign numbers in class to activity divs that correspond to time of day, for color-coded functionality
for (i = 0; i < timeArrayFull.length; i++) {
    input.attr("id", i);
}

console.log(now);