import { categories } from '../../../js/data/faq.js';
import { generateSingleMPfaq, generateSingleTitleMPfaq } from './generateSingleMPfaq.js'

function renderMPfaq(data) {
    let HTML = '';
    const faqMPDOM = document.querySelector(data.selector);

    if (!faqMPDOM) {
        return;
    }

    // filtravimas
    const questions = [];
    for (let cat of data.order) {
        for (let q of data.faq) {
            if (cat === q.category) {
                questions.push(q);
            }
        }
    }
    console.log(questions);

    // HTML generavimas
    HTML = generateSingleTitleMPfaq(categories)

    for (let i = 0; i < questions.length; i++) {
        const faqMP = questions[i];
        // console.log(faqMP);
        // console.log(faqMP.category);

        if (faqMP.category === 'gen') {
            HTML += generateSingleMPfaq(faqMP);
        }

    }
    faqMPDOM.innerHTML = HTML;
}

export { renderMPfaq }