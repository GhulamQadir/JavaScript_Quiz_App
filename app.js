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
        correctAnswer: "Central Processing Unit"

    },
]


function renderQuestion(e) {

    var questionName = document.getElementById('question')
    questionName.innerHTML = questions[e].question

    var optionss = document.getElementsByClassName('options')
    var optionsNames = document.getElementsByClassName('optionsName')
    for (var i = 0; i < optionss.length; i++) {
        optionss[i].value = questions[e].options[i]
        optionsNames[i].innerHTML = questions[0].options[i]
    }
}



function hello() {
    try {
        var starting = document.getElementById('starting')
        var a = document.createElement("input")
        a.setAttribute('type', 'text')


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
    var selectOption = document.getElementsByName('selectBtn')
    for (var i = 0; i < selectOption.length; i++) {
        if (selectOption[i].checked) {
            console.log(selectOption[i].value)
            selectOption[i].checked = false

            questionCount++;
            renderQuestion(questionCount)

            return true;


        }
    }

    alert("Please select any 1 option")
    return false
}