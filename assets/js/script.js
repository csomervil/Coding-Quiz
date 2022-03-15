var startbtn = document.getElementById('start-btn')

var questionbody = document.getElementById('questlist')

var answerBtns = document.getElementById('answer-btn')

var correctText = document.getElementById('correct')

var incorrectText = document.getElementById('incorrect')

startbtn.addEventListener('click', startQuiz)

var questionNumber = 0;

var questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "nothing", answer: false},
            { text: "computer spike system", answer: false},
            { text: "cascading style sheets", answer: true},
            { text: "comma style sheets", answer: false}

        ]
    },
    {

        question: "What is the value of true?",
        answers: [
            { text: "0", answer: false},
            { text: "-1", answer: false},
            { text: "2", answer: false},
            { text: "1", answer: true}

        ]
    },
    {

        question: "Strings are inclosed in what?",
        answers: [
            { text: "quotation marks", answer: true},
            { text: "parentheses", answer: false},
            { text: "nothing", answer: false},
            { text: "square brackets", answer: false}

        ]
    },
    {

        question: "Which of the following is false",
        answers: [
            { text: "1 == '1'", answer: false},
            { text: "10 - 1 + (-9) == false", answer: false},
            { text: "'span '.length === 4", answer: true},
            { text: "'lol'.split('l').length == 3", answer: false}

        ]

}

]

var questionElement = document.getElementById('question')

var answerElement1 = document.getElementById('btn-1')
var answerElement2 = document.getElementById('btn-2')
var answerElement3 = document.getElementById('btn-3')
var answerElement4 = document.getElementById('btn-4')

var points = 0;
var playerpoints = document.getElementById('points')

/* So that each button moves on to next question */
// answerBtns.addEventListener('click', () => {
//     if (questions.answers.answer[questionNumber]) {
//         correctText.classList.remove('hide')
//         incorrectText.classList.add('hide')
//     } else {
//         incorrectText.classList.remove('hide')
//         correctText.classList.add('hide')
//     }
//     questionNumber++
//     displayQuestion(questions[questionNumber])
// })

answerElement1.addEventListener('click', () => {
    if (questions[questionNumber].answers[0].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 5
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
    }
    questionNumber++
    displayQuestion(questions[questionNumber])
})

answerElement2.addEventListener('click', () => {
    if (questions[questionNumber].answers[1].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 7
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
    }
    questionNumber++
    displayQuestion(questions[questionNumber])
})

answerElement3.addEventListener('click', () => {
    if (questions[questionNumber].answers[2].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 5
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
    }
    playerpoints.innerText = "points:" + points
    questionNumber++
    displayQuestion(questions[questionNumber])
})

answerElement4.addEventListener('click', () => {
    if (questions[questionNumber].answers[3].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 10
        
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
    }
    questionNumber++
    displayQuestion(questions[questionNumber])
})

function startQuiz() {
    startbtn.classList.add('hide')
    questionbody.classList.remove('hide')
    
    displayQuestion(questions[questionNumber]);


}

/* So that the answers and question are displayed */
function displayQuestion(question) {
    questionElement.innerText = question.question
    answerElement1.innerText = question.answers[0].text
    answerElement2.innerText = question.answers[1].text
    answerElement3.innerText = question.answers[2].text
    answerElement4.innerText = question.answers[3].text
    playerpoints.innerText = "points:" + points
    

}

function playerResults() {

}

function goBack() {

}