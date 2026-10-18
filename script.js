var second = 0;

setInterval(function() {
    second = second + 1;
    document.getElementById("timer").textContent ="You have been here for " + second + " seconds!";
}, 1000);

function checkForm() {
    var name = document.getElementById("name").value;
    var guess = document.getElementById("guess").value;
    var ok = true;

    if (name == "") {
        document.getElementById("msg-name").textContent = "Please enter your name!";
        document.getElementById("msg-name").style.color = "red";
        ok = false;
    } else {
        document.getElementById("msg-name").textContent = "Great name!";
        document.getElementById("msg-name").style.color = "green";
    }

    if (guess == "") {
        document.getElementById("msg-guess").textContent = "Please enter your guess!";
        document.getElementById("msg-guess").style.color = "red";
        ok = false;
    } else {
        document.getElementById("msg-guess").textContent = "Great guess!";
        document.getElementById("msg-guess").style.color = "green";
    }

    if (ok == true) {
        var lucky = Math.floor(Math.random() * 5) + 1;

        if (Number(guess) == lucky) {
            document.getElementById("result").textContent ="You Win, " + name + "! The lucky number was " + lucky + "!";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").textContent ="So close, " + name + "! The lucky number was " + lucky + ". Try again!";
            document.getElementById("result").style.color = "navy";
        }
    }
}
