
function updateCalender () {
    var now = moment();

// Updtate the main date view
    $("#1a").text(now.format("MMM Do, YYYY"));


    var hourNow = now.format("H");

    //for each tr in the table
    // if this hour is greater that row hour value set class visual as past (grey)
    // if this hour is equal to row hour set it as now visual (red)
    // if this hour is less than row hour set visual as future visual (green)

    var workstart = 9;
    var workend = 17;

    for (var rowHour = workstart; rowHour <= workend; rowHour ++){

        if (hourNow > rowHour) {
            $("#" + rowHour).removeClass();
            $("#" + rowHour).addClass("past col-8");
        }
        
        if (hourNow === rowHour) {
            $("#" + rowHour).removeClass();
            $("#" + rowHour).addClass("present col-8");
        }

        if (hourNow < rowHour) {
            $("#" + rowHour).removeClass();
            $("#" + rowHour).addClass("future col-8");
        }
    }
    
}

$('#button-9,#button-10,#button-11,#button-12,#button-13,#button-14,#button-15,#button-16').click(function() { 
    hour = this.id.split("-")[1]
    //console.log($('#' + hour)[0].childNodes[0].value);
    console.log(
        
        $('#' + hour)[0].childNodes[0].value
    
    )
}); 

updateCalender()

//$('#button-9','#button-10','#button-11','#button-12','#button-13','#button-14','#button-15','#button-16')