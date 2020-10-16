import { generateSingleHomeAbout } from './generateSingleHomeAbout.js';


function renderHomeAbout(data){

    //input validacija

    //logic

    let HTML = [];
    const aboutDOM = document.querySelectorAll(data.selector);
    // const aboutCount = data.about.length;

    for(var i = 0; i < 3 ; i++){
        const about = data.about[i];
        HTML.push(generateSingleHomeAbout(about));
        aboutDOM[i].innerHTML = HTML[i];
    }
    return HTML;
}

export { renderHomeAbout }