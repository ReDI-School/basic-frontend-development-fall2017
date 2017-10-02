window.onload = function () {
  let answeredCorrectly = false;

  //Creating quizQuestion Object
  let quizQuestion = {content: "Which Party got the most votes in the recent election in Germany?", correctAnswer: "CDU"};
  quizQuestion.checkAnswer = function (userAnswer) {
    if(userAnswer === this.correctAnswer){
      answeredCorrectly = true;
    }
  }

  //Looping Question for User
  while(answeredCorrectly != true){
    let quizAnswer = window.prompt(quizQuestion.content);
    quizQuestion.checkAnswer(quizAnswer);  
  }

  window.alert("You are correct!")
}
