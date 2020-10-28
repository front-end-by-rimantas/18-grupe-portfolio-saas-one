import { generateSingleFAQ } from './generateSingleFAQ.js'

function renderFAQ(data) {
    //input validation

    //logic
    let HTML = '';
    const faqDOM = document.querySelector(data.selector);
    const faqCount = data.faq.length;
    // console.log(data);
    if (!faqDOM) {
        return;
    }

    for (let i = 0; i < faqCount; i++) {
        if (data.faq[i].category === 'gen') {
            const faq = data.faq[i];

            HTML += generateSingleFAQ(data, faq, i === 0 ? true : false);
        }
    }
    // post logic validation

    //output
    faqDOM.innerHTML = HTML;

    // find .question element
    const allQuestionDOM = document.querySelectorAll('.qa > .qa');
    const allIconDOM = document.querySelectorAll('.fa-angle-down');

    // events when clicked on .question-and-icon element
    for (let i = 0; i < allQuestionDOM.length; i++) {
        const question = allQuestionDOM[i];
        const icon = allIconDOM[i];

        question.addEventListener('click', () => {
            if (question.classList.contains('show')) {
                question.classList.remove('show');
                icon.classList.remove('violet');
            } else if (document.querySelector('.qa .show') === null && document.querySelector('.violet') === null) {
                question.classList.add('show');
                icon.classList.add('violet');
            } else {
                document.querySelector('.qa .show').classList.remove('show');
                question.classList.add('show');

                document.querySelector('.violet').classList.remove('violet');
                icon.classList.add('violet');
            }
        });
    }
}

export { renderFAQ }