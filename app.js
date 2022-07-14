var questions = [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "js",
            "script",
            "scripting",
            "javascript"
        ],
        correctAnswer: "<script>"

    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            "if(i==5)",
            "if i = 5",
            "if i = 5 then",
            "if i == 5 then"
        ],
        correctAnswer: "if(i==5)"

    },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        options: [
            "True",
            "False",

        ],
        correctAnswer: "False"

    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: [
            "if(i <> 5)",
            "if i=! 5 then",
            "if(i != 5)",
            "if i <> 5"
        ],
        correctAnswer: "if(i != 5)"

    },

    {
        question: "How does a FOR loop start?",
        options: [
            "for i = 1 to 10",
            "for(i=0; i<=10; i++)",
            "for(i <= 10; i++)",
            "for(i = 0; i<=10)"
        ],
        correctAnswer: "for(i=0; i<=10; i++)"

    },

    {
        question: "What will the following code return: Boolean(10 > 9)",
        options: [
            "true",
            "false",

        ],
        correctAnswer: "true"

    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "+",
            "-",
            "*",
            "="
        ],
        correctAnswer: '='

    },


    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            'var colors  = ("red", "green", "blue", "orange")',
            'var colors  = "red", "green", "blue", "orange"',
            'var colors  = (1:"red", 2:"green", 3:"blue", 4:"orange")',
            'var colors  = ["red", "green", "blue", "orange"]'
        ],
        correctAnswer: 'var colors  = ["red", "green", "blue", "orange"]'

    },

    {
        question: "How can you add a comment in a JavaScript?",
        options: [
            "!--This is a comment-->",
            "'This is a comment'",
            "// This is a comment",
            "!* This is a comment*!"
        ],
        correctAnswer: "// This is a comment"

    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseover",
            "onclick",
            "onmouseclick",
            "onblur"
        ],
        correctAnswer: "onclick"

    },

    {
        question: " How does Java Script store dates in objects of Date type?",
        options: [
            "The number of days since January 1st, 1900",
            "The number of milliseconds since January 1st, 1970",
            "The number of seconds since January 1st, 1970",
            "The number of picoseconds since January 1st, 1970"
        ],
        correctAnswer: "The number of milliseconds since January 1st, 1970"

    },

    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: [
            "2java",
            "_java_and_java_names",
            "javaandjava",
            "None of the above"
        ],
        correctAnswer: "2java"

    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        options: [
            'document.getElementByName("p").innerHTML =  "Hello World!"',
            'document.getElement("p").innerHTML = "Hello World!"',
            '#demo.innerHTML = "Hello World!"',
            'document.getElementById("demo").innerHTML = "Hello World!"'
        ],
        correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!"'

    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
            "Math.round(7.25)  ",
            "Math.rnd(7.25)",
            "round(7.25)",
            "rnd(7.25)"
        ],
        correctAnswer: "2java"
    },

    {
        question: "Which of the following function of String object returns the character at the specified ind",
        options: [
            "concat()",
            "charCodeAt()",
            "charAt()",
            "indexOf()"
        ],
        correctAnswer: "2java"
    },

    {
        question: "Is JavaScript case-sensitive?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: "Yes"
    },

]

var score = 0
var answer = ""
var userName = ""
var usersSelectedAnswers = []
var questionsDiv = document.getElementById('questions_div')


