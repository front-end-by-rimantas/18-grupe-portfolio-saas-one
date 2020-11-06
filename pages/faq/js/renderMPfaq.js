import { categories } from '../../../js/data/faq.js';
import { generateSingleMPfaq, generateSingleTitleMPfaq } from './generateSingleMPfaq.js'

function renderMPfaq(data) {
    let HTML = '';
    let currentCategory = '';
    const faqMPDOM = document.querySelector(data.selector);

    // mini validation
    if (!faqMPDOM) {
        return;
    }

    // sorting questions by order
    const questions = [];
    for (let cat of data.order) {
        for (let q of data.faq) {
            if (cat === q.category) {
                questions.push(q);
            }
        }
    }

    // generation of title, questions and answers
    for (let i = 0; i < questions.length; i++) {
        let faqMP = questions[i];

        if (currentCategory !== faqMP.category) {
            HTML += generateSingleTitleMPfaq(categories, faqMP);
            currentCategory = faqMP.category;
        }

        HTML += generateSingleMPfaq(faqMP)

    } return faqMPDOM.innerHTML = HTML;
}

export { renderMPfaq }