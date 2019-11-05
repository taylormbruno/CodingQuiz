var htmlQuestions = [
    {
        title: "What tag is used to define an unordered list that is bulleted?",
        choices: ["&lt;s&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;u&gt;"],
        answer: "&lt;ul&gt;"
    },
    {
       title: "What tag is used to define an interactive field where users can enter data?",
       choices: ["&lt;textarea&gt;", "&lt;dialog&gt;", "&lt;input&gt;", "&lt;datalist&gt;"],
       answer: "&lt;input&gt;"
    },
    {
        title: "What tag is used to define a standard cell inside a table?",
        choices: ["&lt;td&gt;", "&lt;h1&gt; to &lt;h6&gt;", "&lt;footer&gt;", "&lt;button&gt;"],
        answer: "&lt;td&gt;"
    },
    {
        title: "What tag is used to render or transform text into an emphasized (italics) version?",
        choices: ["&lt;a&gt;", "&lt;strong&gt;", "&lt;em&gt;", "&lt;blockquote&gt;"],
        answer: "&lt;em&gt;"
    },
    {
        title: "What tag is used to define a table or image notation?",
        choices: ["&lt;caption&gt;", "&lt;embed&gt;", "&lt;code&gt;", "&lt;!DOCTYPE&gt;"],
        answer: "&lt;caption&gt;"
    },
    {
        title: "What tag is used to specify a section of text that provides an example of computer code?",
        choices: ["&lt;!DOCTYPE&gt;", "&lt;caption&gt;", "&lt;embed&gt;", "&lt;code&gt;"],
        answer: "&lt;code&gt;"
    },
    {
        title: "What tag is used to render or transform text into an important (bold) version?",
        choices: ["&lt;blockquote", "&lt;em&gt;", "&lt;strong&gt;", "&lt;a&gt;"],
        answer: "&lt;strong&gt;"
    },
    {
        title: "What tag is used to specify a section of text that has been quoted from another source?",
        choices: ["&lt;strong&gt;", "&lt;blockquote", "&lt;em&gt;", "&lt;a&gt;"],
        answer: "&lt;blockquote&gt;"
    },
    {
        title: "What tag is used to define a container for an external app or plug-in?",
        choices: ["&lt;caption&gt;", "&lt;code&gt;", "&lt;embed&gt;", "&lt;!DOCTYPE&gt;"],
        answer: "&lt;embed&gt;"
    },
    {
        title: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
        choices: ["&lt;head&gt;&lt;/head&gt;", "&lt;br&gt;&lt;/br&gt;", "&lt;title&gt;&lt;/title&gt;", "&lt;body&gt;&lt;/body&gt;"],
        answer: "&lt;head&gt;&lt;/head&gt;"
    },
];

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
        choices:["&lt;body&gt;", "&lt;head&gt;", "At the end of the document", "External style sheets are not referenced in an HTML document"],
        answer: "&lt;head&gt;"
    },
    {
        title: "Which HTML tag is used to define an internal style sheet?",
        choices:["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "Internal style sheets are not defined in HTML"],
        answer: "&lt;style&gt;"
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
        choices: ["In the &lt;footer&gt;", "In the &lt;title&gt; section", "In the &lt;body&gt; and &lt;head&gt; sections", "In the &lt;meta&gt; section"],
        answer: "In the &lt;body&gt; and &lt;head&gt; sections"
    },
];