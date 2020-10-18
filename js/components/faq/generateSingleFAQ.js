import { isValidFAQ } from './isValidFAQ.js'

function generateSingleFAQ(faq) {
    // input validation
    if (!isValidFAQ(faq)) {
        return '';
    }

    // logic 
    const HTML = `<div class="qa">
                <div class="question-and-icon">
                        <p class="question">${faq.question}</p>
                        <i class="${faq.icon}"></i>
                </div>
                <p class="answer hidden">${faq.answer}</p>
                </div>`;

    // output 
    return HTML;
}

export { generateSingleFAQ }