var htmlLink = document.getElementById("htmlQues");
var cssLink = document.getElementById("cssQues");
var jsLink = document.getElementById("jsQues");
var landingPage = document.getElementById("landingPage");
var highScores = document.getElementById("highscores");
var timer = document.getElementById("time");
var questPage = document.getElementById("questPage");
var question = document.getElementById("question");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");


function htmlQuiz(title, choices, answer) {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    var i = 0; i < htmlQuestions.length;
    question.innerHTML = htmlQuestions[i].title;


    // for (var i=0; i < htmlQuestions.length; i++) {
    //     question.innerHTML = htmlQuestions[i].title;
    //     var newBtn = document.createElement("button");
    //     newBtn.innerHTML = htmlQuestions[i].choices[0];
    //     questPage.appendChild(newBtn);
    // }
    
}

function cssQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");

}

function jsQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");

}