function renderQuestion(e) {
    var getName = document.getElementById('name_field')
    if (getName.value === "") {
        alert("Please enter your name")
        return false;
    }
    userName = getName.value
    var starting = document.getElementById('starting')
    starting.style.display = 'none'

    if (questions[e].options.length === 2) {

        var questionNum = document.createElement('h2')
        var indexNum = questions.indexOf(questions[e])
        var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`)
        questionNum.appendChild(questionNumber)
        questionsDiv.appendChild(questionNum)

        var question = document.createElement('h2')
        var questionText = document.createTextNode(`${questions[e].question}`)
        question.appendChild(questionText)
        questionsDiv.appendChild(question)

        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'radio')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        var option1 = document.createElement('span')
        option1.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn1)
        questionsDiv.appendChild(option1)


        var breakLine1 = document.createElement('br')
        questionsDiv.appendChild(breakLine1)

        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'radio')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        var option2 = document.createElement('span')
        option2.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn2)
        questionsDiv.appendChild(option2)

        var breakLine2 = document.createElement('br')
        questionsDiv.appendChild(breakLine2)


        var nextBtn = document.createElement('button')
        var nextBtnText = document.createTextNode("Next")
        nextBtn.setAttribute('onclick', 'nextQuestion()')
        nextBtn.appendChild(nextBtnText)
        questionsDiv.appendChild(nextBtn)

    }

    if (questions[e].options.length > 2) {
        var questionNum = document.createElement('h2')
        var indexNum = questions.indexOf(questions[e])
        var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`)
        questionNum.appendChild(questionNumber)
        questionsDiv.appendChild(questionNum)

        var question = document.createElement('h2')
        var questionText = document.createTextNode(`${questions[e].question}`)
        question.appendChild(questionText)
        questionsDiv.appendChild(question)

        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'radio')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        var option1 = document.createElement('span')
        option1.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn1)
        questionsDiv.appendChild(option1)


        var breakLine1 = document.createElement('br')
        questionsDiv.appendChild(breakLine1)

        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'radio')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        var option2 = document.createElement('span')
        option2.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn2)
        questionsDiv.appendChild(option2)

        var breakLine2 = document.createElement('br')
        questionsDiv.appendChild(breakLine2)

        var radioBtn3 = document.createElement('input')
        radioBtn3.setAttribute('type', 'radio')
        radioBtn3.setAttribute('name', 'selectBtn')
        radioBtn3.setAttribute('class', 'options')
        var option3 = document.createElement('span')
        option3.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn3)
        questionsDiv.appendChild(option3)

        var breakLine3 = document.createElement('br')
        questionsDiv.appendChild(breakLine3)


        var radioBtn4 = document.createElement('input')
        radioBtn4.setAttribute('type', 'radio')
        radioBtn4.setAttribute('name', 'selectBtn')
        radioBtn4.setAttribute('class', 'options')
        var option4 = document.createElement('span')
        option4.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn4)
        questionsDiv.appendChild(option4)

        var breakLine4 = document.createElement('br')
        questionsDiv.appendChild(breakLine4)

        var nextBtn = document.createElement('button')
        var nextBtnText = document.createTextNode("Next")
        nextBtn.setAttribute('onclick', 'nextQuestion()')
        nextBtn.appendChild(nextBtnText)
        questionsDiv.appendChild(nextBtn)
    }
    var options = document.getElementsByClassName('options')
    var optionsNames = document.getElementsByClassName('optionsName')

    for (var i = 0; i < options.length; i++) {
        options[i].value = questions[e].options[i]
        optionsNames[i].innerHTML = questions[e].options[i]

    }
}



function hello() {
    try {
        var starting = document.getElementById('starting')
        var a = document.createElement("input")
        a.setAttribute('type', 'text')
        a.setAttribute('placeholder', 'Enter your name')
        a.setAttribute('id', 'name_field')


        var breakLine = document.createElement('br')

        var btn = document.createElement('button')
        var btnText = document.createTextNode("Start quiz")
        btn.setAttribute('onclick', 'renderQuestion(0), time()')

        btn.appendChild(btnText)


        starting.appendChild(a)
        starting.appendChild(breakLine)
        starting.appendChild(btn)

    } catch (error) {
        console.log(error)
    }
}



var questionCount = 0;
function nextQuestion() {
    var selectOption = document.getElementsByName('selectBtn')


    for (var i = 0; i < selectOption.length; i++) {
        if (selectOption[i].checked) {

            if (questionCount === questions.length - 1) {
                answer = selectOption[i].value
                usersSelectedAnswers.push(selectOption[i].value)
                console.log(selectOption[i].value)
                checkAnswer(questionCount, answer)
                questionsDiv.innerHTML = ""


                alert("completed")
                result();

                return;
            }


            else {
                answer = selectOption[i].value
                usersSelectedAnswers.push(selectOption[i].value)
                console.log(selectOption[i].value)
                selectOption[i].checked = false
                questionsDiv.innerHTML = ""
                checkAnswer(questionCount, answer)
                questionCount++;
                renderQuestion(questionCount)
                return true;
            }

        }


    }


    alert("Please select any 1 option")
    return false
}

function checkAnswer(index, answer) {
    if (questions[index].correctAnswer === answer) {
        score++;
        console.log(score)
    }
}

