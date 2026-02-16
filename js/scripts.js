// js/scripts.js
function addFunFact() {
    const factsList = document.getElementById('facts-list');
    const newFact = prompt('Enter your own fun fact about solar panels!');
    if (newFact) {
        const li = document.createElement('li');
        li.textContent = newFact;
        factsList.appendChild(li);
    }
}

function checkQuiz() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('quiz-result');
    let score = 0;

    if (form.q1.value === 'electricity') score++;
    if (form.q2.value === 'silicon') score++;
    if (form.q3.value === 'yes') score++;

    result.textContent = `You got ${score} out of 3 correct! Great job!`;
    result.style.color = score === 3 ? 'green' : 'orange';
}