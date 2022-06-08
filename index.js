const buttons = $(".box");

const body = $("body");

const head = $("h1");

let started = false;

let level = 0;

// keypress

body.click((e) => {
    if ($(e.target).hasClass("body")) {
        if (!started) {
            sequence();
            started = true;
        }
    }
    if ($(e.target).hasClass("row")) {
        if (!started) {
            sequence();
            started = true;
        }
    }
    if ($(e.target).hasClass("row1")) {
        if (!started) {
            sequence();
            started = true;
        }
    }
    if ($(e.target).hasClass("row2")) {
        if (!started) {
            sequence();
            started = true;
        }
    }

})

body.keypress(() => {

    if (!started) {
        sequence();
        started = true;
    }
})
const colorButtons = ["red", "green", "blue", "yellow"]

let gamePattern = [];
let userClicked = [];

//button click

buttons.click((e) => {

    const butons = $(e.currentTarget).attr("id")
    userClicked.push(butons);

    Sound(butons);
    animate(butons);

    correctSequence(userClicked.length - 1)
})

function correctSequence(current) {

    if (gamePattern[current] === userClicked[current]) {

        if (gamePattern.length === userClicked.length) {
            setTimeout(() => {
                sequence();
            }, 800)
        }

    } else {
        level = 0;
        head.text("game over, press any key to restart");

        Sound("wrong");
        bodyBackground();

    }

}

function sequence() {
    userClicked = [];
    level++;
    head.text("level " + level);
    const random = Math.floor(Math.random() * 4);
    const randomColors = colorButtons[random];
    gamePattern.push(randomColors)
    $("#" + randomColors)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
    Sound(randomColors)

}

function Sound(color) {
    const audio4 = new Audio("sounds/" + color + ".mp3")
    audio4.play();

}

function animate(color) {

    $("." + color).addClass("pressed")
    setTimeout(() => {
        $("." + color).removeClass("pressed")

    }, 100)

}

function bodyBackground() {
    body.css("background-color", "red");

    setTimeout(() => {
        body.css("background-color", "#011F3F");
    }, 160)

}
