///////////////////
// Sneaker      //
//      Trivia 
// https://github.com/ricopella/nike-trivia-game
/////////////////



// this is an object that holds all of the questions, answers,  


var questions = [{
            ques: "Which fictional city is the home of Batman?",
            ans: ["Gotham City", "Detroit", "Chicago", "Tucson"],
            name: "batMan",
            correct: "Gotham City",
            divClass: ".batMan"
        },
        {
            ques: "Babe Ruth is associated with which sport?",
            ans: ["Baseball", "Basketball", "Hockey", "Chess"],
            name: "babeRuth",
            correct: "Baseball",
            divClass: ".babeRuth"
        },
        {
            ques: "Which 1997 film stars Nicolas Cage, John Cusack, and John Malkovich?",
            ans: ["Con Air", "Real Steel", "Endless Summer", "Napolean Dynamite"],
            name: "conAir",
            correct: "Con Air",
            divClass: ".conAir"
        },
        {
            ques: "Which 80s movie was the highest grossing film of the decade?",
            ans: ["E.T. The Extraterrestrial", "Space Jam", "Journey", "Styx"],
            name: "et",
            correct: "E.T. The Extraterrestrial",
            divClass: ".et"
        },
        {
            ques: "What artist sang the 1986 song “Danger Zone” from Top Gun?",
            ans: ["Kenny Loggins", "Renny Loggins", "Kenny Boggins", "Cher"],
            name: "dangerZone",
            correct: "Kenny Loggins",
            divClass: ".dangerZone"
        }

    ] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 5; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 5; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();
            $('#playAgain2').on('click' , function() { // to reload the pageeee boyeeee
                location.reload();
            });

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 5; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
            $('#playAgain').on('click' , function() { // to reload the pageeee boyeeee
                location.reload();
            });
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz