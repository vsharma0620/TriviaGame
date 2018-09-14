  function populate () {
    if (quiz.isEnded() ) {

    }

    else {
      var element = document.getElementById("Questions");
      element.innerHTML = quiz.getQuestionsIndex().text;
    }
  }

    var questions = [
      new Question ["What food makes up nearly all (around 99%) of a Giant Panda’s diet?", ["Bamboo", "Grass", "Berries", "meat"], "a"],
      new Question ["What is the name of the phobia that involves an abnormal fear of spiders?", ["Arachphobia", "Spiderphobia", " Phobia", "Arachnophobia"], "d"],
      new Question ["What is the largest type of ‘big cat’ in the world?", ["Cougar", "The tiger", "Jaguar", "Leopard"], "b"],    
    ];

    
      function questions(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }

    questions.prototype.correctAnswer = function(choice) {
      return choice === this.answer;

      function Quiz(questions) {
        this.score = 0;
        this.questions = questions;
        this.question.Index = 0;
      }

      Quiz.prototype.getQuestionsIndex = function () {
        return this.questions[this.getQuestionsIndex];
      }

      quiz.prototype.isEnded = function() {
        return this.questions.length === this.questionsIndex;

      }

      Quiz.prototype.guess = function(answer) {
        this.questionsIndex++;

        if (this.getQuestionsIndex() .correctAnswer(answer)) {
          this.score++;
        }
      }
 } 
 
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the resume button gets clicked, execute the run function.
    $("#start").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
