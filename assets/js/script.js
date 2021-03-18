// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

var hideThis = $('#hideThis');
var startBtn = $('#start-button');
var questionHolder = $('#question-holder');
var answerHolder = $('#answer-holder');
var instructions = $('')


$(startBtn).click(function() {
  console.log("Good evening");
  questionHolder.text('It worked, Seth!');
  // $(hideThis).hide();

  // var question = $('<h1>');
});

questionHolder.text('It worked, Seth!');

//figure out the logic behind