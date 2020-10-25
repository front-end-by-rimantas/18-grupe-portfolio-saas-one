import { generateSingleFooterSocial } from './generateSingleFooterSocial.js';

function renderFooterSocial(data){

    let HTML = ``;
    const socialDOM = document.querySelector('.footer-socials');
    const socialsCount = data.social.length;

    for(let i = 0; i < socialsCount; i++){
        HTML += generateSingleFooterSocial(data.social[i]);
    }

    return socialDOM.innerHTML = HTML;
}

export { renderFooterSocial };