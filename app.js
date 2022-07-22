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
        question: "JavaScript ignores extra spaces",
        options: [
            "True",
            "False",
        ],
        correctAnswer: "True"
    },

    {
        question: "Which of the following is correct to write Hello World on the web page?",
        options: [
            'System.out.println("Hello World")',
            'document.write("Hello World")',
            'response.write("Hello World")',
            'print("Hello World")'
        ],
        correctAnswer: 'document.write("Hello World")'
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
            "Math.round(7.25)",
            "Math.rnd(7.25)",
            "round(7.25)",
            "rnd(7.25)"
        ],
        correctAnswer: "Math.round(7.25)"
    },

    {
        question: "Is it possible to declare a variable in Java Script along its type?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: "No"
    },


    {
        question: "Which of the following function of String object returns the character at the specified ind",
        options: [
            "concat()",
            "charCodeAt()",
            "charAt()",
            "indexOf()"
        ],
        correctAnswer: "charAt()"
    },

    {
        question: "What language defines the behavior of a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "XML"
        ],
        correctAnswer: "HTML"
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
var renderQuestions = document.getElementById('render_questions')
var questionsDiv = document.getElementById('questions_div')


function renderQuestion(e) {

    var getName = document.getElementById('name_field')
    var starting = document.getElementById('starting')
    if (getName.value === "") {

        var modal = document.createElement('div')
        modal.setAttribute('id', 'myModal')
        modal.setAttribute('class', 'modal')
        starting.appendChild(modal)

        var modalContent = document.createElement('div')
        modalContent.setAttribute('class', 'modal-content')
        modal.appendChild(modalContent)



        var text = document.createElement('p')
        var textNode = document.createTextNode('Please enter your name')
        text.appendChild(textNode)
        modalContent.appendChild(text)

        var okBtnDiv = document.createElement('div')
        okBtnDiv.setAttribute('id', 'ok_btn_div')
        var okBtn = document.createElement('button')
        okBtn.setAttribute('id', 'close')
        okBtn.setAttribute('class', 'close')
        var okBtnText = document.createTextNode('Ok')
        okBtn.appendChild(okBtnText)
        okBtnDiv.appendChild(okBtn)
        modalContent.appendChild(okBtnDiv)


        var getModal = document.getElementById("myModal");
        var startQuizBtn = document.getElementById('start_quiz_btn')

        var close = document.getElementById('close')


        // When the user clicks the button, open the modal 
        startQuizBtn.onclick = function () {
            getModal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        close.onclick = function () {
            getModal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == getModal) {
                getModal.style.display = "none";
            }
        }


        return false;
    }
    else {
        userName = getName.value
        starting.style.display = 'none'
        renderQuestions.style.display = "block"
        renderQuestions.style.marginTop = 50

        // time()

        if (questions[e].options.length === 2) {

            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var indexNum = questions.indexOf(questions[e])
            var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)

            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`Q: ${questions[e].question}`)
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


            var nextBtnDiv = document.createElement('div')
            nextBtnDiv.setAttribute('class', 'next_btn_div')
            var nextBtn = document.createElement('button')
            nextBtn.setAttribute('id', 'next_btn')
            var nextBtnText = document.createTextNode("Next")
            nextBtn.setAttribute('onclick', 'nextQuestion()')
            nextBtn.appendChild(nextBtnText)
            nextBtnDiv.appendChild(nextBtn)
            questionsDiv.appendChild(nextBtnDiv)

        }

        if (questions[e].options.length > 2) {
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var indexNum = questions.indexOf(questions[e])
            var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)

            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`Q: ${questions[e].question}`)
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

            var nextBtnDiv = document.createElement('div')
            nextBtnDiv.setAttribute('class', 'next_btn_div')
            var nextBtn = document.createElement('button')
            nextBtn.setAttribute('id', 'next_btn')
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
    try {
        var startingDiv = document.getElementById('starting')

        var imgDiv = document.createElement('div')
        imgDiv.setAttribute('id', 'img_div')
        startingDiv.appendChild(imgDiv)

        var jsLogo = document.createElement('img')
        jsLogo.setAttribute('src', 'https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?ssl=1')
        jsLogo.setAttribute('id', 'logo')
        imgDiv.appendChild(jsLogo)



        var headingDiv = document.createElement('div')
        headingDiv.setAttribute('id', 'heading_div')
        startingDiv.appendChild(headingDiv)

        var heading = document.createElement('p')
        heading.setAttribute('class', 'quiz_heading')
        var headingText = document.createTextNode('JavaScript Quiz')
        heading.appendChild(headingText)
        headingDiv.appendChild(heading)


        var mainDiv = document.createElement('div')
        startingDiv.appendChild(mainDiv)


        // Online Test heading
        var middleHeading = document.createElement('p')
        middleHeading.setAttribute('class', 'middle_heading')
        var middleHeadingText = document.createTextNode('Online Test: JavaScript Programming Test')
        middleHeading.appendChild(middleHeadingText)
        mainDiv.appendChild(middleHeading)


        // instructions
        var instructionsHeading = document.createElement('p')
        instructionsHeading.setAttribute('id', 'instructions_heading')
        var instructionsHeadingText = document.createTextNode('Instructions:')
        instructionsHeading.appendChild(instructionsHeadingText)
        mainDiv.appendChild(instructionsHeading)

        //number of questions
        var numberOfQuestions = document.createElement('p')
        numberOfQuestions.setAttribute('class', 'questions_and_time')
        var numberOfQuestionsText = document.createTextNode('Total Number of Questions: ')
        numberOfQuestions.appendChild(numberOfQuestionsText)
        mainDiv.appendChild(numberOfQuestions)

        var questionsNumber = document.createElement('span')
        questionsNumber.setAttribute('class', 'minutes_and_questionsNumber')
        var questionsNumberText = document.createTextNode('30')
        questionsNumber.appendChild(questionsNumberText)
        numberOfQuestions.appendChild(questionsNumber)


        var time = document.createElement('p')
        time.setAttribute('class', 'questions_and_time')
        var timeText = document.createTextNode('Time alloted: ')
        time.appendChild(timeText)
        mainDiv.appendChild(time)

        var minutes = document.createElement('span')
        minutes.setAttribute('class', 'minutes_and_questionsNumber')
        var minutesText = document.createTextNode('30 minutes')
        minutes.appendChild(minutesText)
        time.appendChild(minutes)

        var marks = document.createElement('p')
        marks.setAttribute('class', 'marks')
        var marksText = document.createTextNode('Each question carry 5 marks, no negative marking')
        marks.appendChild(marksText)
        mainDiv.appendChild(marks)



        var inputField = document.createElement("input")
        inputField.setAttribute('type', 'text')
        inputField.setAttribute('placeholder', 'Enter your name')
        inputField.setAttribute('id', 'name_field')
        mainDiv.appendChild(inputField)


        var breakLine = document.createElement('br')
        mainDiv.appendChild(breakLine)



        var noteHeading = document.createElement('p')
        noteHeading.setAttribute('id', 'note_heading')
        var noteHeadingText = document.createTextNode('Note:')
        noteHeading.appendChild(noteHeadingText)
        mainDiv.appendChild(noteHeading)


        var note1 = document.createElement('p')
        note1.setAttribute('class', 'note')
        var note1Text = document.createTextNode('Test will be submitted after time is Expired.')
        note1.appendChild(note1Text)
        mainDiv.appendChild(note1)

        var note2 = document.createElement('p')
        note2.setAttribute('class', 'note')
        var note2Text = document.createTextNode('Do not refresh the Page.')
        note2.appendChild(note2Text)
        mainDiv.appendChild(note2)

        var btnDiv = document.createElement('div')
        btnDiv.setAttribute('id', 'btn_div')
        var btn = document.createElement('button')
        btn.setAttribute('id', 'start_quiz_btn')
        var btnText = document.createTextNode("Start quiz")

        var nameField = document.getElementById('name_field')
        btn.setAttribute('onclick', 'renderQuestion(0)', nameField.value === '' ? 'renderQuestion(0)' : 'time()')
        btn.appendChild(btnText)
        btnDiv.appendChild(btn)
        mainDiv.appendChild(btnDiv)

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


    alert("Please select any 1 option")
    return false
}

