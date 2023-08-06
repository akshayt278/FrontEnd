var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var nextSequence = function(){
    userClickedPattern = [];
    level+=1;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).click(function(){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed"), 100});
    });
}

$(document).keypress(function(){
    if(started === false){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver(){
    started =false ;
    level = 0;
    gamePattern = [];
}