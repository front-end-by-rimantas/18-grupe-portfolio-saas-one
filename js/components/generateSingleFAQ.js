function generateSingleFAQ(faq) {
    // input validation
    
    // logic 
    const HTML = `<div class="question-and-icon">
                        <a href="#" class="question">${faq.question}</a>
                        <i class="${faq.icon}"></i>
                </div>
                <p class="answer">${faq.answer}</p>`;
    
    // output 
    return HTML;
}

export { generateSingleFAQ }