const form = document.getElementById("quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questionitems = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  questionitems.forEach((element) => {
    element.classList.add("incorrect");
    element.classList.remove("correct");
  });

  const checkedAnswers = answers.filter((element) => element.checked);
  checkedAnswers.forEach((element) => {
    const isCorrect = element.value === "true";
    const questionitem = element.closest(".question-item");

    if (isCorrect) {
      questionitem.classList.add("correct");
      questionitem.classList.remove("incorrect");
    } else {
      questionitem.classList.add("incorrect");
      questionitem.classList.remove("correct");
    }

    const allTrue = checkedAnswers.every((answer) => answer.value === "true");

    if (allTrue) {
      alert.classList.add("open");
    }
    setTimeout(() => {
      alert.classList.remove("open");
    }, 2000);
  });
});
