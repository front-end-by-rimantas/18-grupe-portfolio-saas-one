import { generateSingleMPfaq, generateSingleTitleMPfaq } from './generateSingleMPfaq.js'

function renderMPfaq(data, categories) {
    let qaHTML = '';
    let menuHTML = '';
    let currentCategory = '';
    const faqMPDOM = document.querySelector(data.selector);
    const faqMenuDOM = document.querySelector(categories.selector)

    // mini validation
    if (!faqMPDOM && !faqMenuDOM) {
        return;
    }

    // sorting questions by order
    const questions = [];
    for (let cat of data.order) {
        for (let q of data.faq) {
            if (cat === q.category) {
                questions.push(q);
            }
        }
    }

    // generation of title, questions and answers
    for (let i = 0; i < questions.length; i++) {
        let faqMP = questions[i];

        if (currentCategory !== faqMP.category) {
            qaHTML += generateSingleTitleMPfaq(categories, faqMP);
            currentCategory = faqMP.category;
        }

        qaHTML += generateSingleMPfaq(faqMP);
    }

    // generation of submenu
    menuHTML += `<div class="faqMP menu-box">
                    <div class="faqMP menu-title">Questions</div>
                    <div class="faqMP menu-gen">${categories.gen}</div>
                    <div class="faqMP menu-lic">${categories.lic}</div>
                 </div>`;

    // HTML generation
    faqMPDOM.innerHTML = qaHTML;
    faqMenuDOM.innerHTML = menuHTML;

    // window movement to the particular category of questions 
    const genMenu = document.querySelector('.menu-gen');
    const licMenu = document.querySelector('.menu-lic');

    genMenu.addEventListener('click', () => {
        const titleDOM = document.getElementsByClassName("title gen");
        const questionPositionHeight = titleDOM[0].offsetTop;

        window.scrollTo({
            top: questionPositionHeight - 110,
            behavior: "smooth"
        });
    });

    licMenu.addEventListener('click', () => {
        const titleDOM = document.getElementsByClassName("title lic");
        const questionPositionHeight = titleDOM[0].offsetTop;

        window.scrollTo({
            top: questionPositionHeight - 110,
            behavior: "smooth"
        });
    });

    return qaHTML + menuHTML;
}

export { renderMPfaq }