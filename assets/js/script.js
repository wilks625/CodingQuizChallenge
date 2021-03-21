//global variables used within script file
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const highscores = document.getElementById('hs-btn');
const submitButton = document.getElementById("submit-btn");
const questionContainerElement = document.getElementById('question-container');
const questionElement =  document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const titleInstructions = document.getElementById('title-instructions');
let intials = document.querySelector("#user-email");

timeleft = 50; //stores how many seconds to start counting down from once start button is clicked
let timeCounter = document.getElementById('time-count');
let timerEl = document.getElementById('card-timer');
let timeTitle = document.getElementById('time-title');

let countRightAnswers =0;//sets value for correct answers to 0
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame) //click listener for start button for startGame function
nextButton.addEventListener('click', () => { //click listener to cycle through question index and choose a question to display once the next button is clicked
    currentQuestionIndex++
    setNextQuestion()
})


//function for timer to start counting down once the start button is clicked
function timer() { 
  var countDown = setInterval(function() {
    timeleft--;
    timeCounter.textContent = timeleft;

    if (timeleft <=0) {
      clearInterval(countDown);
      timeTitle.classList.add("hide");
      timeCounter.textContent = "You ran out of time, please try again"; //message replaces timer if the timer reaches 0 seconds.
    }
  }, 1000);
}

// This function starts the game once the start button has been clicked
function startGame() {
  timer();
  countRightAnswers = 0;
  startButton.classList.add("hide"); //hides the start button
  titleInstructions.classList.add("hide");//hides the title and instructions so questions will be able to be displayed
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide"); //unhides question container element so that questions and answers will be displayed
  setNextQuestion(); //calls on function below
}

function setNextQuestion() { //shuffles questions that will be displayed once the next button is clicked
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) { //function to display the questions and answers
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

function selectAnswer(e) { // this function is for adding a score if the user selects the correct answer choice
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

function setStatusClass(element, correct) { // this function provides verification for if the selected answer is correct or incorrect
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

const questions = [ // javascript objects housing questions with their respective answers
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


//unfinished local storage
// initials.textContent = Initials;

// submitButton.addEventListener("click", function(event) {
// event.preventDefault();

// var Initials = document.querySelector("#initials").value;

//       localStorage.setItem("initials", Initials);
      
// })