// time interval for all quizes
function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        if(timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//HTML Quiz functions
function htmlQuiz() {
    landingPage.setAttribute("style", "display:none;");
    questPage.setAttribute("style", "display:block;");
    
    setTime();

    var i = 0; i < htmlQuestions.length;
    question.innerHTML = htmlQuestions[i].title;
    
    for (j=0; j < htmlQuestions[i].choices.length; j++) {
        var newBtn = document.createElement("button");
        var lineBreak = document.createElement("br");
        newBtn.setAttribute("id", ("btn" + [j]));
        newBtn.textContent = (htmlQuestions[i].choices[j]);
        questPage.append(newBtn);
        questPage.append(lineBreak);
        
        newBtn.addEventListener("click", function(event) { 
            if (event.target.textContent === htmlQuestions[i].answer) { 
                var correctAnswer = document.createElement("h4");
                correctAnswer.textContent = "Correct answer!";
                questPage.append(correctAnswer);
                i++;
            } else {
                var incorrectAnswer = document.createElement("h4");
                incorrectAnswer.textContent = "Incorrect answer!";
                questPage.append(incorrectAnswer);
                timer = (timer - 15);
                i++;
            }
        })
    }
}

// function cssQuiz() {
//     landingPage.setAttribute("style", "display:none;");
//     questPage.setAttribute("style", "display:block;");

// }

// function jsQuiz() {
//     landingPage.setAttribute("style", "display:none;");
//     questPage.setAttribute("style", "display:block;");

// }