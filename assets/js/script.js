//  RKML 
// Setting Questions for the Quiz


//currentQuestion represents the whole question object (question to answer)
let quizArray = [
{question: "What is the common naming convention for variables in Javascript?",
options:["Uppercase", "Hyphenate", "None", "Camelcase"],
answer: 3,
}, 
{question: "Which of these is NOT a type of Javascript operator?",
options:["Arthmetic", "Conditional", "Telephone", "Logical"],
answer:2,
},
{question: "In HTML, the Javascript code is inserted between which element tag? ",
options:["<head> </head>", "<script> </script>", "<h1> </h1>", "<div> </div>"],
answer:1,
},
{question: "Arrays are used in Javascript to store:",
options:["Booleans", "Numbers & Strings", "Other Arrays", "All of the Above"],
answer:3,
},
{question: "What is a great tool that can be used during development & debugging? ",
options:["console.log", "loops", "gitHub", "prayer"],
answer:0,
},
];

//Global variables for the timer   
let currentTime = document.querySelector(".current-time");
let timer = document.querySelector(".start-button");
let highScore = document.querySelector(".reset-button");
let timerCount = 61;
let timerPenalty = 5;
let holdInterval ;


//Global variables for the questions
let questionArea = document.querySelector("#questionArea");
let questionText = document.querySelector("#questionText");
let questionIndex = 0;


//Global variables 
let score = 0;  //i don't think i need this.  shouldn't score now just be what's left in timerCount?



  function startTimer() { 
    questionArea.classList.remove("hide"); 
    timer.classList.add("hide");
    renderQuestions();
      holdInterval = setInterval(function () {
          timerCount--;
          currentTime.textContent = "Time left: " + timerCount;

          if (timerCount <= 0) {
              clearInterval(holdInterval);
              currentTime.textContent = "Out of Time";
          }
      }, 1000);
    }

    timer.addEventListener('click', startTimer);  //when start button clicked, calls startTimer function


function checkAnswer(index) {
  let currentQuestion = quizArray[questionIndex];
  if (currentQuestion.answer === index) {
    score++;  //need to do something with this
    // createDiv.textContent = "Correct! The answer is " + quizArray[questionIndex].answer;
  }
  questionIndex++;
  if (questionIndex < quizArray.length) {
    renderQuestions();
  }
  else {
    endQuiz();  //still have to make would have highscore
  }
}

// The following function renders items in a todo list as buttons
function renderQuestions() {
    let currentQuestion = quizArray[questionIndex];
    questionText.textContent = currentQuestion.question;
  for (var i = 0; i < currentQuestion.options.length; i++) {
        var choice = currentQuestion.options[i];
        let buttonEl = document.getElementById("button" + i); 
        buttonEl.textContent = choice;
  }
}


function endQuiz() {


}








