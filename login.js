$(document).ready(function() {

    $(".login-show").on("click", function() {
        $(".login").toggleClass("showed");
    });
    $(".login-hide").on("click", function() {
        $(".login").toggleClass("showed");
    });
    var audio = $(".mysound")[0];
    $(".img audio").mouseenter(function() {
        audio.play();
    });
});