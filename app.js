var questions = [
    {
        question: "Full Form of CPU",
        options: [
            "Central Processing Unit",
            "Central Programming Unit",
            "Central Private Unit"
        ],
        correctAnswer: "Central Processing Unit"

    },
    {
        question: "Full Form of RAM",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Central Processing Unit",
        ],
        correctAnswer: "Random Access Memory"

    },
    {
        question: "Full Form of ROM",
        options: [
            "Read Only Memory",
            "Read Access Memory",
            "Central Processing Unit",
        ],
        correctAnswer: "Read Only Memory"

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

    var questions_div = document.getElementById('questions_div')
    var question = document.createElement('h2')
    var questionText = document.createTextNode(questions[e].question)
    question.appendChild(questionText)
    questions_div.appendChild(question)

    var radioBtn1 = document.createElement('input')
    radioBtn1.setAttribute('type', 'radio')
    radioBtn1.setAttribute('name', 'selectBtn')
    radioBtn1.setAttribute('class', 'options')
    var option1 = document.createElement('span')
    option1.setAttribute('class', 'optionsName')
    questions_div.appendChild(radioBtn1)
    questions_div.appendChild(option1)


    var breakLine1 = document.createElement('br')
    questions_div.appendChild(breakLine1)

    var radioBtn2 = document.createElement('input')
    radioBtn2.setAttribute('type', 'radio')
    radioBtn2.setAttribute('name', 'selectBtn')
    radioBtn2.setAttribute('class', 'options')
    var option2 = document.createElement('span')
    option2.setAttribute('class', 'optionsName')
    questions_div.appendChild(radioBtn2)
    questions_div.appendChild(option2)

    var breakLine2 = document.createElement('br')
    questions_div.appendChild(breakLine2)

    var radioBtn3 = document.createElement('input')
    radioBtn3.setAttribute('type', 'radio')
    radioBtn3.setAttribute('name', 'selectBtn')
    radioBtn3.setAttribute('class', 'options')
    var option3 = document.createElement('span')
    option3.setAttribute('class', 'optionsName')
    questions_div.appendChild(radioBtn3)
    questions_div.appendChild(option3)

    var breakLine3 = document.createElement('br')
    questions_div.appendChild(breakLine3)

    var nextBtn = document.createElement('button')
    var nextBtnText = document.createTextNode("Next")
    nextBtn.setAttribute('onclick', 'nextQuestion()')
    nextBtn.appendChild(nextBtnText)
    questions_div.appendChild(nextBtn)


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
    var questions_div = document.getElementById('questions_div')
    var selectOption = document.getElementsByName('selectBtn')


    for (var i = 0; i < selectOption.length; i++) {
        if (selectOption[i].checked) {

            if (questionCount === questions.length - 1) {
                answer = selectOption[i].value
                usersSelectedAnswers.push(selectOption[i].value)
                console.log(selectOption[i].value)
                checkAnswer(questionCount, answer)
                questions_div.innerHTML = ""


                alert("completed")
                result();

                return;
            }


            else {
                answer = selectOption[i].value
                usersSelectedAnswers.push(selectOption[i].value)
                console.log(selectOption[i].value)
                selectOption[i].checked = false
                questions_div.innerHTML = ""
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
    var result_div = document.getElementById('result')

    var completeHeading = document.createElement('h2')
    var completeHeadingText = document.createTextNode("Completed!")
    completeHeading.appendChild(completeHeadingText)

    var result = document.createElement('h2')
    var resultText = document.createTextNode(`${userName}, You got ${score} out of ${questions.length}`)
    result.appendChild(resultText)


    result_div.appendChild(completeHeading)
    result_div.appendChild(result)


    // questions checking
    for (var i = 0; i < questions.length; i++) {
        var question = document.createElement('p')
        var questionText = document.createTextNode(questions[i].question)
        question.appendChild(questionText)
        result_div.appendChild(question)



        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'checkbox')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        radioBtn1.setAttribute('value', questions[i].options[0])
        var option1 = document.createElement('span')
        var option1Name = document.createTextNode(questions[i].options[0])
        option1.appendChild(option1Name)
        option1.setAttribute('class', 'optionsNameResult')
        result_div.appendChild(radioBtn1)
        result_div.appendChild(option1)


        var breakLine1 = document.createElement('br')
        result_div.appendChild(breakLine1)


        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'checkbox')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        radioBtn2.setAttribute('value', questions[i].options[1])
        var option2 = document.createElement('span')
        var option2Name = document.createTextNode(questions[i].options[1])
        option2.appendChild(option2Name)
        option2.setAttribute('class', 'optionsNameResult')
        result_div.appendChild(radioBtn2)
        result_div.appendChild(option2)

        var breakLine2 = document.createElement('br')
        result_div.appendChild(breakLine2)


        var radioBtn3 = document.createElement('input')
        radioBtn3.setAttribute('type', 'checkbox')
        radioBtn3.setAttribute('name', 'selectBtn')
        radioBtn3.setAttribute('class', 'options')
        radioBtn3.setAttribute('value', questions[i].options[2])
        var option3 = document.createElement('span')
        var option3Name = document.createTextNode(questions[i].options[2])
        option3.appendChild(option3Name)
        option3.setAttribute('class', 'optionsNameResult')

        result_div.appendChild(radioBtn3)
        result_div.appendChild(option3)

        var breakLine3 = document.createElement('br')
        result_div.appendChild(breakLine3)


        var correctAnswer = document.createElement('h3')
        var correctAnswerText = document.createTextNode(`Correct answer: ${questions[i].correctAnswer}`)
        correctAnswer.appendChild(correctAnswerText)
        result_div.appendChild(correctAnswer)

        var breakLine4 = document.createElement('br')
        result_div.appendChild(breakLine4)



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


var minutes = 2;
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
    if (seconds === 60) {
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
    if (seconds < 10 && seconds > 0) {
        getSeconds.innerHTML = `0${seconds}`
    }
    if (minutes === 0) {
        clearInterval(interval)
        getMinutes.innerHTML = "00:"
        getSeconds.innerHTML = "00"
        questionsDiv.innerHTML = ""

        alert("Time's Up")
        result()
    }

}
function startTimer() {
    interval = setInterval(timer, 1000)

}
