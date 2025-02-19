    //fecha de lanzamiento
    var launchDate = new Date("Aug 1, 2024 00:00:00").getTime();

    //cuenta regresiva cada segundo
    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = launchDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector(".countdown").innerHTML = "¡Ya hemos lanzado!";
        }
    }, 1000);