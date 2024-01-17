const questions = [
    {
        question: "Firstly, an easy one, Snape was head of which house?",
        answers: [
            { text: "Gryffindor", correct: false },
            { text: "Ravenclaw", correct: false },
            { text: "Slytherin", correct: true },
            { text: "Hufflepuff", correct: false },
        ]
    },

    {
        question: "And he taught which subject when Harry first joined Hogwarts?",
        answers: [
            { text: "Charms", correct: false },
            { text: "Transfiguration", correct: false },
            { text: "Defence Against The Dark Arts", correct: false },
            { text: "Potions", correct: true },
        ]

    },

    {
        question: "Then in Harry's sixth year, which subject did he teach instead?",
        answers: [
            { text: "Herbology", correct: false },
            { text: "Charms", correct: false },
            { text: "Transfiguration", correct: false },
            { text: "Defence Against The Dark Arts", correct: true },
        ]

    },

    {
        question: "What was the nickname that Snape gave himself at school?",
        answers: [
            { text: "Half-Blood Prince", correct: true },
            { text: "Potion Pioneer", correct: false },
            { text: "Pure-Blood King", correct: false },
            { text: "Prince of Endless Darkness", correct: false },
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", () => {
            selectAnswer(answer.correct);
        });
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    answerButton.innerHTML = ""; // Clear previous answer buttons

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Quiz is finished
        showResult();
    }
}

function showResult() {
    questionElement.innerHTML = "Quiz completed! Your score: " + score + "/" + questions.length;
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
