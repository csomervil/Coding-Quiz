var startbtn = document.getElementById('start-btn')

var scoreBtn = document.getElementById('score-btn')

var questionbody = document.getElementById('questlist')

var answerBtns = document.getElementById('answer-btn')

// response is currently unused var response = document.getElementById('response')

var correctText = document.getElementById('correct')

var incorrectText = document.getElementById('incorrect')

startbtn.addEventListener('click', startQuiz)

scoreBtn.addEventListener('click', goScore)

var subBtn = document.getElementById('submit')

subBtn.addEventListener('click', addLi);

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

points = 0;
var playerpoints = document.getElementById('points')
var inputBoard = document.getElementById('inputboard')
var scoreBoard = document.getElementById('scoreboard')

var timerEl = document.getElementById('timer')

var deductime = 0;

answerElement1.addEventListener('click', () => {
    if (questions[questionNumber].answers[0].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 5
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
        deductime = -5;
    }
    playerpoints.innerHTML = "points:" + points
    questionNumber++
    displayQuestion(questions[questionNumber])
})

answerElement2.addEventListener('click', () => {
    if (questions[questionNumber].answers[1].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 5
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
        deductime = -5;
    }
    playerpoints.innerHTML = "points:" + points
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
        deductime = -5;
    }
    playerpoints.innerHTML = "points:" + points
    questionNumber++
    displayQuestion(questions[questionNumber])
})

answerElement4.addEventListener('click', () => {
    if (questions[questionNumber].answers[3].answer) {
        correctText.classList.remove('hide')
        incorrectText.classList.add('hide')
        points = points + 5
        
    } else {
        incorrectText.classList.remove('hide')
        correctText.classList.add('hide')
        deductime = -5;
    }
    playerpoints.innerHTML = "points:" + points
    questionNumber++
    displayQuestion(questions[questionNumber])
})

function startQuiz() {
    points = 0;
    playerpoints.innerHTML = "points:" + 0
    timerEl.textContent = "Time Remaining: 14"
    playerpoints.classList.remove('hide')
    startbtn.classList.add('hide')
    questionbody.classList.remove('hide')
    scoreBtn.classList.add('hide')
    timerEl.classList.remove('hide')

    countdown()

    displayQuestion(questions[questionNumber]);


}

/* So that the answers and question are displayed */
function displayQuestion(question) {
    
    if (questionNumber === 4) {
        questionbody.classList.add('hide')
        inputBoard.classList.remove('hide')
        timerEl.classList.add('hide')
        tiemrLeft = 0;
    } else {
        questionElement.innerText = question.question
        answerElement1.innerText = question.answers[0].text
        answerElement2.innerText = question.answers[1].text
        answerElement3.innerText = question.answers[2].text
        answerElement4.innerText = question.answers[3].text
    }

}

function goScore() {
    playerpoints.classList.add('hide')
    correctText.classList.add('hide')
    incorrectText.classList.add('hide')
    inputBoard.classList.add('hide')
    scoreBtn.classList.add('hide')
    startbtn.classList.add('hide')
    backButton.classList.remove('hide')
    scoreBoard.classList.remove('hide')
    
}

function goBack() {
    scoreBtn.classList.remove('hide')
    scoreBoard.classList.add('hide')
    startbtn.classList.remove('hide')
    questionNumber = 0;
}

function goStart() {
    questionbody.classList.add('hide')
    inputBoard.classList.remove('hide')
    goScore();
    goBack();
}


function addLi () {
    var 
        txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("li"),
        txtNode = document.createTextNode(txtVal + " " + " " + points);
    if (txtVal === "") {
        alert("Username Required")
        return false;
    }
        
    goScore();
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
    saveAll()


}


var backButton = document.getElementById('back-btn')
backButton.addEventListener("click", goBack)

// totaltime = 0;
// timerEl.textContent = 'Time Remaining: ' + (countdown(15) - 1);
function countdown() {
    timeLeft = 14;
    var timeInterval = setInterval(function() {
        if (questionbody.classList.contains('hide')) {
            clearInterval(timeInterval);
        }  
        if (timeLeft >= 1) {
            timerEl.textContent = 'Time Remaining: ' + (timeLeft - 1);
            timeLeft--;
            timeLeft = timeLeft + deductime;
            deductime = 0;
            return timeLeft;
        } else if (timeLeft  <= 0) {
            timerEl.textContent = 'Try Again?';
            timeLeft--;
            alert("Time is up")
            clearInterval(timeInterval);
            goStart();
        
        } 

    }, 1000);
  }

function saveAll() {
    var oldStorage = [];

    var values = document.querySelectorAll('li');
    for (var i = 0; i < values.length; i++) {
      oldStorage.push(values[i].innerHTML);
    }
    var newStorage = oldStorage
    localStorage.setItem('items', JSON.stringify(newStorage));
}

function loadAll() {

    var storedvalue = localStorage.getItem('items');
    console.log(storedvalue);

    if (!storedvalue) {
        return false;
    }

    storedvalue = JSON.parse(storedvalue);
    console.log(storedvalue);

    for (var i = 0; i < storedvalue.length; i++) {
        newword = storedvalue[i]
        var
            listNode = document.getElementById('list'),
            liNode = document.createElement("li"),
            txtNode = document.createTextNode(newword);
            
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
    }

}

  loadAll();