import { generateSingleHomeAbout } from './generateSingleHomeAbout.js';


function renderHomeAbout(data) {

    //input validacija

    //logic

    let HTML = [];
    const aboutDOM = document.querySelectorAll(data.selector);
    if(aboutDOM.length === 0){
        return;
    }
    for (var i = 0; i < 3; i++) {
        
        aboutDOM[i].innerHTML = generateSingleHomeAbout(data.about[i]);
    }
    return HTML;
}

export { renderHomeAbout }
