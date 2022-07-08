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
    // {
    //     question: "Full Form of CPU",
    //     options: {
    //         a: "Central Processing unit",
    //         b: "Create Processing unit",
    //         c: "Central Password unit",
    //         d: "Hello Processing unit"
    //     },
    //     correctAnswer: "a"

    // }
]




function renderQuestions() {

    var questionName = document.getElementById('question')
    questionName.innerHTML = questions[0].question

    var optionss = document.getElementsByClassName('options')
    var optionsNames = document.getElementsByClassName('optionsName')
    for (var i = 0; i < optionss.length; i++) {
        optionss[i].value = questions[0].options[i]
        optionsNames[i].innerHTML = questions[0].options[i]
    }

    // for (var i = 0; i < questions.length; i++) {
    //     questionName.innerHTML = questions[i].question

    //     var optionss = document.getElementsByClassName('options')
    //     optionss.value = questions[i].options
    //     console.log(optionss.value)
    //     var optionsNames = document.getElementsByClassName('optionsName')
    //     optionsNames.innerHTML = questions[i].options
    // }
}


function nextQuestion() {
    var selectOption = document.getElementsByName('selectBtn')
    for (var i = 0; i < selectOption.length; i++) {
        if (selectOption[i].checked) {
            console.log(selectOption[i].value)
            selectOption[i].checked = false
            return true;
        }
    }
    alert("Please select any 1 option")
    return false
}