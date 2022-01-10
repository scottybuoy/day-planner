var now = moment().format("H");
var dayMonthYear = moment().format("MMMM Do YYYY");
var hourMinute = moment().format("h:mm a");
var timeArrayAm = [];
var timeArrayPm = [];
var activityEntries = [];
var threePm = moment().set("hour", 15);

// prevent default for pin buttons
// $("input").on("submit", function(event) {
//     event.preventDefault();
//     for (i = 0; i < timeArrayFull; i++) {
//         activityEntries[i] = $(`#${i}`).val();
        
//     }
//     localStorage.setItem("activityArray", JSON.stringify(activityEntries));
//     console.log("testingg");
// })




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
    // var getHour = input.attr("id");
    var getHour = parseInt(input.attr("id"));
    if (getHour < now) {
        input.attr("class", "past");
    } else if (getHour == now) {
        input.attr("class", "present");
    } else if (getHour > now) {
        input.attr("class", "future");
    }
}

// assign numbers in id to activity inputs that correspond to time of day, for color-coded functionality
for (i = 0; i < timeArrayFull.length; i++) {
    input.attr("id", i);
}

// set activity form content to local storage, using for loop to access sequential numbers in id
// for (i = 0; i < timeArrayFull.length; i++) {
//     var 
// }

// fill array with activity entries
// var inputId = $("#0");
var zeroTest = 0;
var inputId = $(`#${zeroTest}`);
// $(document).on("submit", function(event) {
//     event.preventDefault();
//     localStorage.setItem("dayPlanTest", inputId.val());
//     console.log("testingg"); 
// })

for (i = 0; i < timeArrayFull.length; i++) {
    var actEntById = $(`#${i}`);
    activityEntries[i] = actEntById.val();
    
}
console.log(activityEntries);
// $(document).on("submit", function(event) {
//     event.preventDefault();
//     localStorage.setItem("dayPlanTest", inputId.val());
//     console.log("testingg"); 
// })


