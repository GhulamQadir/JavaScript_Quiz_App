var questions = [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "js",
            "script",
            "scripting",
            "javascript"
        ],
        correctAnswer: "script"
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

    // {
    //     question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    //     options: [
    //         "if(i <> 5)",
    //         "if i=! 5 then",
    //         "if(i != 5)",
    //         "if i <> 5"
    //     ],
    //     correctAnswer: "if(i != 5)"
    // },

    // {
    //     question: "How does a FOR loop start?",
    //     options: [
    //         "for i = 1 to 10",
    //         "for(i=0; i<=10; i++)",
    //         "for(i <= 10; i++)",
    //         "for(i = 0; i<=10)"
    //     ],
    //     correctAnswer: "for(i=0; i<=10; i++)"
    // },

    // {
    //     question: "What will the following code return: Boolean(10 > 9)",
    //     options: [
    //         "true",
    //         "false",
    //     ],
    //     correctAnswer: "true"
    // },

    // {
    //     question: "Which operator is used to assign a value to a variable?",
    //     options: [
    //         "+",
    //         "-",
    //         "*",
    //         "="
    //     ],
    //     correctAnswer: '='
    // },


    // {
    //     question: "What is the correct way to write a JavaScript array?",
    //     options: [
    //         'var colors  = ("red", "green", "blue", "orange")',
    //         'var colors  = "red", "green", "blue", "orange"',
    //         'var colors  = (1:"red", 2:"green", 3:"blue", 4:"orange")',
    //         'var colors  = ["red", "green", "blue", "orange"]'
    //     ],
    //     correctAnswer: 'var colors  = ["red", "green", "blue", "orange"]'
    // },

    // {
    //     question: "How can you add a comment in a JavaScript?",
    //     options: [
    //         "!--This is a comment-->",
    //         "'This is a comment'",
    //         "// This is a comment",
    //         "!* This is a comment*!"
    //     ],
    //     correctAnswer: "// This is a comment"
    // },

    // {
    //     question: "Which event occurs when the user clicks on an HTML element?",
    //     options: [
    //         "onmouseover",
    //         "onclick",
    //         "onmouseclick",
    //         "onblur"
    //     ],
    //     correctAnswer: "onclick"

    // },

    // {
    //     question: " How does Java Script store dates in objects of Date type?",
    //     options: [
    //         "The number of days since January 1st, 1900",
    //         "The number of milliseconds since January 1st, 1970",
    //         "The number of seconds since January 1st, 1970",
    //         "The number of picoseconds since January 1st, 1970"
    //     ],
    //     correctAnswer: "The number of milliseconds since January 1st, 1970"

    // },

    // {
    //     question: "Which of the following is not a valid JavaScript variable name?",
    //     options: [
    //         "2java",
    //         "_java_and_java_names",
    //         "javaandjava",
    //         "None of the above"
    //     ],
    //     correctAnswer: "2java"

    // },

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

    // {
    //     question: "JavaScript ignores extra spaces",
    //     options: [
    //         "True",
    //         "False",
    //     ],
    //     correctAnswer: "True"
    // },

    // {
    //     question: "Which of the following is correct to write Hello World on the web page?",
    //     options: [
    //         'System.out.println("Hello World")',
    //         'document.write("Hello World")',
    //         'response.write("Hello World")',
    //         'print("Hello World")'
    //     ],
    //     correctAnswer: 'document.write("Hello World")'
    // },

    // {
    //     question: "How do you round the number 7.25, to the nearest integer?",
    //     options: [
    //         "Math.round(7.25)",
    //         "Math.rnd(7.25)",
    //         "round(7.25)",
    //         "rnd(7.25)"
    //     ],
    //     correctAnswer: "Math.round(7.25)"
    // },

    // {
    //     question: "Is it possible to declare a variable in Java Script along its type?",
    //     options: [
    //         "Yes",
    //         "No"
    //     ],
    //     correctAnswer: "No"
    // },


    // {
    //     question: "Which of the following function of String object returns the character at the specified ind",
    //     options: [
    //         "concat()",
    //         "charCodeAt()",
    //         "charAt()",
    //         "indexOf()"
    //     ],
    //     correctAnswer: "charAt()"
    // },

    // {
    //     question: "What language defines the behavior of a web page?",
    //     options: [
    //         "HTML",
    //         "CSS",
    //         "JavaScript",
    //         "XML"
    //     ],
    //     correctAnswer: "HTML"
    // },

    // {
    //     question: "Is JavaScript case-sensitive?",
    //     options: [
    //         "Yes",
    //         "No"
    //     ],
    //     correctAnswer: "Yes"
    // },

]

