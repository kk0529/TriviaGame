//The first thing I defined was the 2 click events that are found within the trivia challenge

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

//The next thing I wanted to accomplish is defining variables for my
//environment as well as one for the questions i've created, as well
//as a variable that would control the start and events of my quiz

//Variable for the environment where the game will tak place.  All click 
//events and questions will take place within this box
var quizBox = $('#question-box')

//My list of 10 true or false questions, options, and answers held within an array
var questions = [{
  question: "1 . In 1983, John Elway was drafted by the Denver Broncos?",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "2 . In 2015, Lebron James was named the NBA MVP?",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "3 . In 1999, David Cone pitched a perfect game for the New York Yankees?",
  answers: ["True", "False"],
  correctAnswer: "True"
}, {
  question: "4 . Deangelo Russell was drafted #1 Overall in the 2015 NBA draft?",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "5 . Chris Johnson ran a 40 yard dash time of 4.24 seconds during the NFL combine? ",
  answers: ["True", "False"],
  correctAnswer: "True"
}, {
  question:  "6 . Rafael Nadal has won the most Grandslam titles in Tennis History?",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "7 . Sammy Sosa has the record for most home runs in a single MLB season?",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "8 . Don Budge was able to win 6 consecutive Grandslam titles in Tennis?",
  answers: ["True", "False"],
  correctAnswer: "True"
}, {
  question: "9 . Serena WIlliams has won more Grandslams than her sister, Venus?",
  answers: ["True", "False"],
  correctAnswer: "True"
}, {
  question: "10 . Michael Jordan has won the most NBA regular season MVP awards in leage history?",
  answers: ["True", "False"],
  correctAnswer: "False"
}];

//My standard game conditions preset when the start click event is chosen
//This will include all scenarios for how the event will play out

var game = {
  correct:0,
  incorrect:0,
  counter:60,
  //This function will be set up to count down on screen until time hits 0
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('Time Is Up');
      game.done();
    }
  },
  //This function carries out the setInterval function bringing the clock from 60 seconds to 0 seconds,
  //while also listing all questions from game after start button is hit.
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      quizBox.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        quizBox.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    quizBox.append('<button id="done">Done</button>');
  },

  //This function will check all the questions and answers that were defined in array questions
  //based upon how the user inputs his/her answer.
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  
  //This function will prompt what occurs when either the done button is hit or 
  //the setInterval function hits 0  
  result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    quizBox.html('<h2>Time is up!</h2>');
    quizBox.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    quizBox.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    quizBox.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};







