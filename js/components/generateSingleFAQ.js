function generateSingleFAQ(faq) {
    // input validation

    // logic 
    const HTML = `<div class="question-and-icon">
                        <p class="question">${faq.question}</p>
                        <i class="${faq.icon}"></i>
                  </div>
                  <p class="answer hidden">${faq.answer}</p>`;

    // output 
    return HTML;
}

export { generateSingleFAQ }