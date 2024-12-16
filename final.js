 
 const finalAnswer = "221B Baker Street"; // Sherlock Holmes' address
   document.getElementById("submit-btn").addEventListener("click", function () {
   const userAnswer = document.getElementById("answer-box").value.trim();

   if (userAnswer.toLowerCase() === finalAnswer.toLowerCase()) {
     alert("Congratulations, Detective! You've solved the case!");
     window.location.href = "success.html"; 
   } else {
     alert("Wrong answer! Keep trying.");
   }
 });