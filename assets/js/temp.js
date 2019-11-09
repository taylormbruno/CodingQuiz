// all variables used in script.js
var landingPage = document.getElementById("landingPage");
var highScores = document.getElementById("highscores");
var initialPage = document.getElementById("enterInitial");
var scorePage = document.getElementById("scorePage");

var questPage = document.getElementById("questPage");
var question = document.getElementById("question");

var scorePage = document.getElementById("scorePage");
var score = 0;

var quesCounter = 0;
var lastQues = htmlQuestions.length - 1;
var currentQ = htmlQuestions[quesCounter];
var timeEl = document.getElementById("time");
var timer = 150;

// time interval for all quizes
function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        if(timer === 0) {
            clearInterval(timerInterval);
            getScores();
        }
    }, 1000);
}

//HTML Quiz functions
function htmlQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    setTime();

    // console.log(htmlQuestions);
    // console.log(quesCounter);
    // console.log(htmlQuestions[quesCounter].title);
    // console.log(htmlQuestions[quesCounter].choices);
    // console.log(htmlQuestions[quesCounter].answer);
    $(questPage).empty().append('<h2>' + htmlQuestions[quesCounter].title +'</h2>');
    if (quesCounter === lastQues) {
        questPage.setAttribute("display", "none;");
    }
    else if (quesCounter = (htmlQuestions[quesCounter].length - 1)) {
        for (j=0; j < htmlQuestions[quesCounter].choices.length; j++) {
            $(questPage).append('<button data-attribute="' + j + '" onclick="answer()">' + htmlQuestions[quesCounter].choices[j] + '</button> <br />');
        }
    }  
    else {
        getScores();
    }
}

function answer() {
    if (parseInt($(this.event.target).attr('data-attribute')) == parseInt(htmlQuestions[quesCounter].answer)) {
        console.log('Correct!');
        var correctAnswer = document.createElement("h4");
        correctAnswer.textContent = "Correct answer!";
        questPage.append(correctAnswer);
        quesCounter++;
        htmlQuiz();
    } else {
        console.log('Wrong!');
        var incorrectAnswer = document.createElement("h4");
        incorrectAnswer.textContent = "Incorrect answer!";
        questPage.append(incorrectAnswer);
        timer = (timer - 15);
        quesCounter++;
        htmlQuiz();
    }
}

function cssQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    setTime();

    $('#questPage').empty().append('<h2>' + cssQuestions[quesCounter].title +'</h2>');

    // if (quesCounter === lastQues) {
    //     questPage.setAttribute("display", "none;");
    // }
    if (quesCounter <= (cssQuestions[quesCounter].length - 1)) {
        for (j=0; j < cssQuestions[quesCounter].choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="answer()">' +  cssQuestions[quesCounter].choices[j] + '</button> <br />');
        }
    } 
    else {
        getScores();
    }
}

function jsQuiz() {
    landingPage.setAttribute("style", "display:none;");
    initialPage.setAttribute("style", "display:none;");
    scorePage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    setTime();

    $('#questPage').empty().append('<h2>' + jsQuestions[quesCounter].title +'</h2>');

    if (quesCounter === lastQues) {
        questPage.setAttribute("display", "none;");
    }
    else if (quesCounter <= (jsQuestions[quesCounter].length - 1)) {
        for (j=0; j < jsQuestions[quesCounter].choices.length; j++) {
            $('#questPage').append('<button data-attribute="' + j + '" onclick="answer()">' + jsQuestions[quesCounter].choices[j] + '</button> <br />');
        }
    } 
    else {
        getScores();
    }
}

function getScores() {
    $('#enterInitial').append("<h2>All done!</h2>");
    $('#enterInitial').append("<h3>Your score is: " + score + ".</h4>");
}