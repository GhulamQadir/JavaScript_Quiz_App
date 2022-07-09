var questions = [
    {
        question: "Full Form of CPU",
        options: [
            "Central Processing unit",
            "Central Programming unit",
            "Central Processing unit"
        ],
        correctAnswer: "Central Processing Unit"

    },
    {
        question: "Full Form of RAM",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Central Processing unit"
        ],
        correctAnswer: "Random Access Memory"

    },
    {
        question: "Full Form of ROM",
        options: [
            "Read Only Memory",
            "Read Access Memory",
            "Central Processing unit"
        ],
        correctAnswer: "Read Only Memory"

    },
]


function renderQuestion(e) {
    var starting = document.getElementById('starting')
    starting.innerHTML = ""

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


        var breakLine = document.createElement('br')

        var btn = document.createElement('button')
        var btnText = document.createTextNode("Start quiz")
        btn.setAttribute('onclick', 'renderQuestion(0)')

        btn.appendChild(btnText)


        starting.appendChild(a)
        starting.appendChild(breakLine)
        starting.appendChild(btn)

        // var a = document.getElementById('questions_div')
        // a.style.display = 'none'

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
                console.log(selectOption[i].value)
                alert("completed")
                questions_div.innerHTML = "Completed"
                return;
            }
            else {
                console.log(selectOption[i].value)
                selectOption[i].checked = false
                questions_div.innerHTML = ""

                questionCount++;
                renderQuestion(questionCount)
                return true;
            }

        }
    }

    alert("Please select any 1 option")
    return false
}