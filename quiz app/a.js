const ques = [
    {
      question: "Which company developed JavaScript?",
      answers: [
        { text: "Microsoft", correct: false },
        { text: "Netscape", correct: true },
        { text: "Google", correct: false },
        { text: "Oracle", correct: false }
      ]
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "constant", correct: false }
      ]
    },
    {
      question: "What is the output of: typeof null?",
      answers: [
        { text: "null", correct: false },
        { text: "object", correct: true },
        { text: "undefined", correct: false },
        { text: "number", correct: false }
      ]
    },
    {
      question: "Which method is used to add an element at the end of an array in JavaScript?",
      answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false }
      ]
    }
  ];

  const questionelement=document.getElementById("ques");
  const answerelement=document.getElementById("ansbutton");
  const nextelement=document.getElementById("a");

  