const ques = [
  {
    question: "Which built-in method returns the length of the string?",
    a: " length()",
    b: "size()",
    c: "index()",
    d: "None of the above",
    answer: "a",
  },
  {
    question:
      " Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    a: " slice()",
    b: "split()",
    c: "substr()",
    d: "search()",
    answer: "c",
  },
  {
    question:
      " Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    a: "concat()",
    b: "pop()",
    c: "push()",
    d: "some()",
    answer: "a",
  },
];

let index = 0;
let right = 0;
let wrong = 0;
let total = ques.length;
const quesBox = document.querySelector("#quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = ques[index];
  console.log(data);
  quesBox.innerText = `${index + 1}) ${data.question}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = ques[index];
  const ans = getAns();
  if (ans == data.answer) right++;
  else wrong++;

  index++;
  loadQuestion();
  return;
};

document.querySelector(".btn").addEventListener("click", submitQuiz);

const getAns = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) answer = input.value;
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.querySelector("#container").innerHTML = `
  <div style= "text-align : center">
  <h3 style="margin-bottom: 10px;">Thank you for Quizing</h3>
  <h4>Correct Answers : ${right}/${total}</h4> <br>
  </div>
  `;
};

loadQuestion();
