function feedbackIdea() {
  const feedback = document.getElementById("userExperience").value;

  document.getElementById("feedback").innerHTML = feedback;
}

const button = document.getElementById("buttonExp");
button.addEventListener("click", feedbackIdea);