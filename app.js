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
        question: "Which of the following function of String object returns the character at the specified index",
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
var correctAnswers = []
var getPercentage = (score / 100) * 100
var remarks = ""
var renderQuestions = document.getElementById('render_questions_div')
var questionsDiv = document.getElementById('questions_div')
var nameModal = document.getElementById("enter_name_modal");
var optionModal = document.getElementById("select_option_modal");
var quizCompletedMessage = document.getElementById('completed_popup')
var timesUpMessage = document.getElementById('times_up_popup')
var getName = document.getElementById('name_field')
var startingDiv = document.getElementById('starting')
var timeDiv = document.getElementById('time_div')
var questionCount = 0;
var minutes = 9;
var seconds = 60;


// errors modal()
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


// quiz completed modal
function quizCompletedPopUp() {
    quizCompletedMessage.style.display = "block"
    var popup = document.getElementById("completed_message");
    popup.classList.toggle("show");

    setTimeout(function () {
        quizCompletedMessage.style.display = "none"
    }, 2000)
}


// time's up modal
function timesUpPopup() {
    timesUpMessage.style.display = "block"
    var popup = document.getElementById("times_up_message");
    popup.classList.toggle("show");

    setTimeout(function () {
        timesUpMessage.style.display = "none"
    }, 2000)
}





// starting/instructions div
function starting() {
    startingDiv.style.display = "block"
}



