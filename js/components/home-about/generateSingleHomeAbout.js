import { isValidAbout } from "./isValidAbout.js";

function generateSingleHomeAbout(about) {

    //input validation
    if (!isValidAbout(about)) {
        return '';
    }

    //logic

    const HTML = `
    
                        <div class="card-header">
                            ${about.icon}
                        </div>
                        <p class="title">${about.title}</p>
                        <div class="card-paragraf">
                            <p>${about.text}</p>
                        </div>`
    return HTML;
}


export { generateSingleHomeAbout };