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

    // susirasti dominancius elementus .Question
    const allQuestionDOM = document.querySelectorAll('.question');

    // pradedame stebeti paspaudimus ant ju
    for (let i = 0; i < allQuestionDOM.length; i++) {
        const Question = allQuestionDOM[i];
        Question.addEventListener('click', () => {
            Question.closest('.QA').classList.add('show');
        })
    }
    //     

    for (let i = 0; i < allQuestionDOM.length; i++) {
        const Question = allQuestionDOM[i];
        Question.addEventListener('click', () => {
            Question.closest('.QA').classList.add('');

        })
        // kokiame aukstyje yra .question elementas
        // const questionDOM = questionDOM.closes('.question');
        // const questionHeightPosition = questionDOM.offsetTop;
    }
}

export { renderFAQ }