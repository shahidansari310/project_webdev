const ques = [
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Oracle", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "What is the output of: typeof null?",
    answers: [
      { text: "null", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "number", correct: false },
    ],
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
];

const questionelement = document.getElementById("ques");
const answerelement = document.getElementById("ansbutton");
const nextelement = document.querySelector(".nextbtn");

let currentques = 0;
let score = 0;

function startQuiz() {
  currentques = 0;
  score = 0;
  nextelement.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetstate();
  let current = ques[currentques];
  let questionno = currentques + 1;
  questionelement.innerHTML = questionno + ". " + current.question;

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerelement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
  });
}

function selectanswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if (iscorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerelement.children).forEach((btn) => {
    btn.disabled = true;

    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
  });

  nextelement.style.display = "block";
}

function resetstate() {
  nextelement.style.display = "none";
  while (answerelement.firstChild) {
    answerelement.removeChild(answerelement.firstChild);
  }
}

function showscore(){
  resetstate();
  questionelement.innerHTML=`Your scored ${score} out of ${ques.length}!`;
  nextelement.innerHTML="Play Again";
  nextelement.style.display="block";
}


function handlenextbutton(){
  currentques++;
  if(currentques<ques.length){
    showQuestion();
  }
  else{
    showscore();
  }

}

nextelement.addEventListener("click",()=>{
  if(currentques<ques.length){
    handlenextbutton();
  }
  else{
    startQuiz();
  }
})

startQuiz();
