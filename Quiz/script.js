const quizData = [
    {
        question: 'Сколько Диме лет?',
        a: '18',
        b: '19',
        c: '21',
        d: '20',
        correct: 'c'
    }, {
        question: 'Сколько опыта у Димы?',
        a: '3 месяца',
        b: '9 месяцев',
        c: 'начинает карьеру',
        d: 'больше года',
        correct: 'd'
    }, {
        question: 'Что ещё рано учить начинающему разработчику',
        a: 'NEXT',
        b: 'REACT',
        c: 'JAVASCRIPT',
        d: 'HTML',
        correct: 'a'
    }, {
        question: 'В каком году был миллениум',
        a: '1999',
        b: '2000',
        c: '2021',
        d: '2020',
        correct: 'b'
    },
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');
console.log(answerEls)
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        };

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
});