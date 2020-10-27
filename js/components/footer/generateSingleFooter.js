import {isValidFooter} from './isValidFooter.js';
import { isValidFooterLink } from './isValidFooter.js';
function generateSingleFooter (data) {
    if (!isValidFooter(data)) {
        return ''; 
    } 

    let renderedLinks = ``;
    const linksCount = data.links.length;
    for(let i = 0; i < linksCount; i++){
        if (!isValidFooterLink(data.links[i])) {
            continue;
        }
        const linkText = data.links[i].text;
        const link = data.links[i].link;

        renderedLinks += `<li><a href="${link}">${linkText}</a></li>`;
    }

    const HTML = `
                <p>${data.title}</p>
                <nav>
                    <ul>
                    ${renderedLinks}
                    </ul>
                </nav>`;
    return HTML;
}

export { generateSingleFooter };