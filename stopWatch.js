$(function() {
    var hours = "00";
    var mins = "00";
    var secs = "00";
    var hours_span = $("#hours");
    var mins_span = $("#minutes");
    var secs_span = $("#seconds");

    $(".reset").toggle();
    
    function start() {
        secs++;
        if(secs < 10) {
            secs = "0" + secs;
        }

        if(secs == 60) {
            secs = "00";
            mins++;
            if(mins < 10) mins = "0" + mins;
        }

        if(mins == 60) {
            mins = "00";
            hours++;
            if (hours < 10) hours = "0" + hours;
        }

        hours_span.html(`${hours}`);
        mins_span.html(` : ${mins}`);
        secs_span.html(` : ${secs}`);
    }
    
    $(".fl").click(function() {
        // stopwatch start button
        // start operation code here
        start = setInterval(start, 1000);
        $(".reset").toggle();
    });

    $(".fr").click(function() {
        // stopwatch stop button
        // stop operation code here
        clearInterval(start);
    });

    $(".reset").click(function() {
        // reset button function
        setTimeout(() => location.reload(), 1000);
    });

});