import { generateSingleFAQ } from './generateSingleFAQ.js'

function renderFAQ (data) {
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
    return faqDOM.innerHTML = HTML;
}

export { renderFAQ }