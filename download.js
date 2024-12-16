document.getElementById("clue-input").addEventListener("input", function () {
  const userInput = document.getElementById("clue-input").value.trim();
  if (userInput.toLowerCase() === "sharks are closer than they appear") {
    document.getElementById("next-step").style.display = "block";
  } else {
    document.getElementById("next-step").style.display = "none";
  }
});

function goToNextStep() {
  window.location.href = "final.html";
}