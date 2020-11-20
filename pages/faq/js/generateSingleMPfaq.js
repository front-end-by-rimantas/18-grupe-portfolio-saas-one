function generateSingleTitleMPfaq(categories, faqMP) {
  const titleHTML = `<div class="title ${faqMP.category}">
                      ${faqMP.category === 'gen' ? categories.gen : categories.lic}
                     </div>`;

  return titleHTML;
}

function generateSingleMPfaq(faqMP) {
  const qaHTML = `<p class="question">${faqMP.question}</p>
                  <p class="answer">${faqMP.answer}</p>
                  <hr class="hr dash"></hr>`;

  return qaHTML;
}

export { generateSingleTitleMPfaq, generateSingleMPfaq }