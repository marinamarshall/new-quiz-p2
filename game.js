let quizContainer= document.getElementById("quiz-container");
let question = document.getElementById("question");
let currentQuestion = {};
let availableQuestions = [];
let options =document.getElementsByClassName("option");
let questionPrefix = document.getElementsByClassName("prefix");
let questionOption = document.getElementsByClassName("option");

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

    console.log(availableQuestions);

    showQuestions();
        
}

function showQuestions () {
    for(i = 0; i < myQuestions.length; i++){
            currentQuestion = availableQuestions[i];
            question.innerText = currentQuestion.question;
    }
    
}

function showOptions () {
        const number = options.dataset["number"];
        options.innerText = currentQuestion["option" + number];
        console.log(options);
    
        /*option.innerText = currentQuestion.option;*/
}

startGame();

    
    