// render question function
function renderQuestion(e) {
    var getName = document.getElementById('name_field')
    if (getName.value === "") {

        showErrorModal()

    }
    else {
        userName = getName.value
        startingDiv.style.display = 'none'
        renderQuestions.style.display = "block"
        renderQuestions.style.marginTop = 50


        // for two options question
        if (questions[e].options.length === 2) {

            // question num
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var questionNumber = document.createTextNode(`Question ${e + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)


            // question
            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`${questions[e].question}`)
            question.appendChild(questionText)
            questionsDiv.appendChild(question)


            // option 1
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


            // option 2
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



            if (e === questions.length - 1) {
                // complete quiz button
                var completeBtnDiv = document.createElement('div')
                completeBtnDiv.setAttribute('class', 'complete_btn_div')
                var completeBtn = document.createElement('button')
                completeBtn.setAttribute('class', 'complete_btn')
                var completeBtnText = document.createTextNode("Complete")
                completeBtn.setAttribute('onclick', 'nextQuestion()')
                completeBtn.appendChild(completeBtnText)
                completeBtnDiv.appendChild(completeBtn)
                questionsDiv.appendChild(completeBtnDiv)

            }
            else if (e != questions.length - 1) {

                // next question button
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

        }

        // for four options question
        if (questions[e].options.length > 2) {

            // question num
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'question_num')
            var questionNumber = document.createTextNode(`Question ${e + 1} of ${questions.length}`)
            questionNum.appendChild(questionNumber)
            questionsDiv.appendChild(questionNum)

            // question
            var question = document.createElement('p')
            question.setAttribute('class', 'question')
            var questionText = document.createTextNode(`${questions[e].question}`)
            question.appendChild(questionText)
            questionsDiv.appendChild(question)


            // option 1
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


            // option 2
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


            // option 3
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


            // option 4
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


            if (e === questions.length - 1) {

                // complete quiz button
                var completeBtnDiv = document.createElement('div')
                completeBtnDiv.setAttribute('class', 'complete_btn_div')
                var completeBtn = document.createElement('button')
                completeBtn.setAttribute('class', 'complete_btn')
                var completeBtnText = document.createTextNode("Complete")
                completeBtn.setAttribute('onclick', 'nextQuestion()')
                completeBtn.appendChild(completeBtnText)
                completeBtnDiv.appendChild(completeBtn)
                questionsDiv.appendChild(completeBtnDiv)

            }
            else if (e != questions.length - 1) {

                // next question button
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
        }

        // getting radio button
        var options = document.getElementsByClassName('options')

        // options name/value
        var optionsNames = document.getElementsByClassName('optionsName')

        for (var i = 0; i < options.length; i++) {
            options[i].value = questions[e].options[i]
            optionsNames[i].innerHTML = questions[e].options[i]

        }
    }
}




// next question function
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



                // showing quiz completion message and then result
                quizCompletedPopUp();
                result();

                return;
            }


            else {
                answer = selectOption[i].value
                usersSelectedAnswers.push(selectOption[i].value)

                selectOption[i].checked = false
                questionsDiv.innerHTML = ""
                checkAnswer(questionCount, answer)
                questionCount++;
                renderQuestion(questionCount)
                return true;
            }

        }


    }


    showErrorModal()
    return false
}


// checing user's answers and giving score according
function checkAnswer(index, answer) {
    if (questions[index].correctAnswer === answer) {
        correctAnswers.push(answer)
        score = score + 5;
    }
}


// showing result of quiz
function result() {
    renderQuestions.remove();
    clearInterval(interval)

    // Capitalizing username
    var firstChar = userName.slice(0, 1)
    firstChar = firstChar.toUpperCase()
    var otherChars = userName.slice(1)
    otherChars = otherChars.toLowerCase()
    userName = firstChar + otherChars


    var myMinutes = 9 - minutes
    var mySeconds = 60 - seconds

    if (mySeconds < 10) {
        mySeconds = `0${mySeconds}`
    }
    if (minutes === 0 && seconds === 0) {
        mySeconds = 0
        mySeconds = `0${seconds}`

    }

    // result main div
    var resultDiv = document.getElementById('result_div')
    renderQuestions.style.display = 'none'
    resultDiv.style.display = 'block'


    // result progress div...marks/percentage/remarks
    var resultProgress = document.createElement('div')
    resultProgress.setAttribute('id', 'result_progress')
    resultDiv.appendChild(resultProgress)

    // result
    var result = document.createElement('p')
    result.setAttribute('id', 'user_name')


    var name = document.createTextNode(`${userName}`)
    result.appendChild(name)


    // obtained marks
    var obtainedMarks = document.createElement('span')
    obtainedMarks.setAttribute('id', 'obtained_marks')
    var obtainedMarksText = document.createTextNode(`, You got ${score} out of 100`)
    obtainedMarks.appendChild(obtainedMarksText)
    result.appendChild(obtainedMarks)
    resultProgress.appendChild(result)


    // percentage
    var getPercentage = (score / 100) * 100
    var percentage = document.createElement('p')
    percentage.setAttribute('id', 'percentage')
    var percentageHeading = document.createTextNode("Percentage: ")
    percentage.appendChild(percentageHeading)

    var percent = document.createElement('span')
    percent.setAttribute('id', 'percent')
    var percentText = document.createTextNode(`${getPercentage}%`)
    percent.appendChild(percentText)
    percentage.appendChild(percent)
    resultProgress.appendChild(percentage)


    if (getPercentage >= 95) {
        remarks = "Outstanding"
    }
    else if (getPercentage >= 90 && getPercentage < 95) {
        remarks = "Excellent"
    }
    else if (getPercentage >= 80 && getPercentage < 90) {
        remarks = "Very Good"
    }
    else if (getPercentage >= 65 && getPercentage < 80) {
        remarks = "Good"
    }
    else if (getPercentage >= 50 && getPercentage < 65) {
        remarks = "You need to practise alot"
    }
    else {
        remarks = "Work Hard"
    }

    // Remarks
    var resultRemarks = document.createElement('p')
    resultRemarks.setAttribute('id', 'result_remarks')
    var remarksHeading = document.createTextNode(`Remarks: `)
    resultRemarks.appendChild(remarksHeading)
    resultProgress.appendChild(resultRemarks)

    var remarksOfQuiz = document.createElement('span')
    remarksOfQuiz.setAttribute('id', 'remarks')
    var remarksText = document.createTextNode(remarks)
    remarksOfQuiz.appendChild(remarksText)
    resultRemarks.appendChild(remarksOfQuiz)



    var timeElapsed = document.createElement('p')
    timeElapsed.setAttribute('id', 'time_elapsed')
    var timeElapsedText = document.createTextNode('Time Elapsed: ')
    timeElapsed.appendChild(timeElapsedText)
    resultProgress.appendChild(timeElapsed)

    var duration = document.createElement('span')
    duration.setAttribute('id', 'completion_time')
    var durationText = document.createTextNode(`${myMinutes}:${mySeconds}`)
    duration.appendChild(durationText)
    timeElapsed.appendChild(duration)

    // Result Progress Div ends here




    // Quiz result heading
    var quizResultHeading = document.createElement('p')
    quizResultHeading.setAttribute('id', 'quiz_result_heading')
    var quizResultHeadingText = document.createTextNode('Quiz Result')
    quizResultHeading.appendChild(quizResultHeadingText)
    resultDiv.appendChild(quizResultHeading)

    // questions checking
    for (var i = 0; i < questions.length; i++) {

        if (questions[i].options.length === 2) {

            // result question div
            var separateQuestionDiv = document.createElement('div')
            separateQuestionDiv.setAttribute('class', 'separate_question_div')
            resultDiv.appendChild(separateQuestionDiv)


            // question num
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'result_question_num')
            var questionNumText = document.createTextNode(`Question ${i + 1}`)
            questionNum.appendChild(questionNumText)
            separateQuestionDiv.appendChild(questionNum)


            // question
            var question = document.createElement('p')
            question.setAttribute('class', 'result_questions')
            var questionText = document.createTextNode(questions[i].question)
            question.appendChild(questionText)
            separateQuestionDiv.appendChild(question)



            // option 1
            var div1 = document.createElement('div')
            div1.setAttribute('class', 'result_options_div')
            var checkBox1 = document.createElement('input')
            checkBox1.setAttribute('type', 'checkbox')
            checkBox1.setAttribute('name', 'selectBtn')
            checkBox1.setAttribute('class', 'options')
            checkBox1.setAttribute('value', questions[i].options[0])
            var option1 = document.createElement('span')
            var option1Name = document.createTextNode(questions[i].options[0])
            option1.appendChild(option1Name)
            option1.setAttribute('class', 'optionsNameResult')
            div1.appendChild(checkBox1)
            div1.appendChild(option1)
            separateQuestionDiv.appendChild(div1)


            // option 2
            var div2 = document.createElement('div')
            div2.setAttribute('class', 'result_options_div')
            var checkBox2 = document.createElement('input')
            checkBox2.setAttribute('type', 'checkbox')
            checkBox2.setAttribute('name', 'selectBtn')
            checkBox2.setAttribute('class', 'options')
            checkBox2.setAttribute('value', questions[i].options[1])
            var option2 = document.createElement('span')
            var option2Name = document.createTextNode(questions[i].options[1])
            option2.appendChild(option2Name)
            option2.setAttribute('class', 'optionsNameResult')
            div2.appendChild(checkBox2)
            div2.appendChild(option2)
            separateQuestionDiv.appendChild(div2)


            // right or wrong answer
            var rightWrongAanswer = document.createElement('p')
            separateQuestionDiv.appendChild(rightWrongAanswer)


            checkCorrectAnswer([checkBox1, checkBox2], i);


        }
        if (questions[i].options.length === 4) {


            // question div
            var separateQuestionDiv = document.createElement('div')
            separateQuestionDiv.setAttribute('class', 'separate_question_div')
            resultDiv.appendChild(separateQuestionDiv)


            // question num
            var questionNum = document.createElement('p')
            questionNum.setAttribute('class', 'result_question_num')
            var questionNumText = document.createTextNode(`Question ${i + 1}`)
            questionNum.appendChild(questionNumText)
            separateQuestionDiv.appendChild(questionNum)


            // question
            var question = document.createElement('p')
            question.setAttribute('class', 'result_questions')
            var questionText = document.createTextNode(questions[i].question)
            question.appendChild(questionText)
            separateQuestionDiv.appendChild(question)


            // option 1
            var div1 = document.createElement('div')
            div1.setAttribute('class', 'result_options_div')
            var checkBox1 = document.createElement('input')
            checkBox1.setAttribute('type', 'checkbox')
            checkBox1.setAttribute('name', 'selectBtn')
            checkBox1.setAttribute('class', 'options')
            checkBox1.setAttribute('value', questions[i].options[0])
            var option1 = document.createElement('span')
            var option1Name = document.createTextNode(questions[i].options[0])
            option1.appendChild(option1Name)
            option1.setAttribute('class', 'optionsNameResult')
            div1.appendChild(checkBox1)
            div1.appendChild(option1)
            separateQuestionDiv.appendChild(div1)


            // option 2
            var div2 = document.createElement('div')
            div2.setAttribute('class', 'result_options_div')
            var checkBox2 = document.createElement('input')
            checkBox2.setAttribute('type', 'checkbox')
            checkBox2.setAttribute('name', 'selectBtn')
            checkBox2.setAttribute('class', 'options')
            checkBox2.setAttribute('value', questions[i].options[1])
            var option2 = document.createElement('span')
            var option2Name = document.createTextNode(questions[i].options[1])
            option2.appendChild(option2Name)
            option2.setAttribute('class', 'optionsNameResult')
            div2.appendChild(checkBox2)
            div2.appendChild(option2)
            separateQuestionDiv.appendChild(div2)


            // option 3
            var div3 = document.createElement('div')
            div3.setAttribute('class', 'result_options_div')
            var checkBox3 = document.createElement('input')
            checkBox3.setAttribute('type', 'checkbox')
            checkBox3.setAttribute('name', 'selectBtn')
            checkBox3.setAttribute('class', 'options')
            checkBox3.setAttribute('value', questions[i].options[2])
            var option3 = document.createElement('span')
            var option3Name = document.createTextNode(questions[i].options[2])
            option3.appendChild(option3Name)
            option3.setAttribute('class', 'optionsNameResult')
            div3.appendChild(checkBox3)
            div3.appendChild(option3)
            separateQuestionDiv.appendChild(div3)


            // option 4
            var div4 = document.createElement('div')
            div4.setAttribute('class', 'result_options_div')
            var checkBox4 = document.createElement('input')
            checkBox4.setAttribute('type', 'checkbox')
            checkBox4.setAttribute('name', 'selectBtn')
            checkBox4.setAttribute('class', 'options')
            checkBox4.setAttribute('value', questions[i].options[3])
            var option4 = document.createElement('span')
            var option4Name = document.createTextNode(questions[i].options[3])
            option4.appendChild(option4Name)
            option4.setAttribute('class', 'optionsNameResult')
            div4.appendChild(checkBox4)
            div4.appendChild(option4)
            separateQuestionDiv.appendChild(div4)


            // right or wrong answer
            var rightWrongAanswer = document.createElement('p')
            separateQuestionDiv.appendChild(rightWrongAanswer)


            checkCorrectAnswer([checkBox1, checkBox2, checkBox3, checkBox4], i);
        }

    }

}

function checkCorrectAnswer(checkBtns, currentQuestionIndex) {
    for (var index = 0; index < checkBtns.length; index++) {
        var checkBtn = checkBtns[index];
        checkBtn.checked = checkBtn.value === usersSelectedAnswers[currentQuestionIndex];
        checkBtn.disabled = true


        if (checkBtn.value === questions[currentQuestionIndex].correctAnswer) {
            checkBtn.parentElement.style.backgroundColor = "lightgreen"
        }
        if (checkBtn.checked === true) {
            checkBtn.parentElement.style.backgroundColor = "#ffb3b3"
            if (checkBtn.value === questions[currentQuestionIndex].correctAnswer) {
                checkBtn.parentElement.parentElement.lastChild.innerHTML = "Your answer is correct"
                checkBtn.parentElement.parentElement.lastChild.className = "correct_answer"
                checkBtn.parentElement.style.backgroundColor = "lightgreen"

            }
            else if (checkBtn.value !== questions[currentQuestionIndex].correctAnswer) {
                checkBtn.parentElement.parentElement.lastChild.innerHTML = "Your answer is wrong"
                checkBtn.parentElement.parentElement.lastChild.className = "wrong_answer"
            }
        }
    }

}



// time function.... time div rendering
function time() {
    if (getName.value === "") {
    }
    else {
        timeDiv.style.display = "block"

        // timer starts
        startTimer()
    }
}


// timer function
var interval = ""
function timer() {

    var getMinutes = document.getElementById('minutes')
    var getSeconds = document.getElementById('seconds')

    seconds--
    getSeconds.innerHTML = seconds;
    getMinutes.innerHTML = `${minutes}:`


    if (minutes < 10) {
        getMinutes.innerHTML = `0${minutes}:`

    }
    if (minutes === 0 && seconds === 0) {
        seconds = 0
        console.log(minutes)
        console.log(seconds)
        getMinutes.innerHTML = "00:"
        clearInterval(interval)
        renderQuestions.innerHTML = ""
        renderQuestions.style.display = 'none'


        // if time's up the render these 2 functions
        timesUpPopup();
        result();
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


// start timer function
function startTimer() {
    interval = setInterval(timer, 1000)
}