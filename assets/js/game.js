// Tutorials used for inspiration and guidance
// https://www.youtube.com/watch?v=f4fB9Xg2JEY
// https://www.youtube.com/watch?v=LQGTb112N_c

// https://www.youtube.com/watch?v=rFWbAj40JrQ
// https://www.youtube.com/watch?v=IK257Ln0MZc
// https://www.youtube.com/watch?v=zZdQGs62cR8
// https://www.youtube.com/watch?v=_LYxkClHnV0
// https://www.youtube.com/watch?v=BOQLbu_Crc0
// https://www.youtube.com/watch?v=4bctmtuZVcM
// https://www.youtube.com/watch?v=o3MF_JmQxYg
// CI Love Maths "Updating The Scores" video
//https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/03-displaying-the-question-and-answer/01-displaying-the-addition-question/index.html

/* Declare myQuestions array */ 
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
    },
    {
        question: "What is the first step in managing aggression in dogs?",
        option1: "Administration of an anxiolytic medication",
        option2: "Evaluation of the risk for future injuries to people or other animals",
        option3: "Desensitization to triggers for aggressive behaviors",
        answer: 2
    },
    {
        question: "A left lateral radiograph of a 3-year-old domestic shorthair cat’s thorax is obtained for evaluation of persistent coughing. The resulting x-ray is underexposed (too light). Adjusting which of the following x-ray machine settings is most likely to improve the quality of subsequent images?",
        option1: "Increasing the kilovoltage potential (kVp) setting",
        option2: "Decreasing the milliamperes (mA) setting",
        option3: "Increasing the exposure time setting",
        answer: 1
    },
    {
        question: "Which of the following most accurately describes the advantage of using the collimator on an x-ray machine?",
        option1: "Increasing the x-ray beam size reduces scatter radiation.",
        option2: "Increasing the x-ray beam size limits radiation exposure to staff members.",
        option3: "Reducing the x-ray beam size improves contrast and detail of images.",
        answer: 3
    },
    {
        question: "There are two types of filmless radiography: computed radiography (CR) and direct digital radiography (DR). Which of the following most accurately depicts the advantage of using DR compared to CR?",
        option1: "DR images can be adjusted and manipulated after they have been taken, whereas CR images cannot.",
        option2: "DR produces digital images faster than CR.",
        option3: "DR is less expensive than CR.",
        answer: 2
    },
    {
        question: "Which of the following treatments is most appropriate for the resolution of established entropion in a dog? ",
        option1: "Palpebral nerve blocks",
        option2: "Subcutaneous injection of procaine penicillin into the inverted eyelid",
        option3: "Surgical correction",
        answer: 3
    },
    {
        question: "Of the >2,200 species of fleas worldwide, only a few infest dogs and cats in North America. Which species is the most prevalent flea on dogs and cats in North America?",
        option1: "Ctenocephalides felis",
        option2: "Ctenocephalides canis",
        option3: "Pulex simulans",
        answer: 1
    },
    {
        question: "The life cycle of fleas includes egg, larva, pupa, and adult stages. None of the stages can survive cold for several days, and one stage is susceptible to desiccation and cannot survive prolonged exposure to conditions with less than 50% humidity. Which flea stage is most susceptible to desiccation?",
        option1: "Pupa",
        option2: "Egg",
        option3: "Larva",
        answer: 3
    },
    {
        question: "Flea allergy dermatitis is common in dogs and cats and is caused by a hypersensitivity reaction to the saliva injected as the flea feeds on blood. The number of cases increases in summer.   A flea infestation can be diagnosed by finding fleas or flea excrement on the pet. Which of the following best describes the appearance of flea excrement?",
        option1: "Dark red to black, comma-shaped, 1 mm long",
        option2: "Pearly white, oval, 0.5 mm",
        option3: "White, grey, or brown, ovoid, 4-5 mm",
        answer: 1
    },
    {
        question: "The lameness examination is an important method to identify musculoskeletal abnormalities. Which of the following abnormalities is NOT observed during a physical and lameness exam? ",
        option1: "Limb instability",
        option2: "Joint swelling",
        option3: "Cartilage damage",
        answer: 3
    },
    {
        question: "A 9-month-old Labrador Retriever has developed an abnormal gait in the hind limbs. When running, the dog tends to hop both legs forward intermittently, and recently seems to tire of play more quickly. There is no swelling of the joints, nor are other abnormalities palpated. Which of the following is the most likely cause of this lameness?",
        option1: "Hip dysplasia",
        option2: "Osteochondrosis",
        option3: "Patellar luxation",
        answer: 1
    },
    {
        question: "Osteoarthritis is a multifactorial, degenerative, progressive joint disease and a major cause of musculoskeletal pain, morbidity, and decreased performance in all species. Which of the following is the hallmark of osteoarthritis?",
        option1: "Chronic inflammation of synovium",
        option2: "Loss of articular cartilage",
        option3: "Disruption of stabilizing ligaments",
        answer: 2
    },
    {
        question: "Although many species are susceptible to chocolate toxicosis, it is most common in dogs. Ingestion of chocolate can result in gastrointestinal upset at lower doses and cardiac arrhythmias, neurologic dysfunction, and death at higher doses. One of the toxic ingredients in chocolate is caffeine. Which of the following is the other toxic component of chocolate?",
        option1: "Bromethalin",
        option2: "Theobromine",
        option3: "N-propyl disulfide",
        answer: 2
    },
    {
        question: "Ingestion of xylitol, a sugar substitute that can be found in gum, candy, baked goods, and liquid medications, can cause toxicity in dogs. Which of the following is most likely to occur in dogs after the consumption of xylitol? ",
        option1: "Hypercalcemia",
        option2: "Hyperglycemia",
        option3: "Hypoglycemia",
        answer: 3
    },
    {
        question: "There are several types of rodenticides used as bait for targeted species. Unfortunately, they may be ingested by nontarget species such as pets, wildlife, or livestock and cause immediate or delayed illness or death. The most accurate way to identify the active ingredient of a rodenticide that caused a case of poisoning is by which of the following? ",
        option1: "Brand and manufacturer",
        option2: "Clinical signs of affected animals ",
        option3: "EPA registration number",
        answer: 3
    },
    {
        question: "Many rodenticides have a delayed onset of clinical signs that are vague at first and may take days to appear. Which of the following rodenticides has a rapid onset and can lead to death within hours of ingestion?",
        option1: "Strychnine",
        option2: "Warfarin",
        option3: "Zinc phosphide",
        answer: 1
    },
    {
        question: "An obese, 13-year-old, neutered male Pomeranian is brought to the veterinarian because of a cough that has worsened over the last 3 to 4 months. His owner reports that the cough sounds like a “goose honk,” occurs when the dog is excited (e.g., when the doorbell rings), and is unproductive of sputum. The dog then appears to have trouble breathing after coughing. On physical examination, auscultation of the heart and lungs is normal, and the veterinarian is unable to stimulate the cough. The owner declines thoracic x-rays due to financial concerns. Which of the following is the most likely diagnosis?",
        option1: "Tracheal collapse",
        option2: "Canine influenza",
        option3: "Congestive heart failure",
        answer: 1
    },
    {
        question: "Which of the following organisms is the most common cause of feline viral rhinotracheitis?",
        option1: "Feline calicivirus",
        option2: "Feline herpesvirus type 1",
        option3: "Chlamydia felis",
        answer: 2
    },
    {
        question: "Abnormalities of circulation can be due to a number of causes and may result in circulatory shock, an emergency situation. All types of circulatory shock respond to administration of fluid therapy to some extent, but some types require additional medications. Which type of circulatory shock is most readily handled with fluid therapy alone?",
        option1: "Distributive shock",
        option2: "Cardiogenic shock",
        option3: "Hypovolemic shock",
        answer: 3
    },
    {
        question: "Different types of fluids, varying in the types of molecules they contain, are used to correct volume deficits depending on which fluid compartment is determined to be deficient. Which of the following is a correct statement about replacement fluids?",
        option1: "Crystalloids are fluids with small-molecular-weight particles that can correct interstitial fluid deficits",
        option2: "Colloidal fluids are water-based and contain large-molecular-weight compounds and are used to correct interstitial fluid deficits",
        option3: "Hypotonic crystalloid fluids (eg, 5% dextrose in water) are commonly used as resuscitation fluids",
        answer: 1
    },
    {
        question: "It is important that potential owners understand the life expectancy of a species before acquiring a pet. What is the typical life expectancy for a guinea pig? ",
        option1: "1 to 2 yr",
        option2: "2 to 4 yr",
        option3: "4 to 8 yr",
        answer: 3
    },
    {
        question: "Cecotrophy refers to the normal process of an animal eating a specific type of its own feces, called cecotrophs. These soft, nitrogen-rich fecal pellets provide essential nutrients, including vitamins and proteins. Cecotrophic animals also produce dry, nitrogen-poor fecal pellets that are not consumed. Which of the following species practices cecotrophy?",
        option1: "Guinea pigs",
        option2: "Gerbils",
        option3: "Mice",
        answer: 1
    },
    {
        question: "Which of the following is the standard location for microchip insertion in psittacine birds?",
        option1: "Dorsal cervical muscles",
        option2: "Right pectoral muscles",
        option3: "Left pectoral muscle",
        answer: 3
    },
    {
        question: "Which of the following cell types produces antibodies (immunoglobulins)?",
        option1: "Neutrophils",
        option2: "B cells",
        option3: "Mast cells",
        answer: 2
    },
    {
        question: "Which of the following best describes the difference between innate and adaptive immunity?",
        option1: "Innate immunity is a nonspecific, stereotyped immune response that can destroy a variety of microorganisms, whereas adaptive immunity is an immune response that improves over time against specific microorganisms.",
        option2: "Innate immunity describes the immune system’s defense against intracellular microorganisms, whereas adaptive immunity describes defense against extracelluar microorganisms.",
        option3: "Innate immunity utilizes neutrophils to eliminate viruses, whereas adaptive immunity utilizes natural killer cells to eliminate bacteria.",
        answer: 1
    },
    {
        question: "Which of the following diagnostic techniques is LEAST likely to distinguish a benign skin neoplasm from a malignant one? ",
        option1: "Fine-needle aspiration cytology",
        option2: "Excisional biopsy with histopathology",
        option3: "Palpation",
        answer: 3
    },
    {
        question: "Mast cell tumors are the most common malignant neoplasm seen in dogs. The presence of which of the following indicates the poorest prognosis? ",
        option1: "Multiple tumors",
        option2: "Tumor size >3 cm",
        option3: "Ulcerated appearance",
        answer: 2
    },
    {
        question: "Which of the following is LEAST likely to predispose a cat to development of a squamous cell carcinoma? ",
        option1: "Cigarette smoke exposure",
        option2: "Breed",
        option3: "White coat color",
        answer: 2
    }
    ];

