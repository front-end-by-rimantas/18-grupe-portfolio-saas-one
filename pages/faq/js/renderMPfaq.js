import { generateSingleMPfaq } from './generateSingleMPfaq.js'

function renderMPfaq(data) {
    let HTML = '';
    const faqMPDOM = document.querySelector(data.selector);

    if (!faqMPDOM) {
        return;
    }

    for (let i = 0; i < data.faq.length; i++) {
        const faqMP = data.faq[i];

        HTML += generateSingleMPfaq(faqMP);
    }
    faqMPDOM.innerHTML = HTML;
}

export { renderMPfaq }