// {/* <div class="question-box">${title ? categories.gen : ''}</div> */}

function generateSingleTitleMPfaq(categories) {

  // console.log(categories.gen);

  const titleHTML = `<div class="title">
                      ${categories.gen}
                     </div>`;

  return titleHTML;
}


function generateSingleMPfaq(faqMP) {

  const qaHTML = `<p class="question">${faqMP.question}</p>
                  <p class="answer">${faqMP.answer}</p>`;

  return qaHTML;
}
export { generateSingleTitleMPfaq, generateSingleMPfaq }