var score = 0
var answer = ""
var userName = ""
var usersSelectedAnswers = []
var correctAnswers = []
var renderQuestions = document.getElementById('render_questions')
var questionsDiv = document.getElementById('questions_div')
var nameModal = document.getElementById("enter_name_modal");
var optionModal = document.getElementById("select_option_modal");



// error modal
var closeModal;
function showErrorModal() {
    nameModal.style.display = "block";
    optionModal.style.display = "block"

    closeModal = function closeErrorModal() {
        nameModal.style.display = "none";
        optionModal.style.display = "none"
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == nameModal || event.target == optionModal) {
            nameModal.style.display = "none";
            optionModal.style.display = "none"
        }
    }
}



function renderQuestion(e) {

    var getName = document.getElementById('name_field')
    var starting = document.getElementById('starting')
    if (getName.value === "") {

        showErrorModal()

    }
    else {
        userName = getName.value
        starting.style.display = 'none'
        renderQuestions.style.display = "block"
        renderQuestions.style.marginTop = 50

        if (questions[e].options.length === 2) {

            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var questionNumber = document.createTextNode(`Question ${e + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)

            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`${questions[e].question}`)
            question.appendChild(questionText)
            questionsDiv.appendChild(question)


            var option1Div = document.createElement('div')
            option1Div.setAttribute('class', 'optionsDiv')
            var radioBtn1 = document.createElement('input')
            radioBtn1.setAttribute('type', 'radio')
            radioBtn1.setAttribute('name', 'selectBtn')
            radioBtn1.setAttribute('class', 'options')
            var option1 = document.createElement('span')
            option1.setAttribute('class', 'optionsName')
            option1Div.appendChild(radioBtn1)
            option1Div.appendChild(option1)
            questionsDiv.appendChild(option1Div)


            var breakLine1 = document.createElement('br')
            questionsDiv.appendChild(breakLine1)

            var option2Div = document.createElement('div')
            option2Div.setAttribute('class', 'optionsDiv')
            var radioBtn2 = document.createElement('input')
            radioBtn2.setAttribute('type', 'radio')
            radioBtn2.setAttribute('name', 'selectBtn')
            radioBtn2.setAttribute('class', 'options')
            var option2 = document.createElement('span')
            option2.setAttribute('class', 'optionsName')
            option2Div.appendChild(radioBtn2)
            option2Div.appendChild(option2)
            questionsDiv.appendChild(option2Div)

            var breakLine2 = document.createElement('br')
            questionsDiv.appendChild(breakLine2)


            var nextBtnDiv = document.createElement('div')
            nextBtnDiv.setAttribute('class', 'next_btn_div')
            var nextBtn = document.createElement('button')
            nextBtn.setAttribute('class', 'next_question_btn')
            var nextBtnText = document.createTextNode("Next")
            nextBtn.setAttribute('onclick', 'nextQuestion()')
            nextBtn.appendChild(nextBtnText)
            nextBtnDiv.appendChild(nextBtn)
            questionsDiv.appendChild(nextBtnDiv)

        }

        if (questions[e].options.length > 2) {
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var questionNumber = document.createTextNode(`Question ${e + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)

            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`${questions[e].question}`)
            question.appendChild(questionText)
            questionsDiv.appendChild(question)

            var option1Div = document.createElement('div')
            option1Div.setAttribute('class', 'optionsDiv')
            var radioBtn1 = document.createElement('input')
            radioBtn1.setAttribute('type', 'radio')
            radioBtn1.setAttribute('name', 'selectBtn')
            radioBtn1.setAttribute('class', 'options')
            var option1 = document.createElement('span')
            option1.setAttribute('class', 'optionsName')
            option1Div.appendChild(radioBtn1)
            option1Div.appendChild(option1)
            questionsDiv.appendChild(option1Div)

            var breakLine1 = document.createElement('br')
            questionsDiv.appendChild(breakLine1)

            var option2Div = document.createElement('div')
            option2Div.setAttribute('class', 'optionsDiv')
            var radioBtn2 = document.createElement('input')
            radioBtn2.setAttribute('type', 'radio')
            radioBtn2.setAttribute('name', 'selectBtn')
            radioBtn2.setAttribute('class', 'options')
            var option2 = document.createElement('span')
            option2.setAttribute('class', 'optionsName')
            option2Div.appendChild(radioBtn2)
            option2Div.appendChild(option2)
            questionsDiv.appendChild(option2Div)

            var breakLine2 = document.createElement('br')
            questionsDiv.appendChild(breakLine2)

            var option3Div = document.createElement('div')
            option3Div.setAttribute('class', 'optionsDiv')
            var radioBtn3 = document.createElement('input')
            radioBtn3.setAttribute('type', 'radio')
            radioBtn3.setAttribute('name', 'selectBtn')
            radioBtn3.setAttribute('class', 'options')
            var option3 = document.createElement('span')
            option3.setAttribute('class', 'optionsName')
            option3Div.appendChild(radioBtn3)
            option3Div.appendChild(option3)
            questionsDiv.appendChild(option3Div)

            var breakLine3 = document.createElement('br')
            questionsDiv.appendChild(breakLine3)


            var option4Div = document.createElement('div')
            option4Div.setAttribute('class', 'optionsDiv')
            var radioBtn4 = document.createElement('input')
            radioBtn4.setAttribute('type', 'radio')
            radioBtn4.setAttribute('name', 'selectBtn')
            radioBtn4.setAttribute('class', 'options')
            var option4 = document.createElement('span')
            option4.setAttribute('class', 'optionsName')
            option4Div.appendChild(radioBtn4)
            option4Div.appendChild(option4)
            questionsDiv.appendChild(option4Div)

            var breakLine4 = document.createElement('br')
            questionsDiv.appendChild(breakLine4)


            var nextBtnDiv = document.createElement('div')
            nextBtnDiv.setAttribute('class', 'next_btn_div')
            var nextBtn = document.createElement('button')
            nextBtn.setAttribute('class', 'next_question_btn')
            var nextBtnText = document.createTextNode("Next")
            nextBtn.setAttribute('onclick', 'nextQuestion()')
            nextBtn.appendChild(nextBtnText)
            nextBtnDiv.appendChild(nextBtn)
            questionsDiv.appendChild(nextBtnDiv)
        }
        var options = document.getElementsByClassName('options')
        var optionsNames = document.getElementsByClassName('optionsName')

        for (var i = 0; i < options.length; i++) {
            options[i].value = questions[e].options[i]
            optionsNames[i].innerHTML = questions[e].options[i]

        }
    }
}



