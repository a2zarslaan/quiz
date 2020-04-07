const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");

const displayResult = document.querySelector(".result");

form.addEventListener("submit", event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // display results

  scrollTo(0, 0);

  //   My solution -
  //   displayResult.innerHTML = `<p>You are <span class="text-primary display-4 p3">${score}%</span> ninja!</p>`;

  //   More elegant solution -
  //   displayResult.querySelector("span").textContent = `${score}%`;

  displayResult.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    displayResult.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
