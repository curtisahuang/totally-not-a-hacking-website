// Client-side only. No data is sent anywhere.

(function () {
  console.log("Totally Not About Phishing loaded.");

  const answers = {
    q1: "c",
    q2: "b",
    q3: "c",
  };

  const submitBtn = document.getElementById("quiz-submit");
  const resultEl = document.getElementById("quiz-result");

  function grade() {
    let score = 0;
    let total = Object.keys(answers).length;

    Object.entries(answers).forEach(([key, val]) => {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === val) score += 1;
    });

    if (!resultEl) return;
    resultEl.textContent = `You scored ${score} / ${total}. ${
      score === total
        ? "Excellent—you're alert to common phishing tactics."
        : "Review the tips above and try again."
    }`;
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", grade);
  }
})();