function starting() {
    var startingDiv = document.getElementById('starting')
    startingDiv.style.display = "block"
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
                renderQuestions.style.display = 'none'

                clearInterval(interval)



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


    // alert("Please select any 1 option")
    showErrorModal()
    return false
}

function checkAnswer(index, answer) {
    if (questions[index].correctAnswer === answer) {
        correctAnswers.push(answer)
        score = score + 5;
        console.log(score)
    }
}

function result() {
    document.getElementById('render_questions').remove();
    document.body.style.backgroundColor = "white"
    clearInterval(interval)

    var myMinutes = 1 - minutes
    var mySeconds = 60 - seconds

    if (mySeconds < 10) {
        mySeconds = `0${mySeconds}`
    }
    if (minutes === 0 && seconds === 0) {
        myMinutes = 2;
        mySeconds = 0
        mySeconds = `0${seconds}`

    }

    var resultDiv = document.getElementById('result_div')
    renderQuestions.style.display = 'none'
    resultDiv.style.display = 'block'

    var completeHeading = document.createElement('h2')
    var completeHeadingText = document.createTextNode("Completed!")
    completeHeading.appendChild(completeHeadingText)

    var result = document.createElement('h2')
    var resultText = document.createTextNode(`${userName}, You got ${score} out of ${100}`)
    result.appendChild(resultText)


    resultDiv.appendChild(completeHeading)
    resultDiv.appendChild(result)


    var timeElapsed = document.createElement('h3')
    timeElapsed.setAttribute('class', 'time_elapsed')
    var timeElapsedText = document.createTextNode('Time Elapsed: ')
    timeElapsed.appendChild(timeElapsedText)
    resultDiv.appendChild(timeElapsed)

    var duration = document.createElement('span')
    duration.setAttribute('class', 'time_elapsed')
    var durationText = document.createTextNode(`${myMinutes}:${mySeconds}`)
    duration.appendChild(durationText)
    resultDiv.appendChild(duration)




    // questions checking
    for (var i = 0; i < questions.length; i++) {

        if (questions[i].options.length === 2) {

            var separateQuestionDiv = document.createElement('div')
            separateQuestionDiv.setAttribute('class', 'separate_question_div')
            resultDiv.appendChild(separateQuestionDiv)

            var question = document.createElement('p')
            question.setAttribute('class', 'result_questions')
            var questionText = document.createTextNode(`Q:${i + 1})${questions[i].question}`)
            question.appendChild(questionText)
            separateQuestionDiv.appendChild(question)



            var div1 = document.createElement('div')
            div1.setAttribute('class', 'result_options_div')
            var radioBtn1 = document.createElement('input')
            radioBtn1.setAttribute('type', 'checkbox')
            radioBtn1.setAttribute('name', 'selectBtn')
            radioBtn1.setAttribute('class', 'options')
            radioBtn1.setAttribute('value', questions[i].options[0])
            var option1 = document.createElement('span')
            var option1Name = document.createTextNode(questions[i].options[0])
            option1.appendChild(option1Name)
            option1.setAttribute('class', 'optionsNameResult')
            div1.appendChild(radioBtn1)
            div1.appendChild(option1)
            separateQuestionDiv.appendChild(div1)


            var div2 = document.createElement('div')
            div2.setAttribute('class', 'result_options_div')
            var radioBtn2 = document.createElement('input')
            radioBtn2.setAttribute('type', 'checkbox')
            radioBtn2.setAttribute('name', 'selectBtn')
            radioBtn2.setAttribute('class', 'options')
            radioBtn2.setAttribute('value', questions[i].options[1])
            var option2 = document.createElement('span')
            var option2Name = document.createTextNode(questions[i].options[1])
            option2.appendChild(option2Name)
            option2.setAttribute('class', 'optionsNameResult')
            div2.appendChild(radioBtn2)
            div2.appendChild(option2)
            separateQuestionDiv.appendChild(div2)


            var correctAnswer = document.createElement('p')
            correctAnswer.setAttribute('class', 'correct_answer')
            separateQuestionDiv.appendChild(correctAnswer)


            checkCorrectAnswer([radioBtn1, radioBtn2], i);


        }
        if (questions[i].options.length === 4) {

            var separateQuestionDiv = document.createElement('div')
            separateQuestionDiv.setAttribute('class', 'separate_question_div')
            resultDiv.appendChild(separateQuestionDiv)

            var question = document.createElement('p')
            question.setAttribute('class', 'result_questions')
            var questionText = document.createTextNode(`Q:${i + 1})${questions[i].question}`)
            question.appendChild(questionText)
            separateQuestionDiv.appendChild(question)



            var div1 = document.createElement('div')
            div1.setAttribute('class', 'result_options_div')
            var radioBtn1 = document.createElement('input')
            radioBtn1.setAttribute('type', 'checkbox')
            radioBtn1.setAttribute('name', 'selectBtn')
            radioBtn1.setAttribute('class', 'options')
            radioBtn1.setAttribute('value', questions[i].options[0])
            var option1 = document.createElement('span')
            var option1Name = document.createTextNode(questions[i].options[0])
            option1.appendChild(option1Name)
            option1.setAttribute('class', 'optionsNameResult')
            div1.appendChild(radioBtn1)
            div1.appendChild(option1)
            separateQuestionDiv.appendChild(div1)


            var div2 = document.createElement('div')
            div2.setAttribute('class', 'result_options_div')
            var radioBtn2 = document.createElement('input')
            radioBtn2.setAttribute('type', 'checkbox')
            radioBtn2.setAttribute('name', 'selectBtn')
            radioBtn2.setAttribute('class', 'options')
            radioBtn2.setAttribute('value', questions[i].options[1])
            var option2 = document.createElement('span')
            var option2Name = document.createTextNode(questions[i].options[1])
            option2.appendChild(option2Name)
            option2.setAttribute('class', 'optionsNameResult')
            div2.appendChild(radioBtn2)
            div2.appendChild(option2)
            separateQuestionDiv.appendChild(div2)


            var div3 = document.createElement('div')
            div3.setAttribute('class', 'result_options_div')
            var radioBtn3 = document.createElement('input')
            radioBtn3.setAttribute('type', 'checkbox')
            radioBtn3.setAttribute('name', 'selectBtn')
            radioBtn3.setAttribute('class', 'options')
            radioBtn3.setAttribute('value', questions[i].options[2])
            var option3 = document.createElement('span')
            var option3Name = document.createTextNode(questions[i].options[2])
            option3.appendChild(option3Name)
            option3.setAttribute('class', 'optionsNameResult')
            div3.appendChild(radioBtn3)
            div3.appendChild(option3)
            separateQuestionDiv.appendChild(div3)


            var div4 = document.createElement('div')
            div4.setAttribute('class', 'result_options_div')
            var radioBtn4 = document.createElement('input')
            radioBtn4.setAttribute('type', 'checkbox')
            radioBtn4.setAttribute('name', 'selectBtn')
            radioBtn4.setAttribute('class', 'options')
            radioBtn4.setAttribute('value', questions[i].options[3])
            var option4 = document.createElement('span')
            var option4Name = document.createTextNode(questions[i].options[3])
            option4.appendChild(option4Name)
            option4.setAttribute('class', 'optionsNameResult')
            div4.appendChild(radioBtn4)
            div4.appendChild(option4)
            separateQuestionDiv.appendChild(div4)


            var correctAnswer = document.createElement('p')
            correctAnswer.setAttribute('class', 'correct_answer')
            separateQuestionDiv.appendChild(correctAnswer)


            checkCorrectAnswer([radioBtn1, radioBtn2, radioBtn3, radioBtn4], i);
        }

    }

}

