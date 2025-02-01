var clicks = 8;

$(".btn-yes").on("mouseover", function() {
    $(".yes-checkbox").addClass("hover");
});

$(".btn-yes").on("mouseout", function() {
    $(".yes-checkbox").removeClass("hover");
  });

  $(".btn-no").on("mouseover", function() {
    $(".no-checkbox").addClass("hover");
});

$(".btn-no").on("mouseout", function() {
    $(".no-checkbox").removeClass("hover");
  });



$(".btn-yes").on("click", function() {
    $("img").remove();
    $(".btn-yes").append('<img src="duduhappy.png"/>');
    $("img").hide().fadeIn(1500);
    $("h1").attr("class", "question-title");
    $("h1").text("Mababy <3");
    $("h1").hide().fadeIn();
});

$(".btn-no").on("click", function() {
    $("img").remove();
    $(".btn-no").append('<img src="dudusad.png"/>');
    $("img").hide().fadeIn(1500);
    $("h1").attr("class", "question-title-change-no");
    $("h1").text("You hate me! </3");
    
    clicks = clicks + 1;
    $("h1").css("fontSize", clicks+"rem");
});

/* 
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
} */

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}