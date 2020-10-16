import { isValidAbout } from "./isValidAbout.js";

function generateSingleHomeAbout(about) {

    //input validation
    if (!isValidAbout(about)) {
        return '';
    }

    //logic

    const HTML = `
    
                        <div class="card-header" style="background-color:#${about.bg_color}">
                            <i class="${about.icon}" style="color: #${about.color}"></i>
                        </div>
                        <p class="title" style="color: #${about.color}">${about.title}</p>
                        <div class="card-paragraf" style="color: #${about.color}">
                            <p>${about.text}</p>
                        </div>`
    return HTML;
}


export { generateSingleHomeAbout };