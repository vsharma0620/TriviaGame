function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What food makes up nearly all (around 99%) of a Giant Panda’s diet?", ["Bamboo", "Grass", "Berries", "meat"], "a"),
    new Question("What is the name of the phobia that involves an abnormal fear of spiders?", ["Arachphobia", "Spiderphobia", " Phobia", "Arachnophobia"], "d"),
    new Question("What is the largest type of ‘big cat’ in the world?", ["Cougar", "The tiger", "Jaguar", "Leopard"], "b"),
    new Question("What type of animal is a seahorse?", ["Crustacean", "Arachnid", "Fish", "Shell"], "b"),
    new Question("What is the biggest animal that ever lived?", ["Blue Whale", "African elephant", "Apatosaurus", "Spinosaurus"], "a"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();