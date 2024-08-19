var totalTime = 7500;
var breathTime = (totalTime / 5) * 2;
var holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
    $("#text").text("Breathe In!");
    $(".container").removeClass("shrink");
    $(".container").addClass("grow");

    setTimeout(function () {
        $("#text").text("Hold");

        setTimeout(function () {
            $("#text").text("Breathe Out!");
            $(".container").removeClass("grow");
            $(".container").addClass("shrink");

        }, holdTime);
    }, breathTime);
}

setInterval(breatheAnimation, totalTime);