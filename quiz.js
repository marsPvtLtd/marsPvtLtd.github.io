// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const container = document.getElementById("container");

const parth = document.getElementById("Parth");
const parthWrong = document.getElementById("ParthWrong");
const tushar = document.getElementById("Tushar");
const tusharWrong = document.getElementById("TusharWrong");
const pratham = document.getElementById("Pratham");
const prathamWrong = document.getElementById("PrathamWrong");


// create our questions
let questions = [

    {
        question : "1. The relation between pressure and velocity in an inviscid, incompressible flow is given by",
        imgSrc : "images/fluid.jpg",
        choiceA : "p = constant",
        choiceB : "p + 0.5ρV<sup>2</sup> = constant",
        choiceC : "0.5ρV<sup>2</sup> = 0",
        correct : "B"
    },{
        question : "FPGA refers to",
        imgSrc : "images/fpga.jpg",
        choiceA : "First Programmable Gate Array",
        choiceB : "Free Programmable Gate Array",
        choiceC : "Field Programmable Gate Array",
        correct : "C"
    },{
        question : "3. What is the use of content provider in Android?",
        imgSrc : "images/android.png",
        choiceA : "accessing data from a central database",
        choiceB : "storing the data in the database ",
        choiceC : "web scraping to get content from a given website",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 15s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let qparth = 0;
let qtushar = 0;
let qpratham = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        if(runningQuestion == 0){
            qparth = 1;
        }
        if(runningQuestion == 1){
            qtushar = 1;
        }
        if(runningQuestion == 2){
            qpratham = 1;
        }
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    start.style.display = "none";
    quiz.style.display = "none";

    if(qparth == 1){
        parth.style.display = "block";
    }
    else{
        parthWrong.style.display = "block";
    }

    if(qtushar == 1){
        tushar.style.display = "block";
    }
    else{
        tusharWrong.style.display = "block";
    }


    if(qpratham == 1){
        pratham.style.display = "block";
    }
    else{
        prathamWrong.style.display = "block";
    }
}





