function result() {
    clearInterval(interval)
    var resultDiv = document.getElementById('result')

    var completeHeading = document.createElement('h2')
    var completeHeadingText = document.createTextNode("Completed!")
    completeHeading.appendChild(completeHeadingText)

    var result = document.createElement('h2')
    var resultText = document.createTextNode(`${userName}, You got ${score} out of ${questions.length}`)
    result.appendChild(resultText)


    resultDiv.appendChild(completeHeading)
    resultDiv.appendChild(result)


    // questions checking
    for (var i = 0; i < questions.length; i++) {
        var question = document.createElement('p')
        var questionText = document.createTextNode(questions[i].question)
        question.appendChild(questionText)
        resultDiv.appendChild(question)



        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'checkbox')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        radioBtn1.setAttribute('value', questions[i].options[0])
        var option1 = document.createElement('span')
        var option1Name = document.createTextNode(questions[i].options[0])
        option1.appendChild(option1Name)
        option1.setAttribute('class', 'optionsNameResult')
        resultDiv.appendChild(radioBtn1)
        resultDiv.appendChild(option1)


        var breakLine1 = document.createElement('br')
        resultDiv.appendChild(breakLine1)


        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'checkbox')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        radioBtn2.setAttribute('value', questions[i].options[1])
        var option2 = document.createElement('span')
        var option2Name = document.createTextNode(questions[i].options[1])
        option2.appendChild(option2Name)
        option2.setAttribute('class', 'optionsNameResult')
        resultDiv.appendChild(radioBtn2)
        resultDiv.appendChild(option2)

        var breakLine2 = document.createElement('br')
        resultDiv.appendChild(breakLine2)


        var radioBtn3 = document.createElement('input')
        radioBtn3.setAttribute('type', 'checkbox')
        radioBtn3.setAttribute('name', 'selectBtn')
        radioBtn3.setAttribute('class', 'options')
        radioBtn3.setAttribute('value', questions[i].options[2])
        var option3 = document.createElement('span')
        var option3Name = document.createTextNode(questions[i].options[2])
        option3.appendChild(option3Name)
        option3.setAttribute('class', 'optionsNameResult')
        resultDiv.appendChild(radioBtn3)
        resultDiv.appendChild(option3)

        var breakLine3 = document.createElement('br')
        resultDiv.appendChild(breakLine3)


        var radioBtn4 = document.createElement('input')
        radioBtn4.setAttribute('type', 'checkbox')
        radioBtn4.setAttribute('name', 'selectBtn')
        radioBtn4.setAttribute('class', 'options')
        radioBtn4.setAttribute('value', questions[i].options[3])
        var option4 = document.createElement('span')
        var option4Name = document.createTextNode(questions[i].options[2])
        option4.appendChild(option4Name)
        option4.setAttribute('class', 'optionsNameResult')
        resultDiv.appendChild(radioBtn4)
        resultDiv.appendChild(option4)

        var breakLine4 = document.createElement('br')
        resultDiv.appendChild(breakLine4)


        var correctAnswer = document.createElement('h3')
        var correctAnswerText = document.createTextNode(`Correct answer: ${questions[i].correctAnswer}`)
        correctAnswer.appendChild(correctAnswerText)
        resultDiv.appendChild(correctAnswer)

        var breakLine4 = document.createElement('br')
        resultDiv.appendChild(breakLine4)

        usersAnswers()
    }

}



function usersAnswers() {
    var options = document.getElementsByClassName('options')
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = true
        for (var j = 0; j < usersSelectedAnswers.length; j++) {
            if (options[i].value === usersSelectedAnswers[j]) {
                options[i].checked = true
                usersSelectedAnswers.splice(j, 1);
                console.log(usersSelectedAnswers)

            }
        }
    }

    // var optionsName = document.querySelectorAll('.optionsNameResult').forEach(function (optionsName) {
    //     optionsName.className += ' hehe'

    // })
    // correctAnswers()
}


// function correctAnswers() {
//     var optionsName = document.getElementsByClassName('optionsNameResult')
//     var options = document.getElementsByClassName('options').value
//     for (var i = 0; i < questions.length; i++) {
//         for (var j = 0; j < options.length; j++) {
//             for (var k = 0; k < optionsName.length; k++) {
//                 // if (optionsName[j].innerHTML === questions[i].correctAnswer) {
//                 //     optionsName[j].className += ' hehe'
//                 //     if (optionsName[j].innerHTML != questions[i].correctAnswer) {
//                 //         optionsName[j].className += ' haha'
//                 //     }

//                 // }
//                 if (options[j] === questions[i].correctAnswer) {
//                     optionsName[k].className += ' hehe'

//                 }
//             }

//         }
//     }
// }


var minutes = 1;
var seconds = 60;

function time() {
    var timeDiv = document.getElementById('time')
    if (userName === "") {
        timeDiv.innerHTML = ""
    }
    else if (userName != "") {
        // minutes
        var minutes = document.createElement('span')
        minutes.setAttribute('id', 'minutes')
        var minutesText = document.createTextNode('2:')
        minutes.appendChild(minutesText)
        timeDiv.appendChild(minutes)


        // seconds
        var seconds = document.createElement('span')
        seconds.setAttribute('id', 'seconds')
        var secondsText = document.createTextNode('00')
        seconds.appendChild(secondsText)
        timeDiv.appendChild(seconds)
        startTimer()
    }

}


var interval = ""
function timer() {

    var getMinutes = document.getElementById('minutes')
    var getSeconds = document.getElementById('seconds')

    seconds--
    getSeconds.innerHTML = seconds;

    getMinutes.innerHTML = `${minutes}:`

    if (minutes === 0) {
        if (minutes === 0 && seconds === 0) {
            minutes++
            getMinutes.innerHTML = "00:"
            clearInterval(interval)
            questionsDiv.innerHTML = ""

            // alert("Time's Up")
            result()
        }
    }
    if (minutes > 0 && seconds === 60) {
        getSeconds.innerHTML = "00"
    }


    if (seconds === 0) {
        minutes--
        getMinutes.innerHTML = `${minutes}:`
        seconds = 60
        if (seconds === 60) {
            getSeconds.innerHTML = "00"
        }
    }
    if (seconds < 10) {
        getSeconds.innerHTML = `0${seconds}`
    }



}


function startTimer() {
    interval = setInterval(timer, 1000)

}
