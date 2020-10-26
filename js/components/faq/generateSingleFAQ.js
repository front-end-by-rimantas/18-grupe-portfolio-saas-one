import { isValidFAQ } from './isValidFAQ.js'

function generateSingleFAQ(data, faq, expanded = false) {
    // input validation
    if (!isValidFAQ(faq)) {
        return '';
    }

    // logic 
    const HTML = `<div class="qa ${expanded ? 'show' : ''}">
                    <div class="question-and-icon">
                        <p class="question">${faq.question}</p>
                        <i class="${data.icon} ${expanded ? 'violet' : ''}"></i>
                    </div>
                    <p class="answer hidden">${faq.answer}</p>
                </div>`;

    // output 
    return HTML;
}

export { generateSingleFAQ }