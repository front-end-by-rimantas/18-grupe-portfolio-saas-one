function generateSingleMPfaq(faqMP) {

    const HTML = `<div class="title">${faqMP.category}</div>
                    <p class="question">${faqMP.question}</p>
                    <p class="answer">${faqMP.answer}</p>
                  </div>`;
    return HTML;
}

export { generateSingleMPfaq }