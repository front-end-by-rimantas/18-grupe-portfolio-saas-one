import {generateSingleFooter} from './generateSingleFooter.js'

function renderFooter (data) {

    let HTML = [];
    const footerDOM = document.querySelectorAll(data.selector);
    const footerCount = data.footer.length;

    for ( let i = 0; i < footerCount; i++)
    {
        footerDOM[i].innerHTML += generateSingleFooter(data.footer[i]);
    }

    return HTML;
}

export { renderFooter }