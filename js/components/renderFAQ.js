import { generateSingleFAQ } from './generateSingleFAQ.js'

function renderFAQ(data) {
    //input validation

    //logic
    let HTML = '';
    const faqDOM = document.querySelector(data.selector);
    const faqCount = data.faq.length;

    for (let i = 0; i < faqCount; i++) {
        const faq = data.faq[i];
        HTML += generateSingleFAQ(faq);
    }

    // post logic validation

    //output
    faqDOM.innerHTML = HTML;

    // find .Question element
    const allQuestionDOM = document.querySelectorAll('.question-and-icon');
    const allIconDOM = document.querySelectorAll('.fa-angle-down');

    // events when clicked on .question-and-icon element
    for (let i = 0; i < allQuestionDOM.length; i++) {
        const Question = allQuestionDOM[i];
        const Icon = allIconDOM[i];
        Question.addEventListener('click', () => {
            Question.closest('.QA').classList.toggle('show');
        })
        Question.addEventListener("click", function () {
            Icon.classList.toggle('violet');
        });
    }
}

export { renderFAQ }