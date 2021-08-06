let quizContainer= document.getElementById("quiz-container");
let question = document.getElementById("question");
let currentQuestion = {};
let availableQuestions = [];
let questionCounter = 0;
let MAX_QUESTIONS= 3;
let options = Array.from(document.getElementsByClassName("option"));
let questionPrefix = document.getElementsByClassName("prefix");
let questionOption = document.getElementsByClassName("option");

console.log(options);

let myQuestions = [
    {
        question: "Which of the following is the most appropriate first step for managing an intact-male cat that is urinating on the carpet?",
        option1: "Castration",
        option2: "Ruling out any underlying medical problems",
        option3: "Punishing the cat after accidents occur",
        answer: 2
    },
    {
        question: "Cats can act aggressively towards another cat because of predatory behavior, play, territorialism, redirected aggression, fear, and social hierarchy. Which of the following is LEAST appropriate in cases of inter-cat aggression?",
        option1: "Grooming both cats with a brush that was used on the other",
        option2: "Providing more perches or climbing spaces",
        option3: "Verbally reprimanding whichever cat acts aggressively",
        answer: 3
    },
    {
        question: "Fear is the most common cause of aggression in dogs. Which of the following signs is LEAST likely to be demonstrated by a fearful dog?",
        option1: "Directly staring at a person or other animal",
        option2: "Licking of the lips",
        option3: "Raising of the hackles (piloerection)",
        answer: 1
    }
];


function startGame (){
    availableQuestions = [...myQuestions];

    showQuestions();
        
}

function showQuestions () {

    if (questionCounter > MAX_QUESTIONS) {
        endGame();
    } else {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    options.forEach(option => {
            const number = option.dataset["number"];
            option.innerText = currentQuestion["option" + number];
        })
    }
}

function chooseOne () {}
function endGame() {}

startGame();

    
    