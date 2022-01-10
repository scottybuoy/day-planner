var timeArrayAm = [];
var timeArrayPm = [];
for (i = 0; i < 12; i++) {
    timeArrayAm[i] = i + " a.m.";
}
timeArrayAm.splice(0, 1, 12 + " a.m.");
for (i = 0; i < 12; i++) {
    timeArrayPm[i] = i + " p.m.";
}
timeArrayPm.splice(0, 1, 12 + " p.m.");
var timeArrayFull = timeArrayAm.concat(timeArrayPm);

for (i = 0; i < timeArrayFull.length ; i++) {
    var timeTab = $("<p>");
    timeTab.attr("class", "time-number");
    // $("#time-container").append($("<p>", "class", "time-number"));
    timeTab.text(timeArrayFull[i]);
    $("#time-container").append(timeTab);
}

for (i = 0; i <= 23; i++) {
    var inputTab = $("<input>");
    inputTab.attr({type: "text", class: "input activity"});
    $("#activity-container").append(inputTab);
}

for (i = 0; i <= 23; i++) {
    var saveTab = $("<p>");
    saveTab.attr("class", "save");
    saveTab.text("Pin");
    $("#save-container").append(saveTab);
}