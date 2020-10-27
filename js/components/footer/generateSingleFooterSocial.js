import { isValidFooterSocial } from './isValidFooter.js';
function generateSingleFooterSocial(data){
    //validacija

    let HTML = ``;

    if(!isValidFooterSocial(data)){
        return '';
    }
    
    HTML = `<a href="${data.link}"><i class="${data.icon}"></i></a>`;
    return HTML;
}

export { generateSingleFooterSocial };