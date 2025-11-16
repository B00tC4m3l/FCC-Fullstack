let questions = [
  {
    category: "comedy",
    question: "Are you Kekkonen?",
    choices: ["maybe", "maybe not", "no"],
    answer: "maybe"
  },
  {
    category: "comedy",
    question: "Are you Kurva?",
    choices: ["maybe", "maybe not", "no"],
    answer: "maybe"
  },
  {
    category: "comedy",
    question: "Did 911 ever happen?",
    choices: ["maybe", "maybe not", "no"],
    answer: "no"
  },
  {
    category: "tragedy",
    question: "Are the bird kiwis eatable?",
    choices: ["yes", "maybe not", "no"],
    answer: "maybe not"
  },
  {
    category: "fanfiction",
    question: "Are you retarded?",
    choices: ["yes", "maybe not", "no"],
    answer: "yes"
  }
];

function getRandomQuestion(arr){
  return arr[Math.round(Math.random()*(arr.length-1))];
}
function getRandomComputerChoice(arr){
  return arr[Math.round(Math.random()*2)];
}
function getResults(question, pc_choice){
  if(question.answer == pc_choice){
    return "The computer's choice is correct!";
  }else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}