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
    const allQuestionDOM = document.querySelectorAll('.question');

    // events when clicked on .question element
    for (let i = 0; i < allQuestionDOM.length; i++) {
        const Question = allQuestionDOM[i];
        Question.addEventListener('click', () => {
            Question.closest('.QA').classList.toggle('show');
        })

    }
    // hidden

    // const allQuestionShowDOM = document.querySelectorAll('.question .show');
    // console.log(allQuestionShowDOM);

    // for (let i = 0; i < allQuestionShowDOM.length; i++) {
    //     const showQuestion = allQuestionShowDOM[i];
    //     showQuestion.addEventListener('click', () => {
    //         showQuestion.closest('.QA').classList.remove('show');

    //     })
    //     // kokiame aukstyje yra .question elementas
    //     // const questionDOM = questionDOM.closes('.question');
    //     // const questionHeightPosition = questionDOM.offsetTop;
    // }
}

export { renderFAQ }