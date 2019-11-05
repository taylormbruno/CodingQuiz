var htmlLink = document.getElementById("htmlQues");
var cssLink = document.getElementById("cssQues");
var jsLink = document.getElementById("jsQues");
var landingPage = document.getElementById("landingPage");
var highScores = document.getElementById("highscores");
var timer = document.getElementById("time");
var questPage = document.getElementById("questPage");
var question = document.getElementById("question");
// var choice0 = document.getElementById("choice0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


function htmlQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    for (i=0; i < htmlQuestions.length; i++) {
        question.innerHTML = htmlQuestions[i].title;
        var newBtn0 = document.createElement("button");
        newBtn0.innerHTML = htmlQuestions[i].choices[0];
        questPage.appendChild(newBtn0);
        // choice.innerHTML = htmlQuestions[i].choices[0];
    }
    
}

function cssQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");

}

function jsQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");

}