function checkCorrectAnswer(rdBtns, currentQuestionIndex) {
    for (var index = 0; index < rdBtns.length; index++) {
        var rdBtn = rdBtns[index];
        rdBtn.checked = rdBtn.value === usersSelectedAnswers[currentQuestionIndex];
        rdBtn.disabled = true

        if (rdBtn.checked === true) {
            rdBtn.parentElement.style.backgroundColor = "red"
            if (rdBtn.value === questions[currentQuestionIndex].correctAnswer) {
                rdBtn.parentElement.parentElement.lastChild.innerHTML = "Your answer is correct"
                rdBtn.parentElement.parentElement.lastChild.style.className = "correct_answer"

            }
            else if (rdBtn.value !== questions[currentQuestionIndex].correctAnswer) {
                rdBtn.parentElement.parentElement.lastChild.innerHTML = "Your answer is wrong"
                rdBtn.parentElement.parentElement.lastChild.className = "wrong_answer"
            }
        }
        if (rdBtn.value === questions[currentQuestionIndex].correctAnswer) {
            rdBtn.parentElement.style.backgroundColor = "green"
        }
    }
}



var minutes = 1;
var seconds = 60;

function time() {
    var getName = document.getElementById('name_field')
    if (getName.value === "") {
    }
    else {
        var timeDiv = document.getElementById('time')
        timeDiv.style.display = "block"

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


    if (minutes === 0 && seconds === 0) {
        seconds = 0
        console.log(minutes)
        console.log(seconds)
        getMinutes.innerHTML = "00:"
        clearInterval(interval)
        renderQuestions.innerHTML = ""

        renderQuestions.style.display = 'none'
        result()
    }
    if (minutes === 0) {
        getMinutes.innerHTML = `0${minutes}:`
    }


    if (seconds === 0) {
        minutes--
        getMinutes.innerHTML = `${minutes}:`
        seconds = 60
        if (minutes < 1 && seconds === 60) {
            getSeconds.innerHTML = seconds

        }
        else if (seconds === 60) {
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