function checkAnswer(index, answer) {
    if (questions[index].correctAnswer === answer) {
        score = score + 5;
        console.log(score)
    }
}

function result() {
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

    var resultDiv = document.getElementById('result')
    renderQuestions.style.display = 'none'

    var completeHeading = document.createElement('h2')
    completeHeading.style.color = "white"
    var completeHeadingText = document.createTextNode("Completed!")
    completeHeading.appendChild(completeHeadingText)

    var result = document.createElement('h2')
    result.style.color = "white"
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
        var question = document.createElement('p')
        question.style.color = "white"
        var questionText = document.createTextNode(questions[i].question)
        question.appendChild(questionText)
        resultDiv.appendChild(question)



        var div1 = document.createElement('div')
        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'checkbox')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        radioBtn1.setAttribute('value', questions[i].options[0])
        var option1 = document.createElement('span')
        option1.style.color = "white"
        var option1Name = document.createTextNode(questions[i].options[0])
        option1.appendChild(option1Name)
        option1.setAttribute('class', 'optionsNameResult')
        div1.appendChild(radioBtn1)
        div1.appendChild(option1)
        resultDiv.appendChild(div1)


        var breakLine1 = document.createElement('br')
        resultDiv.appendChild(breakLine1)

        var div2 = document.createElement('div')
        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'checkbox')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        radioBtn2.setAttribute('value', questions[i].options[1])
        var option2 = document.createElement('span')
        option2.style.color = "white"
        var option2Name = document.createTextNode(questions[i].options[1])
        option2.appendChild(option2Name)
        option2.setAttribute('class', 'optionsNameResult')
        div2.appendChild(radioBtn2)
        div2.appendChild(option2)
        resultDiv.appendChild(div2)


        var breakLine2 = document.createElement('br')
        resultDiv.appendChild(breakLine2)

        var div3 = document.createElement('div')
        var radioBtn3 = document.createElement('input')
        radioBtn3.setAttribute('type', 'checkbox')
        radioBtn3.setAttribute('name', 'selectBtn')
        radioBtn3.setAttribute('class', 'options')
        radioBtn3.setAttribute('value', questions[i].options[2])
        var option3 = document.createElement('span')
        option3.style.color = "white"
        var option3Name = document.createTextNode(questions[i].options[2])
        option3.appendChild(option3Name)
        option3.setAttribute('class', 'optionsNameResult')
        div3.appendChild(radioBtn3)
        div3.appendChild(option3)
        resultDiv.appendChild(div3)


        var breakLine3 = document.createElement('br')
        resultDiv.appendChild(breakLine3)


        var div4 = document.createElement('div')
        var radioBtn4 = document.createElement('input')
        radioBtn4.setAttribute('type', 'checkbox')
        radioBtn4.setAttribute('name', 'selectBtn')
        radioBtn4.setAttribute('class', 'options')
        radioBtn4.setAttribute('value', questions[i].options[3])
        var option4 = document.createElement('span')
        option4.style.color = "white"
        var option4Name = document.createTextNode(questions[i].options[3])
        option4.appendChild(option4Name)
        option4.setAttribute('class', 'optionsNameResult')
        div4.appendChild(radioBtn4)
        div4.appendChild(option4)
        resultDiv.appendChild(div4)


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
}



var minutes = 1;
var seconds = 60;

function time() {
    var timeDiv = document.getElementById('time')

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

        // alert("Time's Up")
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
