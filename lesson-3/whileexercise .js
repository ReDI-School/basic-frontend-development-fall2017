
window.onload = function () {
  let correctAnswer = false;
  while(correctAnswer != true){
    let quizAnswer = window.prompt("Which party got the most votes in the recent election in Germany?");
    if(quizAnswer === "CDU"){
      correctAnswer = true;
    }
  }
  window.alert("You are correct!")
}
