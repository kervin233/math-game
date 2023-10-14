let clickButton = null;
let randomNumber = null;
const generateButton = document.getElementById("generateBtn");

function setDifficulty(difficulty) {
    clickButton = difficulty;
    if (clickButton === "easy") {
        document.getElementById("labelDifficulty").textContent = "Pick a Number Between 1 To 10"
        document.getElementById("difficultySpan").textContent = "Difficulty Was Set To EASY"
    } else if (clickButton === "medium") {
        document.getElementById("labelDifficulty").textContent = "Pick a Number Between 1 To 50"
        document.getElementById("difficultySpan").textContent = "Difficulty Was Set To MEDIUM"
    } else if (clickButton === "hard") {
        document.getElementById("labelDifficulty").textContent = "Pick a Number Between 1 To 100"
        document.getElementById("difficultySpan").textContent = "Difficulty Was Set To HARD"
    } 
}

function generateRandomNumber() {
    let min, max;
    if (clickButton == null){
        document.getElementById("span").textContent = "PLease Select a Difficuly First";
        return;
    }
      else if (clickButton === "easy") {
        min = 1;
        max = 25;
    } else if (clickButton === "medium") {
        min = 1;
        max = 50;
    } else if (clickButton === "hard") {
        min = 1;
        max = 100;
    }

    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("span").textContent = "Random Number Has Been Generated";
    generateButton.disabled = true;
}

function checkAnswer(){
    var guessNumb = document.getElementById("numberInput").value;
    if ( guessNumb < randomNumber){
        document.getElementById("span").textContent = "The Number You Put is LOWER than the Random Number ";
    }else if (guessNumb > randomNumber){
        document.getElementById("span").textContent = "The Number You Put is HIGHER than the Random Number ";
    }else if (guessNumb == randomNumber){
        document.getElementById("span").textContent = "You Guess The Correct Number";
    }
    
}
function showMain(){
    document.getElementById("main").classList.add("show")
    document.getElementById("play").classList.remove("show")
    document.getElementById("settings").classList.remove("show")
    }
function showPlay(){
    document.getElementById("play").classList.add("show")
    document.getElementById("main").classList.remove("show")
    document.getElementById("settings").classList.remove("show")
    }
function showSettings(){
    document.getElementById("settings").classList.add("show")
    document.getElementById("play").classList.remove("show")
    document.getElementById("main").classList.remove("show")
    }
    
    