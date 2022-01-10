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

// $(document).on("submit", function(event) {
//     event.preventDefault();
//     for (i = 0; i < timeArrayFull.length; i++) {
//         activityEntries[i] = "fuck"; 
//     }
//     console.log(activityEntries);
// });

    // for (i = 0; i < timeArrayFull.length; i++) {
    //     var actEntById = $(`#${i}`);
    //     activityEntries[i] = "fuck mate";
    

// SETS VALUE OF first activity input TO STORAGE
// $(document).on("submit", function(event) {
//     event.preventDefault();
//     localStorage.setItem("dayPlanTest", inputId.val());
//     console.log("testingg"); 
// })

// same as above WORKS
// $(document).on("submit", function(event) {
//     event.preventDefault();
//     localStorage.setItem("dayPlanTest", $("#0").val());
//     localStorage.setItem("dayPlanTest", $(`#${zeroTest}`).val());
//     console.log("testingg"); 
// });


// sets object of activites to localStorage SUCCESSFULLY
$(document).on("submit", function(event) {
    event.preventDefault();
    var activities = {
        0: $("#0").val(), 1: $("#1").val(), 2: $("#2").val(), 3: $("#3").val(),
        4: $("#4").val(), 5: $("#5").val(), 6: $("#6").val(), 7: $("#7").val(),
        8: $("#8").val(), 9: $("#9").val(), 10: $("#10").val(), 11: $("#11").val(),
        12: $("#12").val(), 13: $("#13").val(), 14: $("#14").val(), 15: $("#15").val(),
        17: $("#17").val(), 18: $("#18").val(), 19: $("#19").val(), 20: $("#20").val(),
        21: $("#21").val(), 22: $("#22").val(), 23: $("#23").val(), 24: $("#24").val(),
    }
    localStorage.setItem("activities", JSON.stringify(activities));
    displayActivities();
});

// function displayActivities() {
//     var pinnedActivities = JSON.parse(localStorage.getItem("activities"));
//     var newEls = $("<p>");
//     // var getId = parseInt(pinnedActivities[i]);
//     for (i = 0; i < timeArrayFull.length; i++) {
//         if (pinnedActivities[i] !== null) {
//             $(`#${i}`).replaceWith(newEls);
//             newEls.text("heywhattt");
//             newEls.attr("class", "past");
//         } else {
//             return;
//         }
//     }
// }



