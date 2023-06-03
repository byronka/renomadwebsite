function getSentenceIterator() {
  let sentences = [
    {query:"Happy Birthday", answer: "exclamation"},
    {query:"How are you feeling", answer: "question"},
    {query:"Do you like bacon", answer: "question"},
    {query:"It is 2 o'clock", answer: "period"},
    {query:"I like to pet animals", answer: "period"},
    {query:"Wow", answer: "exclamation"},
    {query:"what time is it", answer: "question"},
    {query:"What an amazing day", answer: "exclamation"}
  ];
  let current = 0;

  return function() {
    let result = "";
    if (current+1 > sentences.length) {
      current = 0;
      result = sentences[current]; 
    } else {
      result = sentences[current]; 
      current++;
    }
    return result;
  }
}

var sentenceIterator = getSentenceIterator();

function setQuestion() {
  let sentence = document.getElementById("sentence");

  let current = sentenceIterator();
  sentence.textContent = current.query;
  return current.answer;
}

function gameLoop() {
  let question = document.getElementById("question");
  let exclamation = document.getElementById("exclamation");
  let period = document.getElementById("period");

  var alertRight = function() {
      var modal = document.getElementById('rightModal');
      modal.style.display = "block";
      configureModalToDie(modal);
      clearEvents();
      gameLoop();
    };

  var configureModalToDie = function(modal) {

          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];


          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
  }

  var alertWrong = function() {
    var modal = document.getElementById('wrongModal');
    modal.style.display = "block";
    configureModalToDie(modal);
    clearEvents();
    gameLoop();
  };

  var clearEvents = function() {
    period.removeEventListener("click", alertRight);
    period.removeEventListener("click", alertWrong);
    exclamation.removeEventListener("click", alertRight);
    exclamation.removeEventListener("click", alertWrong);
    question.removeEventListener("click", alertRight);
    question.removeEventListener("click", alertWrong);
  };

    let answer = setQuestion();
    switch (answer) {
      case "period":
        period.addEventListener("click",     alertRight, false );
        question.addEventListener("click",   alertWrong, false );
        exclamation.addEventListener("click",alertWrong, false );
        break;
      case "exclamation":
        period.addEventListener("click",     alertWrong, false );
        question.addEventListener("click",   alertWrong, false );
        exclamation.addEventListener("click",alertRight, false );
        break;
      case "question":
        period.addEventListener("click",     alertWrong, false );
        question.addEventListener("click",   alertRight, false );
        exclamation.addEventListener("click",alertWrong, false );
        break;
      default:
        alert('bad answer!! developer, check your work!');
    }
}

gameLoop();


