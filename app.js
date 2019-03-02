$(function() {
    var pass = new Date("Novenber 12, 2018 22:00 GMT+8:00");
    
    function clock() {
        var date = new Date();
        var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

        const fullDate = new Date(now_utc);
        var hours = fullDate.getHours();
        var mins = fullDate.getMinutes();
        var secs = fullDate.getSeconds();
        var day = fullDate.getDay();
        var date = fullDate.getDate();
        var diff = fullDate.getTime() - pass.getTime();
        var daysPass = diff / 1000 / 60 / 60 / 24;
        daysPass = daysPass.toFixed(5);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (mins < 10) {
            mins = "0" + mins;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }

        switch (day) {
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tue";
                break;
            case 3:
                day = "Wed";
                break;
            case 4:
                day = "Thurs";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Sat";
                break;
        }
        $("#hours").html(`${hours}`);
        $("#minutes").html(` : ${mins}`);
        $("#seconds").html(` : ${secs}`);
        $("#day").html(`${day}`);
        $("#date").html(` - ${date}`);
        $(".count").html(`days passed: ${daysPass}`);
        $("#title").html(`${hours} : ${mins} : ${secs}  ${day} - ${date}`);
    }
    setInterval(clock, 100);
});