// Get references to interactive elements    

let correctScoreText = document.getElementById("correct-score");
let incorrectScoreText = document.getElementById("incorrect-score");
let questionCounterText = document.getElementById("questionCounter");
let questionCounter = 0;
let progressOuterSpan = document.getElementById("progressOuterDiv");
let progressInnerSpan = document.getElementById("progressInnerDiv");    
let quizContainer= document.getElementById("quiz-container");
let question = document.getElementById("question");
let questionPrefix = document.getElementsByClassName("prefix");
let options = Array.from(document.getElementsByClassName("option"));
let currentQuestion = {};
let availableQuestions = [];
let acceptingSubmissions = false;
let score = 0;
const maxQuestions= 10;

function beginQuiz (){
    availableQuestions = [...myQuestions];
    questionCounter = 0;
    score = 0;
    getQuestion(); 
    
    localStorage.setItem("mostRecentScore", 0);
}

function getQuestion () {
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${maxQuestions}`;

    if (questionCounter >= maxQuestions || availableQuestions.length == 0) {
        console.log(score)
        // const localScore = localStorage.getItem('mostRecent');
        localStorage.setItem("mostRecentScore", score);
        endGame();
    } else {
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        options.forEach(option => {
            const number = option.dataset["number"];
            option.innerText = currentQuestion["option" + number];
        })
    availableQuestions.splice(questionIndex, 1);
    acceptingSubmissions = true;
    }
}

options.forEach(option => {
    option.addEventListener("click", e => {
        if(!acceptingSubmissions) return;
        acceptingSubmissions = false;

        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["number"];

        if(selectedAnswer == currentQuestion.answer) {
            option.parentNode.setAttribute("style", "background-color: #90ee90");
            score++;
            setTimeout(getQuestion, 2000);
            setTimeout(removeClass, 2000);
            incrementCorrectScoreDisplay();
            
        } else if (selectedAnswer !== currentQuestion.answer) {
            option.parentNode.setAttribute("style", "background-color: #ff0000");
            setTimeout(getQuestion, 2000);
            setTimeout(removeClass, 2000);
            incrementIncorrectScoreDisplay();

        } else {
            return;
        }

        function removeClass() {
            option.parentNode.setAttribute("style", "background-color: #fffffff");
        }
        
increaseProgressBar();
    
    });
})

let width = 10;
function increaseProgressBar() {
        let progressBar = document.getElementById("progressInnerDiv");
            if (width < 100) {
                width +=10;
                progressBar.style.width = width + "%";
            }
}

function incrementCorrectScoreDisplay() {

    let previousScore = document.getElementById("correct-score").innerText;
    document.getElementById("correct-score").innerText = ++previousScore;     
}

function incrementIncorrectScoreDisplay(){

    let previousScore = document.getElementById("incorrect-score").innerText;
    document.getElementById("incorrect-score").innerText = ++previousScore;  
}

function endGame() {
    window.location.href = "end.html";
}

beginQuiz();