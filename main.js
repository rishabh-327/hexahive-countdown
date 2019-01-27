var hackathon_day = new Date(2019,1,9,11,00).getTime();
        // var hackathon_day = new Date().getTime();
        var countDown = setInterval( function() {
            var currentTime = new Date().getTime();
            var beginIn = hackathon_day - currentTime;
            var days = Math.floor(beginIn / (1000 * 60 * 60 * 24));
            var hours = Math.floor((beginIn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((beginIn % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((beginIn % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = mins;
            document.getElementById("secs").innerHTML = secs;
            if ( beginIn <= 0){
            clearInterval(countDown);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("secs").innerHTML = "00";

        }
        }, 1000);
