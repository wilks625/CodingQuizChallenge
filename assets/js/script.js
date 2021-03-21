//variables used
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const highscores = document.getElementById('hs-btn');
const submitButton = document.getElementById("submit-btn");
const questionContainerElement = document.getElementById('question-container');
const questionElement =  document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const titleInstructions = document.getElementById('title-instructions');
let intials = document.querySelector("#user-email");


timeleft = 5;
let timeCounter = document.getElementById('time-count');
let timerEl = document.getElementById('card-timer');
let timeTitle = document.getElementById('time-title');

let countRightAnswers =0;
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


//
function timer() {
  var countDown = setInterval(function() {
    timeleft--;
    timeCounter.textContent = timeleft;

    if (timeleft <=0) {
      clearInterval(countDown);
      timeTitle.classList.add("hide");
      timeCounter.textContent = "You ran out of time, please try again";
    }
  }, 1000);
}
//



//
function startGame() {
  timer();
  countRightAnswers = 0;
  startButton.classList.add("hide");
  titleInstructions.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart"
    // startButton.classList.remove("hide")
    highscores.classList.remove("hide")
  }
  if ((selectedButton.dataset = correct)) {
    countRightAnswers++; //+1
  }

  //5. to show the score inside <span>
  document.getElementById("right-answers").innerHTML = countRightAnswers;
  //   document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0);
  //prevent multiclicking
  document.getElementById("answer-buttons").classList.add("no-click");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "What tag is used to define a container for an external app or plug-in?",
    answers: [
      { text: "<embed>", correct: true },
      { text: "<caption>", correct: false },
      { text: "<h1>", correct: false },
      { text: "<p>", correct: false },
    ],
  },
  {
    question: "What is the most used programming language?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false },
      { text: "Doss", correct: false },
    ],
  },
  {
    question: "What was the nickname of the two brothers who were also programmers?",
    answers: [
      { text: "Bros", correct: true },
      { text: "brothers who were both programmers", correct: false },
      { text: "brogrammers", correct: true },
      { text: "broders", correct: false },
    ],
  },
  {
    question: "Question 4",
    answers: [
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
    ],
  },
];


// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
//   }
// });

initials.textContent = Initials;

submitButton.addEventListener("click", function(event) {
event.preventDefault();

var Initials = document.querySelector("#initials").value;

      localStorage.setItem("initials", Initials);
      
})