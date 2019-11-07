// all variables used in script.js
var htmlLink = document.getElementById("htmlQues");
var cssLink = document.getElementById("cssQues");
var jsLink = document.getElementById("jsQues");
var landingPage = document.getElementById("landingPage");
var highScores = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var questPage = document.getElementById("questPage");
var question = document.getElementById("question");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var timer = 150;

// Questions for HTML quiz
var htmlQuestions = [
    {
        title: "What tag is used to define an unordered list that is bulleted?",
        choices: ["<s>", "<ul>", "<li>", "<u>"],
        answer: "<ul>"
    },
    {
       title: "What tag is used to define an interactive field where users can enter data?",
       choices: ["<textarea>", "<dialog>", "<input>", "<datalist>"],
       answer: "<input>"
    },
    {
        title: "What tag is used to define a standard cell inside a table?",
        choices: ["<td>", "<h1> to <h6>", "<footer>", "<button>"],
        answer: "<td>"
    },
    {
        title: "What tag is used to render or transform text into an emphasized (italics) version?",
        choices: ["<a>", "<strong>", "<em>", "<blockquote>"],
        answer: "<em>"
    },
    {
        title: "What tag is used to define a table or image notation?",
        choices: ["<caption>", "<embed>", "<code>", "<!DOCTYPE>"],
        answer: "<caption>"
    },
    {
        title: "What tag is used to specify a section of text that provides an example of computer code?",
        choices: ["<!DOCTYPE>", "<caption>", "<embed>", "<code>"],
        answer: "<code>"
    },
    {
        title: "What tag is used to render or transform text into an important (bold) version?",
        choices: ["<blockquote", "<em>", "<strong>", "<a>"],
        answer: "<strong>"
    },
    {
        title: "What tag is used to specify a section of text that has been quoted from another source?",
        choices: ["<strong>", "<blockquote", "<em>", "<a>"],
        answer: "<blockquote>"
    },
    {
        title: "What tag is used to define a container for an external app or plug-in?",
        choices: ["<caption>", "<code>", "<embed>", "<!DOCTYPE>"],
        answer: "<embed>"
    },
    {
        title: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
        choices: ["<head></head>", "<br></br>", "<title></title>", "<body></body>"],
        answer: "<head></head>"
    },
];

// Questions for CCS Quiz
var cssQuestions = [
    {
        title: "What is the CSS property that sets the size of the whitespace outside the borders of the content?",
        choices: ["Margin", "Padding", "Spacer", "Line"],
        answer: "Margin"
    },
    {
        title: "What is the CSS property that is used to specify the edges of a table?",
        choices:["Boxes",   "Margins", "Fill", "Borders"],
        answer: "Borders"
    },
    {
        title: "External stylesheets are stored in what type of files?",
        choices:["CSS", "HTML", "JS", "MD"],
        answer: "CSS"
    },
    {
        title: "What is the name of the property that is used to define the special state of an element?",
        choices:["Syntax", "Style", "Pseudo-class", "Alignment"],
        answer: "Pseudo-class"
    },
    {
        title: "What is the box called in CSS that wraps around every HTML element?",
        choices:["Float", "Box-model", "Wrap", "Boundary"],
        answer: "Box-model"
    },
    {
        title: "CSS stands for __ Style Sheets.",
        choices:["Creative", "Cascading", "Colorful", "Computer"],
        answer: "Cascading"
    },
    {
        title: "Where in an HTML document is the correct place to refer to an external style sheet?",
        choices:["<body>", "<head>", "At the end of the document", "External style sheets are not referenced in an HTML document"],
        answer: "<head>"
    },
    {
        title: "Which HTML tag is used to define an internal style sheet?",
        choices:["<css>", "<script>", "<style>", "Internal style sheets are not defined in HTML"],
        answer: "<style>"
    },
    {
        title: "Which is the correct CSS syntax?",
        choices:["{h1:color=red;}", "h1 {color: red;}", "{h1;color:red;}", "h1:color=red;"],
        answer: "h1 {color: red;}"
    },
    {
        title: "How do you display hyperlinks withan underline?",
        choices:["a{underline:none;}", "a{text-decoration:no-underline;}", "a{decoration:no-underline;}", "a{text-decoration:none;}"],
        answer: "a{text-decoration:none;}"
    },
];

// Questions for JS Quiz
var jsQuestions = [
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What is the format called that is used for storing and transporting data?",
        choices: ["HTML", "Font", "JSON", "Syntax"],
        answer: "JSON"
    },
    {
        title: "What is considered to be the most popular programming language in the world?",
        choices: ["Swift", "Ruby", "JavaScript", "HTML"],
        answer: "JavaScript"
    },
    {
        title: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choices: ["Output", "Syntax", "Scope", "JSON"],
        answer: "Syntax"
    },
    {
        title: "What element is used to store and manipulate text, usually in multiples?",
        choices: ["Arrays", "Recorders", "Strings", "Variables"],
        answer: "Strings"
    },
    {
        title: "What is used in conjunction with HTML to “react” to certain elements?",
        choices: ["Boolean", "Condition", "Events", "RegExp"],
        answer: "Events"
    },
    {
        title: "What is a block of code called that is used to perform a specific task?",
        choices: ["Function", "Declaration", "String", "Varirable"],
        answer: "Function"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        title: "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
        choices: ["Number", "Count", "Math","Solve"],
        answer: "Math"
    },
    {
        title: "Where is JavaSCript placed insde an HTML document or page?",
        choices: ["In the <footer>", "In the <title> section", "In the <body> and <head> sections", "In the <meta> section"],
        answer: "In the <body> and <head> sections"
    },
];