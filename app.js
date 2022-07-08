var questions = [
    {
        question: "Full Form of CPU",
        options: {
            a: "Central Processing unit",
            b: "Central Processing unit",
            c: "Central Processing unit"
        },
        correctAnswer: "a"

    },
    {
        question: "Full Form of CPU",
        options: {
            a: "Central Processing unit",
            b: "Create Processing unit",
            c: "Central Password unit",
            d: "Hello Processing unit"
        },
        correctAnswer: "a"

    }
]

function renderQuestions() {
    var question = document.getElementById('questions')
    for (var i = 0; i < questions.length; i++) {
        var questionName = document.createElement('h2')
        var questionText = document.createTextNode(questions[i].question)
        questionName.appendChild(questionText);
        question.appendChild(questionName)

        var option1 = document.getElementById('option1')
        var option2 = document.getElementById('option2')
        var option3 = document.getElementById('option3')
        var option4 = document.getElementById('option4')

        var option1Name = document.getElementById('option1Name')
        var option2Name = document.getElementById('option2Name')
        var option3Name = document.getElementById('option3Name')
        var option4Name = document.getElementById('option4Name')

        option1Name.innerHTML = questions[i].options.a
        option2Name.innerHTML = questions[i].options.b
        option3Name.innerHTML = questions[i].options.c
        option4.innerHTML = questions[i].options.d


        option1.value = questions[i].options.a
        option2.value = questions[i].options.b
        option3.value = questions[i].options.c
        option4.value = questions[i].options.d


        // var options = document.createElement('input')
        // options.setAttribute('type', 'radio');
        // options.createTextNode(questions[i].options[i])
        // options.appendChild(question)
    }
}